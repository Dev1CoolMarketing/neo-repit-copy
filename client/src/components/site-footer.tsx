import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { smoothScrollTo, NEO_LOGO_WHITE } from "@/lib/utils";

// Footer data with comprehensive navigation and premium organization
const treatments = [
  { name: "FUE Hair Transplant", href: "/fue", description: "Surgical restoration" },
  { name: "Growth Factors", href: "/growth-factors", description: "PRP therapy" },
  { name: "Hypersomes", href: "/treatments#lllt", description: "Advanced regeneration" },
  { name: "Scalp Micropigmentation", href: "/treatments#smp", description: "Cosmetic tattooing" },
  { name: "VIP Membership", href: "/vip-membership", description: "Premium care program" },
];

const resources = [
  { name: "Before & After Gallery", href: "/#treatments" },
  { name: "Hair Loss Science", href: "/#science" },
  { name: "Patient Testimonials", href: "/#testimonials" },
  { name: "Educational Resources", href: "/#faq" },
  { name: "Clinical Research", href: "/research" },
];

const locations = [
  "Irvine Spectrum Center",
  "El Segundo Medical Plaza", 
  "Encinitas Coastal Clinic",
  "Palm Desert Resort District",
  "Temecula Wine Country"
];

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#32d74b]/5 via-transparent to-[#32d74b]/5" />
      
      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Hero section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={NEO_LOGO_WHITE} 
              alt="Dr. NEO Logo" 
              className="h-12 mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.h2 
              className="text-3xl md:text-4xl font-[800] mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-[#32d74b] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform Your Confidence
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto font-[500] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              SoCal's premier hair restoration clinic - where cutting-edge science meets personalized care for natural, lasting results.
            </motion.p>
          </motion.div>

          {/* Navigation grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Treatments Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-[700] mb-6 text-[#32d74b]">Advanced Treatments</h3>
              <ul className="space-y-4">
                {treatments.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <motion.a
                      href={item.href}
                      className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowUpRight className="w-4 h-4 mt-0.5 text-[#32d74b] group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-[600] text-base">{item.name}</div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{item.description}</div>
                      </div>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-[700] mb-6 text-[#32d74b]">Resources</h3>
              <ul className="space-y-4">
                {resources.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <motion.a
                      href={item.href}
                      className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#32d74b] group-hover:scale-110 transition-transform" />
                      <span className="font-[500]">{item.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Locations Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-[700] mb-6 text-[#32d74b]">Locations</h3>
              <ul className="space-y-4">
                {locations.map((location, index) => (
                  <motion.li 
                    key={index}
                    className="text-gray-300 font-[500] flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <MapPin className="w-4 h-4 text-[#32d74b] flex-shrink-0" />
                    <span>{location}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-[700] mb-6 text-[#32d74b]">Contact</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-4 h-4 text-[#32d74b] flex-shrink-0" />
                  <span className="font-[600] text-lg">(949) 570-0500</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Mail className="w-4 h-4 text-[#32d74b] flex-shrink-0" />
                  <span className="font-[500]">team@drvigor.com</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Clock className="w-4 h-4 text-[#32d74b] flex-shrink-0" />
                  <span className="font-[500]">Mon-Fri: 9AM-6PM</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Social Media & CTA Section */}
          <motion.div 
            className="border-t border-gray-800 pt-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-[500]">Follow our journey:</span>
                <motion.a
                  href="#"
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#32d74b] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-[600]">@drneo.hair</span>
                </motion.a>
              </div>
              
              <motion.button 
                className="bg-gradient-to-r from-[#32d74b] to-[#28a745] text-white px-8 py-4 rounded-2xl font-[600] text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom footer */}
        <motion.div 
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm font-[500]">
              © 2025 Dr. Neo Hair Restoration. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-[#32d74b] transition-colors font-[500]"
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-[#32d74b] transition-colors font-[500]"
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-[#32d74b] transition-colors font-[500]"
                whileHover={{ y: -1 }}
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}