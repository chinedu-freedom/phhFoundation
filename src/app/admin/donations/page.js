import { prisma } from "@/lib/db";
import DonationsManager from "./DonationsManager";

export const metadata = {
  title: "Manage Donations | PHH Admin",
};

export default async function AdminDonationsPage() {
  const donations = await prisma.donation.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      campaign: {
        select: {
          title: true,
        },
      },
    },
  });

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
          Donations
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Track transaction references, check payment statuses, and reconcile manual transfers.
        </p>
      </div>

      <DonationsManager initialDonations={donations} />
    </div>
  );
}
