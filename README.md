# Halu Vietnam Tours

A premium, modern, conversion-focused travel website for **Halu Vietnam Tours** — a
Vietnam-focused tour company helping Indian travelers plan smooth, memorable
holidays. Built with Next.js 14 (App Router), Tailwind CSS and Framer Motion.

The layout, page flow and interaction style are inspired by a polished travel
marketplace experience (hero → trending packages carousel → destination tiles →
cruise highlight → traveler types → reviews rail → call-to-action), fully
rebranded with original Halu Vietnam Tours content.

---

## Quick start

> Requires **Node.js 18.18+** (built and tested on Node 24). npm comes with Node.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server  →  http://localhost:3000
npm run dev

# 3. Production build + run
npm run build
npm run start
```

Open <http://localhost:3000> in your browser.

---

## Scripts

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the development server (hot reload)     |
| `npm run build` | Create an optimized production build          |
| `npm run start` | Serve the production build                    |
| `npm run lint`  | Run Next.js / ESLint checks                   |

---

## Project structure

```
Halu Website/
├─ public/
│  └─ images/            # vietnam-01.jpg … vietnam-24.jpg (placeholder photos)
├─ src/
│  ├─ app/               # Routes (App Router)
│  │  ├─ layout.jsx           # Root layout: fonts, Navbar, Footer, WhatsApp float
│  │  ├─ page.jsx             # Home
│  │  ├─ packages/            # Vietnam tour packages (with filters)
│  │  ├─ daily-tours/         # Day tours & local experiences
│  │  ├─ cruises/             # Halong Bay & luxury cruises
│  │  ├─ transportation/      # Transport services
│  │  ├─ about/               # Brand story
│  │  ├─ contact/             # Contact + enquiry form
│  │  ├─ reviews/             # All testimonials
│  │  ├─ destinations/
│  │  │  ├─ page.jsx          # Destinations index
│  │  │  └─ [slug]/page.jsx   # Dynamic destination pages
│  │  ├─ not-found.jsx        # Custom 404
│  │  └─ globals.css          # Tailwind layers + base styles
│  ├─ components/        # Reusable UI (Navbar, Footer, cards, Hero, Carousel…)
│  └─ data/             # ← All editable content lives here
│     ├─ site.js             # Brand name, phones, emails, offices, nav, WhatsApp
│     ├─ packages.js         # Tour packages + filter list
│     ├─ destinations.js     # Destinations (drives /destinations/[slug])
│     ├─ dailyTours.js       # Day tours
│     ├─ cruises.js          # Cruise packages
│     ├─ reviews.js          # Testimonials
│     └─ travelerTypes.js    # Traveler-type cards
├─ tailwind.config.js   # Design tokens (jade/gold palette, fonts, animations)
└─ next.config.mjs
```

---

## Editing content (no code knowledge needed)

Almost everything is data-driven — edit the files in **`src/data/`** and the whole
site updates:

- **Contact details, brand name, WhatsApp number, office addresses, nav menu** →
  `src/data/site.js`
- **Tour packages** (title, route, price, discount, image, tags/filters) →
  `src/data/packages.js`
- **Destinations** (name, blurb, highlights, best time, image) →
  `src/data/destinations.js` — each entry's `slug` becomes a page at
  `/destinations/<slug>`
- **Daily tours / cruises / reviews / traveler types** → the matching file in
  `src/data/`

### Changing images
Placeholder photos live in `public/images/` as `vietnam-01.jpg` … `vietnam-24.jpg`.
To swap one, replace the file (keep the same name) **or** drop in new images and
update the `image:` path in the relevant `src/data/*.js` entry.

> **Image licensing:** the bundled photos are placeholders. Replace them with
> licensed/owned imagery before going live. No third-party brand logos or
> copyrighted assets are used in this project.

### Brand colors & fonts
Defined in `tailwind.config.js`:
- `jade` (primary green) and `gold` (accent) color scales
- Fonts: **Fraunces** (display) + **Plus Jakarta Sans** (body), loaded via Google
  Fonts in `src/app/layout.jsx`

---

## Notable features

- Sticky header that turns solid on scroll, with an animated slide-in mobile drawer
- "Get Free Quote", Call, and WhatsApp CTAs throughout; floating WhatsApp button
- Scroll-reveal animations, hover lifts, image zooms, hero Ken-Burns + marquee
- Filterable packages page (Honeymoon / Family / Group / Luxury / Budget / Cruise /
  City Tour / Beach)
- Horizontal carousels for trending packages and reviews
- Fully responsive (mobile / tablet / desktop), accessible focus states, SEO metadata

---

## Contact form note

The enquiry form on `/contact` is front-end only. On submit it opens a
**pre-filled WhatsApp message** to the configured number so enquiries reach the
team immediately. To capture submissions server-side, wire `ContactForm.jsx`
(`src/components/ContactForm.jsx`) to an email service, form API, or CRM.

---

## Tech stack

- **Next.js 14** (App Router, JavaScript/JSX)
- **Tailwind CSS 3**
- **Framer Motion** (animations)
- **lucide-react** (icons)
