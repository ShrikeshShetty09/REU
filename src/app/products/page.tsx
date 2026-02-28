"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { productColumns, detailContent, productImagesBySlug } from "@/data/siteContent";
import { ProductImageSlider } from "@/components/ProductImageSlider";
import { Montserrat } from "next/font/google";

type ProductLink = {
  label: string;
  slug: string;
};

const allProductLinks: ProductLink[] = productColumns.flatMap((column) =>
  column.links.map((link) => ({
    label: link.label,
    slug: link.href.split("/").pop() ?? "",
  }))
).filter((p) => p.slug);

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

export default function ProductsPage() {
  const [selectedSlug, setSelectedSlug] = useState<string>(allProductLinks[0]?.slug ?? "");
  const [isMobileOverlayOpen, setIsMobileOverlayOpen] = useState(false);

  const selectedProduct = useMemo(() => {
    if (!selectedSlug) return null;
    return detailContent[selectedSlug];
  }, [selectedSlug]);

  const temperatureSubProducts =
    selectedProduct?.slug === "temperature-detection-system"
      ? [detailContent["hsd-daq-modules"], detailContent["hsd-linear-heat-sensor-cables"]].filter(Boolean)
      : [];

  return (
    <main className={`${montserrat.className} pb-20 pt-16`}>
      <section className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="rounded-[36px] border border-white/40 bg-white/90 px-6 py-10 shadow-[0_30px_120px_-60px_rgba(122,2,142,.6)]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Products</p>
          <h1 className="mt-3 text-4xl font-bold text-[#360236]">Complete product range overview</h1>
          <p className="mt-3 max-w-3xl text-sm text-foreground/75">
            Browse the full range of REU engineered products – from pressure reducing systems and breather valves to gas
            purification cabinets and safety hardware. Select any product on the left to see its key details, and open
            the dedicated page for drawings, variants and project notes.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-start md:flex-row">
          {/* Left: product list */}
          <div className="flex-none min-w-[260px] max-w-sm space-y-4 overflow-hidden rounded-[32px] border border-[#f0d9ff] bg-white/95 p-5 shadow">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5d075f]">Product list</p>
            <div className="grid gap-3 text-sm text-foreground/80">
              {allProductLinks.map((product) => {
                const isActive = product.slug === selectedSlug;
                return (
                  <button
                    key={product.slug}
                    type="button"
                    onClick={() => {
                      setSelectedSlug(product.slug);
                      if (typeof window !== "undefined" && window.innerWidth < 768) {
                        setIsMobileOverlayOpen(true);
                      }
                    }}
                    className="flex w-full items-center justify-between text-left transition"
                  >
                    <span
                      className={`inline-flex max-w-full items-center rounded-full px-4 py-2 text-[0.8rem] font-semibold tracking-[0.05em] ${
                        isActive
                          ? "bg-gradient-to-r from-[#ff96ff] to-[#a605c7] text-white shadow"
                          : "bg-transparent text-foreground/80 hover:bg-white/80"
                      }`}
                    >
                      <span className="truncate">{product.label}</span>
                    </span>
                    <span className="ml-2 text-xs text-foreground/60">›</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: product detail preview */}
          <div className="hidden flex-1 min-w-0 space-y-6 rounded-[32px] border border-[#f0d9ff] bg-white/95 p-6 shadow-[0_20px_80px_-40px_rgba(122,2,142,.4)] md:block">
            {selectedProduct ? (
              selectedProduct.slug === "temperature-detection-system" && temperatureSubProducts.length === 2 ? (
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Product overview</p>
                  <div className="grid gap-6 md:grid-cols-2">
                    {temperatureSubProducts.map((sub) => (
                      <div
                        key={sub.slug}
                        className="space-y-4 rounded-[28px] border border-[#f0d9ff] bg-white/95 p-4 shadow-sm"
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <ProductImageSlider
                            images={productImagesBySlug[sub.slug] ?? ["/images/hero-1.png"]}
                            alt={sub.label}
                            variant="preview"
                          />
                        </div>
                        <div className="space-y-3">
                          <h2 className="text-lg font-bold text-[#360236]">{sub.label}</h2>
                          <div className="flex flex-wrap gap-3">
                            <Link
                              href={`/products/${sub.slug}`}
                              className="inline-flex rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
                            >
                              View details
                            </Link>
                            <Link
                              href="/service-support/product-enquiry"
                              className="inline-flex rounded-full border border-[#a605c7]/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a605c7]"
                            >
                              Enquiry
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="md:w-1/2">
                    <div className="relative aspect-[4/3] w-full">
                      <ProductImageSlider
                        images={productImagesBySlug[selectedProduct.slug] ?? ["/images/hero-1.png"]}
                        alt={selectedProduct.label}
                        variant="preview"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Product overview</p>
                    <h2 className="text-2xl font-bold text-[#360236]">{selectedProduct.label}</h2>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/products/${selectedProduct.slug}`}
                        className="inline-flex rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg"
                      >
                        View details
                      </Link>
                      <Link
                        href="/service-support/product-enquiry"
                        className="inline-flex rounded-full border border-[#a605c7]/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#a605c7]"
                      >
                        Enquiry
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <p className="text-sm text-foreground/60">Select a product from the list to view its details.</p>
            )}
          </div>
        </div>
      </section>

      {/* Mobile overlay for product preview */}
      {isMobileOverlayOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOverlayOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-[28px] border border-[#f0d9ff] bg-white/95 p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#f5e6ff] text-xs text-[#5d075f] shadow-lg"
              aria-label="Close"
              onClick={() => setIsMobileOverlayOpen(false)}
            >
              ✕
            </button>

            <div className="space-y-4">
              {selectedProduct.slug === "temperature-detection-system" && temperatureSubProducts.length === 2 ? (
                <div className="space-y-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#a605c7] text-center">Product overview</p>
                  <div className="space-y-4">
                    {temperatureSubProducts.map((sub) => (
                      <div
                        key={sub.slug}
                        className="space-y-3 rounded-[24px] border border-[#f0d9ff] bg-white/95 p-3"
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <ProductImageSlider
                            images={productImagesBySlug[sub.slug] ?? ["/images/hero-1.png"]}
                            alt={sub.label}
                            variant="preview"
                          />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-base font-bold text-[#360236]">{sub.label}</h2>
                          <div className="flex flex-wrap gap-2">
                            <Link
                              href={`/products/${sub.slug}`}
                              className="inline-flex flex-1 justify-center rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
                              onClick={() => setIsMobileOverlayOpen(false)}
                            >
                              View details
                            </Link>
                            <Link
                              href="/service-support/product-enquiry"
                              className="inline-flex flex-1 justify-center rounded-full border border-[#a605c7]/30 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#a605c7]"
                              onClick={() => setIsMobileOverlayOpen(false)}
                            >
                              Enquiry
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative aspect-[4/3] w-full">
                    <ProductImageSlider
                      images={productImagesBySlug[selectedProduct.slug] ?? ["/images/hero-1.png"]}
                      alt={selectedProduct.label}
                      variant="preview"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#a605c7]">Product overview</p>
                    <h2 className="text-lg font-bold text-[#360236]">{selectedProduct.label}</h2>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/products/${selectedProduct.slug}`}
                        className="inline-flex flex-1 justify-center rounded-full bg-gradient-to-r from-[#ff96ff] to-[#a605c7] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
                        onClick={() => setIsMobileOverlayOpen(false)}
                      >
                        View details
                      </Link>
                      <Link
                        href="/service-support/product-enquiry"
                        className="inline-flex flex-1 justify-center rounded-full border border-[#a605c7]/30 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#a605c7]"
                        onClick={() => setIsMobileOverlayOpen(false)}
                      >
                        Enquiry
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
