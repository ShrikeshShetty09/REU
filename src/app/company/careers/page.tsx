"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const opportunities = [
  {
    id: "administrative-tasks",
    title: "Administrative Tasks",
    description: "Support our daily operations and help streamline administrative processes",
    image: "/images/careers/admin.jpg",
    responsibilities: [
      "Manage office documentation and records",
      "Coordinate meetings and schedules",
      "Handle correspondence and communications",
      "Assist with inventory and procurement",
      "Support HR and finance administrative tasks"
    ],
    education: "Bachelor's degree in Business Administration or related field",
    experience: "1-2 years of administrative experience preferred",
    skills: [
      "Strong organizational skills",
      "Proficiency in MS Office",
      "Excellent communication",
      "Attention to detail"
    ]
  },
  {
    id: "project-engineer",
    title: "Project Engineer",
    description: "Lead engineering projects and ensure successful delivery of technical solutions",
    image: "/images/careers/engineer.jpg",
    responsibilities: [
      "Design and implement engineering projects",
      "Coordinate with clients and vendors",
      "Ensure project timelines and quality standards",
      "Prepare technical documentation",
      "Supervise installation and commissioning"
    ],
    education: "Bachelor's degree in Engineering (Mechanical/Chemical/Electrical)",
    experience: "3-5 years of project engineering experience",
    skills: [
      "Project management",
      "Technical design skills",
      "Problem-solving abilities",
      "Team leadership"
    ]
  },
  {
    id: "sales-engineer",
    title: "Sales Engineer",
    description: "Drive business growth through technical sales and client relationship management",
    image: "/images/careers/sales.jpg",
    responsibilities: [
      "Identify and develop new business opportunities",
      "Provide technical solutions to clients",
      "Prepare proposals and quotations",
      "Maintain client relationships",
      "Achieve sales targets"
    ],
    education: "Bachelor's degree in Engineering or Business",
    experience: "2-4 years in technical sales preferred",
    skills: [
      "Technical knowledge",
      "Sales skills",
      "Communication abilities",
      "Negotiation skills"
    ]
  }
];

export default function CareersPage() {
  const [showApplicationForm, setShowApplicationForm] = useState<string | null>(null);

  return (
    <main className="space-y-16 pb-24 pt-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#a605c7]">Career</p>
          <h1 className="mt-3 text-4xl font-bold text-[#2b0030]">Explore All Opportunities</h1>
          <p className="mt-4 text-base text-foreground/70">
            Join our team and contribute to innovative engineering solutions. We're looking for talented individuals who are passionate about making a difference.
          </p>
        </motion.div>
      </section>

      {/* Opportunities Grid */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl border border-[#f0d9ff] bg-white shadow-lg transition hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{opportunity.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-foreground/70 mb-4">{opportunity.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-[#a605c7] uppercase">Key Responsibilities</p>
                      <ul className="mt-1 text-sm text-foreground/70 space-y-1">
                        {opportunity.responsibilities.slice(0, 3).map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#a605c7] mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-[#a605c7] uppercase">Requirements</p>
                      <p className="mt-1 text-sm text-foreground/70">{opportunity.education}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/company/careers/${opportunity.id}`}
                      className="flex-1 rounded-full border border-[#a605c7] px-4 py-2 text-center text-sm font-semibold text-[#a605c7] transition hover:bg-[#a605c7] hover:text-white"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => setShowApplicationForm(opportunity.id)}
                      className="flex-1 rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-4 py-2 text-center text-sm font-semibold text-white transition hover:shadow-lg"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2b0030]">Apply for Position</h2>
              <p className="text-sm text-foreground/70">
                {opportunities.find(o => o.id === showApplicationForm)?.title}
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
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(null)}
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
