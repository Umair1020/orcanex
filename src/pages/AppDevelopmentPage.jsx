import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageAssets from '../components/PageAssets';
import PortfolioExplorer from '../components/PortfolioExplorer';
import pageCss from './styles/AppDevelopmentPage.css?inline';
import portfolioCss from './styles/PortfolioPage.css?inline';

const appTabs = [
  {
    key: 'ios',
    label: 'iOS App Development',
    title: 'iOS App Development',
    description:
      'We take great pride in crafting polished iOS applications that are fast, intuitive and aligned with your brand. A well-designed mobile app can make it easier for customers to discover, use and keep coming back to your products and services.',
    images: [
      '/assets/app-development/ios-1.svg',
      '/assets/app-development/ios-2.svg',
      '/assets/app-development/ios-3.svg',
      '/assets/app-development/ios-4.svg',
    ],
  },
  {
    key: 'android',
    label: 'Android App Development',
    title: 'Android App Development',
    description:
      'For small and large businesses, we build bespoke Android applications around real customer journeys. Our developers combine reliable engineering with industry-aware UX so your mobile experience feels simple, useful and ready to scale.',
    images: [
      '/assets/app-development/android-1.svg',
      '/assets/app-development/android-2.svg',
      '/assets/app-development/android-3.svg',
      '/assets/app-development/android-4.svg',
    ],
  },
  {
    key: 'react',
    label: 'React Native App',
    title: 'React Native App',
    description:
      'We create custom React Native applications for iOS and Android from a shared, maintainable codebase. You get the speed of cross-platform delivery while keeping the responsive interactions and native feel users expect.',
    images: [
      '/assets/app-development/react-1.svg',
      '/assets/app-development/react-2.svg',
      '/assets/app-development/react-3.svg',
      '/assets/app-development/react-4.svg',
    ],
  },
  {
    key: 'arvr',
    label: 'AR / VR App Development',
    title: 'AR / VR App Development',
    description:
      'Our team uses augmented and virtual reality to create immersive digital experiences for next-generation applications. From product visualisation to training and interactive spaces, we design experiences that feel purposeful rather than gimmicky.',
    images: [
      '/assets/app-development/arvr-1.svg',
      '/assets/app-development/arvr-2.svg',
      '/assets/app-development/arvr-3.svg',
      '/assets/app-development/arvr-4.svg',
    ],
  },
  {
    key: 'web',
    label: 'Custom Web App',
    title: 'Custom Web App',
    description:
      'We turn complex workflows into intuitive, adaptable web applications that are easy for customers and teams to use. From dashboards and booking tools to CRM and inventory systems, every interface is planned around the job it needs to do.',
    images: [
      '/assets/app-development/web-1.svg',
      '/assets/app-development/web-2.svg',
      '/assets/app-development/web-3.svg',
      '/assets/app-development/web-4.svg',
    ],
  },
];


const page = {
  route: '/web-development/app-development',
  title: 'App Development | Orcanex',
  bodyClass: 'app-development-page wp-theme-chromatix-2018 wp-child-theme-chromatix-2018-child',
  stylesheets: [
    '/wp-content/plugins/chromatix-social-media-icons/dist/styles.min4c56.css?ver=2.0.2',
    '/wp-content/themes/chromatix-2018-child/dist/css/fonts.minc520.css?ver=1.50.7',
    '/wp-content/themes/chromatix-2018-child/libs/ion.rangeSlider-2.2.0.min.css',
    '/wp-content/themes/chromatix-2018-child/dist/css/main.minc520.css?ver=1.50.7',
    '/wp-content/themes/chromatix-2018-child/dist/css/portfolio.minc520.css?ver=1.50.7',
  ],
  inlineCss: `${portfolioCss}\n${pageCss}`,
  scriptPlan: [
    { type: 'src', value: '/wp-content/themes/chromatix-2018-child/dist/js/main.minc520.js?ver=1.50.7' },
  ],
};

function AppUiCard({ src, label, onOpen }) {
  const viewportRef = useRef(null);
  const imageRef = useRef(null);

  const measure = () => {
    const viewport = viewportRef.current;
    const image = imageRef.current;
    if (!viewport || !image || !image.naturalWidth || !viewport.clientWidth) return;
    const renderedHeight = image.naturalHeight * (viewport.clientWidth / image.naturalWidth);
    const distance = Math.max(0, renderedHeight - viewport.clientHeight);
    const duration = Math.max(2, Math.min(7, distance / 150));
    viewport.style.setProperty('--app-ui-distance', `${distance.toFixed(1)}px`);
    viewport.style.setProperty('--app-ui-duration', `${duration.toFixed(2)}s`);
    viewport.classList.toggle('is-static', distance < 3);
  };

  useEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport || !('ResizeObserver' in window)) return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [src]);

  return (
    <button type="button" className="appdev-ui-card" onClick={onOpen} onPointerEnter={measure} aria-label={`Open ${label}`}>
      <span className="appdev-ui-card__viewport" ref={viewportRef}>
        <img ref={imageRef} src={src} alt={label} loading="lazy" onLoad={measure} />
        <span className="appdev-ui-card__hint">Hover to explore</span>
      </span>
      <span className="appdev-ui-card__action">View Full UI</span>
    </button>
  );
}

