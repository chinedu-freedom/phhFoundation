import { prisma } from "@/lib/db";
import { 
  DollarSign, 
  HeartHandshake, 
  Users, 
  HandHeart, 
  ArrowRight,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  // Query statistical aggregates and lists from DB
  const [
    donationsCount,
    donationsSum,
    activeCampaignsCount,
    pendingVolunteersCount,
    recentDonations,
    recentVolunteers
  ] = await Promise.all([
    prisma.donation.count(),
    prisma.donation.aggregate({
      _sum: { amount: true },
      where: { status: "SUCCESSFUL" },
    }),
    prisma.campaign.count({
      where: { status: "ACTIVE" },
    }),
    prisma.volunteerApplication.count({
      where: { status: "PENDING" },
    }),
    prisma.donation.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { campaign: true },
    }),
    prisma.volunteerApplication.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const totalFundsRaised = donationsSum._sum.amount || 0;

  const stats = [
    {
      name: "Total Funds Raised",
      value: `₦${totalFundsRaised.toLocaleString()}`,
      description: "Successful donations",
      icon: DollarSign,
      color: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/20",
    },
    {
      name: "Total Donations",
      value: donationsCount.toString(),
      description: "Pending + Successful",
      icon: HandHeart,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20",
    },
    {
      name: "Active Campaigns",
      value: activeCampaignsCount.toString(),
      description: "Publicly visible projects",
      icon: HeartHandshake,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20",
    },
    {
      name: "Pending Volunteers",
      value: pendingVolunteersCount.toString(),
      description: "Awaiting approval",
      icon: Users,
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome & Context */}
      <div>
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
          Overview
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Real-time snapshot of the PHH Foundation fundraising activity and operations.
        </p>
      </div>

      {/* Stats Grids */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-400">
                  {stat.name}
                </span>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="block mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  {stat.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lists Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Recent Donations (Left) */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 lg:col-span-8">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              Recent Donations
            </h2>
            <Link
              href="/admin/donations"
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-500 dark:text-zinc-400">
              <thead className="bg-zinc-50 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:bg-zinc-950">
                <tr>
                  <th className="px-4 py-3">Donor</th>
                  <th className="px-4 py-3">Campaign</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {recentDonations.map((d) => (
                  <tr key={d.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20">
                    <td className="px-4 py-3">
                      <div className="font-bold text-zinc-900 dark:text-white">
                        {d.isAnonymous ? "Anonymous" : d.donorName}
                      </div>
                      <div className="text-xxs text-zinc-400">
                        {d.isAnonymous ? "N/A" : d.donorEmail}
                      </div>
                    </td>
                    <td className="px-4 py-3 max-w-[150px] truncate">
                      {d.campaign?.title || "General Fund"}
                    </td>
                    <td className="px-4 py-3 font-semibold text-zinc-900 dark:text-white">
                      ₦{d.amount.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-xs">{d.paymentMethod}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xxs font-bold ${
                          d.status === "SUCCESSFUL"
                            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400"
                            : d.status === "PENDING"
                            ? "bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400"
                            : "bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400"
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {recentDonations.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-zinc-400">
                      No donations logged yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Volunteers (Right) */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 lg:col-span-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              Recent Volunteers
            </h2>
            <Link
              href="/admin/volunteers"
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {recentVolunteers.map((v) => (
              <div
                key={v.id}
                className="flex items-start gap-4 rounded-xl border border-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-950/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/20 dark:text-teal-400 font-bold">
                  {v.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                    {v.name}
                  </h4>
                  <p className="text-xxs text-zinc-400 truncate">{v.email}</p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xxs font-semibold text-zinc-500 uppercase tracking-wider">
                      {v.location}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xxs font-bold ${
                        v.status === "APPROVED"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400"
                          : v.status === "PENDING"
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400"
                          : "bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400"
                      }`}
                    >
                      {v.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {recentVolunteers.length === 0 && (
              <p className="py-8 text-center text-sm text-zinc-400">
                No volunteer applications submitted yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
