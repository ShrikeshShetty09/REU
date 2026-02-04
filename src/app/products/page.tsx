import Link from "next/link";
import {
  productColumns,
  detailContent,
  getRelatedByCategory,
} from "@/data/siteContent";

const heroCopy = detailContent["upstream-pressure-control-valve"];

export default function ProductsPage() {
  const featuredProducts = getRelatedByCategory("product", "upstream-pressure-control-valve").slice(0, 6);

  return (
    <main className="space-y-16 pb-20 pt-16">
      <section className="mx-auto max-w-6xl rounded-[36px] border border-white/40 bg-white/85 px-6 py-12 shadow-[0_30px_120px_-60px_rgba(122,2,142,.6)]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Products</p>
          <h1 className="text-4xl font-bold text-[#360236]">Complete pressure control and packaged solutions</h1>
          <p className="text-lg text-foreground/75">{heroCopy?.summary}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products/upstream-pressure-control-valve"
              className="rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Flagship Valve
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#a605c7]/40 px-6 py-3 text-sm font-semibold text-[#a605c7]"
            >
              Speak with Specialists
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {productColumns.map((column) => (
            <div key={column.heading} className="rounded-[28px] border border-[#f0d9ff] bg-white/95 p-5 shadow">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5d075f]">{column.heading}</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#a605c7]">
                      {link.label}
                    </Link>
                    {link.description && <p className="text-xs text-foreground/60">{link.description}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 className="text-3xl font-bold text-[#360236]">Featured assemblies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="rounded-[24px] border border-white/50 bg-white/95 p-6 shadow hover:-translate-y-1"
            >
              <p className="text-lg font-semibold text-[#5d075f]">{product.label}</p>
              <p className="mt-2 text-sm text-foreground/70">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
