import { prisma } from "@/lib/db";
import DonateForm from "./DonateForm";

export const metadata = {
  title: "Make a Donation | HH Foundation",
  description: "Support our campaigns. Donate via Paystack, Flutterwave, Stripe, or Bank Transfer.",
};

export default async function DonatePage({ searchParams }) {
  // Fetch active campaigns for dropdown selection
  const campaigns = await prisma.campaign.findMany({
    where: { status: "ACTIVE" },
    select: {
      id: true,
      title: true,
    },
  });

  const resolvedParams = await searchParams;
  const initialCampaignId = resolvedParams?.campaignId || "";

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Empower Communities
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Make a Difference Today
        </h1>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
          Your donation goes directly towards funding education, healthcare outreach, and skill training for women and youth.
        </p>
      </div>

      <DonateForm campaigns={campaigns} initialCampaignId={initialCampaignId} />
    </div>
  );
}

