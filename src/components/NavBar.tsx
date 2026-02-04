"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { navItems, type NavItem } from "@/data/siteContent";

const brandInitials = "REU";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.65" y1="16.65" x2="21" y2="21" />
  </svg>
);

type MenuNavItem = Extract<NavItem, { menuType: string }>;

const isMenuNavItem = (item: NavItem): item is MenuNavItem =>
  "menuType" in item && Boolean(item.menuType);

const MegaMenu = ({ item }: { item: MenuNavItem }) => {
  if (item.menuType === "columns") {
    return (
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {item.columns.map((column) => (
          <div key={column.heading} className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
              {column.heading}
            </p>
            <div className="space-y-2 text-sm">
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl border border-transparent px-3 py-2 transition hover:border-white/40 hover:bg-white/10"
                >
                  <p className="font-semibold text-[#5d075f]">{link.label}</p>
                  {link.description && (
                    <p className="text-xs text-foreground/70">{link.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {item.cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group overflow-hidden rounded-3xl border border-white/40 bg-white/40 shadow-md transition hover:-translate-y-1"
        >
          <div className="relative h-36 w-full overflow-hidden">
            <Image
              src={card.image}
              alt={card.label}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="space-y-1 px-4 py-3">
            <p className="font-semibold text-[#5d075f]">{card.label}</p>
            <p className="text-sm text-foreground/70">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const NavBar = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const currentMenu = useMemo(() => {
    if (!activeMenu) return null;
    return (
      navItems.find((item): item is MenuNavItem => item.label === activeMenu && isMenuNavItem(item)) ??
      null
    );
  }, [activeMenu]);

  return (
    <div className="sticky top-0 z-50 border-b border-white/40 bg-white/80 text-sm text-foreground/90 backdrop-blur">
      <div className="hidden border-b border-white/40 bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-6 py-2 text-xs text-white md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="tracking-[0.3em] uppercase">Registered LLP • Incorporated 28 May 2015 • LLPIN AAE-0508</p>
          <div className="flex gap-6">
            <a href="tel:+919987092470" className="hover:underline">
              +91 99870 92470
            </a>
            <a href="mailto:rahulukey2004@gmail.com" className="hover:underline">
              rahulukey2004@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div
        className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden ">
            <Image src="/images/reu_logo/logo.png" alt={brandInitials} fill sizes="56px" className="object-contain" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">Incorporated 2015</p>
            <p className="text-lg font-semibold">REU Engineering and LLP</p>
          </div>
        </div>
        <nav className="flex flex-1 flex-wrap items-center justify-end gap-3 text-[0.95rem] font-semibold uppercase tracking-wide">
          {navItems.map((item) => {
            const isActive = item.href ? pathname === item.href : false;
            const hasMenu = isMenuNavItem(item);
            return (
              <div key={item.label} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`rounded-full px-4 py-2 transition ${
                      isActive
                        ? "bg-gradient-to-r from-[#a605c7] to-[#5d075f] text-white"
                        : "text-foreground/80 hover:bg-white/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onMouseEnter={() => setActiveMenu(item.label)}
                    className="rounded-full px-4 py-2 text-foreground/80 transition hover:bg-white/70 hover:text-foreground"
                  >
                    {item.label}
                  </button>
                )}
                {hasMenu && (
                  <div
                    className="absolute inset-x-0 top-full h-2"
                    onMouseEnter={() => setActiveMenu(item.label)}
                  />
                )}
              </div>
            );
          })}
          <button className="rounded-full border border-[#a605c7]/40 px-4 py-2 text-[#a605c7] transition hover:bg-[#a605c7] hover:text-white">
            <span className="sr-only">Search</span>
            <SearchIcon />
          </button>
        </nav>
      </div>
      {currentMenu && (
        <div
          className="border-t border-white/50 bg-gradient-to-b from-[#fff0ff] to-[#f9e5ff] px-6 py-8 shadow-lg"
          onMouseLeave={() => setActiveMenu(null)}
          onMouseEnter={() => setActiveMenu(currentMenu.label)}
        >
          <div className="mx-auto max-w-6xl">
            <MegaMenu item={currentMenu} />
          </div>
        </div>
      )}
    </div>
  );
};