export default function AppDevelopmentPage() {
  const [activeKey, setActiveKey] = useState('ios');
  const [lightbox, setLightbox] = useState(null);
  const activeTab = appTabs.find((tab) => tab.key === activeKey) || appTabs[0];

  useEffect(() => {
    if (!lightbox) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  return (
    <>
      <PageAssets page={page} />
      <div className="chr-content appdev-page">
        <Header />
        <main>
          <div class="chr-content clearfix">
            <div class="sub-page">
              <div class="chr-banner">
                <div
                  aria-label="Portfolio Web Banner For 1920"
                  className="chr-banner-bg large-desktop"
                  style={{
                    backgroundImage: 'url("/assets/banner.svg")',
                    backgroundPosition: "center top"
                  }}
                />
                <div
                  aria-label="Orcanex Portfolio Web Banner for Small Desktop"
                  className="chr-banner-bg small-desktop"
                  style={{
                    backgroundImage: 'url("/assets/banner.svg")',
                    backgroundPosition: "center top"
                  }}
                />
                <div
                  aria-label="Portfolio Web Banner For Tablet"
                  className="chr-banner-bg tablet"
                  style={{
                    backgroundImage: 'url("/assets/banner.svg")',
                    backgroundPosition: "center top"
                  }}
                />
                <div
                  aria-label="Portfolio Web Banner For Tablet"
                  className="chr-banner-bg phone"
                  style={{
                    backgroundImage: 'url("/assets/banner.svg")',
                    backgroundPosition: "center top"
                  }}
                />
                <div class="chr-content-container chr-banner-content">
                  <div class="chr-banner-content-inner"> <br />
                    <h1 class="small-title">Services</h1>
                    <p class="title banner-title">
                      Creativity in a Meaningful Way </p>
                    <br />
                    <p className='text-white'>WE CREATE PURPOSEFUL, USER-FOCUSED APPS THAT COMBINE SMART DESIGN, RELIABLE TECHNOLOGY AND REAL BUSINESS VALUE.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="appdev-intro">
            <div className="appdev-shell appdev-intro__grid">
              <div className="appdev-intro__copy">
                <span className="appdev-kicker">APP DESIGN &amp; DEVELOPMENT</span>
                <h2>App Design Services to<br />Increase brand recognition</h2>
                <p>
                  App design balances business goals with the way real people tap, swipe, search and buy. We plan the
                  experience, shape the interface and build the technology so your app feels clear from the first screen.
                </p>
                <div className="appdev-intro__actions">
                  <a className="appdev-btn appdev-btn--primary" href="/contact">Start Your App</a>
                  <a className="appdev-btn appdev-btn--ghost" href="#app-solutions">View App Work</a>
                </div>
              </div>

              <button
                className="appdev-featured-ui"
                type="button"
                onClick={() => setLightbox('/assets/app-development/featured-app-suite.svg')}
                aria-label="Open featured app UI"
              >
                <img src="/assets/app-development/featured-app-suite.svg" alt="Complete Orcanex mobile app UI showcase" />
              </button>
            </div>
          </section>

          <section className="appdev-solutions" id="app-solutions">
            <div className="appdev-shell">
              <div className="appdev-solutions__heading">
                <span>APP DEVELOPMENT SERVICES</span>
                <h2>Smart App Solutions Built for Growth</h2>
                <p>Choose a service to view a matching UI portfolio and the type of experience we can build around it.</p>
              </div>

              <div className="appdev-tabs-card">
                <div className="appdev-tabs" role="tablist" aria-label="App development services">
                  {appTabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={activeKey === tab.key}
                      className={`appdev-tab${activeKey === tab.key ? ' is-active' : ''}`}
                      onClick={() => setActiveKey(tab.key)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="appdev-tab-panel" role="tabpanel">
                  <div className="appdev-tab-panel__copy">
                    <h3>{activeTab.title}</h3>
                    <p>{activeTab.description}</p>
                  </div>

                  <div className="appdev-ui-grid">
                    {activeTab.images.map((src, index) => (
                      <AppUiCard
                        key={src}
                        src={src}
                        label={`${activeTab.title} UI concept ${index + 1}`}
                        onOpen={() => setLightbox(src)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PortfolioExplorer compact initialMain="app" />

          <section className="appdev-cta">
            <div className="appdev-shell appdev-cta__inner">
              <div>
                <span className="appdev-kicker">READY TO BUILD?</span>
                <h2>Have an app idea?<br />Let’s make it useful.</h2>
              </div>
              <a className="appdev-btn appdev-btn--primary" href="/contact">Talk To Orcanex</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      {lightbox && (
        <div
          className="appdev-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image preview"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setLightbox(null);
          }}
        >
          <button type="button" className="appdev-lightbox__close" aria-label="Close preview" onClick={() => setLightbox(null)}>
            ×
          </button>
          <img src={lightbox} alt="Portfolio preview" />
        </div>
      )}
    </>
  );
}
