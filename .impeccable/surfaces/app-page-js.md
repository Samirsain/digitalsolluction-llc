---
version: 1
slug: "app-page-js"
primary_target: "app/page.js"
related_targets: ["app/pricing/page.js","app/layout.js"]
---

# Storefront (home + pricing)

Scope: `/` and `/pricing`, plus shared chrome (header, footer); about, contact and legal pages inherit the world. Mode: Persuade.

Audience: US gym/studio owners, coaches and trainers, wellness brands, fitness influencers; secondary: payment-provider reviewer. Job: understand the offer, compare packages, book one via Razorpay. Proof: none on hand; no testimonials, logos or stats. Constraints: six packages and prices fixed in `lib/site.js`; checkout and legal copy unchanged.

History: the rolled direction (Recovery House Menu, seed dd3d5ff5) was built, then rejected by the user ("too dark, needs photos, looks plain"). The user pinned "Apple-style clean". The pinned direction replaces the roll.

## Direction contract

THESIS: Buying wellness marketing should feel like buying from Apple: big calm statements, bright photography, product-style tiles, and a plan picker as simple as choosing a model. It refuses dark boards, dense text menus and agency gradients.

OWN-WORLD: White and Apple-grey (#F5F5F7) sections alternating, ink #1D1D1F, secondary #6E6E73, and the logo's green (#0A7D62) as the one action colour for pills, links and icons. Inter Tight display at weight 600 with tight tracking, Inter body at 17px. 28px-radius photo tiles, pill buttons, a frosted sticky nav, Lucide icons at 1.5 stroke, logo icon and lockup from the user's files.

STORY: The visitor sees "wellness marketing, done beautifully", browses four service tiles with photos, switches One-time / Monthly to compare three plans, and books. The reviewer finds identity and policies in the footer.

FIRST VIEWPORT: Frosted white nav (logo icon and name left, links, green "Book now" pill). Centred headline "Your wellness brand, in every feed." at ~5.5rem, a one-line offer, a green "See pricing" pill and a "How it works" chevron link, then "Packages from $199. No contracts." Below sits the stage: a CSS phone auto-scrolling fictional example ads, labelled as examples, flanked by two tilted photo cards and three status chips (campaign live, post scheduled, creator brief sent).

FORM: User-pinned Apple-style clean (replaces roll dd3d5ff5). Signature interaction: segmented One-time / Monthly control whose thumb slides and swaps the plan cards, CSS-only. Motion: the phone feed's slow auto-scroll (pauses on hover, off for reduced motion) is the one authored moment. The hero was changed at the user's request: "make the hero more unique".

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
