import { createHmac, timingSafeEqual } from "node:crypto";

// Razorpay signs "order_id|payment_id" with the key secret (HMAC-SHA256, hex).
export function verifySignature({ razorpay_order_id, razorpay_payment_id, razorpay_signature }, secret) {
  const expected = Buffer.from(createHmac("sha256", secret).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest("hex"));
  const given = Buffer.from(String(razorpay_signature ?? ""));
  return expected.length === given.length && timingSafeEqual(expected, given);
}
