import Image from "next/image";
import Link from "next/link";
import { companyColumns, detailContent, industriesWeServe } from "@/data/siteContent";
import { featuredClients } from "@/data/clients";
import { HeroSection } from "@/components/HeroSection";

const productTableRows = [
  { left: "Pressure Reducing Systems", right: "High Pressure Regulators" },
  { left: "High Pressure Cylinder Cascade", right: "Gas Detection System" },
  { left: "Centrifugal Blanketing", right: "Gas Pipeline" },
  { left: "Back Pressure Valve", right: "Gas Purification System" },
  { left: "Downstream Pressure Control Valves", right: "Temperature Detection System" },
  { left: "Breather Valves & Flame Arresters", right: "Compressor Supply, Service & Spare" },
  { left: "Safety Valves", right: "Mini Gas Station" },
  { left: "Ball Valves & Non Return Valves etc.", right: "Utility & Lab Fume Hood Piping" },
];

const customServices = [
  {
    title: "Soda Dosing Unit",
    description: "Precision assemblies for chemical dosing and batching environments.",
  },
  {
    title: "Temperature Control System",
    description: "Closed-loop systems ensuring critical thermal stability.",
  },
  {
    title: "Compressed Air System Service",
    description: "Maintenance, retrofits, and turnkey compressor skids.",
  },
  {
    title: "Fire Fighting & Hydrant System",
    description: "High-reliability hydrant layouts for industrial campuses.",
  },
];

const marqueeClientNames = [
  "Amptronics Techno Pvt. Ltd.",
  "Anthea Aromatics Pvt. Ltd.",
  "Aarti Industries Ltd.",
  "Alembic Pharma",
  "Alkyl Amines Chemicals Ltd. (Group)",
  "Cipla Ltd. (All Group)",
  "Oil and Natural Gas Corporation (ONGC)",
  "NTPC Limited",
];

const marqueeClients = marqueeClientNames
  .map((name) => featuredClients.find((client) => client.name === name))
  .filter((client): client is NonNullable<typeof client> => Boolean(client?.logo));

const leadershipDetail = detailContent["leadership-team"];

