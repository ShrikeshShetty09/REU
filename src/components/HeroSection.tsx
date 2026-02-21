"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
          "REU is a leading supplier and service provider in the field of gas, air, safety, gas detection and process control systems such as DeltaV DCS and DeltaV MES, with strong focus on validation, mapping and lifecycle site support.",
        actions: [
          { label: "View Products", href: "/products/upstream-pressure-control-valve", variant: "primary" },
          { label: "Our Story", href: "/company/about-us", variant: "secondary" },
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

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);

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

  // Initialize YouTube Player API for the hero video iframe
  useEffect(() => {
    if (!iframeRef.current) return;

    const setupPlayer = () => {
      const win = window as any;
      if (win.YT && win.YT.Player) {
        playerRef.current = new win.YT.Player(iframeRef.current);
      }
    };

    const win = window as any;
    if (win.YT && win.YT.Player) {
      setupPlayer();
      return;
    }

    // Load YouTube IFrame API script once
    const scriptId = "youtube-iframe-api";
    if (!document.getElementById(scriptId)) {
      const tag = document.createElement("script");
      tag.id = scriptId;
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.body.appendChild(tag);
      }
    }

    win.onYouTubeIframeAPIReady = () => {
      setupPlayer();
    };
  }, []);

  // Pause/play the video automatically based on hero visibility
  useEffect(() => {
    if (!iframeRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && playerRef.current?.pauseVideo) {
            // When the hero is no longer sufficiently visible, pause the video
            playerRef.current.pauseVideo();
          } else if (entry.isIntersecting && playerRef.current?.playVideo) {
            // When the hero comes back into view, resume playback
            playerRef.current.playVideo();
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(iframeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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
    <section className="relative isolate w-full overflow-hidden rounded-[32px] border border-white/20">
      <div className="relative w-full" style={{ paddingTop: "45%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          ref={iframeRef}
          src="https://www.youtube.com/embed/PEMZdTYtxC0?autoplay=1&controls=0&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=PEMZdTYtxC0&enablejsapi=1"
          title="REU Equipment Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
};
