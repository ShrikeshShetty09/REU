export type DetailItem = {
  label: string;
  slug: string;
  description: string;
  summary: string;
  highlights: string[];
  image?: string;
  category: "product" | "solution" | "company";
};

export type MenuColumn = {
  heading: string;
  links: { label: string; href: string; description?: string }[];
};

export type CardMenuItem = {
  label: string;
  href: string;
  description: string;
  image: string;
};

const toHref = (base: string, slug: string) => `/${base}/${slug}`;

const productData: DetailItem[] = [
  {
    category: "product",
    label: "Pressure Reducing Systems",
    slug: "pressure-reducing-systems",
    description: "Multi-stage regulators that hold upstream lines steady despite fluctuating feeds.",
    summary:
      "Self-actuated stations sized for refinery, chemical, and pharma utilities keep upstream headers within tight tolerances without external power.",
    highlights: [
      "Balanced trim for fast response",
      "Fail-safe closure with monitored pilots",
      "ASME / PESO compliant fabrication",
    ],
  },
  {
    category: "product",
    label: "High Pressure Cylinder Cascade",
    slug: "high-pressure-cylinder-cascade",
    description: "Manifolded cylinder banks with sequencing panels for uninterrupted supply.",
    summary:
      "Factory-built racks, valves, and monitoring devices allow safe decanting from tube trailers or cylinder bundles to plant networks.",
    highlights: [
      "Interlocked change-over valves",
      "Crash-frame and lifting certified",
      "Remote pressure monitoring options",
    ],
  },
  {
    category: "product",
    label: "Centrifugal Blanketing",
    slug: "centrifugal-blanketing",
    description: "Nitrogen blankets that protect centrifuges from oxidation and ignition.",
    summary:
      "Close-coupled sense lines and responsive control valves maintain inert atmospheres inside high-speed centrifuge housings.",
    highlights: [
      "Compact skid for retrofits",
      "Dual isolation for maintenance",
      "NFPA / ATEX aligned venting",
    ],
  },
  {
    category: "product",
    label: "Back Pressure Control Valve",
    slug: "back-pressure-valve",
    description: "Maintains minimum pressure on reactors, compressors, and process skids.",
    summary:
      "Precision back-pressure regulators protect upstream equipment from pressure collapse and stabilize recycle loops.",
    highlights: [
      "Wide pressure classes",
      "Integral slam-shut",
      "Materials traceability for critical media",
    ],
  },
  {
    category: "product",
    label: "Breather Valves & Flame Arresters",
    slug: "breather-valves-and-flame-arresters",
    description: "Tank vent protection combining pressure/vacuum pallets with flame stopping elements.",
    summary:
      "Weighted pallets and tested arrestor elements protect storage tanks from vacuum collapse, over-pressure, and flashback events.",
    highlights: [
      "Bi-directional flame arrestors",
      "Weather hoods and screens",
      "Tool-free pallet adjustments",
    ],
  },
  {
    category: "product",
    label: "Safety Valves",
    slug: "safety-valves",
    description: "Certified over-pressure protection for vessels, piping, and skids.",
    summary:
      "Spring and pilot-operated relief valves sized to API 520/526 relieve vapor, liquid, and two-phase flows with quick reseat performance.",
    highlights: [
      "PED / IBR compliance",
      "High-temperature trims",
      "Condition monitoring taps",
    ],
  },
  {
    category: "product",
    label: "Ball Valves & Non Return Valves etc.",
    slug: "ball-valves-non-return",
    description: "Isolation and check valves for critical process utilities.",
    summary:
      "Full-bore ball valves, swing checks, and NRVs in carbon steel, stainless, and exotic alloys ensure leak-tight shutoff and backflow protection.",
    highlights: [
      "Fire-safe designs",
      "API / ANSI dimensional standards",
      "Custom actuation packages",
    ],
  },
  {
    category: "product",
    label: "High Pressure Regulators",
    slug: "high-pressure-regulators",
    description: "Point-of-use regulators for labs, OEM skids, and specialty gas lines.",
    summary:
      "Single and double-stage regulators with creep-free shutoff deliver precise control from cylinder pressure to instrument-grade delivery.",
    highlights: [
      "Brass, SS, and Monel bodies",
      "Replaceable seat cartridges",
      "Optional digital indication",
    ],
  },
  {
    category: "product",
    label: "Gas Detection System",
    slug: "gas-detection-system",
    description: "Fixed detectors, controllers, and alarms for toxic or flammable gases.",
    summary:
      "Integrated detection platforms cover catalytic, electrochemical, and IR sensing with SIL-rated logic and annunciation.",
    highlights: [
      "Multi-channel controllers",
      "BMS / DCS integration",
      "Calibration and AMC support",
    ],
  },
  {
    category: "product",
    label: "Gas Pipeline",
    slug: "gas-pipeline",
    description: "Turnkey industrial gas pipeline networks from cylinder room to point-of-use.",
    summary:
      "Design, fabrication, and installation services covering headers, manifolds, drop lines, and documentation for regulated facilities.",
    highlights: [
      "Orbital welded SS316L",
      "Leak tested to international codes",
      "Colour coding and tagging as per standards",
    ],
  },
  {
    category: "product",
    label: "Gas purification gas control box & gas detector",
    slug: "gas-purification-system",
    description: "Purifiers removing moisture, hydrocarbons, and particulates from specialty gases.",
    summary:
      "Cartridge-based and regenerative purifier trains keep analytical instruments and process tools supplied with ultra-clean media.",
    highlights: [
      "Moisture and oxygen getters",
      "Integrated monitoring gauges",
      "Service-exchange programs",
    ],
  },
  {
    category: "product",
    label: "Temperature Detection System",
    slug: "temperature-detection-system",
    description: "Sensor networks and control panels for temperature-critical assets.",
    summary:
      "RTD and thermocouple arrays with SCADA-ready panels provide continuous monitoring for storage, pipelines, and compressors.",
    highlights: [
      "Dual redundant sensing loops",
      "Digital calibration records",
      "Alarm logic tied to shutdown systems",
    ],
  },
  {
    category: "product",
    label: "Mini Gas Station",
    slug: "mini-gas-station",
    description: "Compact fueling or dispensing skids for localized gas supply.",
    summary:
      "Integrated metering, regulation, and safety shutoffs packaged into transportable enclosures for satellite gas stations.",
    highlights: [
      "Plug-and-play installation",
      "Remote telemetry ready",
      "Meets PESO guidelines",
    ],
  },
  {
    category: "product",
    label: "Utility & Lab Fume Hood Piping",
    slug: "utility-lab-fume-hood-piping",
    description: "Design-build services for laboratory utility and fume hood piping.",
    summary:
      "Ultra-clean piping layouts, manifolds, and exhaust interfaces keep R&D and QC labs compliant with global safety norms.",
    highlights: [
      "Borosilicate and SS options",
      "Velocity-calibrated exhaust headers",
      "Complete validation documentation",
    ],
  },
];

