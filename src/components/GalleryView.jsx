"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function GalleryView({ images = [] }) {
  const [selectedAlbum, setSelectedAlbum] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const albums = ["All", ...Array.from(new Set(images.map((img) => img.album || "General")))];

  const filteredImages = images.filter((img) => {
    const albumName = img.album || "General";
    return selectedAlbum === "All" || albumName === selectedAlbum;
  });

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <div className="space-y-12">
      {/* Category Selection Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-slate-100/70 dark:border-zinc-800/80 pb-8">
        {albums.map((alb) => (
          <button
            key={alb}
            onClick={() => setSelectedAlbum(alb)}
            className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
              selectedAlbum === alb
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
            }`}
          >
            {alb}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={img.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square rounded-3xl overflow-hidden border border-slate-100/70 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950 shadow-[0_8px_30px_rgb(0,0,0,0.02)] cursor-pointer hover:shadow-[0_20px_40px_rgba(59,130,246,0.04)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Image
              src={img.url}
              alt={img.caption || "Outreach moments"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <div className="rounded-full bg-white/20 backdrop-blur p-3 text-white shadow-lg">
                <Maximize2 className="h-5 w-5" />
              </div>
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xxs font-bold text-white uppercase tracking-wider mb-0.5">
                    {img.album}
                  </p>
                  <p className="text-xs text-zinc-205 line-clamp-1">
                    {img.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredImages.length === 0 && (
          <div className="col-span-full py-16 text-center text-zinc-400 dark:text-zinc-500">
            No outreach pictures found in this album.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-6 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Main Photo Wrapper */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col justify-center items-center"
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={activeImage.url}
                alt={activeImage.caption || "Outreach photo"}
                fill
                className="object-contain"
              />
            </div>
            {activeImage.caption && (
              <div className="mt-4 text-center max-w-xl text-white">
                <span className="text-xxs font-bold uppercase tracking-widest text-blue-400">
                  {activeImage.album}
                </span>
                <p className="mt-1 text-sm text-zinc-300">
                  {activeImage.caption}
                </p>
              </div>
            )}
          </div>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-6 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
