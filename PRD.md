# PRD — Aon × AbbVie Pitch Site
### The Adaptive HR Organization

**Status:** Draft v1 · for design + engineering kick-off
**Owner:** Tom (Slalom, Senior Director, Product Design)
**Last updated:** March 2026
**Companion artifact:** `index.html` — static design comp / visual reference for the AbbVie variant

---

## 1. Overview

A single-page, scroll-driven proposal site that earns thirty minutes of attention from an enterprise CHRO by leading with a sharp thesis — not a capabilities deck — and exits with a concrete, sized first move.

The first deployment targets **AbbVie**. The same architecture must support **United Airlines** and **CDW** as drop-in content variants within roughly a week of build effort each. Three audience cuts (CHRO, Total Rewards, CIO) must be supportable via content props on the same component tree, not parallel codebases.

The page is **Aon-fronted**, with Slalom credited subtly in the close and footer as the co-delivery partner. Voice and visual restraint follow Aon brand discipline; editorial typography and asymmetric layout push past Aon's in-house standard toward agency-grade.

#### What this is
- A pitch artifact that lives at a private Vercel URL, shared via email to a named recipient
- A reusable component system for joint Aon × Slalom pursuit work
- A reference build the GTM team can extend without redesign cycles

#### What this is not
- A public marketing site
- A logged-in product or platform
- A pixel-perfect clone of Aon's CMS template

---

## 2. Strategic Frame

#### The thesis
> AI is forcing HR to rewire — not just digitize.

This is the load-bearing sentence of the site and every variant. Other lines move; this one stays.

#### The story arc (eight scenes)
1. **Anchor** — open with a continuity hook specific to the recipient (for AbbVie: the Total Rewards conversation a year ago)
2. **Provocation** — name the shift, with three big stats and the 3-pillar → 2-pillar HR operating model collapse
3. **Landscape** — where AI is already accelerating HR, across nine moments and three domains
4. **Ladder** — the five-stage maturity progression (Assist → Augment → Anticipate → Automate → Agentize) with efficiency-gain stats
5. **Map** — interactive 8 × 5 matrix showing every lifecycle stage across every maturity stage, with tools called out per cell
6. **Pairing** — Aon's data depth on one side, Slalom's build muscle on the other, closed by the "scaffolding gap" framing and the live pilot proof
7. **Next Mile** — the thirty-day shaped engagement, anchored on Total Rewards
8. **Conversation** — the closing question tailored to the audience, plus the soft Slalom co-credit

#### Voice rules
- Aon-style declarative, never hedged. No "we believe," no "we think."
- Three-part hooks where natural ("health, wealth, and talent")
- "Better decisions" is preserved as Aon's brand thread but used sparingly
- Editorial italics for emphasis, not bold
- Numbers as visual moments, never as inline filler

---

## 3. Information Architecture

| § | Scene | Component | Content responsibility | Interactive |
|---|---|---|---|---|
| 01 | Anchor | `HeroAnchor` | Account-specific opening line + addressee | No |
| 02 | Provocation | `ProvocationBlock` + `BigStatRow` + `PillarCollapse` | Thesis line, three stats, pillar diagram | No |
| 03 | Landscape | `AccelLandscape` | Three columns, nine lifecycle moments | No |
| 04 | Ladder | `MaturityLadder` | Five stages, efficiency-gain stats, descriptions | Hover state |
| 05 | Map | `MaturityMatrix` | 40 cells of capability + tools | **Yes — tab switching** |
| 06 | Pairing | `PairingSplit` + `ScaffoldingCallout` | Aon-side list, Slalom-side list, joint quote, pilot proof | No |
| 07 | Next Mile | `EngagementLadder` + `EngagementAnchor` | Three-step engagement + why-this-function rationale | No |
| 08 | Conversation | `ClosingConversation` | Tailored question + contact + Slalom co-credit | No |
| — | Footer | `SiteFooter` | Brand marks, meta, confidentiality | No |

Scenes 01, 02, 06, 07, 08 carry account-specific copy. Scenes 03, 04, 05 are shared IP and stay constant across variants (with optional emphasis tuning).

