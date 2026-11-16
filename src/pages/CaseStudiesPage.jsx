import { useEffect } from 'react';
import CasePageChrome from '../components/CasePageChrome';
import CaseReveal from '../components/CaseReveal';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';
export default function CaseStudiesPage(){
 useEffect(()=>{document.title='Case Studies | Our Work | Orcanex';document.body.classList.add('orcanex-case-page');return ()=>document.body.classList.remove('orcanex-case-page')},[]);
 return <CasePageChrome><div className="cs-root"><main><section className="cs-index-hero cs-container"><p className="cs-eyebrow cs-reveal"><span className="cs-dot"/> SELECTED WORK / 2026</p><div className="cs-index-heading cs-reveal"><h1>Digital experiences,<br/><em>thoughtfully built.</em></h1><p>Explore the ideas, strategy and interfaces behind a collection of mobile product experiences. Four stories. One focus: making digital feel effortless.</p></div><div className="cs-index-meta cs-reveal"><span>01 — 04</span><span>SCROLL TO EXPLORE ↓</span></div></section><section className="cs-index-work cs-container" aria-label="Case studies"><div className="cs-index-grid">{caseStudies.map(item=><div key={item.slug} className="cs-reveal"><CaseStudyCard item={item}/></div>)}</div></section><section className="cs-index-end cs-container cs-reveal"><span className="cs-dot"/><p>Built around people.<br/>Designed for what’s next.</p></section></main><CaseReveal/></div></CasePageChrome>
}
