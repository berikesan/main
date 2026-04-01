# CLAUDE.md — berikesan

This file provides context and guidelines for Claude when working in this repository.

---

## Project Overview

**berikesan** is a multi-product web platform built with Next.js and deployed on Vercel.

The main site (`berikesan.com`) serves as the landing page. Each product lives under its own route:

- `berikesan.com/` — Main landing page
- `berikesan.com/invitation` — Invitation product
- `berikesan.com/product-a` — (replace with actual product name)
- `berikesan.com/product-b` — (replace with actual product name)

---

## Architecture

This is a **single Next.js application** using the App Router. Each product is isolated via its own route segment under `app/`, with its own `layout.tsx` and scoped styles.

### Key Principle
> Each product is visually and stylistically independent. Styles must never bleed between products.

- The **root layout** (`app/layout.tsx`) is kept minimal — only global resets and base font loading.
- Each product segment has its **own layout** that loads its own CSS/design system.
- Shared logic (utilities, API clients, hooks) lives in `lib/` and `hooks/`.
- Shared UI components live in `components/` only if they are truly product-agnostic.

---

## Folder Structure

```
berikesan/
├── app/
│   ├── layout.tsx              # Root layout — minimal, no product styles
│   ├── page.tsx                # Landing page (berikesan.com)
│   ├── globals.css             # Global reset only, no dark mode
│   │
│   ├── invitation/
│   │   ├── layout.tsx          # Invitation-specific layout + styles
│   │   ├── page.tsx
│   │   └── styles/
│   │       └── invitation.css
│   │
│   ├── product-a/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── styles/
│   │       └── product-a.css
│   │
│   └── product-b/
│       ├── layout.tsx
│       ├── page.tsx
│       └── styles/
│           └── product-b.css
│
├── components/                 # Shared, product-agnostic components only
├── lib/                        # Utilities, API clients, helpers
├── hooks/                      # Shared custom React hooks
├── public/                     # Static assets
├── types/                      # Global TypeScript types
│
├── CLAUDE.md
├── restructure-plan.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Styling Rules

### General
- **Do not** import any product-specific CSS in `app/globals.css` or `app/layout.tsx`.
- Each product's styles are imported **only** inside its own `layout.tsx`.
- CSS Modules are preferred for component-level styles.
- No dark mode — the app is light mode only. Do not add `prefers-color-scheme` anywhere.

### Tailwind
Tailwind is global by nature, so follow these rules to prevent bleed between products:

- **Do not** hardcode product-specific colors, fonts, or tokens directly in `tailwind.config.ts`.
- Instead, define per-product design tokens as **CSS variables** scoped to each product's root class.
- Reference those variables in `tailwind.config.ts` so Tailwind resolves them per product context.

**tailwind.config.ts**
```ts
theme: {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    },
    fontFamily: {
      display: ['var(--font-display)'],
      body: ['var(--font-body)'],
    },
  },
}
```

**Per-product CSS (scoped to root class)**
```css
/* app/invitation/styles/invitation.css */
.invitation-root {
  --color-primary: #FF5733;
  --color-secondary: #FFF5F0;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Lato', sans-serif;
}

/* app/product-a/styles/product-a.css */
.product-a-root {
  --color-primary: #3B82F6;
  --color-secondary: #EFF6FF;
  --font-display: 'Space Mono', monospace;
  --font-body: 'Inter', sans-serif;
}
```

Each product's `layout.tsx` wraps children in its root class so variables resolve correctly:
```tsx
// app/invitation/layout.tsx
import './styles/invitation.css'

export default function InvitationLayout({ children }: { children: React.ReactNode }) {
  return <div className="invitation-root">{children}</div>
}
```

---

## Dark Mode

**Dark mode is disabled.** This project does not support light/dark switching.

- No `prefers-color-scheme` media queries anywhere
- No `dark:` Tailwind variants
- No theme toggling logic
- Each product owns its own fixed color palette via CSS variables

---

## Adding a New Product

1. Create a new folder under `app/your-product-name/`
2. Add `layout.tsx`, `page.tsx`, and `styles/your-product-name.css`
3. Define CSS variables scoped to `.your-product-name-root` in the CSS file
4. Import the CSS only inside the product's `layout.tsx`
5. Wrap children in `<div className="your-product-name-root">` in the layout
6. Do not add any styles or tokens to the root layout or `tailwind.config.ts`

---

## Future Migration Path

When the codebase grows and products become large enough, this project is designed to migrate into a **Turborepo monorepo** with **Vercel Multi-Zone**. Each product folder under `app/` maps directly to its own app in `apps/` — the migration is a structured lift, not a rewrite.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js (App Router) | Framework |
| TypeScript | Language |
| Tailwind CSS | Utility styling |
| CSS Variables | Per-product design tokens |
| Vercel | Deployment |

---

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run lint      # Run ESLint
```
