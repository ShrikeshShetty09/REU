import Image from "next/image";
import Link from "next/link";
import type { DetailItem } from "@/data/siteContent";
import { industriesWeServe, productImagesBySlug } from "@/data/siteContent";
import { ProductImageSlider } from "@/components/ProductImageSlider";

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
  const productImages = detail.category === "product" ? productImagesBySlug[detail.slug] ?? [] : [];

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

      <div className="rounded-[36px] border border-[#f0d9ff] bg-white/95 p-6 shadow-[0_30px_120px_-60px_rgba(122,2,142,.35)]">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] md:items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
              {detail.category === "product" ? (
                <div className="relative aspect-[4/3] w-full">
                  <ProductImageSlider
                    images={productImages.length ? productImages : [heroImage]}
                    alt={detail.label}
                    variant="detail"
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-white/60 bg-white">
                  <Image
                    src={heroImage}
                    alt={detail.label}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 70vw, 40vw"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-[#a605c7]">{detail.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#360236]">{detail.label}</h1>
            <p className="text-base md:text-lg text-foreground/80">{detail.summary}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              {detail.category === "product" ? (
                <>
                  <Link
                    href="/service-support/product-enquiry"
                    className="rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-6 py-3 text-sm font-semibold text-white shadow-lg"
                  >
                    Any queries? Product enquiry
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-[#a605c7]/40 px-6 py-3 text-sm font-semibold text-[#a605c7]"
                  >
                    Talk to an Engineer
                  </Link>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6 border-t border-[#f3d7ff] pt-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr),minmax(0,0.9fr)] lg:items-start">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5d075f]">Product details</p>
              <p className="text-base text-foreground/70">{detail.description}</p>
              <ul className="mt-4 space-y-2 rounded-3xl border border-[#f0d9ff] bg-[#fff8ff] p-6 text-sm text-foreground/80">
                {detail.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-[#a605c7]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-white/50 bg-white/90 p-6 text-sm text-foreground/70">
              <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Need support?</p>
              <p className="mt-2 font-semibold text-foreground">+91 99870 92470 / +91 90223 65220 · rahulukey@reu.co.in</p>
              <p className="mt-1">Corporate Address : Shop No 1, Plot No 85, sec-R1, Near MSEB Office, Vadghar, Karanjade, Panvel – 410206</p>
            </div>
          </div>
        </div>
      </div>

      {detail.category === "product" && (
        <div className="mt-8 flex justify-start">
          <div className="w-full max-w-xs rounded-[24px] border border-[#f0d9ff] bg-white/95 p-5 text-sm text-foreground/80 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a605c7]">Important links</p>
            <div className="mt-3 space-y-2">
              <Link
                href="/certificates"
                className="flex items-center justify-between rounded-[16px] border border-[#f0d9ff] bg-[#fff8ff] px-3 py-2 text-xs font-semibold text-[#5d075f] hover:bg-white"
              >
                <span>Certification</span>
                <span className="text-[10px] text-[#a605c7]">›</span>
              </Link>
              <Link
                href="/reu_catalogue/REU%20catlogue.pdf"
                className="flex items-center justify-between rounded-[16px] border border-[#f0d9ff] bg-[#fff8ff] px-3 py-2 text-xs font-semibold text-[#5d075f] hover:bg-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View our Catalogue</span>
                <span className="text-[10px] text-[#a605c7]">›</span>
              </Link>
            </div>
          </div>
        </div>
      )}

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

      {detail.category === "product" && industriesWeServe.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a605c7]">Industries we serve</p>
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-2 snap-x snap-mandatory scroll-smooth">
              {industriesWeServe.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="group relative h-40 w-64 flex-shrink-0 snap-start overflow-hidden rounded-3xl border border-[#f0d9ff] bg-white/95 shadow-sm"
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="256px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80">Industry</p>
                    <p className="text-sm font-semibold text-white">{industry.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
