
import React from 'react';
import { Button } from '@/components/ui/button';

export default function FueHeader() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f5f7] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#A87B23] via-[#FAE151] to-[#625046] bg-clip-text text-transparent">
            FUE Hair Transplant
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Advanced follicular unit extraction for natural-looking results
          </p>
          <Button className="bg-gradient-to-r from-[#A87B23] to-[#FAE151] text-black font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
