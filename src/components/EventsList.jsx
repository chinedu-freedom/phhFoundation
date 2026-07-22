"use client";
import { useState } from "react";
import { rsvpEventAction } from "@/app/actions/event";
import { Calendar, MapPin, Users, Check, AlertCircle, Clock, X , Loader2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function EventsList({ initialEvents = [] }) {
  const [events, setEvents] = useState(initialEvents);
  const [activeTab, setActiveTab] = useState("upcoming"); // 'upcoming' or 'past'
  const [rsvpEvent, setRsvpEvent] = useState(null); // Event object currently being RSVPed
  
  // RSVP Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Group and sort events
  const now = new Date();
  const upcomingEvents = events.filter((e) => new Date(e.date) >= now && e.status !== "CANCELLED");
  const pastEvents = events.filter((e) => new Date(e.date) < now || e.status === "CANCELLED");

  const displayedEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const handleOpenRsvp = (event) => {
    setRsvpEvent(event);
    setName("");
    setEmail("");
  };

  const handleRsvpSubmit = async (e) => {
    e.preventDefault();
    if (!rsvpEvent) return;

    setLoading(true);

    try {
      const res = await rsvpEventAction(rsvpEvent.id, name, email);
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(`Successfully registered for ${rsvpEvent.title}!`);
        // Optimistically increment local state attendee count
        setEvents(prev =>
          prev.map((item) =>
            item.id === rsvpEvent.id
              ? { ...item, attendeesCount: item.attendeesCount + 1 }
              : item
          )
        );
        setRsvpEvent(null);
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      {/* Tabs selector */}
      <div className="flex justify-center border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === "upcoming"
                ? "text-blue-600 dark:text-blue-400"
                : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            Upcoming Events ({upcomingEvents.length})
            {activeTab === "upcoming" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === "past"
                ? "text-blue-600 dark:text-blue-400"
                : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            Past & Cancelled ({pastEvents.length})
            {activeTab === "past" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedEvents.map((event) => {
          const eventDate = new Date(event.date);
          const isUpcoming = eventDate >= now && event.status !== "CANCELLED";
          const defaultImage = "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80";

          return (
            <div
              key={event.id}
              className="flex flex-col bg-white dark:bg-zinc-900 border border-slate-100/70 dark:border-zinc-800/80 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.025)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.04)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              {/* Header Image */}
              <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-950">
                <Image
                  src={event.image || defaultImage}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold text-white uppercase backdrop-blur-md ${
                      event.status === "CANCELLED"
                        ? "bg-red-500/80"
                        : isUpcoming
                        ? "bg-blue-600/80"
                        : "bg-zinc-700/80"
                    }`}
                  >
                    {event.status}
                  </span>
                  {event.registrationRequired && isUpcoming && (
                    <span className="rounded-full bg-emerald-600/80 px-2 py-0.5 text-[10px] font-bold text-white uppercase backdrop-blur-md">
                      Register
                    </span>
                  )}
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>
                        {eventDate.toLocaleDateString("en-US", {
                          weekday: "short",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>
                        {eventDate.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="truncate">{event.venue}</span>
                    </div>

                    {/* Attendees count */}
                    {event.attendeesCount > 0 && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span>{event.attendeesCount} attending</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Registration Action */}
                {isUpcoming && (
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    {event.registrationRequired ? (
                      <button
                        onClick={() => handleOpenRsvp(event)}
                        className="w-full cursor-pointer rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/10"
                      >
                        Register Now
                      </button>
                    ) : (
                      <div className="text-center py-2 text-xxs font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-950 rounded-xl">
                        Open Invitation (No Registration Required)
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {displayedEvents.length === 0 && (
          <div className="col-span-full py-16 text-center">
            <p className="text-sm text-zinc-400">No events found in this category.</p>
          </div>
        )}
      </div>

      {/* RSVP Modal Overlay */}
      {rsvpEvent && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setRsvpEvent(null);
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
        >
          <div className="w-full max-w-md rounded-3xl bg-white p-8 border border-slate-100/70 shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:bg-zinc-900 dark:border-zinc-800/80">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xxs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Event Registration
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-1 line-clamp-1">
                  {rsvpEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setRsvpEvent(null)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleRsvpSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1.5 block w-full rounded-lg border border-zinc-200/50 bg-zinc-50 px-4 py-3 text-xs text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="mt-1.5 block w-full rounded-lg border border-zinc-200/50 bg-zinc-50 px-4 py-3 text-xs text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer mt-2 rounded-xl bg-blue-600 py-3.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    Registering <Loader2 className="w-4 h-4 animate-spin" />
                  </span>
                ) : (
                  "Confirm Registration"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
