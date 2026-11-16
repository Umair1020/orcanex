# Case Studies — Same Header and Footer as Rest of Site

The case studies listing (`/case-studies`) and all four detail pages now render the existing `src/components/Header.jsx` and `src/components/Footer.jsx`, not the temporary case-study-specific chrome.

`src/components/CasePageChrome.jsx` loads the same Orcanex main styles and navigation JavaScript used on the service pages. It retains all case-study sections and scroll effects.

## Updating an existing local copy (recommended if you have changed your own case1–case4 images)

Copy these THREE files from the patch ZIP into your existing React project, replacing the same files when prompted:

- `src/components/CasePageChrome.jsx` (new)
- `src/pages/CaseStudiesPage.jsx` (replace)
- `src/pages/CaseStudyDetailPage.jsx` (replace)

You do not need to edit your images, `caseStudies.js`, home page or CSS. Leave other files as they are. Run `npm run dev` as usual, then hard refresh.

For a fresh copy, extract the full project ZIP and run `npm install` then `npm run dev`.
