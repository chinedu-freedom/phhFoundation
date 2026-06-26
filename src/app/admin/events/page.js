import { prisma } from "@/lib/db";
import EventsManager from "./EventsManager";

export const metadata = {
  title: "Manage Events | PHH Admin",
};

export default async function AdminEventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: "asc" },
  });

  // Convert Date objects to JSON-compatible types for the client component
  const formattedEvents = events.map(e => ({
    ...e,
    date: e.date.toISOString(),
    createdAt: e.createdAt.toISOString()
  }));

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
          Events
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Schedule medical checkups, educational distribution runs, and community workshops.
        </p>
      </div>

      <EventsManager initialEvents={formattedEvents} />
    </div>
  );
}
