"use server";

import { auth } from "@/auth";
import { createRegistryToken } from "@/lib/registry-token";

/** Generates (or rotates) the current user's registry token, returning it once. */
export async function generateRegistryToken(): Promise<
  { token: string } | { error: string }
> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Not authenticated" };
  const token = await createRegistryToken(session.user.id);
  return { token };
}
