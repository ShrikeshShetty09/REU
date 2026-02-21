"use client";

import { useState } from "react";
import Link from "next/link";

type CategoryKey = "control" | "reliability" | "project" | "valve";

type Category = {
  key: CategoryKey;
  label: string;
  items: string[];
};

const categories: Category[] = [
  {
    key: "control",
    label: "Control System Services",
    items: [
      "On Demand Service - Control Systems",
      "Configuration Services",
      "Alarm Optimization & Management",
      "Programmable Controller Services (PLC)",
      "Wireless Plant Network Support",
    ],
  },
  {
    key: "reliability",
    label: "Reliability",
    items: [
      "Reliability Consulting",
      "Vibration Analysis",
      "Thermography",
      "Oil Analysis",
      "Acceptance Testing",
      "Fan Balancing",
      "Laser Alignment",
    ],
  },
  {
    key: "project",
    label: "Project Services",
    items: [
      "Main Automation Contractor",
      "Start-up & Commissioning",
      "Front End Engineering Design",
    ],
  },
  {
    key: "valve",
    label: "Valve and Mechanical Services",
    items: [
      "Valve & Actuation Lifecycle Services",
      "Pressure Management Services",
      "Inventory Management",
      "Shutdown, Turnarounds & Outage (STO) Support Services",
      "Instrumentation",
      "Penberthy Assembly Program",
    ],
  },
];

export default function IndustrialAutomationPage() {
  const [activeKey, setActiveKey] = useState<CategoryKey>("control");
  const activeCategory = categories.find((c) => c.key === activeKey) ?? categories[0];

  return (
    <main className="pb-24 pt-20">
      <section className="mx-auto max-w-6xl space-y-12 px-6">
        {/* Heading */}
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#a605c7]">
            Industrial Automation
          </p>
          <h1 className="text-4xl font-bold text-[#360236] sm:text-5xl">
            Lifecycle services for smarter plants
          </h1>
          <p className="max-w-4xl text-lg text-foreground/80">
            In collaboration with US-based automation specialist Caltrol, REU supports DeltaV DCS, PLC / SCADA and field
            instrumentation across utilities, process skids and packaged equipment, bringing global best practices to local
            plants.
          </p>
        </div>

        {/* Left categories / right services */}
        <div className="grid gap-8 rounded-[32px] border border-white/60 bg-white/95 p-6 shadow-lg md:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
          {/* Left: category list */}
          <nav className="space-y-3 text-lg">
            {categories.map((category) => {
              const isActive = category.key === activeKey;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveKey(category.key)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#f6e2ff] to-[#ffe9ff] text-[#5d075f] shadow"
                        : "text-foreground/50 hover:bg-slate-50 hover:text-foreground"
                    }`}
                >
                  <span className="font-semibold">{category.label}</span>
                  <span
                    className={`text-base ${
                      isActive ? "text-[#a605c7]" : "text-foreground/40"
                    }`}
                  >
                    ›
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right: active services */}
          <div className="space-y-5 rounded-3xl bg-gradient-to-br from-[#fff4ff] via-[#f8ecff] to-[#f5e9ff] p-6 text-[#360236]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#a605c7]">Service family</p>
              <h2 className="mt-2 text-2xl font-semibold">{activeCategory.label}</h2>
            </div>
            <ul className="space-y-3 text-lg">
              {activeCategory.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#a605c7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 rounded-[28px] border border-white/60 bg-gradient-to-r from-[#a605c7] to-[#5d075f] p-8 text-white shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em]">Let's collaborate</p>
              <p className="mt-3 text-sm md:text-base text-white/80">
                Share P&IDs, IO lists, control narratives or upgrade plans. Our automation desk responds with a structured
                proposal.
              </p>
            </div>
            <div className="space-y-2 text-sm font-semibold md:text-base">
              <p>+91 99870 92470 / +91 90223 65220</p>
              <p>rahulukey@reu.co.in</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold md:text-sm"
                >
                  Contact team
                </Link>
                <Link
                  href="/service-support"
                  className="rounded-full border border-white/50 px-4 py-1.5 text-xs font-semibold md:text-sm"
                >
                  Service & Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}