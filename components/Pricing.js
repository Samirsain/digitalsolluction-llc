import Link from "next/link";
import { Check, Clock, Lock } from "lucide-react";
import BuyButton from "./BuyButton.js";
import { currency, products } from "../lib/site.js";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 });
const suffix = { "per month": "/mo", "per campaign": "/campaign" };
const billing = {
  "per month": "Paid for 30 days. No auto-renewal.",
  "per campaign": "One payment per campaign.",
  "one-time": "One-time payment.",
};

function Plans({ items, className }) {
  return (
    <div className={`plans ${className}`}>
      {items.map((p) => (
        <article key={p.id} className={p.featured ? "plan featured" : "plan"}>
          {p.featured && <span className="plan-badge">Recommended</span>}
          <h3>{p.name}</h3>
          <p className="plan-summary">{p.summary}</p>
          <p className="plan-price">
            {money.format(p.price)}
            {suffix[p.unit] && <small>{suffix[p.unit]}</small>}
          </p>
          <p className="plan-billing">{billing[p.unit]}</p>
          <BuyButton productId={p.id} label="Book now" />
          <p className="plan-secure">
            <Lock size={12} strokeWidth={2} aria-hidden="true" />
            Secure checkout by Razorpay
          </p>
          <ul className="plan-list">
            {p.features.map((f) => (
              <li key={f}>
                <Check size={16} strokeWidth={2} aria-hidden="true" />
                {f}
              </li>
            ))}
            <li className="delivery">
              <Clock size={16} strokeWidth={1.75} aria-hidden="true" />
              {p.delivery}
            </li>
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="center">
        <div className="segmented">
          <input type="radio" name="plan" id="plan-monthly" defaultChecked />
          <label htmlFor="plan-monthly">Monthly plans</label>
          <input type="radio" name="plan" id="plan-onetime" />
          <label htmlFor="plan-onetime">One-time</label>
          <span className="thumb" aria-hidden="true" />
        </div>
      </div>
      <Plans items={products.filter((p) => p.unit === "per month")} className="plans-monthly" />
      <Plans items={products.filter((p) => p.unit !== "per month")} className="plans-onetime" />
      <p className="pricing-note small">
        All prices in {currency}. Ad spend and influencer fees are paid directly to the platform or creator and are not included.
        By booking you agree to our <Link href="/terms">Terms</Link>, <Link href="/refund-policy">Refund &amp; Cancellation</Link>{" "}
        and <Link href="/shipping-policy">Delivery</Link> policies. Need something custom? <Link href="/contact">Contact us</Link>.
      </p>
    </div>
  );
}
