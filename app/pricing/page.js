import { Plus } from "lucide-react";
import Pricing from "../../components/Pricing.js";
import { company } from "../../lib/site.js";

export const metadata = { title: "Pricing", description: "Packages and prices for Digi Solution LLC marketing services." };

const faqs = [
  ["Is advertising spend included?", "No. Ad spend is paid directly by you to Meta, Google or other platforms using your own payment method. Our fee covers strategy, setup, creative and management."],
  ["Do monthly packages renew automatically?", "No. Each payment covers one 30-day service period. To continue, simply book the next month. You can stop at any time."],
  ["How quickly do you start?", "We contact you within 1 business day of payment with an onboarding brief. Delivery timelines are listed on each package and start once we receive the access and assets we need."],
  ["Do you guarantee results?", "We work hard to grow your results, but no agency can honestly guarantee specific sales, leads or follower numbers, because results depend on the market, platforms and your offer."],
  ["Can I get a refund?", "Yes, in the situations described in our Refund & Cancellation Policy, including a full refund if you cancel before work begins."],
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="headline">Pricing</h1>
          <p className="sub center">Six packages, priced up front in US dollars. Pay securely online and we start within one business day.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <Pricing />
        </div>
      </section>

      <section className="section gray">
        <div className="wrap narrow">
          <h2 className="title center" style={{ marginBottom: 48 }}>Questions? Answers.</h2>
          {faqs.map(([q, a]) => (
            <details className="faq" key={q}>
              <summary>
                {q}
                <Plus size={22} strokeWidth={1.75} aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
          <p className="small center" style={{ marginTop: 32 }}>
            Need a custom plan? Email <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
