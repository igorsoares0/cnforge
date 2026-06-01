import { Environment, Paddle } from "@paddle/paddle-node-sdk";

import type { Plan } from "@prisma/client";

// Lazily constructed so a missing key at build/import time doesn't throw.
let _paddle: Paddle | undefined;
export function getPaddle(): Paddle {
  return (_paddle ??= new Paddle(process.env.PADDLE_API_KEY ?? "", {
    environment:
      process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
        ? Environment.production
        : Environment.sandbox,
  }));
}

export const PRICE_INDIVIDUAL = process.env.PADDLE_PRICE_INDIVIDUAL ?? "";
export const PRICE_TEAM = process.env.PADDLE_PRICE_TEAM ?? "";

/** Maps a Paddle price id to one of our plans (source of truth for fulfillment). */
export function planForPrice(priceId: string | null | undefined): Plan | null {
  if (priceId && priceId === PRICE_INDIVIDUAL) return "individual";
  if (priceId && priceId === PRICE_TEAM) return "team";
  return null;
}
