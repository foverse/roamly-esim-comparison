# Roamly: Multilingual Travel eSIM Comparison Engine

A fast, responsive comparison platform for international travel eSIM plans, built with Next.js App Router, React 19, and TypeScript.

- Repository: [https://github.com/foverse/roamly-esim-comparison](https://github.com/foverse/roamly-esim-comparison)
- Author: [Fouad Sennouni](https://growthmaker.fr) ([@foverse](https://github.com/foverse))
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
├── app/
│   ├── [locale]/           # Localized route handlers (/en, /fr, /es)
│   │   ├── layout.tsx      # Root localized layout with metadata
│   │   └── page.tsx        # Comparison matrix page
│   ├── layout.tsx          # Global html shell
│   └── globals.css         # Token system and responsive styles
├── components/
│   ├── CurrencySelector.tsx # Currency conversion switcher
│   ├── FilterSidebar.tsx   # Filter controls for data, days, and providers
│   ├── PlanCard.tsx        # Individual plan comparison card
│   └── Header.tsx          # Navigation and locale selector
├── lib/
│   ├── plans.ts            # eSIM plan catalogue and data structures
│   ├── locales.ts          # Localization strings and translations
│   └── currency.ts         # Exchange rates and formatters
├── proxy.ts                # Locale negotiation helper
└── package.json            # Dependencies and scripts
```

---

## Author & Contact

Built by [Fouad Sennouni](https://growthmaker.fr).

Discover more case studies, conversion optimization frameworks, and web tools at [growthmaker.fr](https://growthmaker.fr).
