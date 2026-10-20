import Link from "next/link";
import { company, legalUpdated, products } from "../../lib/site.js";

export const metadata = { title: "Shipping & Delivery Policy" };

export default function ShippingPolicy() {
  return (
    <article className="legal">
      <h1>Shipping &amp; Delivery Policy</h1>
      <p className="small">Last updated: {legalUpdated}</p>

      <h2>1. No physical shipping</h2>
      <p>
        {company.name} sells digital marketing services only. We do not ship any physical products, so no shipping charges apply and
        nothing is delivered to a postal address.
      </p>

      <h2>2. Order confirmation and onboarding</h2>
      <p>
        After a successful payment you will see a confirmation on screen with your payment ID. Within{" "}
        <strong>1 business day</strong> we email you an onboarding brief asking for the information, brand assets and account access
        we need to start.
      </p>

      <h2>3. Delivery timelines</h2>
      <p>Delivery timelines start once we receive your completed onboarding brief and the access we requested.</p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong>: {p.delivery}
          </li>
        ))}
      </ul>
      <p>Business days are Monday to Friday, excluding U.S. federal holidays.</p>

      <h2>4. How services are delivered</h2>
      <ul>
        <li>Creative files (designs, videos, copy) are delivered by email or a shared online folder link.</li>
        <li>Ad campaigns and social media content are set up and published directly in your own ad and social media accounts.</li>
        <li>Reports are delivered by email as a PDF or shared online document.</li>
      </ul>

      <h2>5. Delays</h2>
      <p>
        If we expect a delay on our side, we will tell you by email with a new delivery date. If we miss a stated timeline for
        reasons within our control, you may request a refund for the undelivered portion under our{" "}
        <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>. Delays caused by missing materials, late approvals or
        advertising platform review times extend the timeline accordingly.
      </p>

      <h2>6. Questions</h2>
      <p>
        Email <a href={`mailto:${company.email}`}>{company.email}</a> with your payment ID and we will update you on your order.
      </p>
    </article>
  );
}
