import { useEffect, useMemo, useRef, useState } from 'react';
import './PortfolioExplorer.css';

const groups = {
  web: {
    label: 'Web',
    short: 'WEB',
    description: 'Websites, ecommerce and web experiences designed to convert.',
    subs: ['All', 'Logistic', 'Fashion', 'Fitness', 'Medical', 'Paint', 'Automotive', 'Web App'],
    items: [
      ['/assets/portfolio/1 (1).png', 'Logistic', 'LUXE — Minimal Fashion Store', 'Website'],
      ['/assets/portfolio/1 (2).png', 'Fashion', 'Atelier Noir Editorial', 'Website'],
      ['/assets/portfolio/1 (3).png', 'Paint', 'FitLife — Fitness Studio', 'Website'],
      ['/assets/portfolio/1 (4).png', 'Medical', 'MediCare+ Patient Portal', 'Web App'],
      ['/assets/portfolio/1 (5).png', 'Fitness', 'Estate Prime Listings', 'Website'],
      ['/assets/portfolio/1 (6).png', 'Automotive', 'Volt — Automotive Configurator', 'Web App'],
      ['/assets/portfolio/1 (7).png', 'Fitness', 'Flow — Analytics Dashboard', 'Web App'],
    ],
  },
  app: {
    label: 'App',
    short: 'APP',
    description: 'Complete mobile and product UI concepts across iOS, Android and cross-platform apps.',
    subs: ['All', 'iOS', 'Android'],
    items: [
      ['/assets/app-development/ios-1.svg', 'iOS', 'Finora Finance', 'App UI'],
      ['/case1.png', 'iOS', 'Wellnest Health', 'App UI'],
      ['/case2.png', 'iOS', 'Mori Banking', 'App UI'],
      ['/case3.png', 'Android', 'Taskly Planner', 'App UI'],
      ['/case4.png', 'Android', 'PulsePay Wallet', 'App UI'],
      ['/case5.svg', 'Android', 'Fixit Services', 'App UI'],
    ],
  },
  marketing: {
    label: 'Marketing',
    short: 'MKT',
    description: 'Campaign, social, lifecycle and content systems built around measurable growth.',
    subs: ['All', 'Social Media', 'Branding Campaigns', ],
    items: [
      ['1 (1).png', 'Social Media', 'Social Growth', 'Campaign'],
      ['1 (2).png', 'Branding Campaigns', 'Launch Lab', 'Campaign'],
      ['1 (3).png', 'Social Media', 'MailFlow', 'Campaign'],
      ['1 (4).png', 'Social Media', 'Content Hub', 'Campaign'],
      ['1 (1).jpg', 'Social Media', 'Creator Pulse', 'Campaign'],
      ['1 (2).jpg', 'Branding Campaigns', 'Brand Story', 'Campaign'],
      ['1 (1).webp', 'Branding Campaigns', 'Lifecycle', 'Campaign'],
      ['1 (1).jpeg', 'Branding Campaigns', 'Editorials', 'Campaign'],
       ['1 (2).webp', 'Branding Campaigns', 'Editorial', 'brand'],
    ],
  },
  
};

