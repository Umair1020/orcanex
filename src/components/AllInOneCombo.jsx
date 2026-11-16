import './AllInOneCombo.css';

// ============================================================
// ALL IN ONE COMBO
// Edit the text, price, phone number and bullet points here.
// ============================================================
const comboFeatures = [
  'Unlimited Custom Logo Design Concepts',
  '6 Dedicated Designers',
  'UNLIMITED Pages Website',
  'Mobile Responsive',
  'Icon Design',
  'Business Card, Letterhead, Envelope',
  'MS Word Letterhead',
  '5 Stock Photos + 3 Banner Designs',
  'Complete W3C Certified HTML',
  'Complete Deployment',
  'Facebook Page Design',
  'All Final File Formats',
  'Dedicated Account Manager',
];

export default function AllInOneCombo() {
  return (
    <section className="all-in-one-combo" id="all-in-one-combo" aria-labelledby="combo-offer-title">
      <div className="combo-offer-shell">
        <div className="combo-offer-copy">
          <p className="combo-kicker">ALL IN ONE</p>
          <h2 className="combo-main-title" id="combo-offer-title">COMBO</h2>
          <p className="combo-script-title">
            Ultimate Value for Start-ups<br className="combo-desktop-break" /> and Businesses
          </p>
          <ul className="combo-feature-list">
            {comboFeatures.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>

        <div className="combo-promo-card">
          <div className="combo-promo-top">
            <h3>COMBO</h3>
            <p className="combo-promo-subtitle">Complete Branding Solutions</p>
            <div className="combo-price-row">
              <span className="combo-price">$999</span>
              <div className="combo-old-price-wrap">
                <span className="combo-old-price">$2,999</span>
                <strong>Only</strong>
              </div>
            </div>
          </div>

          <div className="combo-discount">20% OFF Next Order</div>

          <div className="combo-promo-bottom">
            <div className="combo-contact-grid">
              <div className="combo-contact-item">
                <span>Speak with us</span>
                <a href="tel:+61480009553">(61) 480009553</a>
              </div>
              <div className="combo-contact-item">
                <span>Want to discuss ?</span>
                <a href="/contact">Live Chat NOW</a>
              </div>
            </div>
            <a className="combo-start-button" href="/contact">
              <span>START PROJECT</span>
              <span className="combo-button-line" aria-hidden="true"><i /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
