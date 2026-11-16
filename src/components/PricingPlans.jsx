import { useEffect, useRef, useState } from 'react';

// ============================================================
// PRICING CONTENT
// Edit names, prices, descriptions and features right here.
// No separate data file is used.
// ============================================================
const categories = [
  { key: 'website', label: 'Website Design' },
  { key: 'logo', label: 'Logo Design' },
  // { key: 'ecommerce', label: 'Ecommerce Solutions' },
  // { key: 'animation', label: 'Animation' },
  // { key: 'illustration', label: 'Illustration' },
  { key: 'collateral', label: 'App Development' },
  { key: 'digital', label: 'Digital Marketing' },
  // { key: 'copywriting', label: 'Creative Copywriting' },
  // { key: 'combo', label: 'Combo' },
  { key: 'cms', label: 'CMS Website' },
  { key: 'seo', label: 'SEO' }
];

const plans = {
  website: [
    { name: 'Startup Website Package', price: '$389.00', desc: 'Perfect for startups and growing businesses.', features: ['3 Page Website Design', 'Custom Layout Design', 'Contact/Query Form', '1 Banner Design', '2 Stock Photos', 'FREE Favicon Design', 'Cross Browser Compatible'] },
    { name: 'Professional Website Package', price: '$992.00', desc: 'Perfect for startups and growing businesses.', featured: true, features: ['5 Page Website Design', 'Custom Layout Design', 'Contact/Query Form', '3 Banner Designs & 5 Stock Photos', 'Sliding Banner & Hover Effects', 'Website Favicon Design', 'Google Friendly Website'] },

    { name: 'Corporate Website Package', price: '$1589.00', desc: 'For established businesses that need more depth.', features: ['10-15 Unique Pages Website Design', 'CMS Integration (WordPress)', 'Custom Theme Development', 'Mobile Friendly Responsive', 'Free 1 Month Hosting', '3 Professional Email IDs', '1st Stage Business SEO Setup'] },

    { name: 'Custom Enterprise Package', desc: 'For brands that need advanced custom functionality.', features: ['Unlimited Pages Website Design', 'Custom Made, Interactive, Dynamic & High End Design', 'Customized WordPress & PHP Development', 'Online Appointment / Booking / Scheduling', 'Online Ordering Integration (Optional)', 'Interactive Sliding Banners', 'Payment Gateway Options'] }
  ],
  logo: [
    { name: 'Startup Logo Package', old: '$149.00', price: '$50.00', desc: 'Perfect for startups and growing businesses.', features: ['4 Logo Concepts', 'Free Icon Design', 'Free File Formats (JPG & PDF)', 'Multiple Revision Rounds', '2 Creative Designers', '48 hrs Turnaround Time'] },
    { name: 'Pro Logo Package', old: '$349.00', price: '$149.00', desc: 'Perfect for startups and growing businesses.', featured: true, features: ['8 Logo Concepts', 'Free Icon Design', 'Free High Resolution Formats', 'Multiple Revision Rounds', '4 Creative Designers', '48 hrs Turnaround Time'] },
    { name: 'Professional Logo Package', old: '$530.00', price: '$299.00', desc: 'Perfect for startups and growing businesses.', features: ['Unlimited Logo Concepts', 'Multiple Revision Rounds', 'Free High Resolution Formats', 'Stationery Design (Business Card, Letter Head, Envelope)', '6 Creative Designers', '48 hrs Turnaround Time'] }
  ],
  ecommerce: [
    { name: 'E-Commerce Starter Package', old: '$2,499.00', price: '$1,299.00', desc: 'A focused online store for smaller product ranges.', features: ['Custom Ecommerce Design', 'Up to 25 Products', 'Shopping Cart Integration', 'Payment Gateway Setup', 'Responsive Storefront', 'Basic Shipping Setup', 'Contact/Query Form'] },
    { name: 'E-Commerce Elite Package', old: '$3,399.00', price: '$1,699.00', desc: 'A complete store setup for a growing ecommerce business.', featured: true, features: ['Custom Ecommerce Design', 'Product & Category Setup', 'Responsive Storefront', 'User Account Area', 'Cart & Payment Integration', 'Shipping & Tax Setup', 'Analytics & Social Integration'] },
    { name: 'E-Commerce Corporate Package', old: '$5,399.00', price: '$3,699.00', desc: 'Advanced ecommerce functionality for larger catalogues.', features: ['Unlimited Products & Categories', 'Advanced Product Filtering', 'Coupons & Product Comparison', 'Customer Dashboard & Social Login', 'Multi-Currency Checkout Tools', 'Inventory & Reporting Features', 'Dedicated Project Manager'] }
  ],
  animation: [
    { name: 'Basic Video Package', old: '$1,598.00', price: '$499.00', desc: 'A concise animation for a simple message or offer.', features: ['30 Second Video', 'Professional Script', 'Storyboard', 'Animation Production', 'Voice Over', 'Sound Effects', 'Multiple Revisions'] },
    { name: 'Classic Video Package', old: '$2,198.00', price: '$999.00', desc: 'A one-minute animation with a stronger visual story.', featured: true, features: ['60 Second Video', 'Professional Script', 'Sample Visual Theme', 'Storyboard', 'Animation Production', 'Voice Over & Sound Effects', 'Multiple Revisions'] },
    { name: 'Premium Video Package', old: '$2,998.00', price: '$1,499.00', desc: 'Longer-form animation for fuller brand storytelling.', features: ['90 Second Video', 'Script & Theme Development', 'Storyboard', 'Animation Production', 'Voice Over', 'Sound Effects', 'Project Management'] },
    { name: 'Unlimited Video Package', old: '$4,590.00', price: '$2,299.00', desc: 'A two-minute animation for detailed storytelling.', features: ['120 Second Video', 'Professional Script', 'Sample Theme', 'Storyboard', 'Animation Production', 'Voice Over & Sound Effects', 'Dedicated Project Manager'] }
  ],
  illustration: [
    { name: 'Basic Illustrative Package', old: '$588.00', price: '$294.00', desc: 'A compact custom illustration concept package.', features: ['3 Custom Concepts', '2 Designers', 'Multiple Revisions', '48-72 Hour Turnaround', 'Final Editable File Formats', 'Dedicated Project Manager'] },
    { name: 'Startup Illustrative Package', old: '$788.00', price: '$394.00', desc: 'More concept variety for a growing visual identity.', featured: true, features: ['4 Custom Concepts', '3 Designers', 'Multiple Revisions', '48-72 Hour Turnaround', 'Final Editable File Formats', 'Dedicated Project Manager'] },
    { name: 'Professional Illustrative Package', old: '$1,188.00', price: '$594.00', desc: 'A broader creative exploration with more design support.', features: ['Unlimited Concept Exploration', '4 Designers', 'Multiple Revisions', '24-48 Hour Turnaround', 'Final Production Files', 'Project Management'] },
    { name: '3D Logo Illustrative Package', old: '$1,080.00', price: '$544.00', desc: 'A 3D-focused visual identity package with rendered concepts.', features: ['3 Unique 3D Concepts', 'Lighting & VFX Treatment', 'Fully Rendered Output', 'Multiple Viewing Angles', '3 Designers', 'Multiple Revisions'] }
  ],
  collateral: [
    { name: 'Simple App', old: '$5000.00', price: '$3,500.00', desc: 'For basic business needs.', features: ['Simple user interface with navigation', 'Basic features and functionality  ', 'Fast development', 'Multiple Revisions',] },
    { name: 'Medium Complexity', old: '$16000.00', price: '$10,000.00', desc: 'For growing businesses', featured: true, features: ['Interactive interface, layered navigation', 'Broad range of features and capabilities', 'Data storage and external API integration', 'Multiple Revisions', 'Moderate technical expertise required'] },
    { name: 'High Complexity', desc: 'For enterprise solutions', features: ['Advanced interactions with multiple navigation layers', 'Complex business workflows with advanced features', 'Custom back-end logic and algorithm', 'Industry standards compliance required', 'Senior-level technical expertise required'] },
    // { name: 'Unlimited Collateral Package', old: '$1,998.00', price: '$499.00', desc: 'Expanded branded collateral for customer-facing materials.', features: ['2 Stationery Design Pieces', 'Menu Card Design', 'T-Shirt Design', 'Banner Design', 'Multiple Revisions'] }
  ],
  digital: [
    { name: 'Startup Social Package', old: '$198.00', price: '$79.00', desc: 'Starter social branding for a consistent launch.', features: ['Cover Photo Design', 'Profile Image Design', 'Welcome Page Design', 'Multiple Revisions', 'Dedicated Project Manager'] },
    { name: 'Classic Social Package', old: '$298.00', price: '$137.00', desc: 'A broader profile design set across key channels.', featured: true, features: ['Cover Photo Design', 'Profile Image Design', 'Welcome Page Design', 'Twitter/X Page Creative', 'Multiple Revisions'] },
    { name: 'Premium Social Package', old: '$398.00', price: '$187.00', desc: 'Extended platform coverage for stronger brand consistency.', features: ['Cover Photo Design', 'Profile Image Design', 'Welcome Page Design', 'Twitter/X Creative', 'YouTube Page Creative', 'Multiple Revisions'] },
    { name: 'Unlimited Social Package', old: '$1,998.00', price: '$897.00', desc: 'A complete set of social visuals across multiple channels.', features: ['2 Cover Concepts', 'Profile Image Design', 'Welcome Page Design', 'Twitter/X Creative', 'YouTube Creative', 'Additional Social Page Creative'] }
  ],
  copywriting: [
    { name: 'Web Content Basic Package', old: '$319.00', price: '$129.00', desc: 'Professional copy for one key website page.', features: ['1 Professionally Written Page', 'Approx. 300 Words', 'Industry-Focused Writer', 'Up to 5 Revisions', 'Proofreading Included', '3-4 Business Day Target'] },
    { name: 'Web Content Start Up Package', old: '$1,849.00', price: '$499.00', desc: 'A multi-page copy package for a small business website.', featured: true, features: ['5 Website Pages', 'Approx. 300 Words Per Page', '2 Professional Writers', 'Up to 10 Revisions', 'Meta Title & Description Support', 'Proofreading Included'] },
    { name: 'Web Content Professional Package', old: '$2,119.00', price: '$849.00', desc: 'A larger website copy package with SEO-conscious writing.', features: ['10 Website Pages', 'Approx. 300 Words Per Page', '2 Professional Writers', 'Multiple Revisions', 'Meta Details Included', 'SEO-Aware Keyword Placement'] },
    { name: 'Web Content Elite Package', old: '$4,519.00', price: '$1,849.00', desc: 'High-volume website copy for a larger service range.', features: ['Up to 20 Website Pages', '3 Professional Writers', 'Approx. 300 Words Per Page', 'Multiple Revisions', 'Meta Details Included', 'SEO-Aware Writing'] }
  ],
  combo: [
    { name: 'Basic Combo Package', old: '$1,239.00', price: '$619.00', desc: 'Logo, stationery and a starter website in one package.', features: ['5 Logo Concepts', 'Business Stationery Set', '5 Page Responsive Website', 'Stock Images & Banners', 'Google Friendly Sitemap', 'Source Files & Deployment'] },
    { name: 'Start Up Combo Package', old: '$1,988.00', price: '$994.00', desc: 'A broader brand and CMS website bundle.', featured: true, features: ['Unlimited Logo Concepts', 'Stationery Design', 'CMS Website Scope', 'Responsive Layout', 'Social Platform Integration', 'Dedicated Account Manager'] },
    { name: 'Professional Combo Package', old: '$2,599.00', price: '$1,299.00', desc: 'Branding, print, CMS and social creative in one rollout.', features: ['Unlimited Logo Concepts', 'Print Collateral', 'CMS Website Development', 'Custom Forms & Lead Capture', 'Social Media Integration', 'Search Engine Submission'] },
    { name: 'Elite Combo Package', old: '$3,059.00', price: '$1,529.00', desc: 'A higher-end bundle with custom WordPress and brand assets.', features: ['Multiple Logo Concepts', 'Complete Stationery Set', '5 Page Custom WordPress Website', 'Booking / Ordering Option', '12 Month Domain & Hosting', 'Social Page Creative'] },
    { name: 'Gold Combo Package', old: '$7,999.00', price: '$3,999.00', desc: 'A comprehensive brand, ecommerce and social package.', features: ['Unlimited Logo Concepts', 'Advanced Stationery', 'Unlimited Page CMS Website', 'Ecommerce & Payment Tools', 'Product & Inventory Management', 'Multi-Platform Social Design'] }
  ],
  cms: [
    { name: 'Professional CMS Package', old: '$1,999.00', price: '$389.00', desc: 'A manageable CMS website for a professional presence.', featured: true, features: ['10 Unique Pages', 'Contact Form', 'Social Integration', 'Text Editor Module', 'Photo Gallery & Google Map', 'Hosting Control & FTP Access', '5 Email Accounts'] },
    { name: 'Premium CMS Package', old: '$3,399.00', price: '$897.00', desc: 'An expanded CMS site with more publishing tools.', features: ['Unlimited Page Design', 'Contact & Social Integration', 'Visual Page Builder', 'Photo Gallery & Google Map', 'Blog & Sitemap Modules', 'Responsive Mobile/Tablet Build', '10 Email Accounts'] },
    { name: 'Corporate CMS Package', old: '$4,999.00', price: '$1377.00', desc: 'A larger CMS solution for content-heavy businesses.', features: ['Unlimited Pages', 'Custom Theme Development', 'Advanced Forms', 'Blog & News Modules', 'Search & Filtering', 'SEO Friendly Structure', 'Dedicated Project Manager'] }
  ],
  seo: [
    { name: 'Basic SEO Package', price: '$199', period: '/ month', desc: 'Foundational SEO for a smaller keyword set.', features: ['15 Keyword Targets', 'Site & Competitor Analysis', 'On-Page Optimisation', 'Technical Checks', 'Analytics & Webmaster Setup', 'Content & Link Building Support', 'Local Optimisation'] },
    { name: 'Standard SEO Package', price: '$389', period: '/ month', desc: 'A broader monthly SEO program for more search targets.', featured: true, features: ['30 Keyword Targets', 'Expanded On-Page Work', 'Content Support', 'Link Building', 'Local SEO Coverage', 'Social Sharing Support', 'Monthly Optimisation Activity'] },
    { name: 'Professional SEO Package', price: '$677', period: '/ month', desc: 'Advanced SEO coverage for larger and competitive sites.', features: ['Up to 150 Keyword Targets', 'Deeper Technical Optimisation', 'Larger Content Scope', 'Expanded Link Building', 'Multi-Location Local SEO', 'Ongoing Reporting & Analysis', 'Search Visibility Growth Plan'] }
  ]
};

