# Pure Traveller — Developer Guidelines

## Project Overview

Pure Traveller is a modern travel website for a North India-based adventure tour company. The site showcases motorcycle and trekking tours across Himachal Pradesh, Ladakh, Uttarakhand, Kashmir, and beyond. Customers can browse tours, filter by type/region/difficulty, view detailed itineraries, compare package tiers, and reach out via a contact form.

---

## Tech Stack

| Layer          | Technology          |
| -------------- | ------------------- |
| Framework      | Next.js 16+ (App Router, Turbopack) |
| Language       | TypeScript 5+ (strict mode) |
| Styling        | Tailwind CSS v4     |
| UI Runtime     | React 19            |
| Fonts          | Geist Sans, Geist Mono |
| Package Manager| npm                 |

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages & layouts
│   ├── layout.tsx              # Root layout (metadata, fonts, LayoutWrapper)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global Tailwind styles
│   ├── about/page.tsx          # About page
│   ├── contact/
│   │   ├── layout.tsx          # Contact layout (metadata only)
│   │   └── page.tsx            # Contact page with form
│   └── tours/
│       ├── page.tsx            # Tours listing + search/filter
│       └── [slug]/page.tsx     # Individual tour detail page (SSG)
│
├── components/
│   ├── layout/                 # Site-wide layout components
│   │   ├── Header.tsx          # Sticky nav with mobile hamburger
│   │   ├── Footer.tsx          # 4-column footer
│   │   └── LayoutWrapper.tsx   # Wraps children with Header + Footer
│   ├── home/                   # Home page section components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedTours.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTASection.tsx
│   ├── tours/                  # Tour-related components
│   │   ├── TourCard.tsx        # Card used in listings
│   │   ├── SearchFilters.tsx   # Search bar + dropdown filters
│   │   ├── PackageCard.tsx     # Package tier card on detail page
│   │   └── TourNotFound.tsx    # Empty state for filtered results
│   └── ui/                     # Reusable UI primitives
│       ├── Button.tsx          # 4 variants, 3 sizes, optional Link
│       ├── Badge.tsx           # 5 colour variants, 2 sizes
│       ├── SectionHeading.tsx  # Section title + subtitle + divider
│       ├── Rating.tsx          # Star rating display
│       └── TestimonialCard.tsx # Review card with avatar + quote
│
├── lib/
│   ├── types/index.ts          # All shared TypeScript interfaces
│   ├── constants/index.ts      # App-wide constants & config
│   ├── data/
│   │   ├── tours.ts            # Tour catalogue (8 tours)
│   │   ├── testimonials.ts     # Customer reviews (6 entries)
│   │   └── team.ts             # Team member bios (3 entries)
│   └── utils/index.ts          # Pure utility functions
│
└── guidelines/
    └── DEVELOPER_GUIDELINES.md # This file
