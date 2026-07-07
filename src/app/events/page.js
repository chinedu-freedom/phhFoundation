import { prisma } from "@/lib/db";
import EventsList from "@/components/EventsList";
import Image from "next/image";

export const metadata = {
  title: "Events & Outreaches | HH Foundation",
  description: "Stay updated with upcoming humanitarian outreach efforts, health missions, and community activities, or view our past successful events.",
};

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: {
      date: "desc",
    },
  });

  // Serialize dates for Client Component safety
  const serializedEvents = events.map((e) => ({
    ...e,
    date: e.date.toISOString(),
    createdAt: e.createdAt.toISOString(),
  }));

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&auto=format&fit=crop&q=80"
            alt="Community gathering background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Get Involved</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-poppins">
            Events & Campaigns
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100">
            Join hands with us in our next medical, educational, or food distribution outreach. Discover opportunities to participate.
          </p>
        </div>
      </section>

      {/* Events List Component */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <EventsList initialEvents={serializedEvents} />
        </div>
      </section>
    </div>
  );
}

