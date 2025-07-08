import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import GrowthFactors from './pages/growth-factors'
import GrowthFactors2 from './pages/growth-factors2'
import FUE from './pages/fue'
import VIPMembership from './pages/vip-membership'
import ComponentExport from './pages/component-export'
import ImageGenerator from './pages/image-generator'
import GrowthFactorsImages from './pages/growth-factors-images'
import Treatments from './pages/treatments'
import TreatmentsNew from './pages/treatments-new'
import TreatmentsOptimized from './pages/treatments-optimized'
import TreatmentsPremium from './pages/treatments-premium'
import NotFound from './pages/not-found'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/growth-factors" element={<GrowthFactors />} />
        <Route path="/growth-factors2" element={<GrowthFactors2 />} />
        <Route path="/fue" element={<FUE />} />
        <Route path="/vip-membership" element={<VIPMembership />} />
        <Route path="/component-export" element={<ComponentExport />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
        <Route path="/growth-factors-images" element={<GrowthFactorsImages />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments-new" element={<TreatmentsNew />} />
        <Route path="/treatments-optimized" element={<TreatmentsOptimized />} />
        <Route path="/treatments-premium" element={<TreatmentsPremium />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)