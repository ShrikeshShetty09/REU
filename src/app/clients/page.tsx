import Image from "next/image";

type Client = {
  name: string;
  logo?: string;
};

const clients: Client[] = [
  { name: "Amptronics Techno Pvt. Ltd.", logo: "/images/client_logo/Amprotnics_Techno_Pvt_Ltd.png" },
  { name: "Gatik synthesis LLP", logo: "/images/client_logo/Gatik synthesis LLP.png" },
  { name: "HikalLTD", logo: "/images/client_logo/HikalLTD.png" },
  { name: "Intas Pharmaceuticals Limited", logo: "/images/client_logo/intas-pharmaceuticals.png" },
  { name: "Ongc", logo: "/images/client_logo/oil-and-natural-gasoration.png" },
  { name: "Mylan Laboratories", logo: "/images/client_logo/Mylan Laboratories.png" },
  { name: "LupinLtd", logo: "/images/client_logo/LupinLtd.png" },
  { name: "SH Kelkar and CompanyLtd", logo: "/images/client_logo/SH Kelkar and CompanyLtd.png" },
  { name: "SV Lab PvtLtd", logo: "/images/client_logo/SV Lab PvtLtd.png" },
  { name: "Symed Labs Pvt.Ltd", logo: "/images/client_logo/symed_labs_limited_logo__1_-removebg-preview.png" },
  { name: "Zydus LifeScience Limited", logo: "/images/client_logo/Zydus_Lifesciences-removebg-preview.png" },
  { name: "ViyashLife Sciences PvtLtd", logo: "/images/client_logo/viyash-life-sciences-pvt-ltd.png" },
  { name: "Schreiber Dynamics pvt ltd", logo: "/images/client_logo/schreiber-logo.png" },
];

const getInitials = (name: string) => {
  const letters = name.match(/\b[A-Z0-9]/g);
  if (!letters || letters.length === 0) return name.slice(0, 2).toUpperCase();
  return letters.slice(0, 2).join("");
};

export default function ClientsPage() {
  return (
    <main className="pb-24 pt-16">
      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#a605c7]">Our Clients</p>
          <h1 className="text-3xl font-bold text-[#360236] sm:text-4xl">Flagship clients</h1>
        </div>

        <div className="rounded-[32px] border border-white/40 bg-white/95 p-6 shadow">
          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((client, index) => {
              const initials = getInitials(client.name);
              return (
                <div key={client.name} className="flex flex-col items-center gap-3 text-center">
                  {client.logo ? (
                    <div className="relative h-20 w-24 overflow-hidden rounded-2xl border border-white/50 bg-white p-2 shadow">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-[#f5e6ff] text-lg font-semibold text-[#4a014e] shadow-md">
                      {initials}
                    </div>
                  )}
                  <p className="text-xs font-medium text-foreground/80">{client.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-foreground/70">+114 more clients across India</p>
      </section>
    </main>
  );
}
