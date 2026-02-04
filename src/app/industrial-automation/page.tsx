import Link from "next/link";

const automationHighlights = [
  {
    title: "Smart Gas Distribution",
    description: "Sensor-backed manifolds with live leak analytics and auto shutoff controls.",
  },
  {
    title: "Remote Utility Rooms",
    description: "PLC ecosystems supervising compressors, chillers, nitrogen generators, and dryers.",
  },
  {
    title: "Compliance Dashboards",
    description: "Digital validation logs, calibration reminders, and predictive maintenance cues.",
  },
];

const deliverables = [
  "PLC/SCADA & DCS integration",
  "Instrumentation selection & hook-up",
  "Control panel fabrication with FAT",
  "On-site commissioning & training",
  "Digital twins + historian setup",
];

export default function IndustrialAutomationPage() {
  return (
    <main className="space-y-16 pb-24 pt-16">
      <section className="mx-auto max-w-6xl rounded-[36px] border border-white/50 bg-white/85 px-6 py-12 shadow-[0_30px_120px_-60px_rgba(122,2,142,.5)]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Industrial Automation</p>
          <h1 className="text-4xl font-bold text-[#360236]">Connected utilities for data-driven uptime</h1>
          <p className="text-lg text-foreground/80">
            We instrument and automate gas, nitrogen, air, steam, and firefighting networks to deliver predictive insights,
            remote visibility, and compliance-ready data trails.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {automationHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#f0d9ff] bg-white/95 p-5 shadow">
                <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Featured</p>
                <h2 className="mt-2 text-xl font-semibold text-[#360236]">{item.title}</h2>
                <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div className="rounded-[32px] border border-white/50 bg-white/90 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Deliverables</p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#a605c7]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] border border-white/50 bg-gradient-to-br from-[#a605c7] to-[#5d075f] p-8 text-white shadow">
          <p className="text-sm uppercase tracking-[0.4em]">Let&apos;s collaborate</p>
          <h3 className="mt-4 text-3xl font-bold">Schedule a walkthrough</h3>
          <p className="mt-4 text-sm text-white/80">
            Share P&IDs, instrumentation lists, or expansion plans. Our automation desk responds within one business day.
          </p>
          <div className="mt-6 space-y-2 text-sm font-semibold">
            <p>☎ +91 22 2839 3337</p>
            <p>✉ automation@reu-engineering.com</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
              Contact team
            </Link>
            <Link href="/service-support" className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold">
              Service & Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
