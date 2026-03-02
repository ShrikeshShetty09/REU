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
    description:
      "Engineered pressure reducing stations that maintain stable downstream pressure even when inlet conditions and flow demands are changing throughout the day. Typical packages include isolation valves, strainers, pilots, gauges and safety accessories built on a compact skid.",
    summary:
      "Self-actuated or pilot-operated pressure reducing systems sized for refinery, chemical, pharma and utility services. Designed to deliver tight outlet control without external power while protecting critical downstream equipment.",
    highlights: [
      "Balanced trim and optimized flow paths for fast response and low noise",
      "Fail-safe closure with monitored pilots and slam-shut options",
      "ASME / PESO compliant fabrication with documented test records",
      "Available in single, duplex and multi-stream configurations",
      "Suitable for gases, air, steam and selected liquids",
    ],
  },
  {
    category: "product",
    label: "High Pressure Cylinder Cascade",
    slug: "high-pressure-cylinder-cascade",
    description:
      "Manifolded cylinder banks assembled into rugged cascades with isolation, non-return valves and pressure control elements. Designed to simplify handling of high pressure cylinders and ensure uninterrupted gas supply to the downstream network.",
    summary:
      "Factory-built cylinder cascades with integrated manifolds, isolation valves and monitoring devices. Ideal for plants requiring continuous high-pressure gas from tube trailers or cylinder bundles with safe changeover.",
    highlights: [
      "Interlocked change-over valves for secure bank switching",
      "Crash-frame and lifting certified racks for safe transport and installation",
      "Provision for remote pressure monitoring and low-pressure alarms",
      "Customizable for oxygen, nitrogen, hydrogen and specialty gases",
      "Compatible with downstream pressure reducing stations",
    ],
  },
  {
    category: "product",
    label: "Centrifugal Blanketing",
    slug: "centrifugal-blanketing",
    description:
      "Nitrogen blanketing systems designed around high-speed centrifuges and similar rotating equipment. The system maintains an inert atmosphere inside the housing to help prevent oxidation, product degradation and potential ignition sources.",
    summary:
      "Compact nitrogen blanketing packages that continuously maintain the correct positive pressure and purity around centrifuges and process vessels. Helps protect operators, equipment and product quality.",
    highlights: [
      "Compact skid layout ideal for retrofits into existing plants",
      "Dual isolation valves and bypass arrangements for maintenance",
      "Vent and relief design aligned with NFPA / ATEX recommendations",
      "Supports nitrogen savings with optimized set-points",
      "Available with local or remote monitoring gauges",
    ],
  },
  {
    category: "product",
    label: "Back Pressure Control Valve",
    slug: "back-pressure-valve",
    description:
      "Back pressure valves that maintain a minimum upstream pressure on reactors, compressors, filters and process skids. The valve opens as upstream pressure rises and closes as it falls, stabilizing recycle loops and protecting equipment from pressure collapse.",
    summary:
      "Self-contained or pilot-operated back pressure regulators for gases and liquids. Used to hold a constant upstream pressure and keep process units operating within their design window.",
    highlights: [
      "Wide pressure classes and Cv ranges for diverse applications",
      "Integral slam-shut and over-pressure protection options",
      "Materials traceability and special trims for critical media",
      "Can be configured as relief, bypass or circulation control valve",
      "Suitable for continuous process and batch duty",
    ],
  },
  {
    category: "product",
    label: "Breather Valves & Flame Arresters",
    slug: "breather-valves-and-flame-arresters",
    description:
      "Pressure / vacuum relief valves and flame arresters that safeguard storage tanks and process vessels. The assemblies combine weighted pallets or spring-loaded mechanisms with tested arrestor elements in a compact vent package.",
    summary:
      "Breather valves and inline / end-of-line flame arresters that protect tanks against over-pressure, vacuum and flame flashback. Designed to reduce vapor loss while maintaining safety.",
    highlights: [
      "Bi-directional and unidirectional flame arrestor options",
      "Weather hoods, insect screens and anti-rain designs",
      "Tool-free pallet inspection and setting adjustments",
      "Available in a range of sizes, materials and connection standards",
      "Designed to meet relevant API and international guidelines",
    ],
  },
  {
    category: "product",
    label: "Safety Valves",
    slug: "safety-valves",
    description:
      "Pressure relief valves that provide certified over-pressure protection for pressure vessels, piping and packaged skids. Each valve is sized and set according to the applicable code and process conditions.",
    summary:
      "Spring-loaded and pilot-operated safety relief valves sized in line with API 520/526 and similar standards. Configurable for vapor, liquid or two-phase flow with reliable reseating performance.",
    highlights: [
      "PED / IBR and other applicable code compliance",
      "High-temperature and corrosion-resistant trims available",
      "Condition monitoring taps for online testing and inspection",
      "Comprehensive documentation and test certificates",
      "Different blowdown and back-pressure arrangements",
    ],
  },
  {
    category: "product",
    label: "Ball Valves",
    slug: "ball-valves",
    description:
      "Full-bore and reduced-bore ball valves for isolation duties on gas, air and utility lines. Offered in different pressure classes, materials and end connections to suit plant standards.",
    summary:
      "Fire-safe, leak-tight ball valves engineered for low pressure drop and reliable shutoff across a wide range of industrial gas and utility services.",
    highlights: [
      "Fire-safe and anti-blowout stem designs",
      "API / ANSI dimensional standards and pressure ratings",
      "Manual, gear and pneumatic / electric actuation packages",
      "End connections including screwed, flanged and socket weld",
      "Suitable for isolation on utility and process lines",
    ],
  },
  {
    category: "product",
    label: "Non Return Valves",
    slug: "non-return-valves",
    description:
      "Non return valves (NRVs) and check valves that prevent reverse flow in gas and utility distribution networks. Available as swing, wafer and inline designs in multiple sizes and pressure classes.",
    summary:
      "Compact, dependable non return valves that protect compressors, cylinders and downstream equipment from backflow and pressure surges.",
    highlights: [
      "Swing, wafer and inline NRV configurations",
      "Optimized internals for low cracking pressure and minimal pressure drop",
      "Bodies in carbon steel, stainless steel and other alloys",
      "Flanged, threaded and wafer-style end connections",
      "Suited for gas, air and selected liquid services",
    ],
  },
  {
    category: "product",
    label: "High Pressure Regulators",
    slug: "high-pressure-regulators",
    description:
      "Point-of-use pressure regulators for cylinder manifolds, lab benches, OEM skids and specialty gas lines. Available in single-stage and two-stage configurations for different accuracy and turndown requirements.",
    summary:
      "Single and double-stage high-pressure regulators that provide creep-free shutoff and stable outlet pressure from cylinder pressure down to instrument-grade delivery levels.",
    highlights: [
      "Bodies in brass, stainless steel and Monel for different media",
      "Replaceable seat cartridges and easy serviceability",
      "Optional digital pressure indication and local gauges",
      "Suitable for high purity, corrosive or industrial gas service",
      "Configurable for panel mounting or line mounting",
    ],
  },
  {
    category: "product",
    label: "Gas Detection System",
    slug: "gas-detection-system",
    description:
      "Fixed gas detection systems combining field detectors, controllers and alarms to monitor toxic, flammable or oxygen-depletion hazards. Solutions can be tailored for process plants, labs, compressor rooms and storage areas.",
    summary:
      "Integrated gas detection platforms covering catalytic, electrochemical and IR sensing technologies. Designed to interface with panels, PLCs and DCS systems for reliable alarming and shutdown.",
    highlights: [
      "Multi-channel controllers with programmable alarm set-points",
      "Easy BMS / DCS / EMS integration via standard protocols",
      "Calibration, bump testing and annual maintenance contracts",
      "Options for portable and fixed detectors as per requirement",
      "Audio-visual alarms and event logging",
    ],
  },
  {
    category: "product",
    label: "Gas Pipeline",
    slug: "gas-pipeline",
    description:
      "Turnkey industrial and medical gas pipeline networks from cylinder yard or bulk storage up to each point-of-use. Scope typically includes design, supply, installation, testing and documentation.",
    summary:
      "End-to-end gas pipeline solutions covering headers, manifolds, main distribution lines and drops. Executed to relevant codes and client standards for safe and reliable gas distribution.",
    highlights: [
      "Orbital welded SS316L or other materials as per application",
      "Leak tested and documented to applicable international codes",
      "Colour coding, tagging and identification as per standards",
      "Support design, stress considerations and expansion loops",
      "As-built drawings and handover documentation",
    ],
  },
  {
    category: "product",
    label: "Gas purification gas control box & gas detector",
    slug: "gas-purification-system",
    description:
      "Gas purification systems and control boxes that remove moisture, oxygen, hydrocarbons and particulates from specialty gases. Offered as panel-mounted or skid-mounted assemblies with monitoring provisions.",
    summary:
      "Cartridge-based and regenerative purifier trains that keep analytical instruments, lab equipment and process tools supplied with ultra-clean gas media.",
    highlights: [
      "Moisture, oxygen and hydrocarbon getter options",
      "Integrated monitoring gauges and sampling ports",
      "Service-exchange programs and periodic media replacement",
      "Configurable for different flow rates and gas types",
      "Can be integrated with gas detection and alarm systems",
    ],
  },
  {
    category: "product",
    label: "Temperature Detection System",
    slug: "temperature-detection-system",
    description:
      "Temperature sensing networks and control panels used to monitor critical assets such as storage tanks, pipelines, compressors and electrical equipment. Combines field sensors with indication, recording and alarming.",
    summary:
      "RTD and thermocouple based temperature detection systems with SCADA or DCS ready panels. Provide continuous monitoring and early warning for over-temperature conditions.",
    highlights: [
      "Dual redundant sensing loops for high availability",
      "Digital calibration records and documentation support",
      "Alarm logic that can be tied into shutdown or interlock systems",
      "Suitable for hazardous and non-hazardous area installations",
      "Panel layouts tailored to site standards",
    ],
  },
  {
    category: "product",
    label: "HSD DAQ Modules",
    slug: "hsd-daq-modules",
    description:
      "The Senkox HSD DAQ Module family is a variety of different detection control modules, each of which acts as an interface between a DCS or fire alarm control system and the Senkox HSD Linear Heat Sensors (LHS). A DAQ module monitors and processes the signals generated from the HSD LHS cables.",
    summary:
      "DAQ modules with relay outputs, analog outputs (420 mA or 0 1 5 V) and serial communication ports (RS485 / RS232, Modbus/RTU) for seamless integration of HSD Linear Heat Sensors with DCS or fire alarm systems.",
    highlights: [
      "Dedicated interface modules for Senkox HSD Linear Heat Sensors",
      "Relay outputs and analog 420 mA / 0 1 5 V signaling",
      "RS485 / RS232 Modbus/RTU communication options",
      "Easily integrated with plant DCS or fire alarm panels",
      "Continuous monitoring and processing of LHS cable signals",
    ],
  },
  {
    category: "product",
    label: "HSD Linear Heat Sensor cables",
    slug: "hsd-linear-heat-sensor-cables",
    description:
      "Second-generation Senkox HSD Linear Heat Sensors (LHS) designed for comprehensive hot spot detection with improved materials and processing technology. Sensors are flexible, durable and suitable for demanding environments.",
    summary:
      "Flexible, rugged HSD Linear Heat Sensor cables that withstand high temperature, abrasion and pressure while remaining intrinsically safe for hazardous locations.",
    highlights: [
      "Innovative sensor materials and processes for stable function and uniform sensitivity",
      "Wide operating temperature range from -40 b0C to 600 b0C",
      "No damage to sensors after alarm  13 re-usable design",
      "Withstand high abrasion and high-pressure conditions",
      "Flexible, rugged sensor cable suitable for harsh environments",
      "Intrinsically safe construction for hazardous areas",
    ],
  },
  {
    category: "product",
    label: "Utility & Lab Fume Hood Piping",
    slug: "utility-lab-fume-hood-piping",
    description:
      "Design and execution of utility and fume hood piping for R&D, QC and production laboratories. Covers gas, vacuum, water, exhaust and associated safety accessories as required by the application.",
    summary:
      "Ultra-clean utility and fume hood piping layouts that help laboratories meet global safety, hygiene and performance norms.",
    highlights: [
      "Piping options in borosilicate glass, stainless steel and compatible plastics",
      "Velocity-calibrated exhaust headers and capture devices",
      "Complete validation documentation and as-built drawings",
      "Integration of emergency showers, eye wash and safety hardware where needed",
      "Coordination with HVAC and building services for smooth installation",
    ],
  },
  {
    category: "product",
    label: "Flow Meter",
    slug: "flow-meter",
    description:
      "Inline and insertion type flow meters designed for gases, air and process fluids. Offered with mechanical or electronic indication and optional pulse / analog outputs for integration with PLC, DCS or standalone panels.",
    summary:
      "Flow measurement solutions that help monitor consumption, balance networks and protect critical equipment. Available in multiple technologies to suit different accuracy, pressure drop and cost requirements.",
    highlights: [
      "Configurations for industrial gas, compressed air and liquid services",
      "Mechanical, turbine, variable area and digital flow technologies",
      "Local indication with options for 4–20 mA / pulse outputs",
      "Can be supplied as part of skid-mounted metering packages",
      "Calibration and documentation support as per project needs",
    ],
  },
  {
    category: "product",
    label: "Rota Meter",
    slug: "rota-meter",
    description:
      "Panel and line mounted variable area rota meters for visual indication of gas and liquid flow. Transparent tubes, floats and scaled graduations allow operators to verify and adjust flows at a glance.",
    summary:
      "Simple, reliable rota meters that provide direct visual confirmation of flow in utility, lab and process lines. Ideal where power-free, low maintenance indication is required.",
    highlights: [
      "Compact designs for panel boards, lab benches and skids",
      "Clear tubes with easy-to-read scales and optional alarms",
      "Materials suitable for common industrial gases and liquids",
      "Individual or manifolded assemblies for multi-stream services",
      "Can be combined with regulators, valves and instrumentation from the REU range",
    ],
  },
];

