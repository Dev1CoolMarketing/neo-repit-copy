
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

        {/* Dark Background Examples */}
        <section className="bg-black rounded-3xl p-12">
          <h2 className="text-2xl font-semibold mb-8 text-white">On Dark Backgrounds</h2>
          <div className="space-y-8">
            <h3 className="apple-headline-gradient apple-gradient-signature gradient-on-dark">
              Stunning on Dark
            </h3>
            <h4 className="apple-subheadline-gradient apple-gradient-warm-gold gradient-on-dark">
              Perfectly optimized for dark themes
            </h4>
            <span className="apple-accent-gradient apple-gradient-champagne gradient-on-dark text-lg font-semibold">
              Enhanced visibility
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppleGradientShowcase;
