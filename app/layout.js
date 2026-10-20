import Image from "next/image";
import Link from "next/link";
import { Inter, Inter_Tight } from "next/font/google";
import { Mail } from "lucide-react";
import { company } from "../lib/site.js";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["600"], variable: "--font-inter-tight" });

export const metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: { default: "Digi Solution LLC | Health, Fitness & Wellness Marketing", template: "%s | Digi Solution LLC" },
  description:
    "Fixed-price digital marketing for health, fitness and wellness brands: paid ads, social media, ad creative and influencer campaigns. Book online.",
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <header className="site-header">
          <div className="wrap nav">
            <Link href="/" className="wordmark">
              <Image src="/brand/icon.png" alt="" width={32} height={32} priority />
              Digi Solution
            </Link>
            <div className="nav-right">
              <nav className="nav-links" aria-label="Main">
                <Link href="/#services">Services</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
              <Link href="/pricing" className="btn btn-primary btn-small">
                Book now
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="wrap footer-grid">
            <div>
              <Image src="/brand/logo.png" alt="Digi Solution, health, fitness and wellness marketing" width={960} height={503} className="footer-logo" />
              <address>
                {company.legalName}
                <br />
                {company.address.join(", ")}
              </address>
              <a className="footer-email" href={`mailto:${company.email}`}>
                <Mail size={14} strokeWidth={1.75} aria-hidden="true" />
                {company.email}
              </a>
            </div>
            <nav aria-label="Company">
              <h2>Company</h2>
              <Link href="/#services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About us</Link>
              <Link href="/contact">Contact</Link>
              {company.social.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </nav>
            <nav aria-label="Policies">
              <h2>Policies</h2>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/refund-policy">Refund &amp; Cancellation</Link>
              <Link href="/shipping-policy">Shipping &amp; Delivery</Link>
            </nav>
          </div>
          <div className="wrap footer-bottom">
            Copyright © {new Date().getFullYear()} {company.legalName}. A {company.state} limited liability company, Entity ID{" "}
            {company.entityId}. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
