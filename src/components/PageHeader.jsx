import Image from "next/image";

export default function PageHeader({ subtitle, title, description, bgImage, alt = "Background image" }) {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-start overflow-hidden bg-zinc-950">
      {/* Background Image - Clean and Clear */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        {/* Soft dark overlay that ensures text stands out with premium look */}
        <div className="absolute inset-0 bg-black/45 dark:bg-black/60 z-10" />
      </div>
      
      {/* Premium Direct Text Overlay */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-8 w-full py-24 flex flex-col items-start text-left">

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl font-poppins leading-tight drop-shadow-md max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-200 max-w-2xl drop-shadow-sm font-medium">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