export const industrialAutomationColumns: MenuColumn[] = [
  {
    heading: "Control System Services",
    links: [
      { label: "On Demand Service - Control Systems", href: "/industrial-automation" },
      { label: "Configuration Services", href: "/industrial-automation" },
      { label: "Alarm Optimization & Management", href: "/industrial-automation" },
      { label: "Programmable Controller Services (PLC)", href: "/industrial-automation" },
      { label: "Wireless Plant Network Support", href: "/industrial-automation" },
    ],
  },
  {
    heading: "Reliability",
    links: [
      { label: "Reliability Consulting", href: "/industrial-automation" },
      { label: "Vibration Analysis", href: "/industrial-automation" },
      { label: "Thermography", href: "/industrial-automation" },
      { label: "Oil Analysis", href: "/industrial-automation" },
      { label: "Acceptance Testing", href: "/industrial-automation" },
      { label: "Fan Balancing", href: "/industrial-automation" },
      { label: "Laser Alignment", href: "/industrial-automation" },
    ],
  },
  {
    heading: "Project Services",
    links: [
      { label: "Main Automation Contractor", href: "/industrial-automation" },
      { label: "Start-up & Commissioning", href: "/industrial-automation" },
      { label: "Front End Engineering Design", href: "/industrial-automation" },
    ],
  },
  {
    heading: "Valve and Mechanical Services",
    links: [
      { label: "Valve & Actuation Lifecycle Services", href: "/industrial-automation" },
      { label: "Pressure Management Services", href: "/industrial-automation" },
      { label: "Inventory Management", href: "/industrial-automation" },
      { label: "Shutdown, Turnarounds & Outage (STO) Support Services", href: "/industrial-automation" },
      { label: "Instrumentation", href: "/industrial-automation" },
      { label: "Penberthy Assembly Program", href: "/industrial-automation" },
    ],
  },
];

type IndustryDefinition = {
  label: string;
  slug: string;
  description: string;
  summary: string;
  image: string;
  productSlugs: string[];
};

