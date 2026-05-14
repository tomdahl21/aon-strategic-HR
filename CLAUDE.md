# CLAUDE.md
### Project brief for coding agents working on this repo

Read this file in full before doing anything. It pre-loads the constraints, the source-of-truth files, and the things that are easy to get wrong on this project.

---

## 1. What this project is

A private, single-page proposal site. Aon-fronted, with Slalom credited subtly in the close and footer as co-delivery partner. The first deployment targets **AbbVie's CHRO**; the architecture must support **United Airlines** and **CDW** as drop-in content variants without code changes.

The page is shared via email at a private Vercel URL — it is not a public marketing site, not a product, not search-indexable.

Visual tone: Aon-flavored brand restraint, pushed past their in-house standard toward agency-grade editorial design.

---

## 2. Source of truth (read these first)

| File | What it is | When to use it |
|---|---|---|
| `PRD.md` | The full spec — strategic frame, IA, tokens, tech stack, components, content schema, phases | Always. Reference by section (§N) in questions and PRs. |
| `index.html` | Static visual design comp of the AbbVie variant. Single-file, no build step. | Use as the literal visual contract: typography, spacing, color use, matrix interactivity, **and exact copy**. The matrix has 40 real cells of content in here — don't paraphrase them. |

**Where the PRD and the comp disagree, the PRD wins** — but the comp gets updated to match. Don't silently let them diverge.

---

## 3. Where we are in the plan

**Currently building: Phase 1 — Static AbbVie variant.** Per PRD §10.

**Implementation order for Phase 1** (agreed with the design lead, do not reorder without asking):

1. Project scaffolding — Next.js 15 App Router + TypeScript + Tailwind + design tokens
2. **`MaturityMatrix.tsx`** — the only client component, the visual centerpiece, highest complexity
3. **`HeroAnchor.tsx`** — proves the addressee-driven content schema works
4. **`MaturityLadder.tsx`** — establishes the dark-section signature pattern
5. **Primitives** — `Section`, `Eyebrow`, `DisplayHeading`, `BigStat`, `PillarCard`
6. Remaining scenes — `ProvocationBlock`, `AccelLandscape`, `PairingSplit`, `ScaffoldingCallout`, `EngagementLadder`, `ClosingConversation`
7. `TopBar` + `SiteFooter`
8. Page composition + content wiring against `content/abbvie.ts`
9. Vercel deploy + private URL

---

## 4. Stack (do not deviate without asking)

Per PRD §5:

- **Next.js 15** with App Router (not Pages Router, not Next.js 14 or earlier)
- **TypeScript** strict mode
- **Tailwind CSS** for styling, with design tokens exported from `lib/theme.ts` into `tailwind.config.ts`
- **Framer Motion** for the matrix transition + scroll reveals
- **`next/font/google`** for Instrument Serif (with `display: 'swap'`, Latin subset)
- **Vercel** for deploy

**Do not add:** UI component libraries (no shadcn, no Radix outside what Framer Motion needs, no Headless UI), CSS-in-JS, animation libraries beyond Framer Motion, state management libraries, icon libraries (we have none yet — ask before adding one), or any analytics beyond Vercel Web Analytics.

---

## 5. Design system rules that are easy to violate

These are the ones agents most commonly break. Read carefully.

#### Typography
- **Only two typefaces:** Instrument Serif (display, italic-forward) and the system stack `"Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, sans-serif` (body)
- **No third typeface.** If you feel the urge to add Inter, Manrope, Space Grotesk, Geist, anything — stop.
- Use `clamp()` for display heading scale, not fixed sizes
- The contrast between Instrument Serif and Helvetica/system IS the personality. Don't dilute it.

