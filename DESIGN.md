---
name: Digi Solution
description: Fixed-price wellness marketing, sold like a product. Bright, calm, Apple-style clean.
colors:
  brand: "#0a7d62"
  brand-hover: "#086b54"
  brand-tint: "#e7f5ef"
  ink: "#1d1d1f"
  muted: "#6e6e73"
  line: "#d2d2d7"
  gray: "#f5f5f7"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Inter Tight, Inter, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter Tight, Inter, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter Tight, Inter, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: "-0.011em"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.5
  price:
    fontFamily: "Inter Tight, Inter, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
rounded:
  icon: "8px"
  inner: "20px"
  card: "22px"
  tile: "28px"
  pill: "980px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  grid-gap: "20px"
  card-pad: "clamp(28px, 3.4vw, 44px)"
  intro: "clamp(40px, 6vw, 64px)"
  section: "clamp(80px, 11vw, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "44px"
  button-small:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "32px"
  tile:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.tile}"
    padding: "{spacing.card-pad}"
  bento-tile:
    backgroundColor: "{colors.gray}"
    rounded: "{rounded.tile}"
    padding: "{spacing.card-pad}"
  bento-tile-brand:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.white}"
    rounded: "{rounded.tile}"
  plan-card:
    backgroundColor: "{colors.gray}"
    rounded: "{rounded.card}"
    padding: "36px 32px 32px"
  plan-card-featured:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
  segmented-control:
    backgroundColor: "{colors.gray}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "4px"
  nav:
    backgroundColor: "rgba(255, 255, 255, 0.78)"
    textColor: "{colors.ink}"
    height: "60px"
---

# Design System: Digi Solution

## Overview

**Creative North Star: "The Product Page"**

Marketing services are sold the way a phone is sold: big calm statements, bright photography, product-style tiles, and a plan picker as simple as choosing a model. Every page is a stack of full-width bands alternating white and Apple grey, each opening with a centred headline and a quiet grey subtitle, then one grid of rounded tiles or cards. Density is low; whitespace and type size carry the authority.

The palette is near-monochrome. One green, taken from the logo and darkened for contrast, is the only action colour: pills, links, icons, the featured plan's outline, and at most one solid brand tile per band. Depth is soft and photographic, never graphic. The user rejected a dark, text-led direction; this world is light grounds and real photography.

