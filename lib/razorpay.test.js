import { test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { verifySignature } from "./razorpay.js";
import { products, findProduct, toMinorUnits } from "./site.js";

test("signature check accepts only Razorpay's HMAC", () => {
  const secret = "test_secret";
  const ids = { razorpay_order_id: "order_123", razorpay_payment_id: "pay_456" };
  const good = createHmac("sha256", secret).update("order_123|pay_456").digest("hex");
  assert.equal(verifySignature({ ...ids, razorpay_signature: good }, secret), true);
  const tampered = (good[0] === "a" ? "b" : "a") + good.slice(1);
  assert.equal(verifySignature({ ...ids, razorpay_signature: tampered }, secret), false);
  assert.equal(verifySignature({ ...ids, razorpay_signature: undefined }, secret), false);
  assert.equal(verifySignature({ ...ids, razorpay_signature: good }, "other_secret"), false);
});

test("catalog prices convert to whole minor units", () => {
  assert.equal(toMinorUnits(1299), 129900);
  assert.equal(findProduct("nope"), undefined);
  assert.equal(new Set(products.map((p) => p.id)).size, products.length);
  for (const p of products) assert.ok(Number.isInteger(toMinorUnits(p.price)) && p.price > 0);
});
