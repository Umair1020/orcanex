import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const allowed = new Set([
  '/', '/portfolio', '/case-studies', '/case-studies/on-demand-services', '/case-studies/food-ordering', '/case-studies/finerapay', '/case-studies/shared-planner', '/web-design', '/web-design/wordpress-web-design', '/web-design/b2b-web-design',
  '/web-design/website-redesign', '/web-design/responsive-web-design', '/web-design/ui-ux-design', '/web-design/squarespace-web-design',
  '/ecommerce', '/ecommerce/woocommerce-web-design', '/ecommerce/shopify-web-design', '/ecommerce/b2b-ecommerce',
  '/ecommerce/ecommerce-website-redesign', '/ecommerce/ecommerce-ux-design', '/web-development',
  '/web-development/web-application-development', '/web-development/app-development', '/web-development/crm-development', '/web-development/squarespace-web-design', '/web-development/customer-web-portal-development', '/about', '/contact',
  '/privacy-statement', '/privacy-policy', '/terms-and-conditions', '/refund', '/refund/refundpolicy.html'
]);

export default function InternalNavigation() {
  const navigate = useNavigate();
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;
      let url;
      try { url = new URL(href, window.location.origin); } catch { return; }
      if (url.origin !== window.location.origin) return;
      let p = url.pathname.replace(/\/index\.html$/i, '') || '/';
      if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
      if (!allowed.has(p)) return;
      e.preventDefault();
      navigate(p + url.search + url.hash);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);
  return null;
}
