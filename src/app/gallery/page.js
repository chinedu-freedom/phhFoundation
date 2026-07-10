import { prisma } from "@/lib/db";
import GalleryView from "@/components/GalleryView";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Photo Gallery | HH Foundation",
  description: "Browse high-definition pictures capturing the real impact of our medical outstations, school scholarship campaigns, and women empowerment sessions.",
};

const DEFAULT_IMAGES = [
  { id: "1", url: "/group.jpeg", caption: "Community Outreach and Gift Distribution", album: "Outreach" },
  { id: "2", url: "/group2.jpeg", caption: "Smiles from our community youth and children", album: "Outreach" },
  { id: "3", url: "/orentiation.jpeg", caption: "Orientation and skill empowerment seminar", album: "Empowerment" },
  { id: "4", url: "/people.jpeg", caption: "Working closely with community stakeholders", album: "Collaboration" },
  { id: "5", url: "/people1.jpeg", caption: "Sharing relief packages to families", album: "Relief" },
  { id: "6", url: "/people2.jpeg", caption: "Empowering young girls with learning materials", album: "Education" },
  { id: "7", url: "/pepl.jpeg", caption: "Outreach session partners and volunteers", album: "Collaboration" },
  { id: "8", url: "/image.jpeg", caption: "Founder Princess Hephzibah receiving honor", album: "Awards" },
  { id: "9", url: "/hall of fame.jpeg", caption: "Garki Chiefdom Council AMAC Honor", album: "Awards" },
  { id: "10", url: "/reward.jpeg", caption: "Community service appreciation award", album: "Awards" },
  { id: "11", url: "/reward1.jpeg", caption: "Honors for youth development projects", album: "Awards" },
  { id: "12", url: "/reward2.jpeg", caption: "Excellence in Humanitarian Services", album: "Awards" },
  { id: "13", url: "/reward3.jpeg", caption: "Recognition for outstanding dedication to social change", album: "Awards" },
  { id: "14", url: "/reward4.jpeg", caption: "Distinguished humanitarian leadership award", album: "Awards" },
  { id: "15", url: "/reward5.jpeg", caption: "Youth empowerment and community development honor", album: "Awards" },
  { id: "16", url: "/reward6.jpeg", caption: "Certificate of honor for philanthropic service", album: "Awards" },
  { id: "17", url: "/reward7.jpeg", caption: "Award for selfless service to humanity", album: "Awards" },
  { id: "18", url: "/reward8.jpeg", caption: "Commendation for sustainable community impact", album: "Awards" },
  { id: "19", url: "/reward9.jpeg", caption: "Leadership excellence in public welfare", album: "Awards" },
  { id: "20", url: "/reward10.jpeg", caption: "Award of excellence for grassroots outstations", album: "Awards" },
  { id: "21", url: "/reward11.jpeg", caption: "Distinguished service award for orphan welfare support", album: "Awards" },
  { id: "22", url: "/reward12.jpeg", caption: "Advocate of the year award for gender equality", album: "Awards" },
  { id: "23", url: "/reward13.jpeg", caption: "Appreciation of partnerships and collaborative programs", album: "Awards" },
  { id: "24", url: "/WhatsApp Image 2026-07-07 at 10.11.31 AM.jpeg", caption: "Interactive session with community women", album: "Outreach" },
  { id: "25", url: "/WhatsApp Image 2026-07-07 at 10.19.25 AM (1).jpeg", caption: "Distribution of household items and food essentials", album: "Outreach" }
];

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

  if (serializedImages.length === 0) {
    serializedImages = DEFAULT_IMAGES;
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* Page Header */}
      <PageHeader
        subtitle="Our Memories"
        title="Media Gallery"
        description="A visual documentation of our programs in action, showing the real faces and lives touched by your generous contributions."
        bgImage="/group2.jpeg"
        alt="Outreach kids smiling background"
      />

      {/* Gallery Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <GalleryView images={serializedImages} />
        </div>
      </section>
    </div>
  );
}

