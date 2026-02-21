"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const opportunity = {
  title: "Sales Engineer",
  description: "Drive business growth through technical sales and client relationship management",
  image: "/images/careers/sales.jpg",
  responsibilities: [
    "Identify and develop new business opportunities",
    "Provide technical solutions to clients",
    "Prepare proposals and quotations",
    "Maintain client relationships",
    "Achieve sales targets",
    "Conduct product demonstrations",
    "Negotiate contracts and agreements",
    "Market analysis and competitor research"
  ],
  education: "Bachelor's degree in Engineering or Business",
  experience: "2-4 years in technical sales preferred",
  skills: [
    "Technical knowledge of industrial products",
    "Sales and negotiation skills",
    "Communication and presentation abilities",
    "Client relationship management",
    "Market analysis",
    "CRM software proficiency",
    "Business development",
    "Technical problem-solving"
  ],
  benefits: [
    "Competitive salary + commission structure",
    "Performance incentives",
    "Company vehicle allowance",
    "Health insurance coverage",
    "Sales training programs",
    "Career advancement opportunities"
  ]
};

export default function SalesEngineerPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <main className="space-y-16 pb-24 pt-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/company/careers" className="inline-flex items-center text-[#a605c7] hover:text-[#5d075f] mb-6">
              ← Back to Careers
            </Link>
            
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#a605c7]">Career Opportunity</p>
            <h1 className="mt-3 text-4xl font-bold text-[#2b0030]">{opportunity.title}</h1>
            <p className="mt-4 text-base text-foreground/70">{opportunity.description}</p>
            
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-semibold text-[#a605c7]">Education</p>
                <p className="text-base text-foreground/80">{opportunity.education}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#a605c7]">Experience</p>
                <p className="text-base text-foreground/80">{opportunity.experience}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-8 py-3 font-semibold text-white transition hover:shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-3xl overflow-hidden"
          >
            <Image
              src={opportunity.image}
              alt={opportunity.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="rounded-3xl border border-[#f0d9ff] bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#2b0030] mb-6">Key Responsibilities</h2>
              <ul className="space-y-3">
                {opportunity.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#a605c7] mt-1 text-lg">•</span>
                    <span className="text-foreground/80">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#f0d9ff] bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#2b0030] mb-6">Required Skills</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {opportunity.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[#a605c7]">✓</span>
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-[#f0d9ff] bg-gradient-to-br from-[#fff6ff] to-[#f0d9ff] p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#2b0030] mb-6">Benefits</h2>
              <ul className="space-y-3">
                {opportunity.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#a605c7] mt-1">★</span>
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#f0d9ff] bg-white p-8 shadow-lg">
              <h2 className="text-xl font-bold text-[#2b0030] mb-4">Quick Apply</h2>
              <p className="text-sm text-foreground/70 mb-4">
                Ready to drive sales growth? Apply now!
              </p>
              <button
                onClick={() => setShowApplicationForm(true)}
                className="w-full rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-6 py-3 font-semibold text-white transition hover:shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2b0030]">Apply for {opportunity.title}</h2>
              <p className="text-sm text-foreground/70 mt-2">
                Join our sales team and drive business growth
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold">Full Name *</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Email *</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold">Phone *</label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                    placeholder="+91 00000 00000"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Experience (Years)</label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                    placeholder="Years of experience"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">Current Company</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                  placeholder="Current company name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Resume/CV *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div>
                <label className="text-sm font-semibold">Cover Letter</label>
                <textarea
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                  rows={4}
                  placeholder="Tell us about your sales experience and why you're interested in this position..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 rounded-full border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-6 py-3 font-semibold text-white transition hover:shadow-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  );
}