```

---

## Key Conventions

### Exports
- **Named exports** everywhere. No `export default`.
- Component files export their component as a named function.
- Data files export named constants (`tours`, `testimonials`, `team`).

### Component Directives
- Prefer **server components** (no directive needed).
- Add `"use client"` **only** when you need:
  - `useState`, `useEffect`, `useMemo`, etc.
  - Event handlers (`onClick`, `onChange`, etc.)
  - Browser APIs
  - Context providers

### Imports
- Always use the `@/` alias for internal imports (maps to `src/`).
- Group imports: React/Next → Third-party → Internal components → Internal lib.
- Type-only imports use `import type` syntax.

### Naming
- **PascalCase** for components and their files.
- **camelCase** for functions, variables, utils.
- **UPPER_SNAKE_CASE** for constants.
- **kebab-case** for route slugs.

### No Default Exports
- This project intentionally avoids default exports.
- Every module exports one or more named symbols.
- Why: better IDE autocompletion, consistent import style, easier refactoring.

---

## Design System

### Colour Palette
| Token        | Tailwind Class | Usage                        |
| ------------ | -------------- | ---------------------------- |
| Primary      | `green-900`    | Headers, buttons, CTA backgrounds, footer |
| Primary Hover| `green-800`    | Button hover states          |
| Accent       | `amber-500`    | Badges, highlights, divider lines |
| Accent Light | `amber-50`     | Section backgrounds          |
| Background   | `stone-50`     | Page background              |
| Card         | `white`        | Cards, form containers       |
| Text Primary | `stone-900`    | Headings                     |
| Text Body    | `stone-600`    | Body copy                    |
| Text Muted   | `stone-400/500`| Secondary info               |

### Typography
- Font family: Geist (sans-serif) via next/font/google
- Headings: `font-bold`, `green-900`/`white` depending on background
- Body: `text-stone-600/700`, `leading-relaxed`
- Section spacing: `py-16 md:py-24`

### Cards
- `bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow`
- Consistent padding: `p-6` for content cards, `p-8` for team cards

### Buttons (Button component)
| Variant  | Classes                                              |
| -------- | ---------------------------------------------------- |
| primary  | `bg-green-900 text-white hover:bg-green-800`         |
| secondary| `bg-amber-500 text-white hover:bg-amber-600`         |
| outline  | `border-2 border-green-900 text-green-900 hover:bg-green-900 hover:text-white` |
| ghost    | `text-green-900 hover:bg-green-50`                   |

Sizes: `sm` (px-4 py-2 text-sm), `md` (px-6 py-3 text-base), `lg` (px-8 py-4 text-lg).

### Badges (Badge component)
| Variant  | Purpose                         |
| -------- | ------------------------------- |
| primary  | General tags, region labels     |
| secondary| Tour type (amber)               |
| outline  | Bordered label                  |
| success  | "Easy" difficulty, included     |
| warning  | "Challenging" difficulty        |

---

## Data Flow

1. **Tour data** lives in `src/lib/data/tours.ts` — a flat array of `Tour` objects.
2. **Types** are defined in `src/lib/types/index.ts`. Always start there when adding fields.
3. **Filtering** is client-side via `filterTours()` in `src/lib/utils/index.ts`.
4. **Tour detail pages** use `generateStaticParams` to pre-render all tours at build time.
5. **Contact form** posts to `/api/contact` (Next.js API route) which validates input and forwards to Web3Forms. Emails land at the address configured on the Web3Forms dashboard.
6. **Newsletter form** (in Footer) also posts to `/api/contact` with a newsletter-specific subject.

---

## How To: Add a New Tour

1. Open `src/lib/data/tours.ts`.
2. Add a new `Tour` object to the `tours` array.
3. Required fields (see `Tour` interface in `src/lib/types/index.ts`):
   - `id` — unique string identifier
   - `slug` — URL-friendly kebab-case string
   - `name`, `subtitle`, `overview`
   - `type` — `"bike"` or `"regular"`
   - `region`, `difficulty`, `duration`, `startLocation`, `endLocation`
   - `highlights`, `itinerary`, `images`
   - `featured` — boolean for homepage display
   - `packages` — array of `TourPackage` (each with tier, price, inclusions)
   - `included`, `excluded`, `thingsToCarry`
   - `faqs` — array of { question, answer }
   - `rating`, `reviewCount`, `priceRange`
4. Run `npm run build` to verify no errors.

---

## How To: Add a New Page

1. Create a directory under `src/app/` (e.g., `src/app/blog/`).
2. Add `page.tsx` inside it.
3. For static content: use a **server component** (default — no directive).
4. For interactive content: add `"use client"` at the top.
5. For page metadata: export a `metadata` object or `generateMetadata` function.
6. The `LayoutWrapper` is already applied in the root layout — no need to re-wrap.

---

## How To: Add a New Component

1. Choose the right subfolder in `src/components/`:
   - `ui/` — generic, reusable (buttons, badges, headings)
   - `layout/` — site chrome (header, footer)
   - `home/` — specific to home page
   - `tours/` — tour-related cards and filters
2. Create the `.tsx` file with PascalCase name.
3. Use a **named export**: `export function MyComponent() { ... }`
4. Define a Props interface inline if simple, or import from `@/lib/types` if shared.
5. Follow existing conventions for styling (see similar components).

---

## Code Style Rules

1. **No default exports** — named exports only.
2. TypeScript strict mode is enabled — all types must be correct.
3. Destructure props in function parameters.
4. Order Tailwind classes logically: layout → sizing → colors → typography → effects.
5. Use template literals for dynamic `className` values (no `clsx`/`classnames` dependency).
6. No inline styles — use Tailwind classes exclusively.
7. Components should stay focused and under ~150 lines. Split larger components.
8. Strings that appear in multiple places should live in `src/lib/constants/index.ts`.
9. No comments in component JSX (let types, naming, and structure speak).

---

## Verification Commands

| Command            | Purpose                              |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start development server (Turbopack) |
| `npm run build`    | Production build (catches all TS errors) |
| `npm run lint`     | ESLint checks                        |
| `npm start`        | Start production server              |

**Always run `npm run build` after making changes.** It catches TypeScript errors, missing imports, and other issues that the dev server may not flag immediately.

---

## Common Pitfalls

| Issue | Fix |
| ----- | --- |
| Forgetting `"use client"` on interactive components | Add it at the very top of the file |
| Using `export default` in a component | Change to `export function Name() {}` |
| Using default import `import X from` for named exports | Use `import { X } from` |
| Hardcoding strings that appear in multiple places | Move them to `lib/constants/index.ts` |
| Adding new fields to tours without updating the `Tour` type | Always update types first in `lib/types/index.ts` |
| Creating huge components | Split into smaller, focused sub-components |
| Not testing after changes | Always run `npm run build` before pushing |
