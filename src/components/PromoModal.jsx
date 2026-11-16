import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PromoModal.css';

export default function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);

  return (
    <div
      className="orcanex-promo-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        className="orcanex-promo-card"
        role="dialog"
        aria-modal="true"
        aria-label="Orcanex website offer"
      >
        <button
          type="button"
          className="orcanex-promo-close"
          aria-label="Close offer"
          onClick={close}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <img
          className="orcanex-promo-image"
          src="/assets/orcanex-offer-189.png"
          alt="No Website Yet — $280 AUD, save $410 this month offer"
          draggable="false"
        />

        <Link
          className="orcanex-promo-contact-hotspot"
          to="https://websitedevelopment.orcanex.com.au/"
       target="_blank"
          aria-label="Contact Us"
          onClick={close}
        >
          <span className="orcanex-promo-visually-hidden">Contact Us</span>
        </Link>
      </div>
    </div>
  );
}
