import { verifySignature } from "../../../lib/razorpay.js";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret || !verifySignature(body, secret)) {
    return Response.json({ error: "Payment could not be verified." }, { status: 400 });
  }
  return Response.json({ ok: true, paymentId: body.razorpay_payment_id });
}
