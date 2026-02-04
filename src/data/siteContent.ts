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
    label: "Back Pressure Valve",
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
    label: "Downstream Pressure Control Valves",
    slug: "downstream-pressure-control-valves",
    description: "Stabilize outlet pressure for utilities, OEM skids, and packaging lines.",
    summary:
      "Multi-spring actuators with low friction stem guides maintain flat regulation curves at demanding turndown ratios.",
    highlights: [
      "Self-actuated design",
      "Optional slam-shut and monitor regulators",
      "Cleanroom and hazardous area variants",
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
    label: "Gas Purification System",
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
    label: "Compressor Supply, Service & Spare",
    slug: "compressor-supply-service-spare",
    description: "OEM compressors, overhauls, and spare strategies for air and gas systems.",
    summary:
      "From skid supply to lifecycle service, our teams maintain rotary screw, reciprocating, and centrifugal compressors with guaranteed uptime.",
    highlights: [
      "Annual maintenance contracts",
      "Critical spares warehousing",
      "Retrofit studies for energy savings",
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
      "downstream-pressure-control-valves",
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
    productSlugs: [
      "pressure-reducing-systems",
      "gas-pipeline",
      "temperature-detection-system",
      "compressor-supply-service-spare",
    ],
  },
  {
    label: "Industrial Workshops",
    slug: "industrial-workshops",
    description: "Utility rooms and tool lines that demand rugged, serviceable equipment.",
    summary:
      "Fabrication shops and OEM floors count on our piping, compressor, and safety solutions for day-to-day reliability.",
    image: "/images/industry-chemical.jpg",
    productSlugs: [
      "gas-pipeline",
      "compressor-supply-service-spare",
      "ball-valves-non-return",
      "high-pressure-regulators",
    ],
  },
  {
    label: "Steel Industry",
    slug: "steel-industry",
    description: "Heavy-duty regulation and safety protection for furnaces, ladles, and process utilities.",
    summary:
      "We engineer redundant pressure trains and monitoring hardware built to survive corrosive, high-temperature environments.",
    image: "/images/industry-metal.jpg",
    productSlugs: [
      "downstream-pressure-control-valves",
      "safety-valves",
      "high-pressure-cylinder-cascade",
      "compressor-supply-service-spare",
    ],
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
    label: "Our Leadership Team",
    slug: "leadership-team",
    description: "Seasoned professionals guiding REU Engineering and LLP.",
    summary:
      "Decades of engineering, manufacturing, and capital project experience fuel our long-term partnerships across continents.",
    highlights: [
      "Executive council with EPC, operations, and finance leaders",
      "Advisory board featuring industry veterans",
      "Mentorship programs for young engineers",
    ],
    image: "/images/leadership.jpg",
  },
  {
    category: "company",
    label: "Our Partners",
    slug: "partners",
    description: "Technology and channel alliances extending our reach.",
    summary:
      "OEM collaborations and service partnerships allow us to deliver turnkey performance guarantees in new geographies.",
    highlights: [
      "Certified fabrication allies",
      "Regional service depots",
      "Shared R&D for new applications",
    ],
    image: "/images/team.jpg",
  },
  {
    category: "company",
    label: "Social Responsibilities",
    slug: "social-responsibilities",
    description: "Community programs developed by our people.",
    summary:
      "STEM scholarships, energy-efficiency drives, and local sustainability initiatives bring our values beyond plant walls.",
    highlights: [
      "Rural STEM labs",
      "Waste reduction sprints",
      "Employee volunteering cohorts",
    ],
  },
  {
    category: "company",
    label: "Explore All Opportunities",
    slug: "careers",
    description: "Career opportunities across engineering, production, and services.",
    summary:
      "Upskilling roadmaps, mentorship, and global assignments empower every hire to grow alongside REU Engineering.",
    highlights: [
      "Structured graduate trainee program",
      "Cross-functional rotations",
      "Hybrid and on-site roles",
    ],
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
    description: "Insights from our engineers.",
    summary:
      "We publish application notes and upgrade guides to help plant teams modernize utility infrastructure confidently.",
    highlights: [
      "Downloadable whitepapers",
      "Webinars with live demos",
      "Case studies with measurable ROI",
    ],
  },
  {
    category: "company",
    label: "Events",
    slug: "events",
    description: "Where you can meet us next.",
    summary:
      "From trade fairs to customer days, we showcase new technologies and gather feedback face to face.",
    highlights: [
      "Annual innovation summit",
      "Regional breakfast briefings",
      "Virtual demos on demand",
    ],
  },
  {
    category: "company",
    label: "Press Release",
    slug: "press-release",
    description: "Latest announcements from REU Engineering and LLP.",
    summary:
      "Keep up with major project wins, technology collaborations, and milestones as we scale globally.",
    highlights: [
      "Project commissioning news",
      "Partnership announcements",
      "Awards and recognitions",
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
      { label: "Our Leadership Team", href: toHref("company", "leadership-team") },
      { label: "Our Partners", href: toHref("company", "partners") },
    ],
  },
  {
    heading: "Career",
    links: [
      { label: "Social Responsibilities", href: toHref("company", "social-responsibilities") },
      { label: "Explore All Opportunities", href: toHref("company", "careers") },
    ],
  },
  {
    heading: "Quality",
    links: [{ label: "Quality Assurance", href: toHref("company", "quality-assurance") }],
  },
  {
    heading: "Blog",
    links: [{ label: "Technical Articles", href: toHref("company", "technical-articles") }],
  },
  {
    heading: "News & Event",
    links: [
      { label: "Events", href: toHref("company", "events") },
      { label: "Press Release", href: toHref("company", "press-release") },
    ],
  },
];

export type NavItem =
  | { label: string; href: string; menuType?: never; columns?: never; cards?: never }
  | { label: string; menuType: "columns"; columns: MenuColumn[]; href?: never; cards?: never }
  | { label: string; menuType: "cards"; cards: CardMenuItem[]; href?: never; columns?: never };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", menuType: "columns", columns: productColumns },
  { label: "Solutions", menuType: "cards", cards: solutionCardsMenu },
  { label: "Company", menuType: "columns", columns: companyColumns },
  { label: "Clients", href: "/clients" },
  { label: "Service & Support", href: "/service-support" },
  { label: "Industrial Automation", href: "/industrial-automation" },
  { label: "Contact Us", href: "/contact" },
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
