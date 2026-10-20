import Link from "next/link";
import { company, legalUpdated } from "../../lib/site.js";

export const metadata = { title: "Refund & Cancellation Policy" };

export default function RefundPolicy() {
  return (
    <article className="legal">
      <h1>Refund &amp; Cancellation Policy</h1>
      <p className="small">Last updated: {legalUpdated}</p>

      <p>
        We want you to be confident buying from {company.name}. This policy explains when you can cancel an order and how refunds
        work for the packages listed on our <Link href="/pricing">Pricing</Link> page.
      </p>

      <h2>1. Cancellation before work begins: full refund</h2>
      <p>
        You can cancel any order for a <strong>full refund</strong> by emailing us within <strong>48 hours of payment</strong>, as
        long as work on your order has not started. Work starts when we begin onboarding, research, setup or content creation for
        you, and we will always tell you by email when it has started.
      </p>

      <h2>2. Cancellation after work begins</h2>
      <ul>
        <li><strong>One-time packages</strong> (Ad Campaign Setup, Ad Creative Pack): you will be refunded for any deliverables we have not yet started. Completed or in-progress deliverables are not refundable.</li>
        <li><strong>Monthly packages</strong> (Social Media Starter, Paid Ads Management, Brand Growth Pro): you can cancel at any time. Because monthly packages do not renew automatically, cancelling simply means you do not purchase the next period. The current 30-day period is not refundable once work has begun, except as set out in section 3.</li>
        <li><strong>Influencer Promotion Campaign</strong>: you will be refunded in full if you cancel before we contact any influencer on your behalf. After outreach begins, the campaign fee is not refundable.</li>
      </ul>

      <h2>3. If we don't deliver</h2>
      <p>
        If we fail to deliver a package, or part of a package, within the timeline stated on our Pricing page (after you have
        provided the access and materials we requested), you are entitled to a refund for the undelivered portion. If something we
        delivered does not match the package description, tell us within 7 days and we will fix it; if we cannot, we will refund the
        affected portion.
      </p>

      <h2>4. What is not refundable</h2>
      <ul>
        <li>Advertising spend paid to platforms such as Meta or Google. These amounts are charged by the platform, not by us.</li>
        <li>Fees paid to influencers, creators or other third parties.</li>
        <li>Refund requests based only on campaign performance, as we do not guarantee specific results (see our <Link href="/terms">Terms of Service</Link>).</li>
        <li>Work already delivered and approved by you.</li>
      </ul>

      <h2>5. How to request a cancellation or refund</h2>
      <p>
        Email <a href={`mailto:${company.email}`}>{company.email}</a> with the subject "Refund request" and include your name, the
        package purchased and your payment ID (it starts with <code>pay_</code> and appears in your payment confirmation). We reply
        within 1 business day.
      </p>

      <h2>6. Refund processing time</h2>
      <p>
        Approved refunds are processed within <strong>5 to 7 business days</strong> to the original payment method through our
        payment partner, Razorpay. Depending on your bank or card issuer, it may take a further 5 to 10 business days for the amount
        to appear on your statement. Refunds are issued in the original currency; we are not responsible for exchange-rate
        differences or fees charged by your bank.
      </p>

      <h2>7. Chargebacks</h2>
      <p>
        If you have a problem with a payment, please contact us first so we can resolve it quickly. Filing a chargeback without
        contacting us may delay the resolution.
      </p>

      <h2>8. Contact</h2>
      <p>
        {company.legalName}, {company.address.join(", ")}. Email: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
    </article>
  );
}
