import Link from "next/link";
import { company, legalUpdated } from "../../lib/site.js";

export const metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <article className="legal">
      <h1>Terms of Service</h1>
      <p className="small">Last updated: {legalUpdated}</p>

      <p>
        These Terms of Service ("Terms") govern your use of {company.domain} (the "Site") and your purchase of services from{" "}
        {company.legalName}, a {company.state} limited liability company (Entity ID {company.entityId}) with its business address at{" "}
        {company.address.join(", ")} ("{company.name}", "we", "us" or "our"). By using the Site or purchasing a package you agree to
        these Terms. If you do not agree, please do not use the Site or our services.
      </p>

      <h2>1. Our services</h2>
      <p>
        We provide digital marketing and brand growth services for businesses, influencers and professionals in the health, fitness
        and wellness industry, including paid advertising setup and management, ad creative production, social media management and
        influencer promotion campaigns. The scope, price and delivery time of each package are described on our{" "}
        <Link href="/pricing">Pricing</Link> page. Work outside a package's listed scope requires a separate written quote.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and able to form a binding contract to purchase our services. If you purchase on behalf of
        a business, you confirm you are authorised to bind that business to these Terms.
      </p>

      <h2>3. Prices and payment</h2>
      <ul>
        <li>All prices are listed in US dollars (USD) and must be paid in full in advance.</li>
        <li>Payments are processed securely by our payment partner, Razorpay. We do not receive or store your full card or bank details.</li>
        <li>Monthly packages cover one 30-day service period starting on the onboarding date. They do not renew automatically; to continue, you purchase the next period.</li>
        <li>Prices may change from time to time, but a change never affects a period you have already paid for.</li>
        <li>You are responsible for any taxes, bank charges or currency conversion fees charged by your bank or card issuer.</li>
      </ul>

      <h2>4. Advertising spend and third-party costs</h2>
      <p>
        Our fees do not include advertising spend or amounts paid to influencers, creators or other third parties. Ad spend is
        charged directly to you by the advertising platform (for example Meta or Google) through your own ad account. Influencer fees
        are agreed with you before any commitment is made and are paid by you directly unless we agree otherwise in writing.
      </p>

      <h2>5. Your responsibilities</h2>
      <ul>
        <li>Provide accurate information, timely feedback and the account access, brand assets and approvals we reasonably need. Delivery timelines start once we have these.</li>
        <li>Own or have permission to use all logos, images, video, music, testimonials and other content you give us.</li>
        <li>Ensure your products, services and offers are lawful and that you hold any licences they require.</li>
        <li>Review and approve campaigns and content before they go live.</li>
      </ul>

      <h2>6. Health, fitness and wellness advertising</h2>
      <p>
        We do not provide medical, nutritional or health advice, and we do not verify medical or scientific claims. You are
        responsible for ensuring that any claim about your products or services (including weight loss, health outcome, supplement
        or before-and-after claims) is truthful, not misleading and properly substantiated, as required by the U.S. Federal Trade
        Commission, the Food and Drug Administration and other applicable laws. We may decline, edit or pause any content that we
        reasonably believe is unlawful, misleading or in breach of advertising platform policies. Advertising platforms make the
        final decision on ad approval, and we are not responsible for platform rejections, restrictions or account suspensions.
      </p>

      <h2>7. Influencer campaigns</h2>
      <p>
        Influencer content we coordinate will include clear disclosure of the commercial relationship (for example "#ad" or
        "Paid partnership") as required by the FTC Endorsement Guides. Influencers are independent third parties; we vet them in good
        faith but are not responsible for their conduct outside the agreed campaign.
      </p>

      <h2>8. No guarantee of results</h2>
      <p>
        Marketing results depend on many factors outside our control, including market conditions, competition, platform algorithms,
        your offer and your budget. We will perform our services with reasonable skill and care, but we do not guarantee any
        specific number of sales, leads, followers, views or return on ad spend.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        Once you have paid in full, you own the final creative deliverables we produce specifically for you (such as ad designs,
        edited videos and captions). We keep ownership of our pre-existing tools, templates, know-how and methods. Unless you tell us
        otherwise in writing, we may show non-confidential work we created for you in our portfolio.
      </p>

      <h2>10. Confidentiality and account access</h2>
      <p>
        We keep your non-public business information and account credentials confidential, use them only to perform the services,
        and ask that you remove our access when our engagement ends. Our handling of personal information is described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>11. Refunds, cancellation and delivery</h2>
      <p>
        Refunds and cancellations are governed by our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>, and
        service delivery by our <Link href="/shipping-policy">Shipping &amp; Delivery Policy</Link>. Both form part of these Terms.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {company.name} will not be liable for any indirect, incidental, special or
        consequential damages, or for lost profits, revenue or data, arising from your use of the Site or our services. Our total
        liability for any claim relating to a purchase is limited to the amount you paid us for the package giving rise to the claim.
      </p>

      <h2>13. Indemnity</h2>
      <p>
        You agree to indemnify and hold {company.name} harmless from claims, losses and expenses (including reasonable legal fees)
        arising from content or materials you supply, your products or services, or claims made in advertising you approve.
      </p>

      <h2>14. Termination</h2>
      <p>
        Either party may end an engagement by email. We may suspend or end services if you breach these Terms, fail to pay, or ask us
        to run advertising that is unlawful or violates platform policies. Sections 4, 6, 8, 9, 12, 13 and 15 survive termination.
      </p>

      <h2>15. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the State of {company.state}, USA, without regard to conflict-of-law rules. Before
        filing any claim, please contact us so we can try to resolve it informally within 30 days. Any dispute that cannot be resolved
        informally will be brought exclusively in the state or federal courts located in Bernalillo County, {company.state}.
      </p>

      <h2>16. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The "Last updated" date shows when they last changed. Changes apply to purchases
        made after the update.
      </p>

      <h2>17. Contact</h2>
      <p>
        {company.legalName}, {company.address.join(", ")}. Email: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
    </article>
  );
}
