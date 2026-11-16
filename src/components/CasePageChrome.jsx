import Header from './Header';
import Footer from './Footer';
import PageAssets from './PageAssets';

// Use exactly the same shared Orcanex site chrome as the existing service pages.
// This includes the original navigation, mega menu, footer, mobile CTA and styling.
const casePageAssets = {
  route: '/case-studies',
  title: 'Case Studies | Orcanex',
  bodyClass: 'wp-singular page-template-default page wp-theme-chromatix-2018 wp-child-theme-chromatix-2018-child orcanex-case-page',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap',
    '/wp-content/plugins/chromatix-social-media-icons/dist/styles.min4c56.css?ver=2.0.2',
    '/wp-content/themes/chromatix-2018-child/dist/css/fonts.minc520.css?ver=1.50.7',
    '/wp-content/themes/chromatix-2018-child/libs/ion.rangeSlider-2.2.0.min.css',
    '/wp-content/themes/chromatix-2018-child/dist/css/main.minc520.css?ver=1.50.7'
  ],
  scriptPlan: [
    { type: 'src', value: '/wp-content/themes/chromatix-2018-child/dist/js/main.minc520.js?ver=1.50.7' }
  ],
};

export default function CasePageChrome({ children }) {
  return (
    <>
      <PageAssets page={casePageAssets} />
      <div className="chr-content">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