export default function PricingPlans() {
  const [active, setActive] = useState('website');
  const tabsRef = useRef(null);
  const activeCategory = categories.find((item) => item.key === active) || categories[0];
  const activePlans = plans[activeCategory.key] || [];
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(null);
  const dragPointer = useRef(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      const next = window.innerWidth <= 680 ? 1 : window.innerWidth <= 1020 ? 2 : 3;
      setVisibleCards(next);
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards, { passive: true });
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    setSlideIndex(0);
  }, [activeCategory.key]);

  const maxSlide = Math.max(0, activePlans.length - visibleCards);
  useEffect(() => {
    setSlideIndex((current) => Math.min(current, maxSlide));
  }, [maxSlide]);

  const sliderGap = visibleCards === 1 ? 18 : 26;
  const cardBasis = `calc(${100 / visibleCards}% - ${(sliderGap * (visibleCards - 1)) / visibleCards}px)`;
  const slidePercent = slideIndex * (100 / visibleCards);
  const slidePixels = slideIndex * (sliderGap / visibleCards);

  useEffect(() => {
    if (window.innerWidth > 680 || !tabsRef.current) return;
    const current = tabsRef.current.querySelector(`[data-key="${activeCategory.key}"]`);
    current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeCategory.key]);

  const finishDrag = (clientX) => {
    if (!dragging || dragStartX.current == null) return;
    const delta = clientX - dragStartX.current;
    if (Math.abs(delta) > 46) {
      if (delta < 0) setSlideIndex((current) => Math.min(maxSlide, current + 1));
      else setSlideIndex((current) => Math.max(0, current - 1));
    }
    setDragOffset(0);
    setDragging(false);
    dragStartX.current = null;
    dragPointer.current = null;
  };

  const onPointerDown = (event) => {
    if (visibleCards !== 1 || event.pointerType === 'mouse') return;
    dragStartX.current = event.clientX;
    dragPointer.current = event.pointerId;
    setDragging(true);
    try { event.currentTarget.setPointerCapture(event.pointerId); } catch (_) { }
  };

  const onPointerMove = (event) => {
    if (!dragging || dragStartX.current == null || dragPointer.current !== event.pointerId) return;
    const delta = event.clientX - dragStartX.current;
    setDragOffset(Math.max(-110, Math.min(110, delta)));
  };

  const onPointerUp = (event) => {
    if (dragPointer.current !== event.pointerId) return;
    finishDrag(event.clientX);
  };

  return (
    <section aria-labelledby="orcanex-pricing-title" className="orcanex-pricing" id="pricing-plans">
      <div className="pp-shell">
        <div className="pp-head">
          <p className="pp-kicker">A world of digital possibilities</p>
          <h2 className="pp-title" id="orcanex-pricing-title">Pricing Plans</h2>
          <p className="pp-intro">
            Partnering with Orcanex gives your business a powerful new beginning. Our team approaches every project
            with strategic thinking and creative innovation, backed by the latest technologies, delivered through
            cost-effective solutions designed for your growth.
          </p>
        </div>

        <div className="pp-tabs-wrap">
          <div aria-label="Pricing categories" className="pp-tabs" ref={tabsRef} role="tablist">
            {categories.map((category) => (
              <button
                type="button"
                className={`pp-tab${activeCategory.key === category.key ? ' active' : ''}`}
                role="tab"
                aria-selected={activeCategory.key === category.key}
                data-key={category.key}
                key={category.key}
                onClick={() => setActive(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pp-slider">
          <div aria-live="polite" className={`pp-viewport${dragging ? ' is-dragging' : ''}`} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={() => finishDrag(dragStartX.current || 0)}>
            <div
              className="pp-track"
              style={{
                gap: `${sliderGap}px`,
                transform: `translate3d(calc(-${slidePercent}% - ${slidePixels}px + ${dragOffset}px), 0, 0)`,
              }}
            >
              {activePlans.map((plan, index) => {
                const query = encodeURIComponent(plan.name);
                return (
                  <article
                    className={`pp-card${plan.featured ? ' featured' : ''}`}
                    style={{
                      animationDelay: `${Math.min(index * 45, 220)}ms`,
                      flexBasis: cardBasis,
                    }}
                    key={plan.name}
                  >
                    {plan.featured && <span className="pp-badge">Popular</span>}
                    <h3 className="pp-name">{plan.name}</h3>
                    <div className="pp-price-meta">
                      {plan.old && <span className="pp-old">{plan.old}</span>}
                      <span className="pp-only">ONLY</span>
                    </div>
                    <div className="pp-price-row">
                      <span className="pp-price">{plan.price}</span>
                      {plan.period && <span className="pp-period">{plan.period}</span>}
                    </div>
                    <p className="pp-desc">{plan.desc}</p>
                    <div className="pp-features-wrap">
                      <ul className="pp-features">
                        {plan.features.map((feature) => <li className="pp-feature" key={feature}>{feature}</li>)}
                      </ul>
                    </div>
                    <a className="pp-order" href={`/contact?package=${query}`}>Order Now</a>
                    <div className="pp-card-bottom">
                      <div className="pp-mini">Share your idea?<a href="tel:+61480009553"><strong>+61 480 009 553</strong></a></div>
                      <div className="pp-mini">Want to discuss?<a href={`/contact?package=${query}`}><strong>Live Chat Now</strong></a></div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="pp-controls" aria-label="Pricing slider controls">
            <button
              type="button"
              className="pp-arrow pp-arrow--prev"
              aria-label="Previous pricing plan"
              disabled={slideIndex === 0}
              onClick={() => setSlideIndex((current) => Math.max(0, current - 1))}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M15 5 8 12l7 7" />
              </svg>
            </button>
            <button
              type="button"
              className="pp-arrow pp-arrow--next"
              aria-label="Next pricing plan"
              disabled={slideIndex >= maxSlide}
              onClick={() => setSlideIndex((current) => Math.min(maxSlide, current + 1))}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <p className="pp-footer-note">
          Need something different? <a href="/contact">Talk to Orcanex</a> and we can scope a custom package around your project.
        </p>
      </div>
    </section>
  );
}
