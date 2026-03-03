"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const supportOptions = [
  {
    id: "product-enquiry",
    title: "Product Enquiry",
    description: "Have questions about our products?",
    icon: "🔍",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "customer-feedback",
    title: "Customer Feedback",
    description: "Your feedback is invaluable to us!",
    icon: "💬",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: "service-request",
    title: "Service Request",
    description: "Need assistance with one of our services?",
    icon: "🛠️",
    gradient: "from-orange-500 to-red-600",
  },
];

export default function ServiceSupportPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<"compressor" | "gas-detection" | null>(null);

  // Prevent background scrolling when overlay is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (activeService) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeService]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/serviceandsupportbg.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex items-center justify-center px-6 py-24"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            >
              Looking for Help?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-16 drop-shadow-lg"
            >
              We're Here for You
              <br />
              <span className="text-lg md:text-xl text-white/80">
                At REU Engineering, your satisfaction is our priority. Reach out anytime—we're always ready to help!
              </span>
            </motion.p>

            {/* Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(option.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative group ${
                    index === 0 ? '-mt-8' : index === 2 ? '-mt-8' : 'mt-0'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 cursor-pointer transition-all duration-300 ${
                      hoveredCard === option.id ? "shadow-2xl" : "shadow-lg"
                    }`}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-20`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        animate={{
                          rotate: hoveredCard === option.id ? 360 : 0,
                          scale: hoveredCard === option.id ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl mb-4 text-center"
                      >
                        {option.icon}
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 text-center">
                        {option.title}
                      </h3>
                      
                      <p className="text-white/80 text-center mb-6">
                        {option.description}
                      </p>
                      
                      <Link href={`/service-support/${option.id}`}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`inline-block w-full py-3 px-6 rounded-full bg-gradient-to-r ${option.gradient} text-white font-semibold text-center shadow-lg`}
                        >
                          Click Here
                        </motion.div>
                      </Link>
                    </div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === option.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services container */}
        <section id="services" className="bg-black/60 px-6 pb-20 pt-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[32px] border border-white/30 bg-black/40 p-8">
            <div className="space-y-2 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ffb6ff]">Services</p>
              <h2 className="text-2xl font-bold">Field and lifecycle services from REU</h2>
              <p className="text-sm text-white/80">
                Engage our teams for compressor and gas detection programs, from new supply to ongoing maintenance and
                upgrades.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setActiveService("compressor")}
                className="rounded-[28px] border border-white/30 bg-white/10 p-6 text-left text-sm text-white/90 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <h3 className="text-lg font-semibold">Compressor Service, Supply and Spares</h3>
              </button>
              <button
                type="button"
                onClick={() => setActiveService("gas-detection")}
                className="rounded-[28px] border border-white/30 bg-white/10 p-6 text-left text-sm text-white/90 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <h3 className="text-lg font-semibold">Gas Detection System</h3>
              </button>
            </div>
          </div>
        </section>

        {activeService && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          >
            <div
              className={`relative w-full max-w-5xl max-h-[75vh] md:max-h-[60vh] overflow-y-auto rounded-[32px] border border-white/20 bg-black/80 p-6 text-white shadow-2xl max-md:[&::-webkit-scrollbar]:hidden max-md:scrollbar-hide ${
                activeService === "gas-detection" ? "mt-10 md:mt-0" : "mt-8 md:mt-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-black shadow-lg"
                onClick={() => setActiveService(null)}
                aria-label="Close"
              >
                ✕
              </button>

              {activeService === "compressor" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Compressor Service, Supply and Spares</h3>
                  <p className="text-sm text-white/80">
                    Support covering compressor selection, supply and lifecycle care for air and gas systems, aligned to
                    energy and reliability objectives.
                  </p>
                  <div className="grid gap-3 md:gap-4 md:grid-cols-2">
                    {["/images/compressor/1-hp-110-liter-reciprocating-air-compressor.jpg","/images/compressor/7.5 HP.jpg","/images/compressor/SC-50.png","/images/compressor/TC300.jpg"].map((src) => (
                      <div key={src} className="relative h-28 md:h-32 w-full overflow-hidden rounded-2xl bg-white/10">
                        <Image src={src} alt="Compressor" fill className="object-contain" sizes="(max-width:768px) 100vw, 50vw" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeService === "gas-detection" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Gas Detection System</h3>
                  <p className="text-sm text-white/80">
                    Fixed gas detection solutions including sensors, controllers and alarms with commissioning and
                    ongoing calibration / AMC support.
                  </p>
                  <div className="grid gap-3 md:gap-4 md:grid-cols-2">
                    {["/images/products/Gas detector system.png","/images/products/gas_detection1.png","/images/products/gas_detection2.png","/images/products/gas_detection3.png","/images/products/gas_detection4.png"].map((src) => (
                      <div key={src} className="relative h-28 md:h-32 w-full overflow-hidden rounded-2xl bg-white/10">
                        <Image src={src} alt="Gas Detection" fill className="object-contain" sizes="(max-width:768px) 100vw, 50vw" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