export const productImagesBySlug: Record<string, string[]> = {
  "pressure-reducing-systems": [
    "/images/products/PRS.png",
    "/images/products/Dual_Stream_Pressure_Reducing_Station.png",
    "/images/products/H2 PRS.png",
    "/images/products/O2 PRS.png",
    "/images/products/PRS plane.png",
  ],
  "breather-valves-and-flame-arresters": [
    "/images/products/Breather valve with Flame aresstor.png",
    "/images/products/Flame Aresstor.png",
  ],
  "safety-valves": [
    "/images/products/Safety Valve.png",
    "/images/products/Safety Valve with Vaccume.png",
  ],
  "high-pressure-regulators": [
    "/images/products/hpregulators1.png",
    "/images/products/hpregulators2.png",
  ],
  "high-pressure-cylinder-cascade": ["/images/products/hydrogen-gas-cylinder-cascade.png"],
  "centrifugal-blanketing": ["/images/products/centrifugal_blanketing.png"],
  "back-pressure-valve": ["/images/products/BPRV.png"],
  "gas-pipeline": ["/images/products/gaspipeline.png"],
  "ball-valves": ["/images/products/ballvalve1.png", "/images/products/ballvalve2.png"],
  "non-return-valves": ["/images/products/nrv1.png", "/images/products/nrv2.png"],
  "gas-detection-system": [
    "/images/products/gas_detection1.png",
    "/images/products/gas_detection2.png",
    "/images/products/gas_detection3.png",
    "/images/products/gas_detection4.png",
  ],
  "utility-lab-fume-hood-piping": [
    "/images/products/utilityFumehood1.png",
    "/images/products/utilityFumehood2.png",
    "/images/products/utilityFumehood3.png",
  ],
  "gas-purification-system": ["/images/products/Gas purification gas control box & gas detector.png"],
  "temperature-detection-system": ["/images/products/temperature_detection.png"],
  "hsd-daq-modules": ["/images/products/tds_HSD_DAQ_Modules.png"],
  "hsd-linear-heat-sensor-cables": ["/images/products/tds_HSD_Linear_Heat_Sensor_cables.png"],
  "flow-meter": ["/images/products/reu_flow_meter.png"],
  "rota-meter": ["/images/products/rota_meter.png"],
};

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
    image: "/images/reu_manufacturing.png",
    productSlugs: [
      "pressure-reducing-systems",
      "back-pressure-valve",
      "safety-valves",
      "ball-valves",
      "non-return-valves",
    ],
  },
  {
    label: "Oil & Gas",
    slug: "oil-and-gas",
    description: "Integrated solutions for upstream, midstream, and downstream gas infrastructure.",
    summary:
      "Hydrocarbon operators rely on REU for pressure reduction, metering, and safety systems that meet global standards.",
    image: "/images/reu_oilAndGas.png",
    productSlugs: ["pressure-reducing-systems", "high-pressure-cylinder-cascade", "gas-pipeline", "gas-purification-system"],
  },
  {
    label: "Medical & Pharma",
    slug: "medical-and-pharma",
    description: "High-purity gas, detection, and piping tailored for labs, cleanrooms, and production blocks.",
    summary:
      "Validation-friendly hardware keeps lifesaving operations compliant while enabling rapid scale-ups.",
    image: "/images/reu_medicalAndPharma.png",
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
    image: "/images/reu_powerAndEnergy.png",
    productSlugs: ["pressure-reducing-systems", "gas-pipeline", "temperature-detection-system"],
  },
  {
    label: "Industrial Workshops",
    slug: "industrial-workshops",
    description: "Utility rooms and tool lines that demand rugged, serviceable equipment.",
    summary:
      "Fabrication shops and OEM floors count on our piping, compressor, and safety solutions for day-to-day reliability.",
    image: "/images/reu_IndustrialWorkshop.png",
    productSlugs: ["gas-pipeline", "ball-valves", "non-return-valves", "high-pressure-regulators"],
  },
  {
    label: "Steel Industry",
    slug: "steel-industry",
    description: "Heavy-duty regulation and safety protection for furnaces, ladles, and process utilities.",
    summary:
      "We engineer redundant pressure trains and monitoring hardware built to survive corrosive, high-temperature environments.",
    image: "/images/reu_steelIndustry.png",
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

const primaryProductData = productData
  .filter((item) => item.slug !== "hsd-daq-modules" && item.slug !== "hsd-linear-heat-sensor-cables")
  .sort((a, b) => a.label.localeCompare(b.label));

// Build navbar columns: A–Z, 4 products per column
export const productColumns: MenuColumn[] = (() => {
  const columns: MenuColumn[] = [];
  for (let i = 0; i < primaryProductData.length; i += 4) {
    const slice = primaryProductData.slice(i, i + 4);
    const groupIndex = Math.floor(i / 8); // each group is 2 columns (8 products)
    const groupStart = groupIndex * 8;
    const groupEnd = Math.min(groupStart + 7, primaryProductData.length - 1);
    const firstLabel = primaryProductData[groupStart]?.label ?? slice[0]?.label ?? "";
    const lastLabel = primaryProductData[groupEnd]?.label ?? slice[slice.length - 1]?.label ?? "";
    const firstChar = firstLabel.charAt(0).toUpperCase();
    const lastChar = lastLabel.charAt(0).toUpperCase();
    const heading = firstChar && lastChar ? `${firstChar} - ${lastChar}` : "Products";
    columns.push({
      heading,
      links: slice.map(({ label, slug }) => ({
        label,
        href: toHref("products", slug),
      })),
    });
  }
  return columns;
})();

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
      { label: "Compressor Service, Supply and Spares", href: "/service-support#services" },
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
