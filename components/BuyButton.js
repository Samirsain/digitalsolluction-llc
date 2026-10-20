"use client";

import { useState } from "react";
import Script from "next/script";

export default function BuyButton({ productId, label }) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function buy() {
    setBusy(true);
    setMessage("");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const order = await res.json();
      if (!res.ok) throw new Error(order.error);
      if (!window.Razorpay) throw new Error("Checkout is still loading. Please try again in a moment.");

      new window.Razorpay({
        key: order.keyId,
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        name: "Digi Solution LLC",
        description: order.description,
        image: `${window.location.origin}/brand/icon.png`,
        theme: { color: "#0a7d62" },
        handler: async (payment) => {
          const check = await fetch("/api/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payment),
          });
          setMessage(
            check.ok
              ? `Payment received (${payment.razorpay_payment_id}). We'll email you within 1 business day to start onboarding.`
              : `We couldn't confirm this payment. Please email us with payment ID ${payment.razorpay_payment_id}.`
          );
        },
      }).open();
    } catch (err) {
      setMessage(err.message || "Checkout failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <button className="btn btn-primary btn-block" onClick={buy} disabled={busy}>
        {busy ? "Opening secure checkout…" : label}
      </button>
      {message && (
        <p className="buy-message" role="status">
          {message}
        </p>
      )}
    </>
  );
}