---

## 4. Design System

#### Brand position
Aon-flavored, agency-elevated. The visual restraint of Aon's real digital presence — a single accent color, generous whitespace, mainstream sans for body — paired with editorial display typography, asymmetric composition, and the kind of typographic confidence Aon's in-house team doesn't ship.

#### Color tokens
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0A0A0A` | Primary text, deep backgrounds |
| `--ink-soft` | `#1F1F1F` | Secondary text, body emphasis |
| `--slate` | `#3F3F46` | Body text |
| `--mute` | `#71717A` | Meta, labels, eyebrow text |
| `--rule` | `#E7E5E0` | Dividers, hairlines |
| `--paper` | `#FAF7F2` | Primary page background (warm off-white) |
| `--paper-2` | `#F4EFE7` | Deeper cream for alternating sections |
| `--white` | `#FFFFFF` | White sections (matrix, alternating) |
| `--aon` | `#E11937` | Aon Red — accents, numbers, hover, hairlines |
| `--aon-deep` | `#A50034` | Historical burgundy — italic emphasis in display type |

**Rule:** Aon Red is reserved for kinetic accents — numbers, italic emphasis in display heads, hover states, the matrix progression hint, and the topbar wordmark. It is **not** used as card borders, section dividers, or block backgrounds. Burgundy is reserved for italic emphasis inside the editorial display face.

#### Typography
| Family | Source | Use |
|---|---|---|
| Instrument Serif | Google Fonts | All display headings, eyebrow italics, stat numbers, "i. ii. iii." numerals, pull quotes |
| Helvetica Neue → Helvetica → Arial → system-ui | System stack | All body, navigation, labels, button text |

Type scale uses `clamp()` to handle viewport range. Display heads run from 40px on mobile to 112px in the hero. Body is 17px desktop, 16px mobile, with 1.55 line height.

**Rule:** No third typeface. The contrast between Instrument Serif (display, italic-forward) and the Helvetica/system body is the entire personality.

#### Spacing & rhythm
- Section vertical padding: `clamp(80px, 14vh, 160px)` — generous, viewport-aware
- Gutter: `clamp(24px, 5vw, 80px)`
- Max content width: `1320px` for full sections, `920px` for narrow content
- Internal grid gaps: 24px, 40px, or 60px — pick by visual weight

#### Motion
- **Scroll reveal:** `opacity: 0 → 1` + `translateY(24px) → 0` over 1s with eased timing, triggered by IntersectionObserver at 12% visibility
- **Hero stagger:** 120ms between hero elements on initial load
- **Matrix tab switch:** 0.5s fade-in on panel
- **Hover transitions:** 0.2s for color/background
- **No scroll-jacking, no parallax, no pinning.** Aon would never. Neither do we.

#### Layout philosophy
- Asymmetric over symmetric grids — `1.1fr 0.9fr`, not `1fr 1fr`
- Generous whitespace, controlled density, no decorative gradients or shadows
- Borders are hairlines (`1px solid var(--rule)` or `--ink` for emphatic dividers)
- Cards have no rounded corners over 2px — sharp is the visual tell

---

## 5. Tech Stack

#### Recommendation
**Next.js 15 (App Router)** + **TypeScript** + **Tailwind CSS** + **Framer Motion** (for the matrix transitions and scroll reveals) + **Vercel** deployment.

#### Rationale
- Matches Slalom team fluency (React, Next.js are the standard stack)
- Vercel-native, zero-config preview deploys per branch
- App Router supports static generation per account variant out of the box (`/abbvie`, `/united`, `/cdw` as static routes)
- Server components for the static scenes, client components only where interactivity lives (`MaturityMatrix`)
- TypeScript enforces content schemas — when a new account is added, the type system catches missing copy before deploy

#### Alternative considered
**Astro** would be a defensible lighter-weight choice (less JS shipped, faster LCP, content collections are elegant). Rejected for team familiarity. If this becomes a permanent product surface, revisit.

