import { prisma } from "@/lib/db";
import EventsList from "@/components/EventsList";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Events & Outreaches | HH Foundation",
  description: "Stay updated with upcoming humanitarian outreach efforts, health missions, and community activities, or view our past successful events.",
};

export default async function EventsPage() {
  let serializedEvents = [];
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        date: "desc",
      },
    });

    // Serialize dates for Client Component safety
    serializedEvents = events.map((e) => ({
      ...e,
      date: e.date.toISOString(),
      createdAt: e.createdAt.toISOString(),
    }));
  } catch (error) {
    console.error("Database fetch failed in events page SSR:", error);
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* Page Header */}
      <PageHeader
        subtitle="Get Involved"
        title="Events & Campaigns"
        description="Join hands with us in our next medical, educational, or food distribution outreach. Discover opportunities to participate."
        bgImage="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&auto=format&fit=crop&q=80"
        alt="Community gathering background"
      />

      {/* Events List Component */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <EventsList initialEvents={serializedEvents} />
        </div>
      </section>
    </div>
  );
}

