import Link from "next/link";
import { companyColumns, detailContent, getRelatedByCategory } from "@/data/siteContent";

const leadership = detailContent["leadership-team"];
const partners = detailContent["partners"];

export default function CompanyPage() {
  const insights = getRelatedByCategory("company", "leadership-team");

  return (
    <main className="space-y-16 pb-20 pt-16">
      <section className="mx-auto max-w-6xl rounded-[36px] border border-white/40 bg-white/85 px-6 py-12 shadow-[0_30px_120px_-60px_rgba(122,2,142,.6)]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Company</p>
          <h1 className="text-4xl font-bold text-[#360236]">REU Engineering and LLP Leadership & Culture</h1>
          <p className="text-lg text-foreground/75">{leadership?.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-6 px-6 md:grid-cols-2">
        {companyColumns.map((column) => (
          <div key={column.heading} className="rounded-[28px] border border-[#f0d9ff] bg-white/95 p-6 shadow">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5d075f]">{column.heading}</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#a605c7]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <div className="rounded-[32px] border border-white/50 bg-gradient-to-br from-white via-[#ffe9fe] to-[#f8e2ff] p-8 shadow">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Partners</p>
          <h2 className="text-3xl font-bold text-[#360236]">{partners?.label}</h2>
          <p className="mt-3 text-base text-foreground/75">{partners?.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <h3 className="text-2xl font-bold text-[#360236]">Latest company resources</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {insights.slice(0, 6).map((item) => (
            <Link
              key={item.slug}
              href={`/company/${item.slug}`}
              className="rounded-[24px] border border-white/50 bg-white/95 p-6 shadow hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#a605c7]">{item.category}</p>
              <p className="mt-2 text-lg font-semibold text-[#5d075f]">{item.label}</p>
              <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
