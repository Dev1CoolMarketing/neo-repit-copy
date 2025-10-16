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
import { Link } from "wouter";
import { smoothScrollTo, NEO_LOGO_WHITE } from "@/lib/utils";
import BadgeGrid from "./badges";

// Simplified footer data
const treatments = [
  { name: "FUE Hair Transplant", href: "/fue" },
  { name: "Growth Factors", href: "/growth-factors" },
  { name: "VIP Membership", href: "/vip-membership" },
];

const resources = [
  { name: "Before & After Gallery", href: "/#treatments" },
  { name: "Patient Testimonials", href: "/#testimonials" },
  { name: "Educational Resources", href: "/#faq" },
  { name: "FAQ", href: "/faq" },
];

const legal = [
  { name: "Accessibility", href: "/accessibility" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/terms-of-use" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white relative overflow-hidden">
      {/* Minimal brand accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAE151]/8 via-transparent to-[#FAE151]/5" />
      
      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Simplified hero section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={NEO_LOGO_WHITE}
              alt="Dr. NEO"
              className="h-6 w-auto mx-auto mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Your Hair Journey Starts Here
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              8,500+ successful procedures
            </p>
            
            <motion.button
              onClick={() => smoothScrollTo('contact')}
              className="group bg-[#FAE151] hover:bg-[#f5d93a] text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                Book Consultation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
                <BadgeGrid />


          {/* Simplified navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Treatments Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[#FAE151]">Treatments</h3>
              <ul className="space-y-3">
                {treatments.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-[#FAE151] transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
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
              <h3 className="text-lg font-semibold mb-4 text-[#FAE151]">Resources</h3>
              <ul className="space-y-3">
                {resources.map((item) => {
                  const isHashLink = item.href.includes("#");
                  const linkClasses =
                    "text-gray-300 hover:text-[#FAE151] transition-colors duration-300 text-sm";

                  return (
                    <li key={item.name}>
                      {isHashLink ? (
                        <a href={item.href} className={linkClasses}>
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.href} className={linkClasses}>
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Legal Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[#FAE151]">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-[#FAE151] transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[#FAE151]">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-4 h-4 text-[#FAE151]" />
                  <a href="tel:+1949570500"className="underline cursor-pointer">(949) 570-0800</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4 text-[#FAE151]" />
                  <a  href="mailto:team@drvigor.com" className="underline cursor-pointer">team@drvigor.com</a>
                </div>
                <div className="flex items-start space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-[#FAE151] mt-0.5" />
                  <span onClick={()=> smoothScrollTo('contact')} className="underline cursor-pointer">Multiple SoCal Locations</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#FAE151] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FAE151] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FAE151] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div> */}
              <div className="text-sm text-gray-400">
                © 2025 Dr. Neo Hair Restoration. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