#### Project structure
```
abbvie-pitch/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── globals.css             # Design tokens, base styles
│   ├── [account]/
│   │   └── page.tsx            # Dynamic route per account
│   └── page.tsx                # Default (redirects to /abbvie)
├── components/
│   ├── scenes/                 # Page-level scene components
│   │   ├── HeroAnchor.tsx
│   │   ├── ProvocationBlock.tsx
│   │   ├── AccelLandscape.tsx
│   │   ├── MaturityLadder.tsx
│   │   ├── MaturityMatrix.tsx
│   │   ├── PairingSplit.tsx
│   │   ├── EngagementLadder.tsx
│   │   └── ClosingConversation.tsx
│   ├── primitives/             # Reusable atoms
│   │   ├── Eyebrow.tsx
│   │   ├── DisplayHeading.tsx
│   │   ├── Section.tsx
│   │   ├── BigStat.tsx
│   │   └── PillarCard.tsx
│   └── layout/
│       ├── TopBar.tsx
│       └── SiteFooter.tsx
├── content/
│   ├── shared/
│   │   ├── landscape.ts        # The 9-moment landscape (shared)
│   │   ├── ladder.ts           # The 5-stage maturity ladder (shared)
│   │   └── matrix.ts           # The 40-cell matrix data (shared)
│   ├── abbvie.ts               # Account-specific copy + contacts
│   ├── united.ts
│   └── cdw.ts
├── lib/
│   ├── types.ts                # Content schemas as TS types
│   └── theme.ts                # Token export for Tailwind config
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## 6. Component Inventory

#### Scene components

**`HeroAnchor`** · *server component*
- Props: `addressee: { name: string, role: string }`, `opening: { lede: string, em: string }`, `subhead: string`
- Renders the full-vh anchor section
- The italic-emphasized phrase inside the title is the visual focus

**`ProvocationBlock`** · *server component*
- Props: `thesis`, `sideCopy: string[]`, `stats: Stat[]`, `pillarFrom: PillarItem[]`, `pillarTo: PillarItem[]`
- Composes `BigStatRow` and `PillarCollapse` internally
- Stats are always exactly 3
- Pillar diagram is always 3 → 2

**`AccelLandscape`** · *server component*
- Props: `columns: { title, items: { name, description }[] }[]`
- Three columns, three items per column, fixed structure
- Content lives in `content/shared/landscape.ts` — this scene rarely changes per account

**`MaturityLadder`** · *server component*
- Props: `stages: Stage[]` with five items
- Each stage: `{ ordinal, name, gain, gainLabel, description, eyebrow }`
- Renders on dark `--ink` background — the visual peak of the page
- Stat numbers progressively saturate from muted red → full Aon red across the five

**`MaturityMatrix`** · *client component* — the only one
- Props: `lifecycleStages: { name, cells: Cell[] }[]` (8 stages, 5 cells each)
- State: `activeTabIndex: number`
- Behavior: tab click switches the panel, cells fade-in via Framer Motion
- Each cell renders capability description + tool pills
- Keyboard nav: arrow keys move between tabs, Tab key follows DOM order

**`PairingSplit`** · *server component*
- Props: `aon: Side`, `slalom: Side`, where `Side = { tag, name, list: ListItem[] }`
- Renders the two-column "what Aon brings / what Slalom brings" table
- Composed with `ScaffoldingCallout` below it

**`ScaffoldingCallout`** · *server component*
- Props: `quote: string`, `quoteEm: string`, `proofLabel: string`, `proofBody: string`
- The dark callout block with the "scaffolding gap" framing + live pilot proof

**`EngagementLadder`** · *server component*
- Props: `steps: { num, timeframe, name, description }[]`
- Three steps. Number is a large italic display character. Anchor card sits below.

**`ClosingConversation`** · *server component*
- Props: `question: string`, `invitation: string`, `team: { headline, support }`
- The italic quoted question is the visual centerpiece

#### Primitives

**`Section`** — wrapper with consistent vertical padding + background variants (`white`, `paper`, `paper2`, `ink`)
**`Eyebrow`** — the small-caps red label with hairline accent, takes a `mute` variant
**`DisplayHeading`** — the editorial h2, accepts italic emphasis via `<em>` in JSX or via a `em` prop
**`BigStat`** — the kinetic stat number primitive used in `ProvocationBlock`
**`PillarCard`** — single card in the pillar diagram, takes `strike` and `accent` modifiers

#### Layout

**`TopBar`** — the fixed Aon wordmark + meta line; fades the gradient background based on scroll position
**`SiteFooter`** — Aon wordmark, "in partnership with Slalom" treatment, meta block

---

## 7. Data Model & Content Scaling

The architecture's main asset is that swapping accounts is a content swap, not a code change.

#### Shared IP (constant across all accounts)
- `content/shared/landscape.ts` — the 9-moment landscape (Talent Lifecycle / Employee Experience / Strategic HR)
- `content/shared/ladder.ts` — the 5-stage maturity ladder (Assist → Agentize) with descriptions and gain percentages
- `content/shared/matrix.ts` — the full 40-cell matrix

#### Account-specific content schema (per account file)
```typescript
// content/abbvie.ts
import { AccountContent } from '@/lib/types'

