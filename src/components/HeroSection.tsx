"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroStats } from "@/data/siteContent";

type CustomService = {
  title: string;
  description: string;
};

type HeroSlideAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type SlideSide =
  | { type: "slider"; images: string[]; interval?: number; altPrefix: string; objectFit?: "contain" | "cover" }
  | { type: "image"; image: string; alt: string; objectFit?: "contain" | "cover" };

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
  actions?: HeroSlideAction[];
  showStats?: boolean;
  overlayTone?: "light" | "dark";
  overlayAlign?: "left" | "center";
  backgroundImages: string[];
  backgroundInterval?: number;
  side?: SlideSide | null;
};

type HeroSectionProps = {
  customServices: CustomService[];
};

const SLIDE_DURATION = 9000;

export const HeroSection = ({ customServices }: HeroSectionProps) => {
  const slides = useMemo<HeroSlide[]>(() => {
    const serviceHighlights =
      customServices.length > 0
        ? customServices.slice(0, 4).map((service) => service.title)
        : [
            "Soda Dosing Units",
            "Temperature Control Systems",
            "Compressed Air Service",
            "Fire Fighting & Hydrant",
          ];

    return [
      {
        id: "foundation",
        eyebrow: "From Design to Commissioning",
        title: "Active LLP partner for pressure control & process solutions",
        description:
          "Incorporated on 28 May 2015 (LLPIN AAE-0508) and headquartered in Kamothe, Navi Mumbai, we deliver custom-engineered gas handling, automation, and lifecycle programs for refineries, pharma majors, utilities, and EPC specialists across India.",
        actions: [
          { label: "View Products", href: "/products/upstream-pressure-control-valve", variant: "primary" },
          { label: "Our Story", href: "/company/leadership-team", variant: "secondary" },
        ],
        showStats: true,
        overlayTone: "light",
        backgroundImages: ["/images/hero-1.png", "/images/hero-2.png"],
        backgroundInterval: 4500,
        side: null,
      },
      {
        id: "customize",
        eyebrow: "Customize Requirements & Services Provided",
        title: "Tailor-made delivery and lifecycle care",
        description:
          "Engage one team for EPC, commissioning, upgrades, and steady-state maintenance. We stitch together mechanical, instrumentation, and digital workflows to suit every brownfield or greenfield brief.",
        highlights: serviceHighlights,
        actions: [{ label: "View Services", href: "#services", variant: "primary" }],
        overlayTone: "light",
        backgroundImages: ["/images/hero-3.png"],
        side: {
          type: "slider",
          images: ["/images/hero-3.png", "/images/hero-4.png", "/images/hero-5.png", "/images/hero-6.png"],
          altPrefix: "Custom services visual",
          interval: 2400,
          objectFit: "cover",
        },
      },
      {
        id: "prs",
        eyebrow: "PRS",
        title: "Pressure Reducing Systems engineered for uptime",
        description:
          "Modular PRS skids keep critical utilities stable with redundant trains, IoT diagnostics, and code-compliant safety interlocks. Digitally commissionable and ready for future expansions.",
        highlights: [
          "Multi-stage pressure trimming",
          "Redundant monitoring & alarms",
          "Field-serviceable modules",
        ],
        actions: [
          { label: "Explore PRS Solutions", href: "/products/upstream-pressure-control-valve", variant: "primary" },
          { label: "Talk to Specialists", href: "#contact", variant: "secondary" },
        ],
        overlayTone: "light",
        backgroundImages: ["/images/hero-6.png"],
        side: { type: "image", image: "/images/prs.png", alt: "Pressure reducing system render", objectFit: "contain" },
      },
    ];
  }, [customServices]);

  const [activeSlide, setActiveSlide] = useState(0);
  const [backgroundFrame, setBackgroundFrame] = useState(0);
  const [sideFrame, setSideFrame] = useState(0);
  const totalSlides = slides.length;
  const currentSlide = slides[activeSlide];
  const backgroundImagesSafe = useMemo(
    () => currentSlide.backgroundImages.filter((img): img is string => Boolean(img)),
    [currentSlide]
  );
  const sliderSide = currentSlide.side && currentSlide.side.type === "slider" ? currentSlide.side : null;
  const imageSide = currentSlide.side && currentSlide.side.type === "image" ? currentSlide.side : null;
  const sideSliderImages = useMemo(
    () => (sliderSide ? sliderSide.images.filter((img): img is string => Boolean(img)) : []),
    [sliderSide]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [totalSlides]);

  useEffect(() => {
    setBackgroundFrame(0);
    setSideFrame(0);
  }, [activeSlide]);

  useEffect(() => {
    if (backgroundImagesSafe.length <= 1) return undefined;
    const timer = setInterval(() => {
      setBackgroundFrame((prev) => (prev + 1) % backgroundImagesSafe.length);
    }, currentSlide.backgroundInterval ?? 5000);
    return () => clearInterval(timer);
  }, [backgroundImagesSafe, currentSlide.backgroundInterval]);

  useEffect(() => {
    if (!sliderSide || sideSliderImages.length <= 1) return undefined;
    const timer = setInterval(() => {
      setSideFrame((prev) => (prev + 1) % sideSliderImages.length);
    }, sliderSide.interval ?? 2600);
    return () => clearInterval(timer);
  }, [sliderSide, sideSliderImages]);

  const isLightOverlay = (currentSlide.overlayTone ?? "light") === "light";
  const textBase = isLightOverlay ? "text-white" : "text-[#2b0030]";
  const textMuted = isLightOverlay ? "text-white/80" : "text-[#2b0030]/80";
  const accentColor = isLightOverlay ? "#ffb6ff" : "#7a028e";

  const renderActionButton = (action: HeroSlideAction) => {
    const baseClasses = "rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition";
    if (action.variant === "secondary") {
      return (
        <Link
          key={action.label}
          href={action.href}
          className={`${baseClasses} border ${
            isLightOverlay ? "border-white/70 text-white hover:bg-white/10" : "border-[#a605c7] text-[#a605c7] hover:bg-[#a605c7] hover:text-white"
          }`}
        >
          {action.label}
        </Link>
      );
    }

    return (
      <Link
        key={action.label}
        href={action.href}
        className={`${baseClasses} bg-gradient-to-r from-[#ff7cd9] to-[#a605c7] text-white shadow-lg shadow-[#ff7cd9]/40 hover:scale-[1.01]`}
      >
        {action.label}
      </Link>
    );
  };

  const renderHighlights = (highlights?: string[]) => {
    if (!highlights?.length) return null;
    return (
      <div className="grid gap-3 md:grid-cols-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className={`rounded-2xl border px-4 py-3 text-sm ${
              isLightOverlay ? "border-white/30 bg-white/10 text-white" : "border-[#efd4ff] bg-white text-[#4a014e]"
            }`}
          >
            {highlight}
          </div>
        ))}
      </div>
    );
  };

  const renderStats = () => {
    if (!currentSlide.showStats) return null;
    return (
      <div
        className={`divide-y rounded-[32px] border backdrop-blur ${
          isLightOverlay
            ? "divide-white/10 border-white/20 bg-white/10 text-white"
            : "divide-[#e8c9ff]/70 border-[#f0d5ff] bg-white/85 text-[#5a0866]"
        }`}
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="grid grid-cols-2 gap-3 px-6 py-4 text-sm">
            <p className="text-3xl font-bold" style={{ color: accentColor }}>
              {stat.value}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.3em]">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderSide = () => {
    if (!currentSlide.side) return null;
    if (imageSide && imageSide.image) {
      const fitClass = imageSide.objectFit === "contain" ? "object-contain" : "object-cover";
      return (
        <div className="relative h-[360px] w-full max-w-md overflow-hidden rounded-[32px] border border-white/40 bg-white/10 p-6 backdrop-blur">
          <Image
            src={imageSide.image}
            alt={imageSide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            className={fitClass}
            priority={activeSlide === 2}
          />
        </div>
      );
    }

    if (!sliderSide || !sideSliderImages.length) return null;
    const fitClass = sliderSide.objectFit === "contain" ? "object-contain" : "object-cover";
    return (
      <div className="relative h-[360px] w-full max-w-md overflow-hidden rounded-[32px] border border-white/40 bg-white/10 backdrop-blur">
        {sideSliderImages.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`${sliderSide.altPrefix} ${idx + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            className={`${fitClass} transition-opacity duration-700 ${idx === sideFrame ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {sideSliderImages.map((_, idx) => (
            <span
              key={`${currentSlide.id}-side-${idx}`}
              className={`h-2 w-6 rounded-full ${idx === sideFrame ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative isolate w-full overflow-hidden rounded-[32px] border border-white/20 bg-black/80 text-white">
      <div className="absolute inset-0 -z-10">
        {backgroundImagesSafe.length > 0 && (
          <Image
            key={`${currentSlide.id}-${backgroundFrame}`}
            src={backgroundImagesSafe[backgroundFrame % backgroundImagesSafe.length]}
            alt={`${currentSlide.title} visual`}
            fill
            priority={activeSlide === 0}
            className="object-cover"
          />
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isLightOverlay
              ? "from-black/80 via-black/60 to-black/20"
              : "from-white/90 via-white/70 to-white/20"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
        <div className={`flex-1 space-y-6 ${textBase}`}>
          <p className={`text-xs font-semibold uppercase tracking-[0.45em] ${isLightOverlay ? "text-white/70" : "text-[#b607c5]"}`}>
            {currentSlide.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">{currentSlide.title}</h1>
          <p className={`text-base ${textMuted}`}>{currentSlide.description}</p>
          {renderHighlights(currentSlide.highlights)}
          {currentSlide.actions && <div className="flex flex-wrap gap-4">{currentSlide.actions.map(renderActionButton)}</div>}
          {renderStats()}
        </div>
        <div className="flex-1">{renderSide()}</div>
      </div>

      <div className="relative z-10 flex justify-center gap-3 pb-8">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === activeSlide ? "w-12 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Show ${slide.eyebrow} slide`}
          />
        ))}
      </div>
    </section>
  );
};
