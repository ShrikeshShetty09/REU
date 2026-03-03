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
  { label: "Our Catalogue", href: "/reu_new_catalogue/reu_catalogue.pdf" },
  { label: "Events", href: "/company/events" },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#2b0b33] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[#ff96ff]">REU Engineering and LLP</p>
          <p className="text-sm text-white/80">
            REU is a leading supplier and service provider in the field of gas, air, safety, gas detection and process control
            systems including DeltaV DCS, DeltaV MES, validation and mapping related solutions.
          </p>
          <p className="text-sm">
            Corporate Address : Shop No 1, Plot No 85, sec-R1, Near MSEB Office, Vadghar, Karanjade, Panvel 410206
            <br />
            +91 99870 92470 / +91 90223 65220 · rahulukey@reu.co.in
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
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff96ff]">Contact us</h4>
          <p className="text-sm text-white/80">
            Have a requirement around gas, air, safety, gas detection or process control systems? Reach out to our team for a
            quick discussion.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-6 py-3 text-sm font-semibold uppercase tracking-wide"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="border-t border-white/20 px-6 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} REU Engineering and LLP. All rights Reserved. Developed by{" "}
        <a href="https://revatech-ai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
          Reva Technologies
        </a>
        {" - "}
        <a href="https://revatech-ai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
          https://revatech-ai.com/
        </a>
      </div>
    </footer>
  );
};
