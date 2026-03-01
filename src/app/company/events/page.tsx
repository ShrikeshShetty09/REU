import { getEventsFromDb } from "@/lib/appwrite";
import { EventsClient } from "./EventsClient";

export default async function CompanyEventsPage() {
  const events = await getEventsFromDb();

  return <EventsClient events={events} />;
}
