import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import InternalNavigation from './components/InternalNavigation';
import PromoModal from './components/PromoModal';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import WebDesignPage from './pages/WebDesignPage';
import WordpressWebDesignPage from './pages/WordpressWebDesignPage';
import B2BWebDesignPage from './pages/B2BWebDesignPage';
import WebsiteRedesignPage from './pages/WebsiteRedesignPage';
import ResponsiveWebDesignPage from './pages/ResponsiveWebDesignPage';
import UiUxDesignPage from './pages/UiUxDesignPage';
import EcommercePage from './pages/EcommercePage';
import WooCommercePage from './pages/WooCommercePage';
import ShopifyPage from './pages/ShopifyPage';
import B2BEcommercePage from './pages/B2BEcommercePage';
import EcommerceRedesignPage from './pages/EcommerceRedesignPage';
import EcommerceUxPage from './pages/EcommerceUxPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import WebAppDevelopmentPage from './pages/WebAppDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import CustomerPortalPage from './pages/CustomerPortalPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import SquarespacePage from './pages/SquarespacePage';
import CrmDevelopmentPage from './pages/CrmDevelopmentPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import './pages/styles/CaseStudies.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <InternalNavigation />
      <PromoModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/web-design/wordpress-web-design" element={<WordpressWebDesignPage />} />
        <Route path="/web-design/b2b-web-design" element={<B2BWebDesignPage />} />
        <Route path="/web-design/website-redesign" element={<WebsiteRedesignPage />} />
        <Route path="/web-design/squarespace-web-design" element={<SquarespacePage />} />
        <Route path="/web-design/responsive-web-design" element={<ResponsiveWebDesignPage />} />
        <Route path="/web-design/ui-ux-design" element={<UiUxDesignPage />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/ecommerce/woocommerce-web-design" element={<WooCommercePage />} />
        <Route path="/ecommerce/shopify-web-design" element={<ShopifyPage />} />
        <Route path="/ecommerce/b2b-ecommerce" element={<B2BEcommercePage />} />
        <Route path="/ecommerce/ecommerce-website-redesign" element={<EcommerceRedesignPage />} />
        <Route path="/ecommerce/ecommerce-ux-design" element={<EcommerceUxPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/web-development/web-application-development" element={<WebAppDevelopmentPage />} />
        <Route path="/web-development/app-development" element={<AppDevelopmentPage />} />
        <Route path="/web-development/crm-development" element={<CrmDevelopmentPage />} />
        <Route path="/web-development/squarespace-web-design" element={<SquarespacePage />} />
        <Route path="/web-development/customer-web-portal-development" element={<CustomerPortalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-statement" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/refund" element={<RefundPolicyPage />} />
        <Route path="/refund/refundpolicy.html" element={<RefundPolicyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
