export const company = {
  name: "Digi Solution LLC",
  legalName: "DIGI SOLUTION, LLC",
  entityId: "0008045735",
  state: "New Mexico",
  formed: "August 26, 2025",
  manager: "Lokesh Kumar Godara",
  email: "b@digisolutionllc.online",
  domain: "digisolutionllc.online",
  address: ["8206 Louisiana Blvd NE, Ste A #4111", "Albuquerque, NM 87113", "United States"],
  hours: "Monday to Friday, 9:00 AM to 6:00 PM (Mountain Time)",
  // Only add live, public profile URLs: broken links fail payment-provider review.
  // e.g. { label: "Instagram", url: "https://www.instagram.com/yourhandle" }
  social: [],
};

export const currency = "USD";
export const legalUpdated = "October 20, 2026";

export const products = [
  {
    id: "ads-setup",
    name: "Ad Campaign Setup",
    price: 249,
    unit: "one-time",
    summary: "Launch your first paid campaign on Meta or Google, built right from day one.",
    features: [
      "Ad account and pixel / conversion tracking setup",
      "Audience research for your fitness or wellness niche",
      "1 campaign with up to 3 ad sets",
      "Launch report with next-step recommendations",
    ],
    delivery: "5 business days",
  },
  {
    id: "creative-pack",
    name: "Ad Creative Pack",
    price: 199,
    unit: "one-time",
    summary: "Scroll-stopping ad creatives ready to run on Instagram, Facebook and TikTok.",
    features: [
      "8 static ad designs in feed and story sizes",
      "4 short-form video ad edits from your footage",
      "3 ad copy variations per creative",
      "1 round of revisions",
    ],
    delivery: "7 business days",
  },
  {
    id: "social-starter",
    name: "Social Media Starter",
    price: 399,
    unit: "per month",
    summary: "Consistent, on-brand social presence that builds trust with your audience.",
    features: [
      "12 posts per month on 2 platforms",
      "Captions, hashtags and content calendar",
      "Community replies on published posts",
      "Monthly performance report",
    ],
    delivery: "Content calendar within 5 business days; posts run for 30 days",
  },
  {
    id: "ads-management",
    name: "Paid Ads Management",
    price: 699,
    unit: "per month",
    featured: true,
    summary: "Targeted promotions that turn ad spend into members, clients and sales.",
    features: [
      "Meta and Google Ads management",
      "Up to $5,000 monthly ad spend managed",
      "Weekly optimisation and A/B testing",
      "Monthly report and strategy call",
    ],
    delivery: "Campaigns live within 5 business days; managed for 30 days",
  },
  {
    id: "influencer-campaign",
    name: "Influencer Promotion Campaign",
    price: 599,
    unit: "per campaign",
    summary: "Partner with fitness and wellness creators your customers already follow.",
    features: [
      "Shortlist of 5 to 10 vetted micro-influencers",
      "Outreach, negotiation and creative briefs",
      "Tracking links and disclosure compliance",
      "End-of-campaign results report",
    ],
    delivery: "Shortlist in 7 business days; campaign runs up to 30 days",
  },
  {
    id: "brand-growth-pro",
    name: "Brand Growth Pro",
    price: 1299,
    unit: "per month",
    summary: "Full-funnel growth: social content, paid ads and strategy in one plan.",
    features: [
      "20 posts per month on 3 platforms",
      "Paid ads management up to $10,000 ad spend",
      "Landing page and funnel review",
      "Bi-weekly strategy calls and reporting",
    ],
    delivery: "Onboarding within 2 business days; managed for 30 days",
  },
];

export const findProduct = (id) => products.find((p) => p.id === id);
export const toMinorUnits = (price) => Math.round(price * 100);
