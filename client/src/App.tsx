import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initFadeInAnimations, initLazyImageLoading } from "@/lib/utils";
import Home from "@/pages/home";
import VIPMembershipDesign from "@/pages/vip-membership";
import TreatmentsPremium from "@/pages/treatments-premium";
import Fue from "@/pages/fue";
import GrowthFactors from "@/pages/growth-factors2";
import ImageGeneratorPage from "@/pages/image-generator";
import GrowthFactorsImagesPage from "@/pages/growth-factors-images";
import HairHotlinePage from "./pages/hairhotline";
import GrowthFactors2Page from '@/pages/growth-factors2';
import ExosomesDesign from '@/pages/exosomes';
import { MicroneedlingDesign } from '@/pages/microneedling';
import ComponentExportPage from '@/pages/component-export';
import GradientsPage from '@/pages/gradients';
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  // Initialize animations and lazy loading on route change
  useEffect(() => {
    const cleanupAnimations = initFadeInAnimations();
    const cleanupLazyLoading = initLazyImageLoading();

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      cleanupAnimations();
      cleanupLazyLoading();
    };
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/vip-membership" component={VIPMembershipDesign} />
      <Route path="/treatments" component={TreatmentsPremium} />
       <Route path="/fue" component={Fue} />
      <Route path="/growth-factors" component={GrowthFactors} />
      <Route path="/hair-hotline" component={HairHotlinePage} />

      <Route path="/image-generator" component={ImageGeneratorPage} />
      <Route
        path="/growth-factors-images"
        component={GrowthFactorsImagesPage}
      />
       <Route path="/growth-factors2" component={GrowthFactors2Page} />
        <Route path="/exosomes" component={ExosomesDesign} />
        <Route path="/microneedling" component={MicroneedlingDesign} />
        <Route path="/component-export" component={ComponentExportPage} />
        <Route path="/gradients" component={GradientsPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;