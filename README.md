# Orcanex — React Router UI-exact conversion

This project is converted from the supplied `www.chromatix.com.au(3).zip` mirror while preserving the supplied HTML/CSS layout and original UI animation behavior.

## What is preserved
- Original layout, classes, flex/grid structure and responsive CSS.
- Homepage Pricing Plans renderer and tabs.
- Partner-logo scrolling/Slick behavior.
- FAQ slider/accordion behavior.
- Original page animation bundle order.
- Local `assets` and `wp-content` files are served from `public`.
- Where a local asset is unavailable, the existing Chromatix URL is retained as fallback.

## React structure
- React 18 + React Router DOM.
- 22 selected pages/routes from the supplied navigation.
- Shared reusable `Header` and `Footer` components.
- Reusable page-section renderer without changing original section DOM/CSS.
- Internal route navigation does not full-refresh the browser.
- Every route opens at the top via `ScrollToTop`.
- React StrictMode is intentionally disabled because legacy animation scripts must initialize once, exactly like the supplied HTML version.

## Run on Windows
Double-click `START-WINDOWS.bat` or run:

```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```

For Apache hosting, `public/.htaccess` contains SPA fallback rules.

## Added policy pages
- Privacy Policy: `/privacy-statement` (also `/privacy-policy`)
- Terms & Conditions: `/terms-and-conditions`
- Refund Policy: `/refund` (legacy `/refund/refundpolicy.html` also works)

## Editable React structure (updated)

The old `src/data/*.data.js` layer has been removed. Page content now lives directly in each `src/pages/*Page.jsx` file, and page-specific CSS lives in `src/pages/styles/*Page.css`. The CSS is imported as text (`?inline`) so the existing route-scoped styling behavior is preserved.

For the Home page:
- Edit page HTML/content in `src/pages/HomePage.jsx`.
- Edit Home page styles in `src/pages/styles/HomePage.css`.
- Pricing plan names, prices and features are in `src/components/PricingPlans.jsx`.
- The new All In One Combo content is in `src/components/AllInOneCombo.jsx`; its responsive CSS is in `src/components/AllInOneCombo.css`.
- The rest of the Home page markup is in `src/pages/HomePage.jsx`, with Home-specific CSS in `src/pages/styles/HomePage.css`.

Header markup is now in `src/components/Header.jsx`; footer/mobile-footer markup is in `src/components/Footer.jsx`.
