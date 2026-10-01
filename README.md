# ByteSpace

Landing page and auth screens for ByteSpace, built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first tokens via `@theme` in `src/app/globals.css`)
- shadcn/ui primitives (Base UI under the hood)
- GSAP + `@gsap/react` (ScrollTrigger only)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev          # start dev server
npm run build        # production build
npm run start        # serve production build
npm run lint         # eslint
npm run format:fix   # prettier write
npm run format:check # prettier check
```

Type checking runs via `tsc --noEmit` (there is no `typecheck` script).

## Routes

| Route     | Description           |
| --------- | --------------------- |
| `/`       | Landing page          |
| `/signin` | Sign-in screen        |
| `/joinus` | Create-account screen |

## Folder structure

```
src/
├── app/
│   ├── layout.tsx                  # root layout — fonts (Poppins + Satoshi), metadata
│   ├── globals.css                 # Tailwind v4 tokens, .container / .section-y utilities
│   ├── (landing)/
│   │   ├── layout.tsx              # header + <main> + footer shell
│   │   └── page.tsx                # composes sections from @/sections
│   └── (auth)/
│       ├── layout.tsx              # split-panel auth shell (illustration + form card)
│       ├── signin/page.tsx
│       ├── joinus/page.tsx
│       └── _sub-components/
│           ├── auth-parts.tsx      # AuthHeading, FormField, SocialAuthButtons, OrDivider
│           ├── data.ts             # PANEL_COPY keyed by pathname
│           └── interface.ts        # component prop types
│
├── sections/                       # one folder per landing page block
│   ├── hero-section/
│   ├── brand-marquee-section/
│   ├── course-grid-section/
│   ├── learning-paths-section/
│   ├── testimonial-section/
│   ├── career-growth-section/
│   └── cta-section/
│       # each: index.tsx, optional data.ts, interface.ts, sub-components/
│
├── components/
│   ├── ui/                         # shadcn primitives — do not hand-edit
│   ├── layout/
│   │   ├── header/                 # sticky nav, mobile menu
│   │   └── footer/                 # link columns, newsletter, bottom bar
│   ├── icons/                      # IconStore switch over sub-components/
│   ├── svg-items/                  # SvgItems switch over decorative SVGs
│   ├── logo/
│   └── section-heading/
│
├── lib/
│   ├── animations/                 # gsap registration + scroll reveal
│   ├── fonts/satoshi/              # self-hosted body font (.otf)
│   └── utils/                      # cn(), fill-to-minimum()
│
└── public/images/
```

## Conventions

- Route groups own their local UI in `_sub-components/` (inside `app/`); sections and components use plain `sub-components/`.
- Static content lives in a sibling `data.ts`, typed by a sibling `interface.ts`.
- Use `cn()` from `@/lib/utils/cn` for merged class names.
- Colors are CSS custom properties in `globals.css` (`bg-persian-blue-800`, `text-shuttle-gray-600`, …). Never build class names dynamically — Tailwind's scanner can't see them.
- Animations are inline `useGSAP` with `{ scope: ref }`; no wrapper hooks.
