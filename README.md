# Nugentrix — Company Website

Official website for **[Nugentrix.com](https://nugentrix.com)** — a premium single-page site with a dark forest theme, cinematic scroll animations, and parallax effects.

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS 3**
- **GSAP + ScrollTrigger**
- **Lenis** (smooth scroll)
- **Swiper** (carousel)
- **Radix UI** (accordion)
- **Lucide React** (icons)

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Configuration

All site content lives in `src/config.ts`. Each section has its own typed config object — fill in the values to populate the site.

> If a config object has no title and no items, that section will be hidden automatically.

| Config | Controls |
|---|---|
| `siteConfig` | Title, description, language |
| `heroConfig` | Background text, hero image, brand name, nav links |
| `introGridConfig` | Title lines, portfolio images, accent text |
| `featuredProjectsConfig` | Project cards with images and descriptions |
| `servicesConfig` | Service items with icons |
| `whyChooseMeConfig` | Feature cards, stats, landscape image |
| `testimonialsConfig` | Quotes and author info |
| `faqConfig` | FAQ items, CTA button |
| `footerConfig` | Logo, contact info, nav, social links, copyright |

---

## Images

Place all images in the `public/` directory.

| Location | Spec |
|---|---|
| Hero | Transparent/cutout PNG (~500px wide) |
| Portfolio grid | 5 images, any aspect ratio |
| Featured projects | 1 per project (4:3 recommended) |
| Why Choose Me | 2 portrait (3:4) + 1 landscape (21:9 or 3:1) |
| Testimonials | 1 small square avatar per entry |

---

## Design

- **Colors:** Deep forest charcoal `#0d1310` / off-white `#f4f4f4` alternating sections
- **Fonts:** Manrope · Playfair Display (italic accents) · DM Sans
- **Animations:** GSAP ScrollTrigger — clip-path reveals, parallax, scale, staggered entrances
- **Icons:** `iconName` in config maps to Lucide components — `Camera`, `Diamond`, `Users`, `Sparkles`, `Instagram`, `Twitter`, `Linkedin`, `Mail`

---

## License

Copyright © 2025 Nugentrix. All rights reserved.

This repository is publicly visible for portfolio and reference purposes only.
The source code, design, and assets in this project are proprietary and may not
be copied, modified, distributed, or used — in whole or in part — without
explicit written permission from Nugentrix.
