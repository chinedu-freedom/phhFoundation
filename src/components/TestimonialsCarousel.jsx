"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function TestimonialsCarousel({ testimonials, variant = "dark" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const slideInterval = useRef(null);

  const isLight = variant === "light";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = (index) => {
    setActiveIndex(Math.min(index, maxIndex));
  };

  useEffect(() => {
    if (!isHovered && testimonials.length > visibleCards) {
      slideInterval.current = setInterval(nextSlide, 4500);
    }
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isHovered, testimonials.length, visibleCards, nextSlide]);

  if (!testimonials || testimonials.length === 0) return null;

  const dotCount = maxIndex + 1;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Outer Wrapper */}
      <div className="relative overflow-hidden w-full py-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${Math.min(activeIndex, maxIndex) * (100 / visibleCards)}%)`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4 flex"
            >
              <div
                className={`w-full flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  isLight
                    ? "bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-xl"
                    : "bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <Quote
                    className={`h-8 w-8 mb-4 ${
                      isLight ? "text-blue-600/20 dark:text-blue-400/20" : "text-blue-300/20"
                    }`}
                  />
                  <p
                    className={`text-sm italic leading-7 ${
                      isLight ? "text-zinc-600 dark:text-zinc-400" : "text-blue-50"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div
                  className={`mt-8 flex items-center gap-4 pt-6 border-t ${
                    isLight ? "border-zinc-100 dark:border-zinc-850" : "border-white/10"
                  }`}
                >
                  {t.image && (
                    <div
                      className={`relative h-12 w-12 rounded-full overflow-hidden shrink-0 ${
                        isLight ? "border border-zinc-200 dark:border-zinc-800" : "border border-blue-400"
                      }`}
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <div>
                    <h4
                      className={`font-bold text-sm sm:text-base ${
                        isLight ? "text-zinc-900 dark:text-white" : "text-white"
                      }`}
                    >
                      {t.name}
                    </h4>
                    <p
                      className={`text-xs font-semibold ${
                        isLight ? "text-blue-600 dark:text-blue-400" : "text-blue-300"
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      {dotCount > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: dotCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? isLight
                    ? "w-8 bg-blue-600 dark:bg-blue-400"
                    : "w-8 bg-blue-300"
                  : isLight
                    ? "w-2.5 bg-blue-600/20 dark:bg-blue-400/20 hover:bg-blue-600/40"
                    : "w-2.5 bg-blue-300/30 hover:bg-blue-300/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
