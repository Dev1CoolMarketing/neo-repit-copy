
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

export default function LocationsSection() {
  return (
    <section className="py-12 md:py-16 bg-neutral-50">
      <div className="container mx-auto px-6 section-fade">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center justify-items-center md:grid-cols-2">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Southern California Locations</h2>
              <p className="text-neutral-600">
                Dr. NEO provides world-class hair restoration services at three convenient locations 
                throughout Southern California.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-center justify-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">SOUTHERN CALIFORNIA LOCATIONS</p>
                    <p className="font-medium text-lg">Irvine · Long Beach · San Diego</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">CALL US</p>
                    <p className="font-medium text-lg">(949) 570-0800</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => smoothScrollTo('contact')}
                className="mx-auto flex items-center justify-center bg-[#FAE151] hover:bg-[#f5d93a] text-neutral-900 py-3 px-6 rounded-3xl font-medium mt-4"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/assets/IRVINE SPECTRUM.png" 
                alt="Irvine Spectrum Location" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Our Flagship Location</h3>
                <p className="text-neutral-600 text-sm">
                  Visit our premier facility at the Irvine Spectrum featuring state-of-the-art technology 
                  and expert staff dedicated to your hair restoration journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
