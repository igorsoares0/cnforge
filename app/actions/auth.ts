"use server";

import { randomBytes } from "node:crypto";

import { hash } from "bcryptjs";
import { z } from "zod";

import { db } from "@/lib/db";
import {
  sendPasswordResetEmail,
  sendVerificationEmail,
} from "@/lib/email";

export type ActionState = { error?: string; success?: string };

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

function newToken() {
  return randomBytes(32).toString("hex");
}

const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function signup(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const email = parsed.data.email.toLowerCase();
  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return { error: "An account with this email already exists." };
  }

  const passwordHash = await hash(parsed.data.password, 12);
  await db.user.create({
    data: { name: parsed.data.name, email, passwordHash },
  });

  const token = newToken();
  await db.verificationToken.create({
    data: { identifier: email, token, expires: new Date(Date.now() + DAY) },
  });
  await sendVerificationEmail(email, token);

  return {
    success: "Account created. Check your email to verify your address.",
  };
}

export async function verifyEmail(token: string): Promise<ActionState> {
  const record = await db.verificationToken.findUnique({ where: { token } });
  if (!record || record.expires < new Date()) {
    return { error: "This verification link is invalid or has expired." };
  }

  await db.$transaction([
    db.user.update({
      where: { email: record.identifier },
      data: { emailVerified: new Date() },
    }),
    db.verificationToken.delete({ where: { token } }),
  ]);

  return { success: "Email verified. You can now sign in." };
}

export async function resendVerification(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const email = String(formData.get("email") ?? "").toLowerCase();
  const user = await db.user.findUnique({ where: { email } });
  // Don't leak whether the account exists / is already verified.
  if (user && !user.emailVerified) {
    const token = newToken();
    await db.verificationToken.create({
      data: { identifier: email, token, expires: new Date(Date.now() + DAY) },
    });
    await sendVerificationEmail(email, token);
  }
  return { success: "If that account needs verification, we've sent a link." };
}

export async function requestPasswordReset(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const email = String(formData.get("email") ?? "").toLowerCase();
  const user = await db.user.findUnique({ where: { email } });
  if (user) {
    const token = newToken();
    await db.passwordResetToken.create({
      data: { userId: user.id, token, expiresAt: new Date(Date.now() + HOUR) },
    });
    await sendPasswordResetEmail(email, token);
  }
  // Always report success to avoid email enumeration.
  return { success: "If that account exists, we've sent a reset link." };
}

const resetSchema = z.object({
  token: z.string().min(1),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function resetPassword(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = resetSchema.safeParse({
    token: formData.get("token"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const record = await db.passwordResetToken.findUnique({
    where: { token: parsed.data.token },
  });
  if (!record || record.expiresAt < new Date()) {
    return { error: "This reset link is invalid or has expired." };
  }

  const passwordHash = await hash(parsed.data.password, 12);
  await db.$transaction([
    db.user.update({
      where: { id: record.userId },
      // A successful reset also confirms ownership of the email.
      data: { passwordHash, emailVerified: new Date() },
    }),
    db.passwordResetToken.deleteMany({ where: { userId: record.userId } }),
  ]);

  return { success: "Password updated. You can now sign in." };
}
