import { NextRequest, NextResponse } from "next/server";
import { getClientsFromDb, getEventsFromDb, getCertificatesFromDb, getQualityFromDb } from "@/lib/appwrite";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim();

  if (!q) {
    return NextResponse.json({ results: [] });
  }

  const queryLower = q.toLowerCase();

  try {
    const [clients, events, certificates, quality] = await Promise.all([
      getClientsFromDb(),
      getEventsFromDb(),
      getCertificatesFromDb(),
      getQualityFromDb(),
    ]);

    const results: { title: string; href: string; type: string }[] = [];

    // Clients page items
    clients
      .filter((c) => c.name.toLowerCase().includes(queryLower))
      .forEach((c) => {
        results.push({ title: c.name, href: "/clients", type: "Client" });
      });

    // Events
    events
      .filter((e) => e.name.toLowerCase().includes(queryLower))
      .forEach((e) => {
        results.push({ title: e.name, href: "/company/events", type: "Event" });
      });

    // Certificates
    certificates
      .filter((c) => c.name.toLowerCase().includes(queryLower))
      .forEach((c) => {
        results.push({ title: c.name, href: "/certificates", type: "Certificate" });
      });

    // Quality Assurance
    quality
      .filter((qItem) => qItem.name.toLowerCase().includes(queryLower))
      .forEach((qItem) => {
        results.push({ title: qItem.name, href: "/company/quality-assurance", type: "Quality" });
      });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("[search] Failed to run search", error);
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