#### Color
- **Aon Red (`--aon`, `#E11937`) is for kinetic accents only:** numbers, italic emphasis inside display heads, hover states, the topbar wordmark, single hairline accents
- **Aon Red is NOT for:** card borders, block backgrounds, section dividers, button fills, large fills of any kind
- **Burgundy (`--aon-deep`, `#A50034`)** is reserved for italic emphasis inside the editorial display face. That's its only job.
- Backgrounds alternate between `--paper` (`#FAF7F2`), `--paper-2` (`#F4EFE7`), `--white`, and `--ink` (`#0A0A0A`) — that's the palette
- The current strawman that we replaced used red on every card border. We don't do that.

#### Layout
- Asymmetric grids: `1.1fr 0.9fr`, `1.3fr 1fr`, not `1fr 1fr`
- Hairline borders (`1px solid var(--rule)`) or emphatic dividers (`1px solid var(--ink)`)
- Corner radius: 0–2px max. Sharp is the visual tell.
- No gradients except the topbar background fade
- No box shadows beyond what's already in the comp (which is essentially none)
- Generous whitespace — `clamp(80px, 14vh, 160px)` section vertical padding is the default

#### Motion
- Scroll reveal: opacity + 24px translateY, 1s ease, fires via IntersectionObserver at 12% visibility (see index.html for the exact pattern)
- Hero stagger: 120ms between elements on initial load
- Matrix tab switch: 0.5s fade-in, slight Y offset
- Hover: 0.2s ease
- **No scroll-jacking, no parallax, no pinning, no full-page transitions.** Aon wouldn't. Neither do we.
- Respect `prefers-reduced-motion`: skip animations, render to final state immediately

---

## 6. Content architecture

Per PRD §7. Critical to get right because account-swapping is the whole point.

```
/content
  /shared
    landscape.ts    # 9-moment landscape — constant across all accounts
    ladder.ts       # 5-stage maturity ladder — constant across all accounts
    matrix.ts       # 40-cell matrix — constant across all accounts
  abbvie.ts         # Account-specific copy + contacts
  united.ts         # (Phase 3)
  cdw.ts            # (Phase 3)
```