**Key Characteristics:**
- White / Apple-grey (#f5f5f7) bands alternate down the page.
- Inter Tight 600 display with tight negative tracking; Inter 17px body.
- One green action colour; everything else is ink, grey, or white.
- Large radii (28px tiles, 22px cards) and full pill buttons.
- Frosted sticky header; soft, long, low-opacity shadows only on floating objects.
- Lucide line icons, brand-green, never filled glyphs or emoji.

## Colors

A near-monochrome Apple palette with a single deep wellness green.

### Primary
- **Logo Green** (brand): every action. Primary pills, inline links, icon strokes, focus rings, the featured plan border, the plan badge, the first step marker, and the one solid brand bento tile.
- **Pressed Green** (brand-hover): hover state of primary pills only.
- **Mint Wash** (brand-tint): text selection, the avatar disc in the hero phone feed. Never a section background.

### Neutral
- **Ink** (ink): headlines, body text, the secondary (dark) pill, the phone body.
- **Secondary Grey** (muted): subtitles, tile descriptions, meta lines, footer text. Supporting copy is always this grey, never a lighter tint.
- **Hairline** (line): plan-list dividers, FAQ rules, step connector, footer rule.
- **Apple Grey** (gray): alternating section bands, plan cards, bento tiles, fact cards, segmented control track, footer.
- **White** (white): page ground, tiles sitting on grey bands, the featured plan, the segmented thumb.

### Named Rules
**The One Green Rule.** The brand green is the only chromatic colour in the interface. If something is clickable it may be green; if it is not, it is ink, grey, or white. Photography supplies all other colour.

**The Alternating Band Rule.** Sections alternate white and Apple grey. A card on a grey band is white; a card on a white band is grey. Never place a grey card on a grey band.

## Typography

**Display Font:** Inter Tight 600 (with Inter, sans-serif), standing in for SF Pro Display
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** One family in two cuts. Inter Tight at a single heavy-ish weight with tight tracking gives the confident product-launch headline; Inter at 17px with slight negative tracking keeps body copy calm and readable.

### Hierarchy
- **Display** (600, clamp 2.75 to 5.5rem, 1.04): the hero headline only.
- **Headline** (600, clamp 2 to 3.5rem, 1.07): every section heading, centred, balanced wrapping.
- **Title** (600, clamp 1.75 to 2.6rem, 1.1): headings inside service tiles and bento tiles; short statements of 18ch or less.
- **Subtitle** (400, clamp 1.15 to 1.5rem, 1.38, muted): the one-line offer under each headline, capped at 40ch when centred.
- **Body** (400, 17px, 1.47): paragraphs; long-form legal text capped at 70ch, FAQ answers at 65ch.
- **Card heading** (Inter 600, 1.15 to 1.3rem, -0.02em): plan names, audience cards, steps, FAQ questions, legal h2.
- **Price** (Inter Tight 600, 2.75rem, -0.04em, tabular figures): plan prices, with the period in Inter 500 muted.
- **Label** (0.78 to 0.85rem, muted): meta lines, "last updated", footer, secure-checkout notes.

### Named Rules
**The Single Weight Rule.** Display type is Inter Tight 600 and nothing else; no light or black display weights. Hierarchy comes from size and tracking.

**The Statement Not Label Rule.** Sections open with a headline and a subtitle. There is no small uppercase line above the headline.

## Layout

A centred 1200px container with a fluid gutter (clamp 16 to 40px); text-led pages narrow to 820px and legal pages to 70ch. Sections breathe with clamp 80 to 140px vertical padding, and each section intro sits clamp 40 to 64px above its grid. Grids use a constant 20px gap: two-up service tiles, three-up plans and bento, four-up audience cards and steps.

At 900px and below, grids collapse to one column (plans cap at 480px wide), audience cards become a horizontal scroll-snap row at 72% width, and the step timeline turns vertical. At 600px the nav links hide, leaving logo and the "Book now" pill. Wide photos shift from 21:9 to 4:3 on mobile. Bento tiles can span two columns (wide) or the full row.

## Elevation & Depth

Mostly flat: structure comes from tonal bands (white against Apple grey) and large radii, not from borders or shadows. Shadows exist only on objects that are meant to look physically lifted: the hero phone, floating photo cards and status chips, the segmented thumb, the featured plan, and the small bento icon tile. They are long, soft, negatively spread and low-opacity. Frosted glass (saturate 180% blur 20px) is reserved for the sticky header and the small chips and captions that float over imagery.

### Shadow Vocabulary
- **Device** (`inset 0 0 0 2px #3a3a3c, 0 40px 80px -24px rgba(0,0,0,0.35), 0 18px 36px -18px rgba(0,0,0,0.25)`): the hero phone only.
- **Float** (`0 30px 60px -24px rgba(0,0,0,0.28)`): floating photo cards; chips use the lighter `0 18px 40px -16px rgba(0,0,0,0.28)`.
- **Featured glow** (`0 12px 40px rgba(10,125,98,0.12)`): the recommended plan only.
- **Thumb** (`0 2px 8px rgba(0,0,0,0.1)`): the segmented control's sliding thumb.
- **Icon lift** (`0 6px 16px -8px rgba(0,0,0,0.18)`): white icon squares in bento tiles.

### Named Rules
**The Lifted Objects Only Rule.** Tiles, cards and sections sit flat. A shadow means "this is an object floating above the page", never "this is a container".

## Shapes

Generous, continuous rounding throughout. Photo tiles, bento tiles and wide photos use the tile radius (28px); plans, fact cards and audience photos use the card radius (22px); icon squares 20px; the logo icon 8px. Every button, the segmented control, badges, step markers and photo captions are full pills (980px). Avatars and live dots are circles. Hairline borders appear only as dividers, never around cards, except the 2px green outline on the featured plan. The two floating hero photos tilt (-7deg and 6deg); nothing else rotates.

## Components

### Buttons
Calm, solid pills.
- **Shape:** full pill (980px), 44px tall, 22px side padding, Inter 500 at 1rem.
- **Primary:** brand green on white text; hover deepens to pressed green; press scales to 0.97 on the shared ease.
- **Secondary:** ink pill with white text, hover #333336. Used sparingly.
- **Small:** 32px tall, 0.82rem; the header "Book now".
- **Chevron link:** a text link in green with a trailing chevron, paired beside a primary pill ("How it works", "See plans").
- **Disabled / busy:** 60% opacity, progress cursor.

### Cards / Containers
- **Service tile:** white on a grey band, 28px radius, text block above a full-bleed 16:10 photo that sits flush at the bottom.
- **Bento tile:** grey, 28px radius, min 320px, icon square top, statement heading bottom. One per grid may be solid brand green with white text.
- **Plan card:** grey, 22px radius, 2px transparent border; featured plan turns white with a green border, featured glow, and a green pill badge centred on its top edge. Price, billing line, full-width pill, secure note, then a hairline-topped checklist with green check icons.
- **Fact card:** grey, 22px radius, 28px padding, green icon beside a muted label and a 1.05rem value.

### Navigation
Sticky, 60px, 78% white with frosted blur and a 1px 8%-black bottom hairline. Logo icon and name left; links in ink at 80% opacity, 0.875rem, full opacity on hover; green small pill at the far right. Below 600px only logo and pill remain.

### Segmented Control (signature)
A grey pill track with two labels and a white pill thumb that slides between them (0.35s, shared ease) and swaps the plan grid. Pure CSS: radio inputs plus `:has()`. Selected label in ink, unselected muted.

### FAQ
Disclosure rows between hairlines, 1.15rem 600 question, green plus icon that rotates 45deg when open, muted answer at 65ch.

### Steps
Four steps on a 2px hairline track; each marker is an 84x36 white pill with a green label, the first filled green. Vertical on mobile.

### Hero Stage (signature)
A CSS-built phone (ink body, 52px radius, dynamic island) whose feed of labelled example ads scrolls slowly (36s linear loop, paused on hover, off under reduced motion). Two tilted float cards and up to three frosted status chips orbit it. This is the one authored motion moment.

## Do's and Don'ts

### Do:
- **Do** alternate white and Apple-grey (#f5f5f7) bands and invert card colour against the band.
- **Do** keep the logo green as the only chromatic UI colour: actions, links, icons, focus ring.
- **Do** set every heading in Inter Tight 600 with negative tracking (-0.03 to -0.04em) and balanced wrapping.
- **Do** use full pill buttons (980px) at 44px minimum height.
- **Do** use Lucide line icons in brand green at 1.5 to 2 stroke.
- **Do** use real, bright photography in 28px-radius tiles.
- **Do** use the shared ease `cubic-bezier(0.16, 1, 0.3, 1)` for transitions and disable motion under reduced-motion.

### Don't:
- **Don't** use dark section backgrounds or text-only dense menus; the user rejected that direction.
- **Don't** introduce a second accent colour or gradients.
- **Don't** put borders or shadows around ordinary cards; depth is tonal.
- **Don't** add small uppercase labels above headlines.
- **Don't** add a second autoplaying motion; the hero feed is the only one.
