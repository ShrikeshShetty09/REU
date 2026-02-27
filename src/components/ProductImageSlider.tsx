"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type ProductImageSliderProps = {
  images: string[];
  alt: string;
  variant?: "detail" | "preview";
};

export function ProductImageSlider({ images, alt, variant = "detail" }: ProductImageSliderProps) {
  const hasMultiple = images.length > 1;

  // Fallback to a single empty array element to avoid errors
  const safeImages = images.length > 0 ? images : ["/images/hero-1.png"];
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    if (!hasMultiple) return;
    setCurrent((prev) => (prev + 1) % safeImages.length);
  };

  const goPrev = () => {
    if (!hasMultiple) return;
    setCurrent((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  // Auto-advance for multi-image sliders
  useEffect(() => {
    if (!hasMultiple) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeImages.length);
    }, 4000);

    return () => clearInterval(id);
  }, [hasMultiple, safeImages.length]);

  const containerClasses =
    variant === "preview"
      ? "relative overflow-hidden rounded-3xl border border-[#f3d7ff] bg-gradient-to-br from-[#fff2ff] to-[#ffe9ff]"
      : "relative overflow-hidden rounded-[32px] border border-white/60 bg-white";

  if (!hasMultiple) {
    // Static single image with soft hover zoom
    // Ensure the slider stretches to fill the height provided by the parent
    return (
      <div className={`group h-full ${containerClasses}`}>
        <div className="relative h-full w-full">
          <Image
            src={safeImages[0]}
            alt={alt}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-[1.08]"
            sizes="(max-width:768px) 100vw, 40vw"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`group h-full ${containerClasses}`}>
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {safeImages.map((src) => (
            <div key={src} className="relative h-full w-full flex-shrink-0">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#a605c7] text-sm text-white shadow-lg hover:bg-[#8a04a5]"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#a605c7] text-sm text-white shadow-lg hover:bg-[#8a04a5]"
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 py-3">
        {safeImages.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? "bg-[#a605c7]" : "bg-[#f0d9ff] hover:bg-[#d9a9ff]"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
