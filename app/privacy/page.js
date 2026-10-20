import { company, legalUpdated } from "../../lib/site.js";

export const metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <article className="legal">
      <h1>Privacy Policy</h1>
      <p className="small">Last updated: {legalUpdated}</p>

      <p>
        This Privacy Policy explains how {company.legalName} ("{company.name}", "we", "us") collects, uses and protects personal
        information when you visit {company.domain} or buy our services. We are a {company.state} limited liability company located
        at {company.address.join(", ")}.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Contact details</strong> you give us, such as your name, email address, phone number and business name, when you email us or make a purchase.</li>
        <li><strong>Order information</strong>, such as the package purchased, amount, date and payment reference ID.</li>
        <li><strong>Business information</strong> you share so we can deliver the services, such as brand assets, target audience details and access to your advertising or social media accounts.</li>
        <li><strong>Technical information</strong> collected automatically by our hosting provider, such as IP address, browser type and pages visited, for security and to keep the Site running.</li>
      </ul>
      <p>
        <strong>Payment details:</strong> payments are processed by Razorpay. Your card or bank details are entered directly on
        Razorpay's secure checkout and are never received or stored by us. Razorpay's handling of your data is governed by its own
        privacy policy.
      </p>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To process your order, deliver the services you bought and provide support.</li>
        <li>To communicate with you about your order, onboarding, reports and service updates.</li>
        <li>To process refunds, prevent fraud and keep the Site secure.</li>
        <li>To meet our legal, tax and accounting obligations.</li>
      </ul>
      <p>We only send marketing emails if you have asked to receive them, and every such email lets you unsubscribe.</p>

      <h2>3. How we share information</h2>
      <p>We do not sell or rent your personal information. We share it only with:</p>
      <ul>
        <li><strong>Service providers</strong> who help us run our business, such as Razorpay (payments), Vercel (website hosting) and our email provider, each bound to protect it.</li>
        <li><strong>Advertising and social media platforms</strong>, to the extent needed to run campaigns you have asked us to manage.</li>
        <li><strong>Authorities</strong>, when required by law or to protect our rights, users or the public.</li>
        <li><strong>A successor business</strong>, if we are involved in a merger, acquisition or sale of assets.</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        The Site does not use advertising or analytics cookies. Our payment provider may set cookies that are strictly necessary for
        secure checkout and fraud prevention when you open the payment window.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We keep personal information only as long as needed for the purposes above. Order and payment records are kept for up to 7
        years to meet tax and accounting requirements. Account access you grant us is removed when our engagement ends.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable technical and organisational measures to protect your information, including encrypted (HTTPS) connections
        and limited access to client accounts. No method of transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>

      <h2>7. Your rights and choices</h2>
      <p>
        You may ask us to access, correct or delete the personal information we hold about you, or to stop sending you marketing
        emails. Residents of California and other U.S. states with privacy laws may have additional rights, including the right to
        know what personal information we collect and how it is used, to request deletion and correction, and not to be discriminated
        against for exercising these rights. We do not sell or share personal information for cross-context behavioural advertising.
        To make a request, email <a href={`mailto:${company.email}`}>{company.email}</a>. We will verify your request and respond
        within 45 days.
      </p>

      <h2>8. International processing</h2>
      <p>
        We are based in the United States. Our service providers, including our payment processor, may process information in other
        countries. Where they do, we rely on their contractual and legal safeguards to protect it.
      </p>

      <h2>9. Children's privacy</h2>
      <p>
        Our services are for businesses and adults. We do not knowingly collect personal information from children under 13. If you
        believe a child has given us personal information, contact us and we will delete it.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>We may update this policy from time to time. The "Last updated" date shows when it last changed.</p>

      <h2>11. Contact us</h2>
      <p>
        {company.legalName}, {company.address.join(", ")}. Email: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
    </article>
  );
}
