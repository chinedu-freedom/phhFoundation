import { prisma } from "@/lib/db";
import PageHeader from "@/components/PageHeader";
import ProjectsCatalog from "./ProjectsCatalog";

export const metadata = {
  title: "Projects & Campaigns | HH Foundation",
  description: "View active and completed humanitarian projects and campaigns. Track donation progress and see how your support changes lives.",
};

export default async function ProjectsPage() {
  // Query campaigns from database
  let campaigns = [];
  try {
    campaigns = await prisma.campaign.findMany({
      where: {
        status: {
          in: ["ACTIVE", "COMPLETED"],
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error loading campaigns for Projects page:", error);
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Header Banner */}
      <PageHeader
        subtitle="Our Campaigns"
        title="Active Projects & Campaigns"
        description="Real projects delivering immediate, measurable change. Support an active campaign or review our completed work."
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=80"
        alt="Children smiling background"
      />

      {/* 2. Projects Listing */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <ProjectsCatalog initialCampaigns={campaigns} />
        </div>
      </section>
    </div>
  );
}

