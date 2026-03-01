"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { databases, ID } from "@/lib/appwriteBrowser";

const serviceTypes = [
  {
    id: "maintenance",
    title: "Maintenance Service",
    icon: "🔧",
    description: "Regular maintenance and calibration",
    urgency: "Medium",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "emergency",
    title: "Emergency Support",
    icon: "🚨",
    description: "Urgent technical assistance required",
    urgency: "High",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "installation",
    title: "Installation Support",
    icon: "⚙️",
    description: "New equipment setup and commissioning",
    urgency: "Low",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "training",
    title: "Training & Support",
    icon: "📚",
    description: "Operator training and documentation",
    urgency: "Low",
    color: "from-purple-500 to-pink-600",
  },
];

const urgencyLevels = [
  { level: "Low", color: "bg-green-100 text-green-800", description: "Within 2-3 business days" },
  { level: "Medium", color: "bg-yellow-100 text-yellow-800", description: "Within 24 hours" },
  { level: "High", color: "bg-red-100 text-red-800", description: "Within 4-6 hours" },
  { level: "Critical", color: "bg-red-200 text-red-900", description: "Immediate response" },
];

export default function ServiceRequestPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [urgency, setUrgency] = useState("Medium");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    equipment: "",
    issueDescription: "",
    preferredDate: "",
    preferredTime: "",
    address: "",
  });

  const selectedServiceData = serviceTypes.find((s) => s.id === selectedService);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string | undefined;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_SERVICE_COLLECTION_ID as string | undefined;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!databaseId || !collectionId) {
      setError("Form storage is not configured.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await databases.createDocument(databaseId, collectionId, ID.unique(), {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        equipment: formData.equipment,
        issueDescription: formData.issueDescription,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        address: formData.address,
        serviceType: selectedService,
        urgency,
      });
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        equipment: "",
        issueDescription: "",
        preferredDate: "",
        preferredTime: "",
        address: "",
      });
      setSelectedService(null);
      setUrgency("Medium");
    } catch (err: any) {
      console.error(err);
      setError("Failed to submit request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/service-support" className="inline-flex items-center text-orange-600 hover:text-orange-800">
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Service Request
          </h1>
          <p className="text-xl text-gray-600">
            Need assistance with one of our services? We're here to help you get the support you need.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Service Types */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Type</h2>
            <div className="space-y-4">
              {serviceTypes.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedService === service.id
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 bg-white hover:border-orange-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{service.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      <span className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${
                        service.urgency === "High" ? "bg-red-100 text-red-800" :
                        service.urgency === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {service.urgency} Priority
                      </span>
                    </div>
                  </div>
                  {selectedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`mt-3 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Urgency Selection */}
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-white rounded-2xl border border-gray-200"
              >
                <h3 className="font-semibold text-gray-800 mb-3">Request Urgency</h3>
                <div className="space-y-2">
                  {urgencyLevels.map((level) => (
                    <label key={level.level} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={level.level}
                        checked={urgency === level.level}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="text-orange-600"
                      />
                      <div className="flex-1">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${level.color}`}>
                          {level.level}
                        </span>
                        <p className="text-xs text-gray-600 mt-1">{level.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Content - Service Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Submit Service Request</h2>

              {selectedServiceData && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${selectedServiceData.color} text-white`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedServiceData.icon}</span>
                    <div>
                      <h3 className="font-semibold">{selectedServiceData.title}</h3>
                      <p className="text-sm opacity-90">{selectedServiceData.description}</p>
                    </div>
                  </div>
                </motion.div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Equipment/Service Details *</label>
                  <input
                    type="text"
                    required
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                    placeholder="Enter equipment or service details"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Issue Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.issueDescription}
                    onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                    placeholder="Describe the issue or service requirement in detail..."
                  />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <input
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Location *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                    placeholder="Enter complete service address..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : submitted ? "Submitted" : "Submit Service Request"}
                </motion.button>
                {error && <p className="text-xs text-red-600">{error}</p>}
                {!error && submitted && (
                  <p className="text-xs text-green-600">
                    Your service request has been submitted successfully. Our support team will reach out to you soon.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