function PortfolioCard({ image, category, title, type, onOpen }) {
  const screenRef = useRef(null);
  const imageRef = useRef(null);

  const measure = () => {
    const screen = screenRef.current;
    const img = imageRef.current;
    if (!screen || !img || !img.naturalWidth || !screen.clientWidth) return;

    const renderedHeight = img.naturalHeight * (screen.clientWidth / img.naturalWidth);
    const distance = Math.max(0, renderedHeight - screen.clientHeight);
    const seconds = Math.max(1.8, Math.min(7.5, distance / 160));
    screen.style.setProperty('--pex-scroll-distance', `${distance.toFixed(1)}px`);
    screen.style.setProperty('--pex-scroll-duration', `${seconds.toFixed(2)}s`);
    screen.classList.toggle('is-static', distance < 3);
  };

  useEffect(() => {
    measure();
    const screen = screenRef.current;
    if (!screen || !('ResizeObserver' in window)) return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(screen);
    return () => observer.disconnect();
  }, [image]);

  return (
    <article className="pex__card">
      <button type="button" className="pex__open" onClick={onOpen} onPointerEnter={measure}>
        <span className="pex__screen" ref={screenRef}>
          <img ref={imageRef} src={image} alt={title} loading="lazy" onLoad={measure} />
          <span className="pex__shade" aria-hidden="true" />
          <span className="pex__scroll-hint" aria-hidden="true">Scroll preview</span>
        </span>
        <span className="pex__meta">
          <span>{category}</span>
          <span>{type}</span>
        </span>
        <span className="pex__caption">
          <span><small>View Project</small><strong>{title}</strong></span>
          <b aria-hidden="true">↗</b>
        </span>
      </button>
    </article>
  );
}

export default function PortfolioExplorer({ compact = false, initialMain = 'app' }) {
  const safeInitial = groups[initialMain] ? initialMain : 'app';
  const [main, setMain] = useState(safeInitial);
  const [sub, setSub] = useState('All');
  const [preview, setPreview] = useState(null);
  const group = groups[main];

  useEffect(() => setSub('All'), [main]);

  useEffect(() => {
    if (!preview) return undefined;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const key = (event) => event.key === 'Escape' && setPreview(null);
    window.addEventListener('keydown', key);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener('keydown', key);
    };
  }, [preview]);

  const filtered = useMemo(() => {
    const list = sub === 'All' ? group.items : group.items.filter((item) => item[1] === sub);
    return compact ? list.slice(0, 6) : list;
  }, [compact, group, sub]);

  return (
    <section className={`pex${compact ? ' pex--compact' : ''}`} aria-label="Orcanex portfolio explorer">
      <div className="pex__shell">
        <div className="pex__heading">
          <span className="pex__rule" aria-hidden="true" />
          <h2>See Our Portfolio</h2>
          <p>{group.description}</p>
        </div>

        <div className="pex__filter-block">
          {/* <div className="pex__filter-label">Main Category</div> */}
          <div className="pex__main-tabs" role="tablist" aria-label="Portfolio main categories">
            {Object.entries(groups).map(([key, value]) => (
              <button
                type="button"
                key={key}
                role="tab"
                aria-selected={main === key}
                className={main === key ? 'is-active' : ''}
                onClick={() => setMain(key)}
              >
                {/* <span className="pex__main-code" aria-hidden="true"></span> */}
                <span>{value.label}</span>
              </button>
            ))}
          </div>

          <div className="pex__sub-wrap">
            {/* <div className="pex__filter-label pex__filter-label--sub">{group.label} Sub Categories</div> */}
            <div className="pex__sub-tabs" role="group" aria-label={`${group.label} portfolio filters`}>
              {group.subs.map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={sub === item}
                  className={sub === item ? 'is-active' : ''}
                  onClick={() => setSub(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pex__grid" aria-live="polite">
          {filtered.map(([image, category, title, type]) => (
            <PortfolioCard
              key={`${main}-${title}`}
              image={image}
              category={category}
              title={title}
              type={type}
              onOpen={() => setPreview({ image, title })}
            />
          ))}
        </div>

        {compact && (
          <div className="pex__more"><a href="/portfolio">See More</a></div>
        )}
      </div>

      {preview && (
        <div className="pex-lightbox" role="dialog" aria-modal="true" aria-label={preview.title} onMouseDown={(e) => e.target === e.currentTarget && setPreview(null)}>
          <button type="button" className="pex-lightbox__close" onClick={() => setPreview(null)} aria-label="Close preview">×</button>
          <div className="pex-lightbox__inner"><img src={preview.image} alt={preview.title} /></div>
        </div>
      )}
    </section>
  );
}
