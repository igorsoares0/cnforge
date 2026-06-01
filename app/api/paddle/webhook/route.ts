import { EventName } from "@paddle/paddle-node-sdk";

import { db } from "@/lib/db";
import { getPaddle, planForPrice } from "@/lib/paddle";

// Paddle needs the raw, unparsed body to verify the signature.
export async function POST(request: Request) {
  const signature = request.headers.get("paddle-signature") ?? "";
  const secret = process.env.PADDLE_WEBHOOK_SECRET ?? "";
  const body = await request.text();

  if (!signature || !secret) {
    return new Response("Missing signature or secret", { status: 400 });
  }

  let event;
  try {
    event = await getPaddle().webhooks.unmarshal(body, secret, signature);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.eventType === EventName.TransactionCompleted) {
    await fulfillTransaction(event.data);
  }

  // Refunds/chargebacks in Paddle Billing arrive as adjustments against the
  // original transaction — there is no `transaction.refunded` event. An
  // adjustment can be created already approved, or move to approved later, so
  // we react to both events and let the handler filter by status.
  if (
    event.eventType === EventName.AdjustmentCreated ||
    event.eventType === EventName.AdjustmentUpdated
  ) {
    await revokeForAdjustment(event.data);
  }

  return new Response("ok", { status: 200 });
}

type Unmarshalled = Awaited<
  ReturnType<ReturnType<typeof getPaddle>["webhooks"]["unmarshal"]>
>;

type TransactionData = Extract<
  Unmarshalled,
  { eventType: EventName.TransactionCompleted }
>["data"];

type AdjustmentData = Extract<
  Unmarshalled,
  { eventType: EventName.AdjustmentCreated | EventName.AdjustmentUpdated }
>["data"];

/**
 * Revoke access when a refund or chargeback is approved. Marking the backing
 * Purchase as `refunded` is enough: `getAccess` only counts active purchases,
 * so both the buyer (individual) and any team members lose access at once.
 * The `status: "active"` guard makes this idempotent across repeat deliveries.
 */
async function revokeForAdjustment(adj: AdjustmentData) {
  if (adj.status !== "approved") return;
  if (adj.action !== "refund" && adj.action !== "chargeback") return;

  await db.purchase.updateMany({
    where: { paddleTransactionId: adj.transactionId, status: "active" },
    data: { status: "refunded" },
  });
}

async function fulfillTransaction(tx: TransactionData) {
  // Idempotency: each transaction id is fulfilled at most once.
  const existing = await db.purchase.findUnique({
    where: { paddleTransactionId: tx.id },
    select: { id: true },
  });
  if (existing) return;

  const priceId = tx.items[0]?.price?.id ?? null;
  const plan = planForPrice(priceId);
  const custom = (tx.customData ?? {}) as { userId?: string; plan?: string };
  const userId = custom.userId;

  // We can't grant access without knowing who paid or what plan they bought.
  if (!userId || !plan) return;

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true },
  });
  if (!user) return;

  const amount = tx.details?.totals?.total
    ? Number(tx.details.totals.total)
    : null;

  await db.$transaction(async (dbx) => {
    const purchase = await dbx.purchase.create({
      data: {
        userId,
        plan,
        paddleTransactionId: tx.id,
        paddlePriceId: priceId,
        amount,
        currency: tx.currencyCode,
        status: "active",
      },
    });

    if (plan === "team") {
      const team = await dbx.team.create({
        data: {
          name: user.name ? `${user.name}'s team` : "My team",
          ownerId: userId,
          purchaseId: purchase.id,
          seatLimit: 10,
        },
      });
      await dbx.teamMember.create({
        data: { teamId: team.id, userId, role: "owner" },
      });
    }
  });
}
