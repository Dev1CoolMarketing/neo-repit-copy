import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ChevronRight } from "lucide-react";

const GrowthFactorsHeader = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#E8F5E8] via-[#F0F8F0] to-[#F8F9FA] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2D5A27] rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#5B8A52] rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-[#2D5A27] rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#2D5A27]/20">
                  <span className="text-[#2D5A27] font-semibold text-sm">
                    ✨ Natural Hair Regeneration
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#2D5A27] to-[#5B8A52] bg-clip-text text-transparent">
                    Growth Factors
                  </span>
                  <br />
                  <span className="text-gray-900">
                    Hair Restoration
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Harness your body's natural healing power with advanced PRP therapy. 
                  Stimulate hair growth using your own concentrated growth factors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2D5A27] rounded-full"></div>
                    <span className="text-gray-700">100% Natural Treatment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2D5A27] rounded-full"></div>
                    <span className="text-gray-700">Minimal Downtime</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2D5A27] rounded-full"></div>
                    <span className="text-gray-700">Clinically Proven</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2D5A27] rounded-full"></div>
                    <span className="text-gray-700">Safe & Effective</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-[#2D5A27] hover:bg-[#1F3D1B] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27] hover:text-white px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2D5A27]/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#2D5A27]">30-45min</div>
                    <div className="text-sm text-gray-600">Treatment Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#2D5A27]">3-4mo</div>
                    <div className="text-sm text-gray-600">Initial Results</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#2D5A27]">95%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative w-80 h-96 md:w-96 md:h-[480px] bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-white">
                  {/* PRP Tubes Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((tube, index) => (
                        <motion.div
                          key={tube}
                          className="flex flex-col items-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.2 }}
                        >
                          <div className="w-16 h-32 bg-gradient-to-b from-[#FFCCCC] to-[#FF6B6B] rounded-full relative shadow-lg">
                            <div className="absolute top-0 w-full h-4 bg-gray-300 rounded-t-full"></div>
                            <div className="absolute bottom-0 w-full h-8 bg-[#FFD700] rounded-b-full opacity-80"></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">Tube {tube}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6">
                    <div className="w-3 h-3 bg-[#2D5A27] rounded-full opacity-60"></div>
                  </div>
                  <div className="absolute top-12 right-8">
                    <div className="w-2 h-2 bg-[#5B8A52] rounded-full opacity-40"></div>
                  </div>
                  <div className="absolute bottom-20 left-8">
                    <div className="w-4 h-4 bg-[#2D5A27] rounded-full opacity-30"></div>
                  </div>
                </div>

                {/* Floating Info Cards */}
                <motion.div
                  className="absolute -left-4 top-16 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <div className="text-xs font-semibold text-[#2D5A27]">PRP Processing</div>
                  <div className="text-xs text-gray-600">Centrifuge: 3000 RPM</div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 bottom-24 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="text-xs font-semibold text-[#2D5A27]">Growth Factors</div>
                  <div className="text-xs text-gray-600">Concentrated 5x</div>
                </motion.div>

                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2D5A27]/10 to-[#5B8A52]/10 rounded-3xl blur-xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default GrowthFactorsHeader;