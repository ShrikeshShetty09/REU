import Image from "next/image";
import Link from "next/link";
import { industriesWeServe } from "@/data/siteContent";

const valueProps = [
  {
    title: "Process Safety",
    description: "Fire-safe valves, slam-shut protection, and relief systems tuned to each vertical.",
  },
  {
    title: "Automation",
    description: "PLC / SCADA integration with digital twins for uptime insights.",
  },
  {
    title: "Lifecycle",
    description: "Retrofits, spares, and AMC programs managed by OEM-certified teams.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="space-y-16 pb-20 pt-16">
      <section className="mx-auto max-w-6xl rounded-[36px] border border-white/40 bg-white/85 px-6 py-12 shadow-[0_30px_120px_-60px_rgba(122,2,142,.6)]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Solutions</p>
          <h1 className="text-4xl font-bold text-[#360236]">Tailored expertise for regulated industries</h1>
          <p className="text-lg text-foreground/75">
            From oil & gas to nuclear power, REU Engineering and LLP translates decades of Nirmal-inspired experience into
            bespoke process utility systems, keeping operations safe, efficient, and compliant.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industriesWeServe.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="rounded-[30px] border border-[#f0d9ff] bg-white/95 shadow transition hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden rounded-t-[30px]">
                <Image src={industry.image} alt={industry.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="space-y-2 px-5 py-4">
                <p className="text-lg font-semibold text-[#5d075f]">{industry.title}</p>
                <p className="text-sm text-foreground/70">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="rounded-[32px] border border-white/50 bg-gradient-to-r from-[#fdf0ff] to-[#f8e5ff] p-8 shadow">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Why partner with us</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/70 bg-white/90 p-5">
                <p className="text-lg font-semibold text-[#360236]">{item.title}</p>
                <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <div className="rounded-[32px] border border-white/60 bg-white/95 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Ready to discuss?</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-6 py-3 text-sm font-semibold text-white">
              Contact us
            </Link>
            <Link href="/service-support" className="rounded-full border border-[#a605c7]/40 px-6 py-3 text-sm font-semibold text-[#a605c7]">
              Service & Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
