import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="space-y-12 pb-24 pt-16">
      <section className="mx-auto max-w-5xl rounded-[32px] border border-white/50 bg-white/95 p-8 shadow">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#360236] mb-4">Contact</h3>
            <h1 className="text-4xl font-bold text-[#360236] mb-6">Reach REU Engineering and LLP</h1>
            <p className="text-base text-foreground/75 mb-8">
              Share project briefs, GA drawings, or compliance requirements. Our specialists respond within one business day with
              feasibility notes and a technical-commercial roadmap.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7] font-semibold">Phone</p>
                <p className="text-lg font-semibold text-[#360236]">+91 99870 92470 / +91 90223 65220</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7] font-semibold">Email</p>
                <p className="text-lg font-semibold text-[#360236]">rahulukey@reu.co.in</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7] font-semibold">Address</p>
                <p className="text-base text-[#360236]">
                  Corporate Address : Shop No 1, Plot No 85, sec-R1, Near MSEB Office, Vadghar, Karanjade, Panvel c 410206
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Name</label>
              <input className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Company</label>
              <input className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Requirement</label>
              <textarea
                className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                rows={5}
              />
            </div>
            <button className="w-full rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] py-3 text-white font-semibold">
              Submit Enquiry
            </button>
          </form>
        </div>
        <p className="mt-4 text-sm text-foreground/70">
          Prefer direct email? Send project details to {" "}
          <Link href="mailto:rahulukey@reu.co.in" className="text-[#a605c7]">
            rahulukey@reu.co.in
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
