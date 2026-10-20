import { Clock, Mail, MapPin, ReceiptText } from "lucide-react";
import { company } from "../../lib/site.js";

export const metadata = { title: "Contact Us", description: "Contact Digi Solution LLC about marketing packages, orders, refunds or support." };

const icon = { size: 24, strokeWidth: 1.75, "aria-hidden": true };

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="headline">Get in touch.</h1>
          <p className="sub center">
            Questions about a package, an order, a refund or a custom plan? Email us and we'll reply within one business day.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${company.email}`}>
              <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
              Email us
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap narrow">
          <dl className="facts">
            <div className="fact">
              <Mail {...icon} />
              <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
            </div>
            <div className="fact">
              <Clock {...icon} />
              <div><dt>Business hours</dt><dd>{company.hours}</dd></div>
            </div>
            <div className="fact">
              <MapPin {...icon} />
              <div>
                <dt>Business address</dt>
                <dd><address>{company.legalName}<br />{company.address.join(", ")}</address></dd>
              </div>
            </div>
            <div className="fact">
              <ReceiptText {...icon} />
              <div>
                <dt>Order support</dt>
                <dd>Include your Razorpay payment ID (starts with <code>pay_</code>) so we can find your order quickly.</dd>
              </div>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
