# Clínica de Fisioterapia - Demo Landing Page

React + Vite SPA for a physiotherapy clinic in Chamberí, Madrid.

**Live site:** [https://clinica-fisio-demo-rho.vercel.app/](https://clinica-fisio-demo-rho.vercel.app/)

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** (static site builder)
- **CSS Modules** for component styling
- Centralized design tokens in `src/styles/tokens.css`

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Editing Content

All copy, contact info, and site data live in **`src/config/clinicConfig.ts`**. Edit this file to update:

- Contact details (phone, WhatsApp, email, address)
- Team members
- Services
- Pricing plans
- FAQs
- Reviews
- Hours and map URL

Component files are in `src/components/`. Each section has its own `.tsx` file and `.module.css` for styles.

Design tokens (colors, spacing, shadows) are centralized in `src/styles/tokens.css`.

## Structure

- `Header` – sticky nav + phone CTA
- `Hero` – Google badge, headline, WhatsApp CTA
- `Trust` – 3-badge trust section
- `Services` – 6 treatment cards
- `Pricing` – 3 pricing tiers with WhatsApp CTAs
- `Team` – 3 physiotherapists with credentials
- `Reviews` – horizontal scroll cards with arrows + dots (uses `getBoundingClientRect` for precise snap)
- `Faq` – 4 accordion questions
- `Location` – contact card, hours, map iframe
- `Footer` – clinic info + links
- `MobileCtaBar` – fixed bottom bar (mobile only)

## CRO Details

- Google Maps badge: **4.9/5** (+128 opiniones)
- Pricing: **55€** primera consulta / **45€** seguimiento / **200€** bono 5 sesiones
- Neighborhood reference: **Chamberí**
- WhatsApp CTAs with prefilled message
- Smooth scroll + `scroll-margin-top` under sticky header
- Reviews use **desktop viewport pattern** (no `scrollIntoView`, only `getBoundingClientRect`)
- **NO accent-band** (removed per bug fix)

## Deployment

Vercel auto-deploys from `master` branch. The `vercel.json` rewrites all routes to `/index.html` for SPA routing.

Production branch: **master**

## Notes

This is a **demo site** for cold outreach (generic clinic, not a real brand). All contact info is placeholder.