const industryDefinitions: IndustryDefinition[] = [
  {
    label: "Manufacturing",
    slug: "manufacturing",
    description: "Precision control packages that keep assembly lines, reactors, and utilities stable.",
    summary:
      "From upstream regulation to final isolation, our OEM-grade valves and skids help manufacturing plants run safer and leaner.",
    image: "/images/industry-chemical.jpg",
    productSlugs: [
      "pressure-reducing-systems",
      "back-pressure-valve",
      "safety-valves",
      "ball-valves-non-return",
    ],
  },
  {
    label: "Oil & Gas",
    slug: "oil-and-gas",
    description: "Integrated solutions for upstream, midstream, and downstream gas infrastructure.",
    summary:
      "Hydrocarbon operators rely on REU for pressure reduction, metering, and safety systems that meet global standards.",
    image: "/images/industry-oil-gas.jpg",
    productSlugs: [
      "pressure-reducing-systems",
      "high-pressure-cylinder-cascade",
      "gas-pipeline",
      "gas-purification-system",
      "mini-gas-station",
    ],
  },
  {
    label: "Medical & Pharma",
    slug: "medical-and-pharma",
    description: "High-purity gas, detection, and piping tailored for labs, cleanrooms, and production blocks.",
    summary:
      "Validation-friendly hardware keeps lifesaving operations compliant while enabling rapid scale-ups.",
    image: "/images/industry-pharma.jpg",
    productSlugs: [
      "high-pressure-regulators",
      "gas-detection-system",
      "gas-purification-system",
      "temperature-detection-system",
      "utility-lab-fume-hood-piping",
    ],
  },
  {
    label: "Power & Energy",
    slug: "power-and-energy",
    description: "Reliable utilities for thermal, renewable, and hydrogen energy ecosystems.",
    summary:
      "Generation facilities deploy our regulation, monitoring, and compressor programs for predictable uptime.",
    image: "/images/industry-nuclear.jpg",
    productSlugs: ["pressure-reducing-systems", "gas-pipeline", "temperature-detection-system"],
  },
  {
    label: "Industrial Workshops",
    slug: "industrial-workshops",
    description: "Utility rooms and tool lines that demand rugged, serviceable equipment.",
    summary:
      "Fabrication shops and OEM floors count on our piping, compressor, and safety solutions for day-to-day reliability.",
    image: "/images/industry-chemical.jpg",
    productSlugs: ["gas-pipeline", "ball-valves-non-return", "high-pressure-regulators"],
  },
  {
    label: "Steel Industry",
    slug: "steel-industry",
    description: "Heavy-duty regulation and safety protection for furnaces, ladles, and process utilities.",
    summary:
      "We engineer redundant pressure trains and monitoring hardware built to survive corrosive, high-temperature environments.",
    image: "/images/industry-metal.jpg",
    productSlugs: ["pressure-reducing-systems", "safety-valves", "high-pressure-cylinder-cascade"],
  },
];

const solutionCards: DetailItem[] = industryDefinitions.map((industry) => ({
  category: "solution",
  label: industry.label,
  slug: industry.slug,
  description: industry.description,
  summary: industry.summary,
  image: industry.image,
  highlights: industry.productSlugs
    .map((slug) => productData.find((product) => product.slug === slug)?.label)
    .filter((label): label is string => Boolean(label)),
}));

const industriesByProduct = industryDefinitions.reduce((acc, industry) => {
  industry.productSlugs.forEach((slug) => {
    if (!acc[slug]) acc[slug] = [];
    acc[slug].push(industry.label);
  });
  return acc;
}, {} as Record<string, string[]>);

const companyData: DetailItem[] = [
  {
    category: "company",
    label: "About Us",
    slug: "about-us",
    description: "Overview of REU Engineering and LLP.",
    summary:
      "REU is a leading supplier and service provider in the field of gas, air, safety, gas detection and process control systems including DeltaV DCS and DeltaV MES, with strong history of quality, timely delivery and site support.",
    highlights: [
      "Gas, air, safety and gas detection expertise",
      "DeltaV DCS and MES implementation and validation",
      "Hydrogen and nitrogen bank solutions with manifolds and piping",
    ],
    image: "/images/leadership.jpg",
  },
  {
    category: "company",
    label: "Quality Assurance",
    slug: "quality-assurance",
    description: "Uncompromising focus on codes and client specifications.",
    summary:
      "Digital inspection records, calibrated instruments, and ISO-led audits keep every project compliant.",
    highlights: [
      "ISO 9001 & 14001 systems",
      "NABL certified lab tie-ups",
      "Client witness-friendly test bays",
    ],
  },
  {
    category: "company",
    label: "Technical Articles",
    slug: "technical-articles",
    description: "Insights and notes from REU engineers.",
    summary:
      "Application notes and upgrade guides that help plant teams modernize gas, air, safety and process control infrastructure with confidence.",
    highlights: [
      "Downloadable whitepapers and notes",
      "Case studies from real installations",
      "Pointers for audits and compliance",
    ],
  },
  {
    category: "company",
    label: "Events",
    slug: "events",
    description: "Expo participation and key events.",
    summary:
      "REU participates in industry expos such as ChemTech Expo Mumbai and IPEC Hyderabad, showcasing solutions in gas, air, safety and process control.",
    highlights: [
      "ChemTech Expo c Mumbai",
      "IPEC c Hyderabad",
    ],
  },
];

