import { prisma } from "@/lib/db";
import GalleryManager from "./GalleryManager";

export const metadata = {
  title: "Gallery Administration | PHH Foundation",
};

export default async function AdminGalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Serialize records
  const serializedImages = images.map((img) => ({
    ...img,
    createdAt: img.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
          Gallery Management
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Upload outreach images, tag them to albums, and add descriptive captions.
        </p>
      </div>

      <GalleryManager initialImages={serializedImages} />
    </div>
  );
}
