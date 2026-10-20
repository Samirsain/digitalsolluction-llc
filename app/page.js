import Link from "next/link";
import { ChevronRight, Lock, RefreshCwOff, Tag, Wallet } from "lucide-react";
import HeroStage from "../components/HeroStage.js";
import Photo from "../components/Photo.js";
import Pricing from "../components/Pricing.js";
import { company, findProduct } from "../lib/site.js";

const from = (...ids) => `From $${Math.min(...ids.map((id) => findProduct(id).price)).toLocaleString("en-US")}`;

const services = [
  { title: "Paid ads", text: "Meta and Google campaigns that turn ad spend into members, clients and sales.", price: from("ads-setup", "ads-management"), photo: "1777559542854-d77a17cfea3f", alt: "Two smartphones on a white tiled table" },
  { title: "Social media", text: "Consistent, on-brand content that builds trust with your audience every week.", price: from("social-starter"), photo: "1690883793939-f8cca2f28ee0", alt: "Hand holding a phone with social media apps" },
  { title: "Ad creative", text: "Scroll-stopping static and video ads made for Instagram, Facebook and TikTok.", price: from("creative-pack"), photo: "1611149974482-764b0c2a211a", alt: "Bright photo studio set up for a product shoot" },
  { title: "Influencer campaigns", text: "Partnerships with fitness and wellness creators your customers already follow.", price: from("influencer-campaign"), photo: "1695408247109-3bf125ad0538", alt: "Woman filming content on her phone in a kitchen" },
];

const people = [
  { title: "Gyms & studios", text: "Fill classes and memberships with local, targeted promotions.", photo: "1757924284732-4189190321cf", alt: "Bright modern gym with treadmills and large windows" },
  { title: "Coaches & trainers", text: "Turn your expertise into a brand that books clients online.", photo: "1758875569256-f37c438cac65", alt: "Personal trainer coaching a woman lifting weights" },
  { title: "Wellness brands", text: "Launch and scale products with ads and creator partnerships.", photo: "1739950839930-ef45c078f316", alt: "Wellness and skincare bottles on a white table" },
  { title: "Influencers & creators", text: "Grow an engaged audience and attract brand deals.", photo: "1536914356815-690cf1fa40e2", alt: "Smiling woman in workout clothes" },
];

const reasons = [
  [Tag, "Prices up front. No sales calls.", "Every package shows its price, scope and timing before you pay.", "wide brand"],
  [RefreshCwOff, "No auto-renewals.", "Monthly plans cover 30 days. The next month is always your call.", ""],
  [Wallet, "Your ad budget stays yours.", "Ad spend goes straight to Meta or Google from your own account.", ""],
  [Lock, "Checkout secured by Razorpay.", "You pay in Razorpay's secure window. We never see or store your card details.", "wide"],
];

const steps = [
  ["Day 0", "Book & pay", "Choose a package and pay securely online."],
  ["Day 1", "Onboarding", "We email a short brief and ask for the access and assets we need."],
  ["Days 2–7", "Build & launch", "Campaigns, creatives or creator shortlists arrive on the timing shown on each plan."],
  ["Day 30", "Report", "Monthly plans close with a results report. Booking another month is up to you."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1 className="headline">Your wellness brand, in every feed.</h1>
          <p className="sub center">
            Paid ads, social media, ad creative and influencer campaigns for health, fitness and wellness. Fixed prices. Book online.
          </p>
          <div className="actions">
            <Link href="/pricing" className="btn btn-primary">See pricing</Link>
            <Link href="#how-it-works" className="link-chevron">
              How it works <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-note">Packages from $199. No contracts.</p>
          <HeroStage />
        </div>
      </section>

      <section className="section gray" id="services">
        <div className="wrap">
          <div className="section-intro center">
            <h2 className="title">Everything your brand needs to grow.</h2>
            <p className="sub">Four services, one specialist team, built only for health, fitness and wellness.</p>
          </div>
          <div className="tiles">
            {services.map((s) => (
              <article className="tile" key={s.title}>
                <div className="tile-text">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="tile-meta">
                    <strong>{s.price}</strong>
                    <Link href="/pricing" className="link-chevron">
                      See plans <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <Photo id={s.photo} alt={s.alt} ratio={1.6} sizes="(max-width: 900px) 100vw, 600px" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="wrap">
          <div className="section-intro center">
            <h2 className="title">Pick your plan.</h2>
            <p className="sub">Clear prices, real deliverables, and nothing that renews without asking.</p>
          </div>
          <Pricing />
        </div>
      </section>

      <section className="section gray">
        <div className="wrap">
          <div className="section-intro center">
            <h2 className="title">Made for people who move people.</h2>
            <p className="sub">If you help others live healthier, we help you reach them.</p>
          </div>
          <div className="people">
            {people.map((p) => (
              <article className="person" key={p.title}>
                <Photo id={p.photo} alt={p.alt} ratio={0.8} sizes="(max-width: 900px) 72vw, 300px" />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-intro center">
            <h2 className="title">Why brands book with us.</h2>
          </div>
          <div className="bento">
            {reasons.map(([Icon, title, text, variant]) => (
              <div className={`bento-tile ${variant}`} key={title}>
                <span className="bento-icon">
                  <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gray" id="how-it-works">
        <div className="wrap">
          <div className="section-intro center">
            <h2 className="title">From booking to results.</h2>
            <p className="sub">A simple, predictable process from the day you pay.</p>
          </div>
          <ol className="steps">
            {steps.map(([day, title, text]) => (
              <li className="step" key={day}>
                <span className="step-dot">{day}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap center">
          <h2 className="title">Ready to grow your brand?</h2>
          <p className="sub" style={{ marginTop: 16 }}>
            Book a plan today, or tell us about your business and we'll recommend one within one business day.
          </p>
          <div className="actions">
            <Link href="/pricing" className="btn btn-primary">See pricing</Link>
            <a href={`mailto:${company.email}`} className="link-chevron">
              Email us <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
          <Photo id="1787647089633-37e49ee2e054" alt="Group yoga class with arms raised in a bright studio" ratio={21 / 9} sizes="(max-width: 1200px) 100vw, 1200px" className="closing-photo" />
        </div>
      </section>
    </>
  );
}