export const allDetails: DetailItem[] = [...productData, ...solutionCards, ...companyData];

export const detailContent: Record<string, DetailItem> = allDetails.reduce((acc, item) => {
  acc[item.slug] = item;
  return acc;
}, {} as Record<string, DetailItem>);

export const getDetailBySlug = (slug: string) => detailContent[slug];

export const getRelatedByCategory = (category: DetailItem["category"], excludeSlug?: string) =>
  allDetails.filter((item) => item.category === category && item.slug !== excludeSlug);

const firstColumnProducts = productData.slice(0, 8);
const secondColumnProducts = productData.slice(8);

export const productColumns: MenuColumn[] = [
  {
    heading: "Product List (A-M)",
    links: firstColumnProducts.map(({ label, slug }) => ({
      label,
      href: toHref("products", slug),
    })),
  },
  {
    heading: "Product List (N-Z)",
    links: secondColumnProducts.map(({ label, slug }) => ({
      label,
      href: toHref("products", slug),
    })),
  },
];

export const solutionCardsMenu: CardMenuItem[] = solutionCards.map((solution) => ({
  label: solution.label,
  href: toHref("solutions", solution.slug),
  description: solution.description,
  image: solution.image ?? "/images/industry-oil-gas.jpg",
}));

export const companyColumns: MenuColumn[] = [
  {
    heading: "About Us",
    links: [
      { label: "About REU", href: toHref("company", "about-us") },
    ],
  },
  {
    heading: "Quality",
    links: [{ label: "Quality Assurance", href: toHref("company", "quality-assurance") }],
  },
  {
    heading: "Resources",
    links: [
      { label: "Our Catalogue", href: "/reu_catalogue/REU%20catlogue.pdf" },
    ],
  },
  {
    heading: "News & Event",
    links: [{ label: "Events", href: toHref("company", "events") }],
  },
];

export const serviceSupportColumns: MenuColumn[] = [
  {
    heading: "Service",
    links: [
      { label: "Compressor & Supply", href: "/service-support#services" },
      { label: "Gas Detection System", href: "/service-support#services" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Product Enquiry", href: "/service-support/product-enquiry" },
      { label: "Customer Feedback", href: "/service-support/customer-feedback" },
      { label: "Service Request", href: "/service-support/service-request" },
    ],
  },
];

export type NavItem =
  | { label: string; href: string; menuType?: never; columns?: never; cards?: never }
  | { label: string; menuType: "columns"; columns: MenuColumn[]; href?: never; cards?: never }
  | { label: string; menuType: "cards"; cards: CardMenuItem[]; href?: never; columns?: never };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "PRODUCTS", menuType: "columns", columns: productColumns },
  { label: "SOLUTIONS", menuType: "cards", cards: solutionCardsMenu },
  { label: "COMPANY", menuType: "columns", columns: companyColumns },
  { label: "CERTIFICATES", href: "/certificates" },
  { label: "CLIENTS", href: "/clients" },
  { label: "SERVICE & SUPPORT", menuType: "columns", columns: serviceSupportColumns },
  { label: "INDUSTRIAL AUTOMATION", href: "/industrial-automation" },
  { label: "CONTACT US", href: "/contact" },
];

export const heroStats = [
  { value: "30+", label: "Awards" },
  { value: "30+", label: "Certifications" },
  { value: "10k", label: "Customers" },
  { value: "50k", label: "Installations" },
];

export const industriesWeServe = industryDefinitions.map(({ label, description, slug, image }) => ({
  title: label,
  description,
  href: toHref("solutions", slug),
  image,
}));

export const getIndustriesForProduct = (slug: string) => industriesByProduct[slug] ?? [];

export const partnerLogos = [
  "/images/logo-1.jpg",
  "/images/logo-2.jpg",
  "/images/logo-3.jpg",
  "/images/logo-4.jpg",
  "/images/logo-5.jpg",
  "/images/logo-6.jpg",
];

export const heroImages = ["/images/hero-1.png", "/images/hero-2.png"];
