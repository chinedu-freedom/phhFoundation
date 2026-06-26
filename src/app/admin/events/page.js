import { prisma } from "@/lib/db";
import { Plus, Calendar, MapPin, CheckSquare } from "lucide-react";

export const metadata = {
  title: "Manage Events | PHH Admin",
};

export default async function AdminEventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: "asc" },
  });

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            Upcoming Events
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Schedule medical checkups, educational distribution runs, and community workshops.
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-teal-500/20 hover:bg-teal-700 transition-colors self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" /> Schedule Event
        </button>
      </div>

      {/* Events Table / Grid */}
      <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-500 dark:text-zinc-400">
            <thead className="bg-zinc-50 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:bg-zinc-950">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Venue</th>
                <th className="px-6 py-4">Registrations</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {events.map((e) => (
                <tr key={e.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20">
                  <td className="px-6 py-4 font-bold text-zinc-900 dark:text-white">
                    {e.title}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-teal-600" />
                      {new Date(e.date).toLocaleDateString()} at{" "}
                      {new Date(e.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                      {e.venue}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <span className="flex items-center gap-1 font-semibold text-zinc-800 dark:text-zinc-200">
                      <CheckSquare className="h-3.5 w-3.5 text-zinc-400" />
                      {e.attendeesCount} registrations
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xxs font-bold ${
                        e.status === "UPCOMING"
                          ? "bg-teal-50 text-teal-700 dark:bg-teal-950/20 dark:text-teal-400"
                          : e.status === "PAST"
                          ? "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                          : "bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400"
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
              {events.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-zinc-400">
                    No scheduled events logged yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
