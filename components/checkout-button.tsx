"use client";

import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type Props = {
  priceId: string;
  plan: "individual" | "team";
  userId: string;
  email: string;
  label?: string;
};

export function CheckoutButton({ priceId, plan, userId, email, label }: Props) {
  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (!token) return;
    initializePaddle({
      token,
      environment:
        process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
          ? "production"
          : "sandbox",
    }).then(setPaddle);
  }, []);

  function openCheckout() {
    paddle?.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      customer: { email },
      customData: { userId, plan },
      settings: {
        successUrl: `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/dashboard?purchase=success`,
      },
    });
  }

  return (
    <Button
      size="lg"
      className="w-full"
      onClick={openCheckout}
      disabled={!paddle}
    >
      {label ?? "Buy now"}
    </Button>
  );
}
