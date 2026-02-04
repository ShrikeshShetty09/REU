import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="space-y-12 pb-24 pt-16">
      <section className="mx-auto max-w-5xl rounded-[32px] border border-white/40 bg-white/90 px-6 py-10 shadow-[0_30px_120px_-60px_rgba(122,2,142,.6)]">
        <p className="text-xs uppercase tracking-[0.5em] text-[#a605c7]">Contact</p>
        <h1 className="text-4xl font-bold text-[#360236]">Reach REU Engineering and LLP</h1>
        <p className="mt-4 text-base text-foreground/75">
          Share project briefs, GA drawings, or compliance requirements. Our specialists respond within one business day with
          feasibility notes and a technical-commercial roadmap.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { label: "Phone", value: "+91 22 2839 3337" },
            { label: "Email", value: "hello@reu-engineering.com" },
            { label: "Address", value: "Plot A-62, Taloja MIDC, Navi Mumbai" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#f0d9ff] bg-white/90 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-[#360236]">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl rounded-[32px] border border-white/50 bg-white/95 p-8 shadow">
        <form className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Name</label>
            <input className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Company</label>
            <input className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold">Requirement</label>
            <textarea
              className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
              rows={5}
            />
          </div>
          <button className="md:col-span-2 rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] py-3 text-white font-semibold">
            Submit Enquiry
          </button>
        </form>
        <p className="mt-4 text-sm text-foreground/70">
          Prefer direct email? Send project details to <Link href="mailto:hello@reu-engineering.com" className="text-[#a605c7]">hello@reu-engineering.com</Link>.
        </p>
      </section>
    </main>
  );
}
