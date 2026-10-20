import Image from "next/image";
import Link from "next/link";
import { Building2, Compass, Mail, MapPin, ReceiptText, Sparkles, UserRound, Workflow } from "lucide-react";
import Photo from "../../components/Photo.js";
import { company } from "../../lib/site.js";

export const metadata = { title: "About Us", description: "About Digi Solution LLC, a digital marketing company for the health, fitness and wellness industry." };

const pillars = [
  [Compass, "Big-brand growth, for every wellness brand.", "Our mission: give wellness brands of every size the same growth tools as the big players, with honest pricing and clear reporting.", "wide brand"],
  [Sparkles, "Ads, social, creative, creators.", "Paid advertising on Meta and Google, social media management, ad creative production and influencer campaigns.", ""],
  [Workflow, "Fixed packages. Fast onboarding. Responsible ads.", "We start within one business day and follow platform rules and consumer-protection laws on every campaign.", "full"],
];

const icon = { size: 24, strokeWidth: 1.75, "aria-hidden": true };

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="headline">Built for people who help others live healthier.</h1>
          <p className="sub center">
            {company.name} is a digital marketing and brand growth company focused on the health, fitness and wellness industry.
          </p>
        </div>
      </section>

      <div className="wrap">
        <Photo id="1783841193384-4269c68aa050" alt="Modern pilates studio with reformer machines" ratio={21 / 9} sizes="(max-width: 1200px) 100vw, 1200px" priority className="page-photo" />
      </div>

      <section className="section">
        <div className="wrap">
          <p className="sub center" style={{ maxWidth: "52ch", marginBottom: "clamp(56px, 8vw, 96px)" }}>
            We help businesses, influencers and professionals grow their online presence by creating engaging campaigns, running
            targeted promotions and building genuine connections with their audiences.
          </p>
          <div className="bento">
            {pillars.map(([Icon, title, text, variant]) => (
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

      <section className="section gray">
        <div className="wrap">
          <Image src="/brand/logo.png" alt="Digi Solution logo" width={960} height={503} className="about-logo" />
          <h2 className="title center" style={{ margin: "56px 0 40px" }}>Company information</h2>
          <dl className="facts">
            <div className="fact">
              <Building2 {...icon} />
              <div><dt>Legal name</dt><dd>{company.legalName}</dd></div>
            </div>
            <div className="fact">
              <ReceiptText {...icon} />
              <div><dt>Registration</dt><dd>{company.state} LLC, Entity ID {company.entityId}, formed {company.formed}</dd></div>
            </div>
            <div className="fact">
              <UserRound {...icon} />
              <div><dt>Manager</dt><dd>{company.manager}</dd></div>
            </div>
            <div className="fact">
              <MapPin {...icon} />
              <div><dt>Business address</dt><dd><address>{company.address.join(", ")}</address></dd></div>
            </div>
            <div className="fact">
              <Mail {...icon} />
              <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
            </div>
          </dl>
          <div className="actions">
            <Link href="/pricing" className="btn btn-primary">See pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
