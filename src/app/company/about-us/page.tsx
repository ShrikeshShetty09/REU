export default function AboutUsPage() {
  return (
    <main className="space-y-16 pb-20 pt-16 text-[#230124]">
      <section className="mx-auto max-w-5xl rounded-[36px] border border-white/40 bg-white/95 px-8 py-12 shadow-[0_30px_120px_-60px_rgba(122,2,142,.6)]">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#a605c7]">Company</p>
          <h1 className="text-4xl font-bold text-[#360236]">About REU Engineering & Consulting LLP</h1>
          <div className="mx-auto max-w-3xl space-y-4 text-base text-foreground/75 md:mx-0">
            <p>
              REU is a leading supplier and service provider in the field of Gas, Air, Safety, Gas Detection and Process
              Control Systems such as DeltaV DCS and DeltaV MES, with strong focus on validation, mapping and lifecycle
              site support.
            </p>
            <p>
              We have a very strong back history serving industries for decades. Our main strengths are quality-driven
              execution, timely delivery and very strong site support across brownfield and greenfield projects.
            </p>
            <p>
              REU is a leading manufacturer and supplier of pressure reducing valves and systems, gas detectors, safety
              valves and laboratory gas purification systems for gases like nitrogen, hydrogen, helium and oxygen. We
              provide complete solutions for hydrogen and nitrogen banks by engineering manifolds for truck mounted and
              stationary units, and we execute complete laboratory and hospital piping (tubing) systems for utilities
              such as gas, vacuum and water.
            </p>
          </div>
          <div className="mt-6 rounded-[28px] border border-[#f3d7ff] bg-gradient-to-br from-[#fff3ff] to-[#fff9ff] p-6 text-sm text-foreground/80">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#a605c7]">Industries served</p>
            <p className="mt-2">
              API manufacturing plants, pharma and chemical units, oil and gas infrastructure, paints and coatings,
              perfumes, food and speciality process industries.
            </p>
            <p className="mt-2">
              We serve these sectors successfully with a combination of engineered products, process automation and
              documentation-led execution.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-8 px-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-[32px] border border-[#f3d7ff] bg-white/95 p-8 shadow-[0_20px_80px_-40px_rgba(122,2,142,.3)]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#a605c7]">Process Control Systems</p>
          <h2 className="text-2xl font-bold text-[#360236]">Automation and PCS expertise</h2>
          <p className="text-sm text-foreground/75">
            Our automation projects and services team supports many L1 and L2 systems, covering DeltaV DCS, Rockwell
            (Allen-Bradley platforms) and related PCS infrastructure.
          </p>
          <ul className="mt-2 space-y-2 text-sm text-foreground/80">
            <li>PCS system design and implementation through code development and graphics.</li>
            <li>Full commissioning and software validation services.</li>
            <li>Validation cycle execution support for IQ, OQ and PQ.</li>
            <li>FEED study execution and software design.</li>
            <li>Engineering project consulting and lifecycle documentation (consult, author, reconciliation).</li>
            <li>PCS system design, instrumentation and control, and AutoCAD services.</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-[32px] border border-[#f3d7ff] bg-white/95 p-8 shadow-[0_20px_80px_-40px_rgba(122,2,142,.3)]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#a605c7]">Manufacturing Execution Systems</p>
          <h2 className="text-2xl font-bold text-[#360236]">MES platforms and services</h2>
          <p className="text-sm text-foreground/75">
            Our MES practice works across DeltaV MES (formerly Syncade), Werum PAS-X and Tulip (MES and eLogbooks)
            platforms.
          </p>
          <ul className="mt-2 space-y-2 text-sm text-foreground/80">
            <li>MES consulting and system design.</li>
            <li>Industrial process automation analysis.</li>
            <li>MBR / recipe design and configuration.</li>
            <li>Interface design and implementation.</li>
            <li>CFR21 Part 11 compliance and documentation.</li>
            <li>Staff augmentation and software design / configuration support.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-8 px-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-4 rounded-[32px] border border-[#f3d7ff] bg-gradient-to-br from-[#fff3ff] to-[#fff9ff] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#a605c7]">Experience & collaboration</p>
          <h2 className="text-2xl font-bold text-[#360236]">Decades of engineering experience</h2>
          <p className="text-sm text-foreground/75">
            For the above solution areas we field teams with 15–20+ years of experience. We have collaborated with
            Caltrol India (a division of Caltrol USA, an impact partner of Emerson) on critical automation and
            lifecycle programs.
          </p>
          <p className="text-sm text-foreground/75">
            Across every engagement, our focus remains on quality, timely delivery and strong site support so that
            plant teams can depend on REU as an extension of their own engineering function.
          </p>
        </div>
        <div className="space-y-4 rounded-[32px] border border-[#f3d7ff] bg-white/95 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#a605c7]">Why customers choose REU</p>
          <ul className="mt-2 space-y-2 text-sm text-foreground/80">
            <li>End-to-end capability from specification to commissioning and validation.</li>
            <li>Strong history of serving API, pharma, chemical, oil & gas, paints, perfumes and food plants.</li>
            <li>Integrated offering across products, piping, automation and documentation.</li>
            <li>Hands-on partners who stay involved through the full lifecycle of the project.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
