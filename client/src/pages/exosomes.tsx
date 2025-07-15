
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Component for icons (simplified from the Figma export)
function ExosomeIcon() {
  return (
    <svg width="51" height="75" viewBox="0 0 51 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25.5" cy="37.5" r="20" fill="var(--color-gold)" stroke="var(--color-gold-dark)" strokeWidth="2"/>
      <circle cx="25.5" cy="37.5" r="12" fill="none" stroke="var(--color-gold-dark)" strokeWidth="1" strokeDasharray="2,2"/>
      <circle cx="25.5" cy="37.5" r="6" fill="var(--color-gold-dark)"/>
    </svg>
  );
}

export default function ExosomesPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Main Content */}
      <div className="bg-white flex flex-col justify-start items-start gap-0 w-full">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center w-full min-h-[1603px] px-0 py-[75px] overflow-hidden">
          <div className="flex flex-col items-start gap-[75px] w-full max-w-[692px] px-6">
            
            {/* Main Heading Container */}
            <div className="w-full h-[776px]">
              <div className="flex flex-col justify-center items-start w-full h-[352px] px-0 py-4">
                <div className="flex flex-col items-start w-full">
                  <h1 className="text-[clamp(48px,8vw,80px)] font-semibold leading-[1.05] tracking-[-1.2px] bg-gradient-to-r from-[#A87B23] via-[#FAE151] to-[#625046] bg-clip-text text-transparent">
                    Revolutionary Exosomes
                    Treatment for Enhanced
                    Healing & Regeneration
                  </h1>
                </div>
              </div>
              
              {/* Subtitle */}
              <div className="flex flex-col justify-center items-start w-full h-[76px] px-0 py-5">
                <div className="w-full">
                  <p className="text-black text-2xl font-semibold leading-7 text-left w-full max-w-[381px]">
                    Harness the power of cellular regeneration with our advanced exosomes therapy
                  </p>
                  <div className="inline-flex items-start">
                    <span className="text-black text-xs font-semibold leading-4 tracking-[-0.36px]">*</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="flex flex-col items-start w-full h-[348px] px-0 py-[62px]">
                <div 
                  className="w-full h-[286px] bg-center bg-cover bg-no-repeat rounded-lg"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(168, 123, 35, 0.1), rgba(168, 123, 35, 0.1)), url(/assets/MICRONEEDLING PEN 3D MODEL 1.png)',
                    backgroundColor: '#f5f5f7'
                  }}
                />
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="w-full h-[652px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                
                {/* Feature 1 */}
                <Card className="flex flex-col justify-center items-start w-full h-[308px] p-6 border-none shadow-sm">
                  <div className="flex flex-col items-start gap-[30px] w-full">
                    <div className="w-full h-1 bg-[#f2f2f2]"></div>
                    <div className="flex flex-col items-start gap-4 w-full">
                      <ExosomeIcon />
                      <div className="flex flex-col items-start w-full">
                        <h3 className="text-black text-[32px] font-semibold leading-9 tracking-[0.128px]">
                          Stem Cell Derived Exosomes
                        </h3>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Feature 2 */}
                <Card className="flex flex-col justify-center items-start w-full h-[308px] p-6 border-none shadow-sm">
                  <div className="flex flex-col items-start gap-[30px] w-full">
                    <div className="w-full h-1 bg-[#f2f2f2]"></div>
                    <div className="flex flex-col items-start gap-4 w-full">
                      <ExosomeIcon />
                      <div className="flex flex-col items-start w-full">
                        <h3 className="text-black text-[32px] font-semibold leading-9 tracking-[0.128px]">
                          Accelerated Hair Growth
                        </h3>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Feature 3 */}
                <Card className="flex flex-col justify-center items-start w-full h-[343px] p-6 border-none shadow-sm">
                  <div className="flex flex-col items-start gap-[30px] w-full">
                    <div className="w-full h-1 bg-[#f2f2f2]"></div>
                    <div className="flex flex-col items-start gap-4 w-full">
                      <ExosomeIcon />
                      <div className="w-full h-[144px]">
                        <h3 className="text-black text-[32px] font-semibold leading-9 tracking-[0.128px] flex flex-col justify-center w-full h-full">
                          Enhanced Follicle Health & Vitality
                        </h3>
                        <div className="inline-flex items-start">
                          <span className="text-black text-xs font-semibold leading-4 tracking-[-0.12px]">**</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Feature 4 */}
                <Card className="flex flex-col justify-center items-start w-full h-[343px] p-6 border-none shadow-sm">
                  <div className="flex flex-col items-start gap-[30px] w-full">
                    <div className="w-full h-1 bg-[#f2f2f2]"></div>
                    <div className="flex flex-col items-start gap-4 w-full">
                      <ExosomeIcon />
                      <div className="flex flex-col items-start w-full">
                        <h3 className="text-black text-[32px] font-semibold leading-9 tracking-[0.128px]">
                          Minimally Invasive Procedure
                        </h3>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="relative flex flex-col items-start w-full h-[1536px]">
          <div 
            className="flex justify-center items-center w-full h-[1536px] px-0 py-[520px]"
            style={{
              background: 'linear-gradient(135deg, #A87B23 0%, #FAE151 50%, #625046 100%)'
            }}
          >
            <div className="w-[692px] h-[570px]">
              <div className="flex flex-wrap justify-center items-start w-[692px]">
                <div className="flex flex-col items-start max-w-[576px] w-[576px]">
                  <div className="flex flex-col items-center w-full">
                    <h2 className="text-black text-center text-[72px] font-semibold leading-[76px] tracking-[-0.864px]">
                      Transform Your Hair with Exosomes
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-start w-[692px] mt-8">
                <Button className="min-w-[62px] bg-white border-0 rounded-full flex flex-col items-center px-4 py-2">
                  <span className="text-black text-center text-sm font-normal leading-[18px] tracking-[-0.224px]">
                    Book Consultation
                  </span>
                </Button>
              </div>
              <div 
                className="w-[78px] h-[78px] bg-center bg-cover bg-no-repeat rounded-full mx-auto mt-8"
                style={{
                  backgroundImage: 'url(/assets/NEO LOGO WHITE.png)',
                  backgroundColor: '#d3d3d3'
                }}
              />
              <div className="flex flex-wrap justify-center items-start w-[692px] min-h-[84px] mt-6">
                <div className="flex flex-col items-start max-w-[519px] w-[519px]">
                  <div className="w-full h-[56px]">
                    <h3 className="text-black text-center text-2xl font-semibold leading-7 tracking-[0.216px] flex flex-col justify-center w-full h-7">
                      Schedule your personalized consultation
                    </h3>
                    <p className="text-black text-center text-2xl font-semibold leading-7 tracking-[0.216px] flex flex-col justify-center w-full h-7">
                      and discover the future of hair restoration
                    </p>
                    <div className="justify-center items-start inline-flex">
                      <span className="text-black text-center text-[14.4px] font-semibold leading-[16.8px] tracking-[0.216px]">
                        ***
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="bg-[#f5f5f7] flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-[692px] px-0 py-[100px]">
            <div className="flex flex-col items-center max-w-[576px] w-[576px]">
              <h2 className="text-center text-[64px] font-semibold leading-[68px] tracking-[-0.576px] bg-gradient-to-r from-[#A87B23] via-[#FAE151] to-[#625046] bg-clip-text text-transparent">
                How Does Exosomes Treatment Work?
              </h2>
            </div>
            
            {/* Process Steps */}
            <div className="flex flex-wrap justify-start items-start gap-0 w-full min-h-[2593px] pt-[75px]">
              <div className="flex flex-col items-start w-[288px] max-w-[320px] h-[646px]">
                <div className="relative flex flex-col items-start w-[460px]">
                  {/* Placeholder for process images */}
                  <div className="bg-[#d3d3d3] rounded-lg w-[460px] h-[646px] bg-center bg-cover bg-no-repeat" />
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-start max-w-[403px] w-[403px]">
                <div className="flex flex-col items-start max-w-[346px] w-full px-0 py-8">
                  <div className="flex flex-col justify-center items-start gap-4 w-full">
                    <div className="flex flex-col items-start w-[346px]">
                      <h3 className="text-black text-[40px] font-semibold leading-[44px]">
                        Exosomes are extracted from stem cells and prepared for treatment
                      </h3>
                    </div>
                    <div className="flex justify-start items-start gap-0 w-[341px] h-[100px]">
                      <p className="text-black text-[21px] font-semibold leading-[25px] flex flex-col justify-center w-[315px] h-[100px]">
                        Our advanced laboratory techniques ensure the highest quality exosomes for optimal therapeutic results.
                      </p>
                      <div className="inline-flex items-start">
                        <span className="text-black text-[12.6px] font-semibold leading-[15px]">†</span>
                      </div>
                    </div>
                    
                    {/* Treatment Steps */}
                    <div className="flex items-center">
                      <div className="flex flex-col items-start w-[56px] h-[41px] pr-[15px]">
                        <div className="bg-[#d3d3d3] w-[41px] h-[41px] bg-center bg-cover bg-no-repeat rounded-full" />
                      </div>
                      <div className="flex flex-col items-start pr-10">
                        <div className="relative flex flex-col items-start pr-5">
                          <p className="text-black tracking-[-0.51px] text-[17px] font-semibold leading-[22px]">
                            Administered via precise injection into treatment areas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Disclaimers */}
        <div className="min-w-[320px] bg-[#f5f5f7] flex flex-col items-start w-full overflow-hidden">
          <div className="max-w-[1012px] w-full">
            <div className="border-b border-[#00000029] flex flex-col items-start w-full px-0 py-4">
              <div className="flex flex-col items-start w-full pb-2">
                <span className="text-[#0000008f] text-xs font-normal leading-4 tracking-[-0.12px]">
                  *** Individual results may vary. Consultation required to determine treatment suitability.
                </span>
              </div>
              
              <div className="flex flex-col items-start w-full px-4">
                <div className="w-full">
                  <p className="text-[#0000008f] text-xs font-normal leading-4 tracking-[-0.12px] w-full">
                    * Exosomes therapy is an innovative regenerative treatment that uses naturally occurring cellular messengers to promote healing and tissue regeneration. 
                    This treatment is designed to enhance hair follicle health and stimulate natural growth processes. Results may vary based on individual factors including age, 
                    health status, and extent of hair loss. Treatment protocols are customized for each patient following comprehensive evaluation.
                  </p>
                  
                  <p className="text-[#0000008f] text-xs font-normal leading-4 tracking-[-0.12px] w-full mt-4">
                    ** Clinical studies have shown promising results for exosomes in promoting hair growth and follicle regeneration. However, individual outcomes may differ. 
                    Multiple treatment sessions may be required for optimal results. Our medical team will provide detailed information about expected outcomes during your consultation.
                  </p>
                  
                  <p className="text-[#0000008f] text-xs font-normal leading-4 tracking-[-0.12px] w-full mt-4">
                    † All exosomes used in treatment are sourced from FDA-compliant laboratories and meet stringent quality standards. Treatment is performed in a clinical setting 
                    by licensed medical professionals. Potential side effects and contraindications will be discussed during consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
