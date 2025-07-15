import React from 'react';
import { Button } from '@/components/ui/button';
import styles from '@/styles/exosomes.module.css';

export default function ExosomesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mobile First */}
      <section className="relative h-screen flex flex-col">
        {/* Background with gold gradient and white overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #D4B76A 0%, #FAE151 50%, #D4B76A 100%)'
          }}
        />

        {/* White geometric overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `
              polygon(0 0, 100% 0, 100% 60%, 75% 80%, 0 100%),
              linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)
            `,
            clipPath: 'polygon(0 0, 100% 0, 100% 60%, 75% 80%, 0 100%)'
          }}
        />

        {/* Content */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-6 pt-20">
          <div className="max-w-sm mx-auto text-left">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              <span className="block text-black">Transform Your</span>
              <span className="block text-black">Hair with</span>
              <span className="block text-black">Exosomes</span>
            </h1>

            <div className="mt-auto mb-12">
              <Button 
                className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom text overlay */}
        <div className="absolute bottom-8 left-6 right-6 z-30">
          <p className="text-black text-base font-medium">
            Schedule your personalized consultation and discover the future of hair restoration
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-sm mx-auto space-y-8">

          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-full h-1 bg-gray-100 mb-6"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-[#A87B23] to-[#FAE151] rounded-full mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-semibold text-black mb-2">
              Stem Cell Derived Exosomes
            </h3>
            <p className="text-gray-600 text-sm">
              Advanced cellular regeneration technology
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-full h-1 bg-gray-100 mb-6"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-[#A87B23] to-[#FAE151] rounded-full mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-semibold text-black mb-2">
              Accelerated Hair Growth
            </h3>
            <p className="text-gray-600 text-sm">
              Promotes natural follicle regeneration
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-full h-1 bg-gray-100 mb-6"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-[#A87B23] to-[#FAE151] rounded-full mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-semibold text-black mb-2">
              Enhanced Follicle Health & Vitality
            </h3>
            <p className="text-gray-600 text-sm">
              Comprehensive scalp rejuvenation
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-full h-1 bg-gray-100 mb-6"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-[#A87B23] to-[#FAE151] rounded-full mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-semibold text-black mb-2">
              Minimally Invasive Procedure
            </h3>
            <p className="text-gray-600 text-sm">
              Quick recovery with maximum results
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #A87B23 0%, #FAE151 50%, #625046 100%)'
        }}
      >
        <div className="max-w-sm mx-auto">
          <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
            Transform Your Hair with Exosomes
          </h2>

          <Button className="bg-white text-black rounded-full px-8 py-4 text-base font-medium hover:bg-gray-100 transition-colors mb-8">
            Book Consultation
          </Button>

          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-black font-bold text-xl">N</span>
          </div>

          <p className="text-black text-base font-medium">
            Schedule your personalized consultation and discover the future of hair restoration
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-sm mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#A87B23] via-[#FAE151] to-[#625046] bg-clip-text text-transparent">
            How Does Exosomes Treatment Work?
          </h2>

          <div className="space-y-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Exosomes are extracted from stem cells and prepared for treatment
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Our advanced laboratory techniques ensure the highest quality exosomes for optimal therapeutic results.
              </p>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <p className="text-black text-sm font-medium">
                  Administered via precise injection into treatment areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimers */}
      <section className="py-8 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-sm mx-auto">
          <div className="space-y-4 text-xs text-gray-500">
            <p>
              * Exosomes therapy is an innovative regenerative treatment that uses naturally occurring cellular messengers to promote healing and tissue regeneration.
            </p>
            <p>
              ** Individual results may vary. Consultation required to determine treatment suitability.
            </p>
            <p>
              † All exosomes used in treatment are sourced from FDA-compliant laboratories and meet stringent quality standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}