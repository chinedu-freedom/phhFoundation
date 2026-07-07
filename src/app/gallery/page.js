import { prisma } from "@/lib/db";
import GalleryView from "@/components/GalleryView";
import Image from "next/image";

export const metadata = {
  title: "Photo Gallery | HH Foundation",
  description: "Browse high-definition pictures capturing the real impact of our medical outstations, school scholarship campaigns, and women empowerment sessions.",
};

export default async function GalleryPage() {
  let serializedImages = [];
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // Serialize records
    serializedImages = images.map((img) => ({
      ...img,
      createdAt: img.createdAt.toISOString(),
    }));
  } catch (error) {
    console.error("Database fetch failed in gallery page SSR:", error);
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=80"
            alt="Outreach kids smiling background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Our Memories</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-poppins">
            Media Gallery
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100">
            A visual documentation of our programs in action, showing the real faces and lives touched by your generous contributions.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <GalleryView images={serializedImages} />
        </div>
      </section>
    </div>
  );
}

