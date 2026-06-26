import { prisma } from "@/lib/db";
import CampaignManager from "./CampaignManager";

export const metadata = {
  title: "Manage Campaigns | PHH Admin",
};

export default async function AdminCampaignsPage() {
  const campaigns = await prisma.campaign.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
          Campaigns
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Create, edit, and publish humanitarian or educational sponsorship fundraisers.
        </p>
      </div>

      <CampaignManager initialCampaigns={campaigns} />
    </div>
  );
}
