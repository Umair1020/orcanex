# Orcanex — Case Studies Update

Four case study pages and a new index were added to the existing React Router project.

## Added routes

- `/case-studies`
- `/case-studies/on-demand-services`
- `/case-studies/food-ordering`
- `/case-studies/finerapay`
- `/case-studies/shared-planner`

## What's new

- `Case Studies` tab in the existing global header
- New Case Studies showcase on the homepage, underneath the existing portfolio explorer
- Separate animated case-study index and four detailed editorial-style pages
- Sticky challenge copy on the right while the app screenshots scroll on the left (desktop)
- Sticky `How We Built it` column next to scrolling process cards (desktop)
- Responsive grid and content layout for tablet and mobile
- Scroll-in animations, image hover interactions and reduced-motion support
- Each page features a hero, project context, overview, challenge, five-stage process, feature highlights, app screens, outcomes and next-project navigation

## Source files

- `src/data/caseStudies.js` — page content
- `src/pages/CaseStudiesPage.jsx` — listing page
- `src/pages/CaseStudyDetailPage.jsx` — case-study detail template
- `src/pages/styles/CaseStudies.css` — responsive layouts and animation styles
- `src/components/CaseHeader.jsx`, `CaseFooter.jsx`, `CaseReveal.jsx`, `CaseStudyCard.jsx`, `CaseStudyHomeSection.jsx`
- `public/assets/case-studies/` — supplied-reference-derived imagery, 32 compressed WebP assets

## Run locally

Requires Node.js 18+.

```bash
npm ci
npm run dev
```

For Hostinger production deployment:

```bash
npm run build
```

Upload the *contents of the generated `dist/` folder* to the site root on a static Hostinger setup. The existing `public/.htaccess` handles the SPA route fallback when copied through Vite.

## Image quality note

The four uploaded case study references are long overview screenshots only 237–265 pixels wide. The provided images have been cropped into their original device mockups and gently upscaled to make them useful on the site, but an exact high-resolution/pixel-perfect recreation is not possible without the original exported mockup assets from Figma. Replace each image at `public/assets/case-studies/<project>/` with a high-resolution export of the same artwork for production quality. File names can stay the same.

## QA note

The React JSX and case-study CSS were syntax-checked. Package installation and a live Vite build could not be completed in the current restricted environment; run `npm ci && npm run build` before publishing.
