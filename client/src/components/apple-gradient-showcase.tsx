
import React from 'react';
import '@/styles/apple-gradients.css';

export const AppleGradientShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="apple-headline-gradient apple-gradient-signature mb-6">
            Apple-Style Text Gradients
          </h1>
          <p className="apple-subheadline-gradient apple-gradient-warm-gold">
            Signature gradient collection for premium UI
          </p>
        </div>

        {/* Brand Gradients */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Brand Gradients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-primary text-3xl font-bold mb-2">
                Primary Brand
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-primary</code>
            </div>
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-warm-gold text-3xl font-bold mb-2">
                Warm Gold
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-warm-gold</code>
            </div>
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-sunset text-3xl font-bold mb-2">
                Sunset
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-sunset</code>
            </div>
          </div>
        </section>

        {/* Apple-Inspired Gradients */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Apple-Inspired</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-titanium text-3xl font-bold mb-2">
                Titanium
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-titanium</code>
            </div>
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-pro-max text-3xl font-bold mb-2">
                Pro Max
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-pro-max</code>
            </div>
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-midnight text-3xl font-bold mb-2">
                Midnight
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-midnight</code>
            </div>
          </div>
        </section>

        {/* Vibrant Gradients */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Vibrant Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-sierra-blue text-3xl font-bold mb-2">
                Sierra Blue
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-sierra-blue</code>
            </div>
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-alpine-green text-3xl font-bold mb-2">
                Alpine Green
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-alpine-green</code>
            </div>
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-product-red text-3xl font-bold mb-2">
                Product Red
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-product-red</code>
            </div>
          </div>
        </section>

        {/* Animated Gradients */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Animated Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="apple-headline-gradient apple-gradient-animated text-4xl font-bold mb-2">
                Animated Gradient
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-animated</code>
            </div>
            <div className="text-center">
              <h3 className="apple-headline-gradient apple-gradient-shimmer text-4xl font-bold mb-2">
                Shimmer Effect
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-shimmer</code>
            </div>
          </div>
        </section>

        {/* Premium Soft Gradients */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Soft Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-soft-gold text-3xl font-bold mb-2">
                Soft Gold
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-soft-gold</code>
            </div>
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-champagne text-3xl font-bold mb-2">
                Champagne
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-champagne</code>
            </div>
            <div className="text-center">
              <h3 className="apple-accent-gradient apple-gradient-bronze text-3xl font-bold mb-2">
                Bronze
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-bronze</code>
            </div>
          </div>
        </section>

        {/* Signature Multi-Stop */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Signature Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="apple-headline-gradient apple-gradient-signature text-4xl font-bold mb-2">
                Signature
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-signature</code>
            </div>
            <div className="text-center">
              <h3 className="apple-headline-gradient apple-gradient-hero-accent text-4xl font-bold mb-2">
                Hero Accent
              </h3>
              <code className="text-sm text-gray-600">apple-gradient-hero-accent</code>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="bg-gray-50 rounded-3xl p-12 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Usage Examples</h2>
          <div className="space-y-8">
            <div>
              <h3 className="apple-headline-gradient apple-gradient-signature">
                Revolutionary Hair Restoration
              </h3>
              <p className="text-xl text-gray-600 mt-4">Large headlines with signature gradient</p>
            </div>
            <div>
              <h4 className="apple-subheadline-gradient apple-gradient-warm-gold">
                Advanced treatments. Take your pick.
              </h4>
              <p className="text-lg text-gray-600 mt-2">Subheadings with warm gold accent</p>
            </div>
            <div>
              <span className="apple-accent-gradient apple-gradient-sunset text-lg font-semibold">
                Get started today
              </span>
              <p className="text-base text-gray-600 mt-2">Call-to-action text with sunset gradient</p>
            </div>
          </div>
        </section>

        {/* Treatment-Specific Gradients */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Treatment Signature Collections</h2>
          
          {/* FUE Collection */}
          <div className="mb-16 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">FUE Hair Transplant</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-fue-primary text-3xl font-bold mb-2">
                  Primary FUE
                </h4>
                <code className="text-sm text-gray-600">treatment-fue-primary</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-subheadline-gradient treatment-fue-secondary text-3xl font-bold mb-2">
                  Secondary
                </h4>
                <code className="text-sm text-gray-600">treatment-fue-secondary</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-accent-gradient treatment-fue-accent text-3xl font-bold mb-2">
                  Accent
                </h4>
                <code className="text-sm text-gray-600">treatment-fue-accent</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-fue-hero text-3xl font-bold mb-2">
                  Hero
                </h4>
                <code className="text-sm text-gray-600">treatment-fue-hero</code>
              </div>
            </div>
            
            {/* Animated FUE */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-fue-animated text-4xl font-bold mb-2">
                  Animated FUE
                </h4>
                <code className="text-sm text-gray-600">treatment-fue-animated</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-fue-shimmer text-4xl font-bold mb-2">
                  FUE Shimmer
                </h4>
                <code className="text-sm text-gray-600">treatment-fue-shimmer</code>
              </div>
            </div>
          </div>

          {/* Growth Factors Collection */}
          <div className="mb-16 p-8 bg-gradient-to-r from-red-50 to-rose-50 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Growth Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-growth-primary text-3xl font-bold mb-2">
                  Primary Growth
                </h4>
                <code className="text-sm text-gray-600">treatment-growth-primary</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-subheadline-gradient treatment-growth-secondary text-3xl font-bold mb-2">
                  Secondary
                </h4>
                <code className="text-sm text-gray-600">treatment-growth-secondary</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-accent-gradient treatment-growth-accent text-3xl font-bold mb-2">
                  Accent
                </h4>
                <code className="text-sm text-gray-600">treatment-growth-accent</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-growth-hero text-3xl font-bold mb-2">
                  Hero
                </h4>
                <code className="text-sm text-gray-600">treatment-growth-hero</code>
              </div>
            </div>
            
            {/* Animated Growth */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-growth-animated text-4xl font-bold mb-2">
                  Animated Growth
                </h4>
                <code className="text-sm text-gray-600">treatment-growth-animated</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-growth-shimmer text-4xl font-bold mb-2">
                  Growth Shimmer
                </h4>
                <code className="text-sm text-gray-600">treatment-growth-shimmer</code>
              </div>
            </div>
          </div>

          {/* Microneedling Collection */}
          <div className="mb-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Microneedling</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-micro-primary text-3xl font-bold mb-2">
                  Primary Micro
                </h4>
                <code className="text-sm text-gray-600">treatment-micro-primary</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-subheadline-gradient treatment-micro-secondary text-3xl font-bold mb-2">
                  Secondary
                </h4>
                <code className="text-sm text-gray-600">treatment-micro-secondary</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-accent-gradient treatment-micro-accent text-3xl font-bold mb-2">
                  Accent
                </h4>
                <code className="text-sm text-gray-600">treatment-micro-accent</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-micro-hero text-3xl font-bold mb-2">
                  Hero
                </h4>
                <code className="text-sm text-gray-600">treatment-micro-hero</code>
              </div>
            </div>
            
            {/* Animated Micro */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-micro-animated text-4xl font-bold mb-2">
                  Animated Micro
                </h4>
                <code className="text-sm text-gray-600">treatment-micro-animated</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-micro-shimmer text-4xl font-bold mb-2">
                  Micro Shimmer
                </h4>
                <code className="text-sm text-gray-600">treatment-micro-shimmer</code>
              </div>
            </div>
          </div>

          {/* Exosomes Collection */}
          <div className="mb-16 p-8 bg-gradient-to-r from-purple-50 to-violet-50 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Exosomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-exo-primary text-3xl font-bold mb-2">
                  Primary Exo
                </h4>
                <code className="text-sm text-gray-600">treatment-exo-primary</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-subheadline-gradient treatment-exo-secondary text-3xl font-bold mb-2">
                  Secondary
                </h4>
                <code className="text-sm text-gray-600">treatment-exo-secondary</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-accent-gradient treatment-exo-accent text-3xl font-bold mb-2">
                  Accent
                </h4>
                <code className="text-sm text-gray-600">treatment-exo-accent</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-exo-hero text-3xl font-bold mb-2">
                  Hero
                </h4>
                <code className="text-sm text-gray-600">treatment-exo-hero</code>
              </div>
            </div>
            
            {/* Animated Exo */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-exo-animated text-4xl font-bold mb-2">
                  Animated Exo
                </h4>
                <code className="text-sm text-gray-600">treatment-exo-animated</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient treatment-exo-shimmer text-4xl font-bold mb-2">
                  Exo Shimmer
                </h4>
                <code className="text-sm text-gray-600">treatment-exo-shimmer</code>
              </div>
            </div>
          </div>

          {/* Signature Multi-Treatment */}
          <div className="mb-16 p-8 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Signature Multi-Treatment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="treatment-headline-gradient signature-comprehensive text-4xl font-bold mb-2">
                  Comprehensive Care
                </h4>
                <code className="text-sm text-gray-600">signature-comprehensive</code>
              </div>
              <div className="text-center">
                <h4 className="treatment-headline-gradient signature-harmony text-4xl font-bold mb-2">
                  Treatment Harmony
                </h4>
                <code className="text-sm text-gray-600">signature-harmony</code>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Treatment Context Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="treatment-headline-gradient treatment-fue-primary mb-4">
                FUE Hair Transplant
              </h3>
              <p className="treatment-subheadline-gradient treatment-fue-secondary mb-2">
                Advanced follicular extraction
              </p>
              <span className="treatment-accent-gradient treatment-fue-accent text-lg font-medium">
                Natural-looking results
              </span>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="treatment-headline-gradient treatment-growth-primary mb-4">
                Growth Factors
              </h3>
              <p className="treatment-subheadline-gradient treatment-growth-secondary mb-2">
                Regenerative therapy
              </p>
              <span className="treatment-accent-gradient treatment-growth-accent text-lg font-medium">
                Stimulate hair growth
              </span>
            </div>
          </div>
        </section>

        {/* Dark Background Examples */}
        <section className="bg-black rounded-3xl p-12">
          <h2 className="text-2xl font-semibold mb-8 text-white">Treatment Gradients on Dark</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="treatment-headline-gradient treatment-fue-hero gradient-on-dark">
                FUE Excellence
              </h3>
              <h3 className="treatment-headline-gradient treatment-growth-hero gradient-on-dark">
                Growth Power
              </h3>
            </div>
            <div className="space-y-4">
              <h3 className="treatment-headline-gradient treatment-micro-hero gradient-on-dark">
                Micro Precision
              </h3>
              <h3 className="treatment-headline-gradient treatment-exo-hero gradient-on-dark">
                Exosome Innovation
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppleGradientShowcase;
