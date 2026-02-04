import Link from "next/link";

const quickLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company", href: "/company" },
  { label: "Clients", href: "/clients" },
  { label: "Service & Support", href: "/service-support" },
  { label: "Industrial Automation", href: "/industrial-automation" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Quality Assurance", href: "/company/quality-assurance" },
  { label: "Technical Articles", href: "/company/technical-articles" },
  { label: "Events", href: "/company/events" },
  { label: "Press Release", href: "/company/press-release" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#2b0b33] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[#ff96ff]">REU Engineering and LLP</p>
          <p className="text-sm text-white/80">
            Incorporated on 28 May 2015 (LLPIN AAE-0508) and operating from Kamothe, Navi Mumbai. We deliver consulting-led pressure
            control, gas handling, and automation programs with compliance-grade documentation.
          </p>
          <p className="text-sm">
            302, Aditya Heights CHS, Plot No.52, Sector 10, Kamothe (Panvel), Navi Mumbai 410209<br />
            +91 99870 92470 / +91 90223 65220 · rahulukey2004@gmail.com
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff96ff]">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff96ff]">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {resources.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff96ff]">Newsletter</h4>
          <p className="text-sm text-white/80">Get project stories, technical notes, and event invites.</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-full border border-white/30 bg-transparent px-4 py-3 text-sm placeholder:text-white/50 focus:border-[#ff96ff] focus:outline-none"
            />
            <button className="w-full rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] py-3 text-sm font-semibold uppercase tracking-wide">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/20 px-6 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} REU Engineering and LLP. Inspired by Nirmal Industrial Controls Pvt. Ltd.
      </div>
    </footer>
  );
};
