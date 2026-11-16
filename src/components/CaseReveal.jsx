import { useEffect } from 'react';
export default function CaseReveal(){useEffect(()=>{
  if (!('IntersectionObserver' in window)) {document.querySelectorAll('.cs-reveal').forEach(el=>el.classList.add('cs-inview'));return;}
  const observer = new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('cs-inview');observer.unobserve(entry.target)}}},{rootMargin:'0px 0px -10% 0px',threshold:.07});
  document.querySelectorAll('.cs-reveal').forEach(el=>observer.observe(el));
  return ()=>observer.disconnect();
},[]);return null;}
