import PageLayout from '../components/PageLayout';
import pageCss from './styles/CrmDevelopmentPage.css?inline';

const page = {
  route: '/web-development/crm-development',
  source: 'crm-development',
  title: 'CRM Development Australia | Orcanex',
  bodyClass: 'crm-development-page wp-theme-chromatix-2018 wp-child-theme-chromatix-2018-child',
  sections: [String.raw`
<main class="crm-page">
  <section class="crm-hero">
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
<div class="chr-banner-content-inner"> <br /><br />
    <p class="crm-kicker">CUSTOM CRM DEVELOPMENT SERVICES</p><h1>Custom CRM Solutions<br>Built Around Your<br>Business</h1>
    <p class="text-white">We design and develop CRM systems around the way your team actually works — helping you manage leads, customers, sales, reporting and day-to-day processes in one connected place.</p>
   
</div> <!--chr-banner-content-inner-->
</div> <!--chr-banner-content-->
</div> <!--chr-banner-->



  </section>

  <section class="crm-intro"><div class="crm-shell crm-two-col">
    <div class="crm-image"><img src="/assets/crm1.png" alt="Custom CRM dashboard showing lead and sales data"></div>
    <div class="crm-copy"><p class="crm-kicker">CUSTOM CRM DEVELOPMENT</p><h2>CRM Development That<br>Fits the Way You Work</h2><p>A good CRM should make work easier, not create more admin. Orcanex develops custom CRM platforms around your sales process, customer journey and internal workflows so your team can keep everything organised without forcing the business into a one-size-fits-all system.</p><p>We can connect enquiries, pipelines, customer records, tasks, reporting and automated follow-up in one practical interface designed for the people who use it every day.</p><div class="crm-actions"><a href="/contact" class="crm-btn crm-btn--dark">START YOUR CRM</a><a href="/contact" class="crm-btn crm-btn--dark">LET'S TALK</a></div></div>
  </div></section>

  <section class="crm-band" id="crm-services"><div class="crm-shell"><h1>Our CRM Development<br>Services</h1><p>Flexible CRM systems designed to improve visibility, reduce manual work and keep your customer information connected.</p></div></section>

  <section class="crm-services"><div class="crm-shell crm-service-grid">
    <article><span>◫</span><div><h3>Lead Management Systems</h3><p>Capture enquiries, assign leads, track activity and move opportunities through a clear sales pipeline.</p></div></article>
    <article><span>◉</span><div><h3>CRM Dashboards &amp; Reporting</h3><p>See pipeline value, sales activity, lead sources and team performance in dashboards built around your KPIs.</p></div></article>
    <article><span>◧</span><div><h3>Sales Pipeline Management</h3><p>Build stages that match your real sales process, with reminders and ownership at every step.</p></div></article>
    <article><span>↻</span><div><h3>CRM Integrations</h3><p>Connect your CRM with forms, email, calendars, accounting, marketing tools and other business systems.</p></div></article>
    <article><span>⚙</span><div><h3>CRM Workflow Automation</h3><p>Automate repetitive tasks, follow-ups, notifications and status changes while keeping your team in control.</p></div></article>
    <article><span>◌</span><div><h3>CRM Customisation</h3><p>Custom fields, permissions, modules and workflows shaped around your business instead of generic defaults.</p></div></article>
    <article><span>▤</span><div><h3>Customer Database Management</h3><p>Keep customer notes, documents, activity, contacts and history organised in one reliable source of truth.</p></div></article>
  </div></section>

  <section class="crm-detail"><div class="crm-shell crm-two-col crm-two-col--reverse">
    <div class="crm-copy"><p class="crm-kicker">ONE CONNECTED CUSTOMER VIEW</p><h2>Keep Customer Information in One Place</h2><p>Bring customer history, sales notes, documents, communications, tasks and service activity together so your team can see what is happening without jumping between disconnected tools.</p><h3>CRM Solutions for Australian Businesses</h3><p>We build CRM systems for service businesses, sales teams, professional firms, ecommerce operations and organisations that have outgrown spreadsheets or generic software.</p></div>
    <div class="crm-round-image"><img src="/assets/crm2.png" alt="CRM automation and customer data interface"></div>
  </div></section>

  <section class="crm-audience"><div class="crm-shell"><div class="crm-heading"><p class="crm-kicker">BUILT TO SCALE</p><h2>CRM Development for Small and<br>Growing Businesses</h2><p>Start with the tools your team needs now, with a structure that can grow as your processes, team and customer base expand.</p></div><div class="crm-two-col crm-audience__row"><div class="crm-copy"><h3>CRM Development for Larger Teams</h3><p>For more complex organisations we can build role-based permissions, multiple pipelines, advanced reporting, integrations, approval flows and automation across departments.</p><ul><li>Multiple teams and pipelines</li><li>Custom permissions and user roles</li><li>Advanced reporting and dashboards</li><li>API and third-party integrations</li><li>Workflow and notification automation</li></ul></div><div class="crm-image"><img src="/assets/crm3.png" alt="CRM reporting interface for larger teams"></div></div></div></section>

  <section class="crm-process"><div class="crm-shell"><div class="crm-heading"><p class="crm-kicker">HOW WE WORK</p><h1>Our CRM Development Process</h1></div><div class="crm-process-grid">
    <article><b>01</b><h3>Discovery</h3><p>We map your goals, users and existing workflow.</p></article><article><b>02</b><h3>Research &amp; Review</h3><p>We identify friction, duplication and integration needs.</p></article><article><b>03</b><h3>CRM Planning</h3><p>We define modules, fields, permissions and automation.</p></article><article><b>04</b><h3>Testing</h3><p>Real workflows are tested before rollout.</p></article><article><b>05</b><h3>Design &amp; User Experience</h3><p>Interfaces are shaped around fast daily use.</p></article><article><b>06</b><h3>Development</h3><p>We build, connect and prepare your CRM for launch.</p></article>
  </div></div></section>

  <section class="crm-integration"><div class="crm-shell crm-two-col"><div class="crm-copy"><p class="crm-kicker">CRM INTEGRATION &amp; BUSINESS AUTOMATION</p><h2>Connect the Tools Your Team Already Uses</h2><p>Your CRM can connect with website forms, calendars, email, accounting, marketing platforms and internal tools to reduce duplicate data entry and give your team a cleaner workflow.</p><h3>Why Choose Orcanex for CRM Development?</h3><p>We focus on practical systems that fit your business, clear UX that teams can actually use, and flexible architecture that can grow with you.</p></div><div class="crm-round-image"><img src="/assets/crm4.png" alt="Connected CRM integrations and automation"></div></div></section>

  <section class="crm-faq"><div class="crm-shell"><div class="crm-heading"><p class="crm-kicker">FREQUENTLY ASKED QUESTIONS</p><h2>Frequently Asked<br>Questions</h2></div><div class="crm-faq-grid"><details><summary>Can you build a CRM from scratch?</summary><p>Yes. We can build a custom CRM around your workflows or extend an existing platform where that is the better fit.</p></details><details><summary>Can you integrate our current tools?</summary><p>Yes. Integrations can include email, forms, calendars, accounting, marketing tools and other APIs.</p></details><details><summary>Can the CRM grow with our team?</summary><p>Yes. We plan the data structure and permissions so new users, workflows and modules can be added later.</p></details><details><summary>Can you migrate existing customer data?</summary><p>Yes. Data migration can be scoped as part of the project after we review the source data and required fields.</p></details></div></div></section>

  <section class="crm-final"><div class="crm-shell crm-two-col"><div class="crm-copy"><p class="crm-kicker">READY TO BUILD?</p><h2>Ready to Build a CRM<br>That Works Around<br>Your Business?</h2><p>Tell us how your team works today and where the friction is. We will help you map a CRM solution around the process you actually need.</p><div class="crm-actions"><a class="crm-btn crm-btn--dark" href="/contact">REQUEST A QUOTE</a><a class="crm-btn crm-btn--dark" href="/contact">LET'S TALK</a></div></div><div class="crm-image"><img src="/assets/crm5.png" alt="CRM solution dashboard"></div></div></section>
</main>`],
  stylesheets: [
    '/wp-content/plugins/chromatix-social-media-icons/dist/styles.min4c56.css?ver=2.0.2',
    '/wp-content/themes/chromatix-2018-child/dist/css/fonts.minc520.css?ver=1.50.7',
    '/wp-content/themes/chromatix-2018-child/dist/css/main.minc520.css?ver=1.50.7',
  ],
  inlineCss: pageCss,
  scriptPlan: [{ type: 'src', value: '/wp-content/themes/chromatix-2018-child/dist/js/main.minc520.js?ver=1.50.7' }],
};

export default function CrmDevelopmentPage() { return <PageLayout page={page} />; }
