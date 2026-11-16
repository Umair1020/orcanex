import { useLayoutEffect } from 'react';

function runInline(code) {
  const s = document.createElement('script');
  s.dataset.reactLegacyScript = '1';
  s.text = code;
  document.body.appendChild(s);
  return s;
}

function loadExternal(src) {
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.dataset.reactLegacyScript = '1';
    s.src = src;
    s.async = false;
    s.onload = () => resolve(s);
    s.onerror = () => resolve(s);
    document.body.appendChild(s);
  });
}

export default function PageAssets({ page }) {
  useLayoutEffect(() => {
    document.title = page.title || 'Orcanex';
    document.body.className = page.bodyClass || '';

    const nodes = [];
    (page.stylesheets || []).forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset.reactPageStyle = '1';
      document.head.appendChild(link);
      nodes.push(link);
    });
    if (page.inlineCss) {
      const style = document.createElement('style');
      style.dataset.reactPageStyle = '1';
      style.textContent = page.inlineCss;
      document.head.appendChild(style);
      nodes.push(style);
    }
    return () => nodes.forEach(n => n.remove());
  }, [page]);

  useLayoutEffect(() => {
    let cancelled = false;
    const created = [];

    document.querySelectorAll('img[data-src]').forEach((img) => {
      if (!img.getAttribute('src')) img.setAttribute('src', img.getAttribute('data-src'));
    });
    document.querySelectorAll('img[data-srcset]').forEach((img) => {
      if (!img.getAttribute('srcset')) img.setAttribute('srcset', img.getAttribute('data-srcset'));
    });
    document.querySelectorAll('div.lazy-load[data-src]').forEach((el) => {
      if (!el.style.backgroundImage) el.style.backgroundImage = `url("${el.getAttribute('data-src')}")`;
    });

    (async () => {
      // Legacy bundles attach key sliders/FAQ behavior to the window load event.
      // React mounts after the browser's real load event, so clear stale route
      // handlers, replay the original scripts, then emit one route-local load.
      if (window.jQuery) {
        try { window.jQuery(window).off('load'); } catch (_) {}
      }
      for (const step of (page.scriptPlan || [])) {
        if (cancelled) break;
        if (step.type === 'src') {
          const node = await loadExternal(step.value);
          created.push(node);
        } else if (step.type === 'inline') {
          created.push(runInline(step.value));
        }
      }
      if (!cancelled) {
        try { window.dispatchEvent(new Event('load')); } catch (_) {}
      }
      if (!cancelled && typeof window.chrLazyLoad === 'function') {
        try { window.chrLazyLoad(); } catch (_) {}
      }
    })();

    return () => {
      cancelled = true;
      created.forEach(n => n?.remove());
      if (window.jQuery) {
        try {
          window.jQuery('.slick-initialized').each(function () {
            try { window.jQuery(this).slick('unslick'); } catch (_) {}
          });
        } catch (_) {}
      }
    };
  }, [page]);

  return null;
}
