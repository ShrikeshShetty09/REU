import Image from "next/image";
import Link from "next/link";

const supportPrograms = [
  {
    title: "Annual Maintenance Contracts",
    description:
      "Scheduled inspections, calibration, and replacement part coverage to keep blanketing, regulating, and safety systems healthy.",
  },
  {
    title: "Emergency Response",
    description:
      "24/7 on-call engineers for troubleshooting, valve overhaul, and restoration after shutdowns or trips.",
  },
  {
    title: "Retrofit & Upgrade",
    description:
      "Digitization, telemetry, and control retrofits that extend lifecycle while meeting new compliance norms.",
  },
  {
    title: "Training & Certification",
    description:
      "Operator and maintenance crew workshops covering operation, diagnostics, and safe intervention on REU systems.",
  },
];

const serviceSteps = [
  "Site assessment & data gathering",
  "Engineering scope definition",
  "Execution with OEM spares",
  "Performance validation & reporting",
];

const resources = [
  {
    label: "Service Catalogue",
    href: "/products/city-gate-station",
  },
  {
    label: "Quality Assurance",
    href: "/company/quality-assurance",
  },
  {
    label: "Industrial Automation",
    href: "/industrial-automation",
  },
];

export default function ServiceSupportPage() {
  return (
    <main className="space-y-16 pb-24 pt-16">
      <section className="mx-auto max-w-6xl rounded-[36px] border border-white/40 bg-white/85 px-6 py-12 shadow-[0_30px_120px_-60px_rgba(122,2,142,.6)]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-[#a605c7]">Service & Support</p>
            <h1 className="text-4xl font-bold text-[#360236]">Lifecycle care for critical pressure and utility assets</h1>
            <p className="text-lg text-foreground/80">
              Our service teams span India and the Middle East, offering OEM-backed support for tank blanketing valves,
              metering stations, hydrogen skids, safety valves, and automation infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-6 py-3 text-sm font-semibold text-white shadow-lg"
              >
                Book a Service Visit
              </Link>
              <Link
                href="/company/events"
                className="rounded-full border border-[#a605c7]/40 px-6 py-3 text-sm font-semibold text-[#a605c7]"
              >
                Latest Updates
              </Link>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-[32px] border border-white/40">
            <Image src="/images/team.jpg" alt="Service team" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {supportPrograms.map((program) => (
            <div key={program.title} className="rounded-[28px] border border-[#f0d9ff] bg-white/95 p-6 shadow">
              <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Program</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#360236]">{program.title}</h2>
              <p className="mt-3 text-sm text-foreground/75">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="rounded-[32px] border border-white/50 bg-gradient-to-r from-[#fdf0ff] to-[#f8e5ff] p-8 shadow">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">How we work</p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {serviceSteps.map((step, idx) => (
              <div key={step} className="rounded-2xl border border-white/70 bg-white/90 p-4 text-center">
                <p className="text-3xl font-bold text-[#a605c7]">{`0${idx + 1}`}</p>
                <p className="mt-2 text-sm text-foreground/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-8 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#360236]">Download resources & service notes</h2>
          <p className="text-base text-foreground/80">
            Access QA protocols, instrumentation layouts, and preventive maintenance checklists curated by our global team.
          </p>
          <ul className="space-y-2 text-sm text-foreground/80">
            {resources.map((resource) => (
              <li key={resource.href}>
                <Link href={resource.href} className="text-[#a605c7] hover:underline">
                  {resource.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] border border-white/60 bg-white/90 p-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Need support?</p>
          <h3 className="mt-3 text-2xl font-semibold text-[#360236]">+91 22 2839 3337</h3>
          <p className="text-sm text-foreground/70">hello@reu-engineering.com</p>
          <p className="mt-4 text-sm text-foreground/70">Plot A-62, Taloja MIDC, Navi Mumbai</p>
        </div>
      </section>
    </main>
  );
}
