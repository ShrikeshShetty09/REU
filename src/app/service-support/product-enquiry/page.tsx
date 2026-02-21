"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const allProducts = [
  "Pressure Reducing Systems",
  "High Pressure Regulators",
  "High Pressure Cylinder Cascade",
  "Gas Detection System",
  "Centrifugal Blanketing",
  "Gas Pipeline",
  "Back Pressure Valve",
  "Gas Purification System",
  "Downstream Pressure Control Valves",
  "Temperature Detection System",
  "Breather Valves & Flame Arresters",
  "Compressor Supply, Service & Spare",
  "Safety Valves",
  "Mini Gas Station",
  "Ball Valves & Non Return Valves etc.",
  "Utility & Lab Fume Hood Piping",
];

const productCategories = [
  {
    id: "pressure-control",
    title: "Pressure Control Systems",
    icon: "🎛️",
    items: ["Pressure Reducing Systems", "High Pressure Regulators", "Back Pressure Valve", "Downstream Pressure Control Valves"],
  },
  {
    id: "safety",
    title: "Safety Equipment",
    icon: "🛡️",
    items: ["Safety Valves", "Breather Valves & Flame Arresters"],
  },
  {
    id: "gas-handling",
    title: "Gas Handling",
    icon: "⚗️",
    items: ["Gas Detection System", "Gas Purification System", "Gas Pipeline", "High Pressure Cylinder Cascade"],
  },
  {
    id: "utility",
    title: "Utility Systems",
    icon: "⚙️",
    items: ["Compressor Supply, Service & Spare", "Mini Gas Station", "Utility & Lab Fume Hood Piping", "Ball Valves & Non Return Valves etc."],
  },
  {
    id: "specialized",
    title: "Specialized Equipment",
    icon: "🔬",
    items: ["Centrifugal Blanketing", "Temperature Detection System"],
  },
];

export default function ProductEnquiryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/service-support" className="inline-flex items-center text-purple-600 hover:text-purple-800">
            ← Back to Support
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Product Enquiry
          </h1>
          <p className="text-xl text-gray-600">
            Have questions about our products? Our experts are here to help you find the perfect solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Product Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Categories</h2>
            <div className="space-y-4">
              {productCategories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedCategory === category.id
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 bg-white hover:border-purple-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.items.length} products</p>
                    </div>
                  </div>
                  {selectedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 space-y-2"
                    >
                      {category.items.map((item) => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="product"
                            value={item}
                            checked={formData.product === item}
                            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                            className="text-purple-600"
                          />
                          <span className="text-sm text-gray-700">{item}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Your Enquiry</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                      placeholder="Enter your company name"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product of Interest *</label>
                  <input
                    type="text"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="Select from categories or enter product name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                    placeholder="Describe your requirements in detail..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Submit Enquiry
                </motion.button>
              </form>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Immediate Assistance?</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    📞 Call us: <a href="tel:+919987092470" className="text-purple-600 hover:underline">+91 99870 92470</a>
                  </p>
                  <p className="text-gray-600">
                    ✉️ Email: <a href="mailto:rahulukey2004@gmail.com" className="text-purple-600 hover:underline">rahulukey2004@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
