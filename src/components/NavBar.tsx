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
                  key={`${column.heading}-${link.label}-${link.href}`}
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
        <div
          key={card.href}
          className="group cursor-default overflow-hidden rounded-3xl border border-white/40 bg-white/40 shadow-md"
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
        </div>
      ))}
    </div>
  );
};

export const NavBar = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Simple search implementation - you can enhance this with actual search logic
    try {
      // This is a placeholder - implement actual search based on your needs
      const mockResults = [
        { title: "Pressure Reducing Systems", href: "/products/upstream-pressure-control-valve" },
        { title: "Gas Detection System", href: "/products/gas-detection-system" },
        { title: "Safety Valves", href: "/products/safety-valves" },
        { title: "Service & Support", href: "/service-support" },
        { title: "About Us", href: "/company/about-us" },
        { title: "Contact", href: "/contact" },
      ].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(mockResults);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    }
  };

  const currentMenu = useMemo(() => {
    if (!activeMenu) return null;
    return (
      navItems.find((item): item is MenuNavItem => item.label === activeMenu && isMenuNavItem(item)) ??
      null
    );
  }, [activeMenu]);

  return (
    <div className="sticky top-0 z-50 border-b border-white/40 bg-white/80 text-sm text-foreground/90 backdrop-blur">
      <div className="border-b border-white/40 bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-6 py-2 text-xs text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+919987092470" className="hover:underline">
              +91 99870 92470
            </a>
            <span> </span>
            <a href="mailto:rahulukey@reu.co.in" className="hover:underline">
              rahulukey@reu.co.in
            </a>
          </div>
          <a
            href="https://www.youtube.com/@rahulukey1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#ffe5ff]"
          >
            <span className="sr-only">REU YouTube channel</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <path d="M21.8 8.001a2.753 2.753 0 0 0-1.94-1.948C18.27 5.6 12 5.6 12 5.6s-6.27 0-7.86.453A2.753 2.753 0 0 0 2.2 8.001 28.59 28.59 0 0 0 1.75 12a28.59 28.59 0 0 0 .45 3.999 2.753 2.753 0 0 0 1.94 1.948C5.73 18.4 12 18.4 12 18.4s6.27 0 7.86-.453a2.753 2.753 0 0 0 1.94-1.948A28.59 28.59 0 0 0 22.25 12a28.59 28.59 0 0 0-.45-3.999ZM10.4 14.6V9.4L14.8 12Z" />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="flex w-full flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-start"
        onMouseLeave={() => {
          setActiveMenu(null);
          setIsSearchOpen(false);
        }}
      >
        <div className="flex items-center justify-between md:justify-start">
          <div className="relative h-15 w-28 flex-shrink-0 overflow-hidden">
            <Image src="/images/reu_logo/logo.png" alt={brandInitials} fill sizes="96px" className="object-contain" />
          </div>
          <div className="flex min-w-0 flex-1 items-center pl-1">
            <p className="text-[0.72rem] font-semibold leading-tight sm:text-sm md:text-base lg:text-lg">
              REU ENGINEERING & CONSULTING LLP
            </p>
          </div>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="ml-auto flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-foreground/40 md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <span className="block h-[2px] w-4 rounded bg-black" />
            <span className="block h-[2px] w-4 rounded bg-black" />
            <span className="block h-[2px] w-4 rounded bg-black" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
        {/* Desktop navigation */}
        <nav className="hidden flex-1 items-center justify-start gap-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] md:ml-4 md:flex md:flex-nowrap">
          {navItems.map((item) => {
            const isActive = item.href ? pathname === item.href : false;
            const hasMenu = isMenuNavItem(item);
            const isProducts = item.label === "PRODUCTS";
            const isServiceSupport = item.label === "SERVICE & SUPPORT";
            return (
              <div key={item.label} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActiveMenu(null)}
                    style={isActive ? { color: "#ffffff" } : undefined}
                    className={`rounded-full px-1.5 py-1.5 whitespace-nowrap transition ${
                      isActive
                        ? "bg-gradient-to-r from-[#a605c7] to-[#5d075f] text-white"
                        : "text-foreground/80 hover:bg-white/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : isServiceSupport ? (
                  <Link
                    href="/service-support"
                    onMouseEnter={() => setActiveMenu(item.label)}
                    className="flex items-center gap-1 rounded-full px-1.5 py-1.5 whitespace-nowrap text-foreground/80 transition hover:bg-white/70 hover:text-foreground"
                  >
                    <span>{item.label}</span>
                    <span className="text-[0.6rem] align-middle">▼</span>
                  </Link>
                ) : isProducts ? (
                  <Link
                    href="/products"
                    onMouseEnter={() => setActiveMenu(item.label)}
                    className="flex items-center gap-1 rounded-full px-2 py-1.5 whitespace-nowrap text-foreground/80 transition hover:bg-white/70 hover:text-foreground"
                  >
                    <span>{item.label}</span>
                    <span className="text-[0.6rem] align-middle">▼</span>
                  </Link>
                ) : (
                  <button
                    onMouseEnter={() => setActiveMenu(item.label)}
                    className="flex items-center gap-1 rounded-full px-2.5 py-1.5 whitespace-nowrap text-foreground/80 transition hover:bg-white/70 hover:text-foreground"
                  >
                    <span>{item.label}</span>
                    <span className="text-[0.6rem] align-middle">▼</span>
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
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#a605c7]/40 text-[#a605c7] transition hover:bg-[#a605c7] hover:text-white"
            >
              <span className="sr-only">Search</span>
              <SearchIcon />
            </button>
            
            {/* Search Dropdown */}
            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search entire website..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  
                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="mt-3 max-h-60 overflow-y-auto">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Search Results:</p>
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.href}
                          className="block px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-900">{result.title}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {searchQuery && searchResults.length === 0 && (
                    <p className="mt-3 text-sm text-gray-500">No results found for "{searchQuery}"</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/60 bg-white/95 px-6 pb-4 pt-2 text-sm shadow-md md:hidden">
          <div className="mx-auto max-w-6xl space-y-3">
            {navItems.map((item) => {
              const hasMenu = isMenuNavItem(item);
              const isActive = item.href ? pathname === item.href : false;

              if (item.href) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={isActive ? { color: "#ffffff" } : undefined}
                    className={`block rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                      isActive
                        ? "bg-gradient-to-r from-[#a605c7] to-[#5d075f] text-white"
                        : "text-foreground/80 hover:bg-white/80 hover:text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (hasMenu && item.menuType === "columns") {
                return (
                  <div key={item.label} className="space-y-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-full px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-foreground/70"
                      onClick={() =>
                        setOpenMobileSection((prev) => (prev === item.label ? null : item.label))
                      }
                    >
                      <span>{item.label}</span>
                      <span className="text-xs">{openMobileSection === item.label ? "−" : "+"}</span>
                    </button>
                    {openMobileSection === item.label && (
                      <div className="space-y-1 pl-3">
                        {item.columns.flatMap((column) =>
                          column.links.map((link) => (
                            <Link
                              key={`${column.heading}-${link.label}-${link.href}-mobile`}
                              href={link.href}
                              className="block rounded-full px-4 py-1.5 text-xs text-foreground/80 hover:bg-white/80 hover:text-foreground"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              if (hasMenu && item.menuType === "cards") {
                return (
                  <div key={item.label} className="space-y-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-full px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-foreground/70"
                      onClick={() =>
                        setOpenMobileSection((prev) => (prev === item.label ? null : item.label))
                      }
                    >
                      <span>{item.label}</span>
                      <span className="text-xs">{openMobileSection === item.label ? "−" : "+"}</span>
                    </button>
                    {openMobileSection === item.label && (
                      <div className="space-y-2 pl-2">
                        {item.cards.map((card) => (
                          <div
                            key={`${card.href}-mobile`}
                            className="flex items-center gap-3 rounded-2xl px-3 py-2 text-xs text-foreground/80"
                          >
                            <div className="relative h-10 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-white/60 bg-white">
                              <Image
                                src={card.image}
                                alt={card.label}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold">{card.label}</p>
                              {card.description && (
                                <p className="text-[0.7rem] text-foreground/70">{card.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      )}
      {currentMenu && (
        <div
          className="relative z-40 border-t border-white/50 bg-gradient-to-b from-[#fff0ff] to-[#f9e5ff] px-6 py-8 shadow-lg"
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
