import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Suspense, lazy, Fragment } from 'react';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
// Add page imports here

// Self-hosted build (Cloudflare): no Base44 login or app-settings check; the site is public only.
const SELF_HOSTED = Boolean(import.meta.env.VITE_LEAD_ENDPOINT);
const useAuthState = SELF_HOSTED ? () => ({}) : useAuth;
const AuthShell = SELF_HOSTED ? Fragment : AuthProvider;

// Every page except Home loads on demand, so the home bundle stays small.
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const MarketplacePage = lazy(() => import('@/pages/MarketplacePage'));
const PlatformPage = lazy(() => import('@/pages/PlatformPage'));
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage'));
const CompliancePage = lazy(() => import('@/pages/CompliancePage'));
const CustomersPage = lazy(() => import('@/pages/CustomersPage'));
const SecurityPage = lazy(() => import('@/pages/SecurityPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const HowJagoWorksPage = lazy(() => import('@/pages/HowJagoWorksPage'));
const RoleWinsPage = lazy(() => import('@/pages/RoleWinsPage'));
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const RefundPage = lazy(() => import('@/pages/RefundPage'));

const PageFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
  </div>
);

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuthState();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      {/* Add your page Route elements here */}
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Suspense fallback={<PageFallback />}><PricingPage /></Suspense>} />
      <Route path="/marketplace" element={<Suspense fallback={<PageFallback />}><MarketplacePage /></Suspense>} />
      <Route path="/platform" element={<Suspense fallback={<PageFallback />}><PlatformPage /></Suspense>} />
      <Route path="/solutions" element={<Suspense fallback={<PageFallback />}><SolutionsPage /></Suspense>} />
      <Route path="/resources" element={<Navigate to="/" replace />} />
      <Route path="/compliance" element={<Suspense fallback={<PageFallback />}><CompliancePage /></Suspense>} />
      <Route path="/customers" element={<Suspense fallback={<PageFallback />}><CustomersPage /></Suspense>} />
      <Route path="/security" element={<Suspense fallback={<PageFallback />}><SecurityPage /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<PageFallback />}><AboutPage /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<PageFallback />}><ContactPage /></Suspense>} />
      <Route path="/how-jago-works" element={<Suspense fallback={<PageFallback />}><HowJagoWorksPage /></Suspense>} />
      <Route path="/role-wins" element={<Suspense fallback={<PageFallback />}><RoleWinsPage /></Suspense>} />
      <Route path="/industries" element={<Suspense fallback={<PageFallback />}><IndustriesPage /></Suspense>} />
      <Route path="/privacy" element={<Suspense fallback={<PageFallback />}><PrivacyPage /></Suspense>} />
      <Route path="/terms" element={<Suspense fallback={<PageFallback />}><TermsPage /></Suspense>} />
      <Route path="/refund-policy" element={<Suspense fallback={<PageFallback />}><RefundPage /></Suspense>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthShell>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <MotionConfig reducedMotion="user">
            <AuthenticatedApp />
          </MotionConfig>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthShell>
  )
}

export default App
