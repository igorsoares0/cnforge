import { createHash, randomBytes } from "node:crypto";

import { db } from "@/lib/db";

const PREFIX = "cnf_";

// High-entropy tokens, so a fast SHA-256 hash is fine (and indexable for lookup).
export function hashToken(plaintext: string): string {
  return createHash("sha256").update(plaintext).digest("hex");
}

/**
 * Issues a new registry token for a user, replacing any existing ones.
 * Returns the plaintext exactly once — only the hash is persisted.
 */
export async function createRegistryToken(userId: string): Promise<string> {
  const plaintext = PREFIX + randomBytes(24).toString("base64url");
  const tokenHash = hashToken(plaintext);
  const lastFour = plaintext.slice(-4);

  await db.$transaction([
    db.registryToken.deleteMany({ where: { userId } }),
    db.registryToken.create({ data: { userId, tokenHash, lastFour } }),
  ]);

  return plaintext;
}

/** Resolves a bearer token to its owner's userId, or null if invalid. */
export async function resolveRegistryToken(
  plaintext: string,
): Promise<string | null> {
  if (!plaintext.startsWith(PREFIX)) return null;
  const tokenHash = hashToken(plaintext);
  const record = await db.registryToken.findUnique({
    where: { tokenHash },
    select: { userId: true },
  });
  if (!record) return null;

  // Best-effort usage timestamp; don't block the response on it.
  void db.registryToken
    .update({ where: { tokenHash }, data: { lastUsedAt: new Date() } })
    .catch(() => {});

  return record.userId;
}
