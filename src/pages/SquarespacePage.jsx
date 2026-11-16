import PageLayout from '../components/PageLayout';
import pageCss from './styles/SquarespacePage.css?inline';

const page = {
  route: '/web-design/squarespace-web-design',
  source: 'squarespace-web-design',
  title: 'Squarespace Web Design Australia | Orcanex',
  bodyClass: 'page-template-squarespace wp-theme-chromatix-2018 wp-child-theme-chromatix-2018-child',
  sections: [String.raw`
<main class="squarespace-page">
  <section class="">
    

<div class="chr-content clearfix">
<div class="sub-page sub-page--contact">
<div class="chr-banner">
<div aria-label="Portfolio Web Banner For 1920" class="chr-banner-bg large-desktop" style='background-image: url("/assets/banner.svg");
      background-position: center top;'></div>
<div aria-label="orcanex Portfolio Web Banner for Small Desktop" class="chr-banner-bg small-desktop" style='background-image: url("/assets/banner.svg") ;
      background-position: center top;'></div>
<div aria-label="Portfolio Web Banner For Tablet" class="chr-banner-bg tablet" style='background-image: url("/assets/banner.svg");
      background-position: center top;'></div>
<div aria-label="Portfolio Web Banner For Tablet" class="chr-banner-bg phone" style='background-image: url("/assets/banner.svg");
      background-position: center top;'></div>
<div class="chr-content-container chr-banner-content">
<div class="chr-banner-content-inner square">
 <p class="text-white">SQUARESPACE WEB DESIGN SERVICES</p>
        <h1>Squarespace Web Design for Australian Businesses</h1> 
        <p class="text-white">Looking for a reliable Squarespace web designer in Australia? We create custom Squarespace websites for small and growing businesses that need a professional online presence without unnecessary complexity.</p> 
</div> <!--chr-banner-content-inner-->
</div> <!--chr-banner-content-->
</div> <!--chr-banner-->
    
  </section>

  <section class="sq-intro">
    <div class="sq-shell sq-two-col">
      <div class="sq-visual"><img src="/assets/service-visuals/squarespace-site-studio.svg" alt="Squarespace website design workspace"></div>
      <div class="sq-copy">
        <h2>Squarespace Website<br>Development and<br>Customisation Services</h2>
        <p>Our custom Squarespace services help Australian businesses build professional, engaging and high-performing websites that turn visitors into customers. We combine strategic design, smooth navigation and responsive layouts to create a website that reflects your brand and supports your business goals.</p>
        <p>From custom layouts and template customisation to mobile optimisation, ecommerce, booking tools and conversion-focused design, every part of the build is planned around your audience and the way your business works.</p>
        <p >We also focus on speed, SEO-friendly structure, content clarity and reliable responsive behaviour across desktop, tablet and mobile devices.</p>
        <div class="sq-actions"><a class="sq-btn sq-btn-dark" href="/contact">HIRE SQUARE EXPERT</a><a class="sq-btn sq-btn-dark" href="/contact">LET'S CHAT</a></div>
      </div>
    </div>
  </section>

  <section class="sq-shell sq-cta"><div><h2 class="text-white">Ready to Build a Squarespace<br>Website That Elevates Your Brand?</h2><p class="text-white">Custom Squarespace design for Australian businesses that want a clean, professional and easy-to-manage website.</p></div><a class="sq-btn sq-btn-dark" href="/contact">FREE QUOTE WEB</a></section>

  <section class="sq-benefits"><div class="sq-shell">
    <div class="sq-heading"><h2>Why Australian Businesses Choose<br>Us for Squarespace Development</h2><p >Visually appealing, responsive websites that support your objectives, represent your brand and provide successful user experiences.</p></div>
    <div class="sq-benefit-grid">
      <article><h3 class="text-white">Custom, Brand-Focused Design</h3><p class="text-white">Every Squarespace website is designed around your business, not a generic template. We tailor layout, typography, imagery and page structure so the site feels consistent with your brand.</p></article>
      <article><h3 class="text-white">User-Friendly &amp; Responsive Squarespace Website</h3><p class="text-white">Your website will work smoothly across desktop, tablet and mobile with clear navigation, readable content and responsive layouts.</p></article>
      <article class="wide"><h3 class="text-white">Performance &amp; SEO Optimisation</h3><p class="text-white">We refine content structure, page architecture, imagery and performance so visitors can move through the site quickly and search engines can understand the content clearly.</p></article>
    </div>
  </div></section>

  <section class="sq-why"><div class="sq-shell sq-two-col sq-two-col--reverse">
    <div class="sq-copy"><h2>Why Choose Orcanex<br>for Squarespace<br>Design?</h2><p>Australian businesses choose Orcanex because we combine practical strategy, thoughtful design and experienced development to create websites that support real business goals.</p><p>Every Squarespace build is shaped around your brand, audience and conversion needs. From new website builds and redesigns to custom functionality and ongoing improvements, we manage the process from planning through to launch.</p><p>Whether you are in Melbourne, Sydney, Brisbane, Perth or elsewhere in Australia, we build Squarespace websites designed to look professional, perform reliably and help turn more visitors into genuine enquiries.</p><div class="sq-actions"><a class="sq-btn sq-btn-dark" href="/contact">HIRE SQUARE EXPERT</a><a class="sq-btn sq-btn-dark" href="/contact">LET'S CHAT</a></div></div>
    <div class="sq-visual sq-visual--blue"><img src="/assets/service-visuals/squarespace-commerce.svg" alt="Squarespace commerce and booking interface"></div>
  </div></section>

  <section class="sq-shell sq-cta sq-cta--last"><div><h2 class="text-white">Hire Our Squarespace Web Design<br>Agency to Elevate Your Business!</h2><p class="text-white">Work with a team that understands Squarespace design, development, customisation and best practices.</p></div><a class="sq-btn sq-btn-dark" href="/contact">FREE QUOTE WEB</a></section>
</main>`],
  stylesheets: [
    '/wp-content/plugins/chromatix-social-media-icons/dist/styles.min4c56.css?ver=2.0.2',
    '/wp-content/themes/chromatix-2018-child/dist/css/fonts.minc520.css?ver=1.50.7',
    '/wp-content/themes/chromatix-2018-child/dist/css/main.minc520.css?ver=1.50.7',
  ],
  inlineCss: pageCss,
  scriptPlan: [{ type: 'src', value: '/wp-content/themes/chromatix-2018-child/dist/js/main.minc520.js?ver=1.50.7' }],
};

export default function SquarespacePage() {
  return <PageLayout page={page} />;
}
