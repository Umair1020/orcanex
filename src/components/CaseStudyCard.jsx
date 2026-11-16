import { Link } from 'react-router-dom';
import { caseImage } from '../data/caseStudies';
export default function CaseStudyCard({ item, compact = false }) {
  return (
    <Link className={`cs-card cs-theme-${item.theme} ${compact ? 'cs-card-compact' : ''}`} to={`/case-studies/${item.slug}`} aria-label={`View ${item.name} case study`}>
      <div className="cs-card-visual">
        <span className="cs-card-counter">{item.number} / 04</span>
        <img
          loading="lazy"
          src={compact ? `/case${Number(item.number)}.png` : caseImage(item, 'overview')}
          alt={`${item.name} mobile UI screens`}
        />
        <span className="cs-card-open" aria-hidden="true">↗</span>
      </div>
      <div className="cs-card-info"><div><p className="cs-label">{item.category} <span>·</span> Mobile App</p><h3>{item.name}</h3><p className="cs-card-description">{item.short}</p></div><span className="cs-text-link">Explore case study <span>↗</span></span></div>
    </Link>
  );
}
