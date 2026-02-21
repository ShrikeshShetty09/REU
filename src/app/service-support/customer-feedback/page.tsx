"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const feedbackTypes = [
  {
    id: "product",
    title: "Product Feedback",
    icon: "📦",
    description: "Share your experience with our products",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "service",
    title: "Service Feedback",
    icon: "🔧",
    description: "Tell us about our service quality",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "support",
    title: "Support Experience",
    icon: "💬",
    description: "Rate your support interaction",
    color: "from-purple-500 to-pink-600",
  },
];

const ratingQuestions = [
  "Overall satisfaction with our products/services",
  "Quality of customer support received",
  "Ease of doing business with us",
  "Value for money",
  "Likelihood to recommend us to others",
];

export default function CustomerFeedbackPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    feedback: "",
    suggestions: "",
  });

  const handleRating = (question: string, rating: number) => {
    setRatings({ ...ratings, [question]: rating });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/service-support" className="inline-flex items-center text-green-600 hover:text-green-800">
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Customer Feedback
          </h1>
          <p className="text-xl text-gray-600">
            Your feedback is invaluable to us! Help us improve your experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Feedback Types */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Feedback Type</h2>
            <div className="space-y-4">
              {feedbackTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedType === type.id
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 bg-white hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{type.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{type.title}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  {selectedType === type.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`mt-3 h-1 bg-gradient-to-r ${type.color} rounded-full`}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Share Your Experience</h2>
              
              <form className="space-y-6">
                {/* Personal Information */}
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="Enter your email address"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter your company name"
                  />
                </motion.div>

                {/* Rating Questions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Rate Your Experience</h3>
                  {ratingQuestions.map((question) => (
                    <motion.div
                      key={question}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-gray-50 rounded-xl"
                    >
                      <p className="text-sm font-medium text-gray-700 mb-3">{question}</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <motion.button
                            key={rating}
                            type="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleRating(question, rating)}
                            className={`text-3xl transition-all duration-200 ${
                              (ratings[question] || 0) >= rating
                                ? "text-yellow-400 drop-shadow-sm"
                                : "text-gray-300/30 hover:text-yellow-300/50"
                            }`}
                          >
                            ⭐
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all resize-none"
                    placeholder="Share your detailed feedback here..."
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Suggestions for Improvement</label>
                  <textarea
                    rows={3}
                    value={formData.suggestions}
                    onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all resize-none"
                    placeholder="How can we serve you better?"
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Submit Feedback
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
