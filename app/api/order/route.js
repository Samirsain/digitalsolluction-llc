import { currency, findProduct, toMinorUnits } from "../../../lib/site.js";

// Amount always comes from the server-side catalog, never from the browser.
export async function POST(request) {
  const { productId } = await request.json().catch(() => ({}));
  const product = findProduct(productId);
  if (!product) return Response.json({ error: "Unknown package." }, { status: 400 });

  const { RAZORPAY_KEY_ID: keyId, RAZORPAY_KEY_SECRET: secret } = process.env;
  if (!keyId || !secret) return Response.json({ error: "Online payments are not enabled yet. Please email us to order." }, { status: 503 });

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(`${keyId}:${secret}`).toString("base64"),
    },
    body: JSON.stringify({
      amount: toMinorUnits(product.price),
      currency,
      receipt: `${product.id}-${Date.now()}`.slice(0, 40),
      notes: { package: product.name },
    }),
  });
  const order = await res.json();
  if (!res.ok) return Response.json({ error: order.error?.description || "Could not start checkout." }, { status: 502 });

  return Response.json({ id: order.id, amount: order.amount, currency: order.currency, keyId, description: product.name });
}
