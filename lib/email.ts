import { Resend } from "resend";

// Lazily constructed so a missing key at build/import time doesn't throw.
let _resend: Resend | undefined;
function resendClient() {
  return (_resend ??= new Resend(process.env.RESEND_API_KEY));
}

const FROM = process.env.EMAIL_FROM ?? "cnforge <noreply@cnforge.dev>";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

function layout(heading: string, body: string, cta: { href: string; label: string }) {
  return `
  <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;color:#0a0a0a">
    <p style="font:600 12px/1 ui-monospace,monospace;letter-spacing:.18em;text-transform:uppercase;color:#737373">Shadcn Forge</p>
    <h1 style="font-size:20px;margin:16px 0 8px">${heading}</h1>
    <div style="font-size:14px;line-height:1.6;color:#404040">${body}</div>
    <a href="${cta.href}" style="display:inline-block;margin-top:24px;background:#0a0a0a;color:#fff;text-decoration:none;font-size:14px;font-weight:500;padding:10px 18px;border-radius:8px">${cta.label}</a>
    <p style="font-size:12px;color:#a3a3a3;margin-top:24px">If the button doesn't work, copy this link:<br>${cta.href}</p>
  </div>`;
}

export async function sendVerificationEmail(email: string, token: string) {
  const href = `${APP_URL}/verify-email?token=${token}`;
  return resendClient().emails.send(
    {
      from: FROM,
      to: email,
      subject: "Verify your cnforge email",
      html: layout(
        "Confirm your email",
        "Welcome to cnforge. Verify your email address to activate your account.",
        { href, label: "Verify email" },
      ),
    },
    { idempotencyKey: `verify-${token}` },
  );
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const href = `${APP_URL}/reset-password?token=${token}`;
  return resendClient().emails.send(
    {
      from: FROM,
      to: email,
      subject: "Reset your cnforge password",
      html: layout(
        "Reset your password",
        "We received a request to reset your password. This link expires in 1 hour. If you didn't request it, you can ignore this email.",
        { href, label: "Reset password" },
      ),
    },
    { idempotencyKey: `reset-${token}` },
  );
}

export async function sendTeamInviteEmail(
  email: string,
  token: string,
  teamName: string,
) {
  const href = `${APP_URL}/invite/${token}`;
  return resendClient().emails.send(
    {
      from: FROM,
      to: email,
      subject: `You've been invited to ${teamName} on cnforge`,
      html: layout(
        `Join ${teamName}`,
        `You've been invited to join the <strong>${teamName}</strong> team on cnforge, unlocking access to all pro blocks. This invite expires in 7 days.`,
        { href, label: "Accept invite" },
      ),
    },
    { idempotencyKey: `invite-${token}` },
  );
}
