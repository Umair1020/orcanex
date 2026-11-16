# Orcanex — Full styling recovery

This package restores all 61 original public resources accidentally omitted from the previous case-study export, including the complete Chromatix/Orcanex desktop/mobile CSS, site fonts, image assets and JavaScript bundles. The original homepage and all original service pages are retained. The Case Studies tab, homepage showcase and four case studies are still included.

## Run locally

1. Extract the whole ZIP (not only the `src` folder).
2. Run `npm install` in the `orcanex-react-router-ui-exact` folder.
3. Run `npm run dev`.

## Important for deployment

Upload **all** `public/` contents along with a production build of the React application. The existing site CSS is loaded from `/wp-content/themes/chromatix-2018-child/dist/css/` and `/wp-content/plugins/chromatix-social-media-icons/dist/`; omitting those folders causes default blue links and broken layouts.

For production hosting, run `npm run build` and upload the entire `dist/` directory to the server document root. The `public/.htaccess` file is included for React Router refresh support on compatible Apache hosting.
