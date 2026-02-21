import Image from "next/image";
import Link from "next/link";
import type { DetailItem } from "@/data/siteContent";

const fallbackImages = {
  product: "/images/hero-1.png",
  solution: "/images/industry-oil-gas.jpg",
  company: "/images/team.jpg",
} as const;

type DetailPageProps = {
  detail: DetailItem;
  related: DetailItem[];
  categoryLabel: string;
  backHref: string;
};

export const DetailPageSection = ({ detail, related, categoryLabel, backHref }: DetailPageProps) => {
  const heroImage = detail.image ?? fallbackImages[detail.category];

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div className="text-sm uppercase tracking-[0.35em] text-[#a605c7]">
        <Link href="/" className="text-foreground/60 hover:text-[#a605c7]">
          Home
        </Link>
        <span className="px-2 text-foreground/40">/</span>
        <Link href={backHref} className="text-foreground/60 hover:text-[#a605c7]">
          {categoryLabel}
        </Link>
        <span className="px-2 text-foreground/40">/</span>
        <span className="text-foreground">{detail.label}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[#a605c7]">{detail.category}</p>
          <h1 className="text-4xl font-bold text-[#360236]">{detail.label}</h1>
          <p className="text-lg text-foreground/80">{detail.summary}</p>
          <p className="text-base text-foreground/70">{detail.description}</p>
          <ul className="space-y-2 rounded-3xl border border-[#f0d9ff] bg-[#fff8ff] p-6 text-sm text-foreground/80">
            {detail.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-[#a605c7]">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-6 py-3 text-sm font-semibold text-white shadow-lg"
            >
              Talk to an Engineer
            </Link>
            <Link
              href="/industrial-automation"
              className="rounded-full border border-[#a605c7]/40 px-6 py-3 text-sm font-semibold text-[#a605c7]"
            >
              Explore Automation
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative h-72 overflow-hidden rounded-[32px] border border-white/50 bg-white">
            <Image src={heroImage} alt={detail.label} fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
          </div>
          <div className="rounded-[28px] border border-white/50 bg-white/90 p-6 text-sm text-foreground/70">
            <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Need support?</p>
            <p className="mt-2 font-semibold text-foreground">+91 99870 92470 / +91 90223 65220 · rahulukey@reu.co.in</p>
            <p className="mt-1">Corporate Address : Shop No 1, Plot No 85, sec-R1, Near MSEB Office, Vadghar, Karanjade, Panvel – 410206</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Related {categoryLabel}</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/${item.category === "product" ? "products" : item.category === "solution" ? "solutions" : "company"}/${item.slug}`}
                className="rounded-2xl border border-[#f0d9ff] bg-white/95 p-5 transition hover:-translate-y-1"
              >
                <p className="text-sm font-semibold text-[#5d075f]">{item.label}</p>
                <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
