import { Link } from 'react-router-dom';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '../data/caseStudies';
export default function CaseStudyHomeSection() {
  return <section className="cs-home cs-surface" aria-labelledby="cs-home-title">
    <div className="cs-container">
      <div className="cs-home-heading"><div><p className="cs-eyebrow"><span className="cs-dot" /> WORK THAT SPEAKS FOR ITSELF</p><h2 id="cs-home-title">Ideas turned into <em>real experiences.</em></h2></div><p>From financial products to everyday mobile apps, explore how we approach meaningful digital challenges through intelligent design.</p></div>
      <div className="cs-home-grid">{caseStudies.map(item => <CaseStudyCard item={item} compact key={item.slug} />)}</div>
      <div className="cs-home-action"><Link to="/case-studies" className="cs-button cs-button-dark">View all case studies <span>↗</span></Link></div>
    </div>
  </section>;
}
