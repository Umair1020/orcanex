import Header from './Header';
import Footer from './Footer';
import LegacySection from './LegacySection';
import PageAssets from './PageAssets';

export default function PageLayout({ page }) {
  return <>
    <PageAssets page={page} />
    <div className="chr-content">
      <Header />
      {page.sections.map((html, index) => <LegacySection key={`${page.route}-${index}`} html={html} index={index} />)}
      <Footer />
    </div>
  </>;
}