#### Rules
- **Copy the matrix data from `index.html` verbatim.** All 40 cells. Do not paraphrase, summarize, or "improve" the descriptions. The wording has been edited.
- **Same for the hero, the provocation thesis, the closing question.** These have been workshopped. Copy them exactly.
- Account files conform to the `AccountContent` type in `lib/types.ts` (which you'll be creating — see PRD §7 for the shape)
- Audience cut (`'CHRO' | 'TR' | 'CIO'`) lives on `meta.audienceCut` and switches inside page-level composition, not inside components. Components stay dumb.

#### Common mistake to avoid
Hardcoding any of the account-specific copy inside a component. Every string that varies between AbbVie / United / CDW must come from the account content file via props.

---

## 7. Code conventions

- TypeScript strict mode. No `any` without a comment explaining why.
- Components in PascalCase, files match component name (`MaturityMatrix.tsx`)
- Server components by default. Add `'use client'` only where state or browser APIs are required. Only `MaturityMatrix` needs it in Phase 1.
- Props typed inline or via a sibling `type Props = { ... }` declaration above the component
- Tailwind classes ordered: layout → spacing → typography → color → state. Or use Prettier's Tailwind plugin and let it sort.
- No CSS modules, no inline styles except where dynamic values truly require it
- Co-locate component-specific helpers in the same file unless they're reused

---

## 8. Before you...

| Action | Stop and ask |
|---|---|
| Add a dependency not in §4 of this file | Yes |
| Deviate from the visual comp on spacing, type, color | Yes |
| Paraphrase or "improve" any copy | Yes — copy is workshopped, not draft |
| Create a component not listed in PRD §6 | Yes |
| Skip the IntersectionObserver reveal pattern | Yes |
| Use a UI library, even shadcn | Yes |
| Add icons, illustrations, or images | Yes — there are none in the comp by design |
| Add a form, modal, lightbox, carousel, or video | Yes — the close is "we are ready when you are," not a CTA form |
| Change the Slalom credit treatment in the footer | Yes — current treatment is intentional |

| Action | Just do it |
|---|---|
| Refactor file structure within `components/` to match PRD §5 | Yes |
| Improve TypeScript types | Yes |
| Add JSDoc to component props | Yes |
| Fix accessibility issues you spot | Yes |
| Tighten Tailwind class lists | Yes |

---

## 9. Quality bar — definition of done for Phase 1

A Phase 1 ship requires all of these:

- [ ] Page renders identically to `index.html` in Chrome, Safari, Firefox, latest
- [ ] LCP < 1.5s on Vercel preview, throttled to 3G Fast
- [ ] CLS = 0 (no font swap shift, no late-loading image shift)
- [ ] Lighthouse accessibility score ≥ 95
- [ ] Keyboard navigation works through the matrix tabs (arrow keys + Enter)
- [ ] `prefers-reduced-motion` snaps elements to visible without animation
- [ ] Matrix tab semantics correct: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`
- [ ] Page is no-indexed via meta robots
- [ ] OG image set for clean preview when pasted into email/Teams
- [ ] Mobile responsive at 375px, 768px, 1024px, 1440px tested
- [ ] No console errors or warnings in dev or production builds
- [ ] All `content/abbvie.ts` strings come through props — no hardcoded account copy in components

---

## 10. Anti-patterns to avoid

Things AI agents commonly do on a project like this that we don't want.

1. **Stuffing the page with stock-photo imagery.** There are no photos in this design by intent. The personality is typography and whitespace. If you feel compelled to add an image, ask first.
2. **Adding gradient backgrounds for "visual interest."** No. The comp has zero gradients except the topbar background fade. Keep it that way.
3. **Using Inter or another grotesk because it's "neutral."** We have a system stack. That's the body face. Don't add a Google Font for sans.
4. **Building a generic Card component and using it everywhere.** Each scene has its own composition. Cards in the pillar diagram are different from cells in the matrix are different from steps in the engagement ladder. Don't homogenize.
5. **Wrapping everything in Framer Motion.** Motion is restrained. Scroll reveals + matrix transition + hovers. That's it.
6. **Adding a sticky scroll progress indicator, table of contents, or floating CTA.** Nope. The TopBar is the only fixed element. The page is finite and intentional.
7. **Paraphrasing the hero/provocation/closing copy "for tone."** Don't. Copy is final unless flagged in PRD §11 as an open decision.
8. **Building Storybook before the components exist.** Phase 2 concern. Don't preempt.
9. **Adding a `<form>` to capture leads on the close.** Not the move. The close is invitational.
10. **Splitting `index.html`'s inline matrix data into multiple files just because.** The matrix data lives in `content/shared/matrix.ts`, all 40 cells, one file. That's it.

---

## 11. First task

Scaffold the Next.js 15 project per PRD §5. Set up:

1. `package.json` with the dependencies from §4 above
2. `tailwind.config.ts` consuming design tokens from `lib/theme.ts`
3. `app/globals.css` with the CSS custom properties from PRD §4 (or from `index.html`'s `:root` block)
4. `app/layout.tsx` with Instrument Serif loaded via `next/font/google`, `metadata` configured (no-index, OG tags)
5. `lib/types.ts` with the `AccountContent` type per PRD §7
6. `content/abbvie.ts` populated with the copy from `index.html`
7. `content/shared/matrix.ts` populated with all 40 cells from `index.html` (the `MATRIX` array inside the `<script>` block)
8. `content/shared/landscape.ts` and `content/shared/ladder.ts` from the comp
9. Empty component files in `components/scenes/` and `components/primitives/` per PRD §6 inventory

Once scaffolding is done, **stop and confirm before building components.** Wait for the design lead to review the project shape and pick the first component to implement (it will be `MaturityMatrix` unless plans change).

---

## 12. When in doubt

The design lead (Tom) prefers:
- Punchy, outcome-oriented copy over activity language
- Direct critical feedback over hedging
- Fast directional calls over open-ended exploration
- Iterative refinement with clear handoff points

If you're unsure whether something violates these constraints, default to asking — a 30-second check is always cheaper than a refactor.
