# Roamly: Multilingual Travel eSIM Comparison Engine

A fast, responsive comparison platform for international travel eSIM plans, built with Next.js App Router, React 19, and TypeScript.

- Repository: [https://github.com/foverse/roamly-esim-comparison](https://github.com/foverse/roamly-esim-comparison)
- Author: [Fouad](https://growthmaker.fr) ([@foverse](https://github.com/foverse))
- Project Hub: [growthmaker.fr](https://growthmaker.fr)

---

## Growth & Product Context

Travel eSIMs represent a fast-growing consumer segment with high affiliate purchase intent. Roamly was designed as a programmatic SEO and affiliate conversion platform:

1. **Programmatic International SEO:** Search engines index localized destination landing pages via dedicated locale subpaths (`/en`, `/fr`, `/es`) with automated `hreflang` tags.
2. **Conversion-Optimized UX:** Instant client-side filtering by country, data allowance, validity period, network type, and pricing.
3. **Multi-Currency Support:** Real-time currency switching between EUR, USD, and GBP to reduce checkout friction for global travelers.

---

## Architectural Highlights

- **Next.js App Router:** Server-rendered destination pages for search engine crawlability combined with client-side interactive filtering.
- **Strict TypeScript Typing:** Strongly typed schemas for eSIM plans, network providers, pricing tiers, and regional filters.
- **Internationalization (i18n):** Locale-prefixed routing architecture that ensures every language has dedicated metadata, canonical tags, and localized copy.
- **Zero Heavy Frameworks:** Styled with pure CSS design tokens for minimal bundle size and fast Core Web Vitals.
- **Extensible Data Contract:** Clean separation between presentation components and plan catalogues, ready to connect to live provider APIs or a PostgreSQL/Supabase database.

---

## Features

- Destination filtering: Japan, France, Thailand, United States, and regional packs
- Parameter filters: Data volume (GB), trip duration (days), and network type (4G/5G)
- Dynamic sorting: Price (low to high), data allowance, and user rating
- Currency toggle: Instant calculation between EUR, USD, and GBP
- Mobile-first layout: Responsive comparison cards with expandable plan details
- Full SEO metadata: Automated open graph cards, canonical tags, and hreflang alternates

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Icons:** Lucide React
- **Styling:** CSS Design Tokens

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/foverse/roamly-esim-comparison.git
cd roamly-esim-comparison
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app detects your preferred language and redirects to the matching locale route (`/en`, `/fr`, or `/es`).

### 4. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
roamly-esim-comparison/
â”œâ”€â”€ app/
â”‚   â”œâ”€â”€ [lang]/                    # Localized routes (/en, /fr, /es)
â”‚   â”‚   â”œâ”€â”€ layout.tsx             # Root localized layout with hreflang metadata
â”‚   â”‚   â””â”€â”€ page.tsx               # Main localized comparison view
â”‚   â””â”€â”€ globals.css                # Pure CSS design token system
â”œâ”€â”€ components/
â”‚   â””â”€â”€ comparison-explorer.tsx    # Interactive filter state, search, and plan cards
â”œâ”€â”€ lib/
â”‚   â”œâ”€â”€ plans.ts                   # eSIM provider catalogue, models, and types
â”‚   â””â”€â”€ i18n.ts                    # Dictionary strings and translation helpers
â”œâ”€â”€ proxy.ts                       # Accept-Language negotiation helper
â”œâ”€â”€ next.config.ts                 # Next.js configuration
â”œâ”€â”€ tsconfig.json                  # TypeScript configuration
â””â”€â”€ package.json                   # Dependencies and build scripts
```

---

## Author & Contact

Built by [Fouad](https://growthmaker.fr).

Discover more case studies, conversion optimization frameworks, and web tools at [growthmaker.fr](https://growthmaker.fr).