export default function Home() {
  return (
    <main className="space-y-24 pb-24 pt-12 text-[#230124]">
      {/* Hero */}
      <HeroSection customServices={customServices} />

      {/* What we do */}
      <section className="mx-auto max-w-6xl space-y-10 px-6" aria-labelledby="what-we-do">
        <div className="rounded-[40px] border border-white/60 bg-white/90 p-8 shadow-[0_30px_120px_-60px_rgba(122,2,142,.4)]">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#b607c5]">What we do</p>
          <h2 id="what-we-do" className="mt-3 text-3xl font-bold text-[#2b0030]">
            About REU Engineering & Consulting LLP
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            REU Engineering & Consulting LLP is a Navi Mumbai based limited liability partnership, incorporated in May 2015. The
            firm operates within business services and engineering supply, partnering with laboratories, utilities, process plants,
            and manufacturing majors across India that require reliable gas handling and safety infrastructure.
          </p>
          <p className="mt-4 text-base text-foreground/70">
            Known in commercial directories as a manufacturer, supplier, and trader, we source and integrate gas pressure
            regulators, cutting torches, nozzles, pressure-reducing and safety valves, gas detectors, and allied systems. Designated
            partners Rahul Dinesh Ukey and Ekta Rahul Ukey lead the operations from our registered office in Kamothe, Navi Mumbai.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Industrial equipment supply",
              copy: "Specification, sourcing, and delivery of gas flow, pressure control, and safety components built for high-uptime processes.",
            },
            {
              title: "Engineering services",
              copy: "Application engineering support spanning utilities, laboratories, and process industries with documented procedures.",
            },
            {
              title: "Partner-led engagements",
              copy: "Direct access to designated partners for proposals, compliance clarifications, and project rollouts from Kamothe.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[#f0d9ff] bg-gradient-to-b from-[#fff6ff] to-white p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b607c5]">{item.title}</p>
              <p className="mt-3 text-sm text-foreground/80">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product list */}
      <section className="bg-[#120018] py-16" id="products">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <div className="text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#ff9df7]">Product List</p>
            <h3 className="text-3xl font-bold">Complete Range of Engineered Systems</h3>
          </div>
          <div className="rounded-[36px] border border-white/40 bg-white/10 p-1 shadow-2xl backdrop-blur">
            <div className="rounded-[34px] bg-white text-[#2b0030]">
              <div className="grid divide-y divide-[#f1dafc] text-sm font-semibold md:grid-cols-2 md:divide-x md:divide-y-0">
                {productTableRows.map((row) => (
                  <div key={row.left} className="flex flex-col gap-2 px-6 py-5">
                    <p>{row.left}</p>
                    <p className="text-[#7a028e]">{row.right}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-6xl space-y-8 px-6" id="solutions">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#b607c5]">Industries We Serve</p>
          <h3 className="mt-3 text-3xl font-bold text-[#2b0030]">Expertise that delivers</h3>
          <p className="mt-3 text-base text-foreground/70">
            Five decades of co-creating with operators helps us deliver industry-specific upgrades with the expertise that matters.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industriesWeServe.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="group rounded-[28px] border border-[#f0d9ff] bg-white/90 shadow-lg transition hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden rounded-t-[28px]">
                <Image src={industry.image} alt={industry.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="space-y-2 px-5 py-5">
                <p className="text-lg font-semibold text-[#5d075f]">{industry.title}</p>
                <p className="text-sm text-foreground/70">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-br from-[#fff5ff] via-[#ffe6ff] to-[#fff7ff] py-16" id="services">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#a605c7]">Customise Requirements & Services Provided</p>
            <h3 className="mt-3 text-3xl font-bold text-[#2b0030]">Turnkey delivery with lifecycle support</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {customServices.map((service) => (
              <div key={service.title} className="rounded-[28px] border border-white/60 bg-white p-5 shadow-xl">
                <p className="text-lg font-semibold text-[#5d075f]">{service.title}</p>
                <p className="mt-2 text-sm text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-gradient-to-b from-[#fff6ff] to-[#f5e5ff] py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#b607c5]">Trusted by industry leaders</p>
            <h3 className="text-3xl font-bold text-[#2b0030]">Process innovators rely on us</h3>
          </div>
          <div className="rounded-[40px] border border-white/60 bg-white/95 p-8 shadow-[0_30px_120px_-60px_rgba(122,2,142,.2)]">
            <div className="grid gap-6 md:grid-cols-4">
              {marqueeClients.map((client) => (
                <div key={client.name} className="flex flex-col items-center gap-3 text-center">
                  <div className="relative h-12 w-28">
                    <Image src={client.logo!} alt={client.name} fill className="object-contain" sizes="112px" />
                  </div>
                  <p className="text-sm font-semibold text-[#5d075f]">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.5em] text-[#b607c5]">
            {marqueeClients.map((client) => (
              <span key={`client-chip-${client.name}`}>{client.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl grid gap-8 px-6 lg:grid-cols-2" id="contact">
        <div className="rounded-[32px] border border-[#f3d7ff] bg-white/90 p-8 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#a605c7]">Registered office & support</p>
          <h3 className="mt-4 text-3xl font-bold text-[#2b0030]">Talk directly with the LLP partners</h3>
          <p className="mt-4 text-base text-foreground/70">
            Share drawings, compliance requirements, or MCA filing needs. Responses originate from the designated partners and
            include documentation pointers plus an execution roadmap.
          </p>
          <div className="mt-6 space-y-3 text-base font-semibold text-[#5d075f]">
            <p>☎ +91 99870 92470 / +91 90223 65220 (directory-listed)</p>
            <p>✉ rahulukey2004@gmail.com</p>
            <p>
              � 302, Aditya Heights CHS, Plot No.52, Sector 10, Kamothe (Panvel), Navi Mumbai, Maharashtra – PIN 410209
            </p>
          </div>
        </div>
        <form className="rounded-[32px] border border-[#f3d7ff] bg-gradient-to-br from-[#ffeffd] to-[#fff9ff] p-8 shadow-xl space-y-5">
          <div>
            <label className="text-sm font-semibold text-[#5d075f]">Name</label>
            <input
              className="mt-2 w-full rounded-2xl border border-[#e3b7ff] px-4 py-3 focus:border-[#a605c7] focus:outline-none"
              placeholder="Full name"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-[#5d075f]">Company</label>
            <input
              className="mt-2 w-full rounded-2xl border border-[#e3b7ff] px-4 py-3 focus:border-[#a605c7] focus:outline-none"
              placeholder="Organisation"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-[#5d075f]">Requirement</label>
            <textarea
              className="mt-2 w-full rounded-2xl border border-[#e3b7ff] px-4 py-3 focus:border-[#a605c7] focus:outline-none"
              rows={4}
              placeholder="Tell us about your gas or automation project"
            />
          </div>
          <button className="w-full rounded-full bg-[#a605c7] py-3 text-white font-semibold uppercase tracking-wide shadow-lg">
            Submit Enquiry
          </button>
        </form>
      </section>
    </main>
  );
}