export const abbvie: AccountContent = {
  meta: {
    account: 'AbbVie',
    audienceCut: 'CHRO',          // 'CHRO' | 'TR' | 'CIO'
    preparedAt: 'March 2026',
    confidential: true,
  },
  hero: {
    addressee: 'Office of the Chief Human Resources Officer',
    titleLead: 'A year ago, we sat down to talk about the future of',
    titleEm: 'Total Rewards.',
    subhead: 'The future arrived faster than anyone predicted...',
  },
  provocation: {
    statement: 'AI is forcing HR to rewire — not just digitize.',
    sideCopy: [ /* 2 paragraphs */ ],
    stats: [ /* 3 stats */ ],
  },
  pairing: {
    // Aon-side and Slalom-side lists — usually stable across accounts
    // but can be re-ordered for emphasis (e.g., AbbVie emphasizes Health Risk Analyzer)
  },
  engagement: {
    anchorFunction: 'Total Rewards',
    rationale: 'Comp, benefits, and recognition all sit on data...',
    steps: [ /* 3 steps */ ],
  },
  closing: {
    question: 'Where did the Total Rewards thinking land — and what should the next mile look like, now that AI has matured?',
    invitation: '...',
    team: { headline: '...', support: '...' },
  },
}
```

A new account is a new content file + a new route. The component tree never changes.

#### Audience variant handling
The `audienceCut` field on `meta` switches:
- `HeroAnchor` em-phrase emphasis (TR / 3-pillar / workforce enablement)
- `ProvocationBlock` lead stat selection
- `EngagementLadder` anchor function

This is handled by switch statements inside the page-level composition, not the components themselves. Components stay dumb; the route file decides which prop set to inject.

---

## 8. Interaction & Motion

#### Page-level
- Smooth scroll between in-page anchors
- Scroll reveals on viewport entry (12% threshold, `-60px` bottom margin)
- Hero stagger on initial load (120ms between elements)
- TopBar background fades from `--paper` to transparent as user scrolls past 200px

#### MaturityMatrix interactions
- **Tab click:** active tab gets red top hairline + ink color, panel below fades from `opacity: 0, translateY(8px)` to fully visible over 500ms
- **Cell hover:** background shifts from white to `--paper`, 300ms ease
- **Keyboard:** Left/Right arrow keys cycle through tabs while focus is on a tab; Enter activates
- **Touch:** tabs scroll horizontally on viewports < 1080px

#### What's not interactive (intentional)
- No carousels
- No video
- No modal lightboxes
- No form submission (the close is "we are ready when you are," not "submit your details")
- No parallax, no scroll-jacking, no pinning, no full-page transitions

---

## 9. Performance & Accessibility

#### Performance targets
- **LCP:** < 1.5s on 3G Fast (the hero is text-only, so this should be straightforward)
- **CLS:** 0 (no shifting fonts, no late-loading images)
- **Total page weight:** < 200KB JS, < 50KB CSS, no images larger than 200KB if any are added later
- Fonts: Instrument Serif loaded via Next.js font system (`next/font/google`) with `display: swap` and subset to Latin

#### Accessibility requirements
- Semantic HTML throughout — `<section>`, `<nav>`, `<footer>`, real `<h1>` / `<h2>` / `<h3>` hierarchy
- All interactive elements keyboard-operable
- Matrix tabs use `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected` correctly
- Color contrast minimum 4.5:1 for body text, 3:1 for large display — current palette passes
- `prefers-reduced-motion` respected: scroll reveals snap to visible instead of animating
- Skip-link from TopBar to main content
- All images (if added) ship with descriptive alt text

#### SEO
- Page should be no-index'd via `<meta name="robots" content="noindex, nofollow">` — this is a private pitch artifact, not searchable content
- OG tags configured per account for clean preview when the link is pasted into email or Teams

---

## 10. Implementation Phases

#### Phase 1 — AbbVie static (1 week)
- Scaffold Next.js project, design tokens, base components
- Build all eight scenes against the AbbVie content file
- Ship the interactive matrix with full 40-cell content
- Deploy preview URL to Vercel
- **Exit:** AbbVie page is shareable, polished, ready to send

#### Phase 2 — Component extraction (3-4 days)
- Refactor any inline content into the shared/account split
- Type the content schema rigorously
- Document each scene component with prop examples in Storybook or MDX
- **Exit:** A new account variant can be created by writing one content file

#### Phase 3 — United + CDW variants (1 week, parallel)
- Author `content/united.ts` and `content/cdw.ts`
- Tune audience-cut switches (United may be CIO-flavored, CDW CHRO-flavored)
- Per-account Vercel preview URLs
- **Exit:** Three live, separately-authenticated pitch URLs

#### Phase 4 — GTM hand-off (1 day)
- README that lets a non-design Slalom GTM lead create a new account
- Content schema documentation
- Final QA across browsers (Safari, Chrome, Firefox) and devices

---

## 11. Open Decisions

These need a call before Phase 1 ships.

1. **AbbVie hero hook permission.** Open the page with the year-ago Total Rewards workshop reference, or soften to a less-specific opening? Current draft is soft enough to defend but specific enough to feel personal.

2. **Contact treatment in the close.** Do we name specific Aon contacts (the partners who originated the work, ex-McKinsey strategy contact, etc.) or keep it generic team-level? Current draft is generic to avoid locking in attendee assumptions before they're confirmed.

3. **Slalom logo / wordmark.** The footer currently uses Slalom in Instrument Serif italic as a typographic credit, no logo. Is that subtle enough, or do we want the actual Slalom wordmark in a lockup?

4. **Authenticated vs. open URL.** Should the Vercel deploy require basic auth, or sit at an unguessable URL? Most pitch sites use the latter; an authenticated version is more discreet but adds friction.

5. **Matrix expansion behavior on mobile.** Current spec is horizontal scroll for the panel. Alternative: stack the 5 cells vertically on mobile and use the tabs to filter. Decide before mobile QA.

6. **Per-account analytics.** Do we want to know whether the recipient actually opened the page and scrolled through it? Vercel Web Analytics gives this without cookies. Decide whether to enable.

---

## 12. Companion Artifact

The file `index.html` accompanying this PRD is a **static visual design comp** of the AbbVie variant. It is the design reference for component implementation — the rendered behavior, typography, spacing, color use, and matrix interactivity should match this comp. Where the comp and the PRD disagree, the PRD wins and the comp gets updated.

The comp is single-file and intentionally non-componentized — it exists to align on the visual outcome before code is split into reusable parts.

---

## 13. Out of Scope

- Authentication or login
- A CMS — content lives in version-controlled TypeScript files
- An admin UI for non-developers to author new accounts (Phase 4 README is the substitute)
- Analytics platforms beyond Vercel Web Analytics
- Internationalization — English-only for now
- Print stylesheet (the comp's `@media print` rules can carry over if needed)
