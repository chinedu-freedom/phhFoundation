"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function EventsCarousel({ events }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isHovered && events.length > 1) {
      slideInterval.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isHovered, events.length]);

  if (!events || events.length === 0) {
    return (
      <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-12 text-center shadow-sm">
        <p className="text-slate-500 dark:text-slate-400">No upcoming events scheduled at the moment.</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer slides container */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50/50 dark:from-zinc-900 dark:to-zinc-950 border border-slate-100 dark:border-zinc-800 shadow-xl shadow-slate-100/50 dark:shadow-none">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {events.map((event) => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const formattedTime = eventDate.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div key={event.id} className="w-full shrink-0 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Details (Left) */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-500/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                      Upcoming Event
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {event.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    {event.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">Date & Time</p>
                        <p className="text-sm font-semibold">{formattedDate} at {formattedTime}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">Venue</p>
                        <p className="text-sm font-semibold">{event.venue}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href="/events"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/10 transition-all hover:bg-blue-700 active:scale-[0.98]"
                    >
                      Learn More & Register <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Image (Right) */}
                <div className="lg:col-span-6">
                  <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-zinc-800 group">
                    <Image
                      src={event.image || "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      {events.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute -left-5 z-30 top-1/2 cursor-pointer -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 text-slate-800 dark:text-white shadow-md hover:bg-slate-50 dark:hover:bg-zinc-700 transition-all border border-slate-100 dark:border-zinc-700 hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute -right-5 z-30 top-1/2 cursor-pointer -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 text-slate-800 dark:text-white shadow-md hover:bg-slate-50 dark:hover:bg-zinc-700 transition-all border border-slate-100 dark:border-zinc-700 hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {events.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {events.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? "w-8 bg-blue-600 dark:bg-blue-500" 
                  : "w-2.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
