import { prisma } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { DollarSign, ShieldCheck, TrendingUp, Calendar } from "lucide-react";

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

  // Format currency helpers
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=80"
            alt="Children smiling background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Our Campaigns</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-poppins">
            Active Projects & Campaigns
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100">
            Real projects delivering immediate, measurable change. Support an active campaign or review our completed work.
          </p>
        </div>
      </section>

      {/* 2. Projects Listing */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {campaigns.length === 0 ? (
            <div className="text-center py-20 rounded-3xl bg-white border border-zinc-150 p-8 dark:bg-zinc-900 dark:border-zinc-800">
              <ShieldCheck className="mx-auto h-12 w-12 text-zinc-400" />
              <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">No active projects found</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Check back soon or sponsor our general operations fund in the meantime.
              </p>
              <div className="mt-6">
                <Link
                  href="/donate"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Sponsor Foundation
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {campaigns.map((campaign) => {
                const percentage = Math.min(
                  Math.round((campaign.raisedAmount / campaign.targetAmount) * 100),
                  100
                );
                const isActive = campaign.status === "ACTIVE";

                return (
                  <div
                    key={campaign.id}
                    className="flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-150 bg-white dark:bg-zinc-900 dark:border-zinc-800 hover:shadow-2xl hover:border-blue-500 transition-all group"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={campaign.image || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80"}
                        alt={campaign.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Status Tag */}
                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white uppercase tracking-wider ${
                          isActive ? "bg-blue-600" : "bg-emerald-600"
                        }`}
                      >
                        {isActive ? "Active Campaign" : "Completed"}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {campaign.title}
                        </h3>
                        <p className="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400 line-clamp-3">
                          {campaign.description}
                        </p>
                      </div>

                      {/* Financial Progress Bar */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-blue-600 dark:text-blue-400">{percentage}% Raised</span>
                          <span className="text-zinc-400 dark:text-zinc-500">
                            Target: {formatCurrency(campaign.targetAmount)}
                          </span>
                        </div>
                        <div className="mt-2 h-2.5 w-full rounded-full bg-zinc-100 overflow-hidden dark:bg-zinc-800">
                          <div
                            className="h-full rounded-full bg-blue-600 transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="mt-3 flex justify-between text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                          <span>{formatCurrency(campaign.raisedAmount)} raised</span>
                          {campaign.deadline && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(campaign.deadline).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="p-6 border-t border-zinc-100 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-950/20">
                      {isActive ? (
                        <Link
                          href={`/donate?campaign=${campaign.slug}`}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all"
                        >
                          <TrendingUp className="h-4 w-4" /> Support this Campaign
                        </Link>
                      ) : (
                        <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs font-bold text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-900/30 dark:text-emerald-400">
                          <ShieldCheck className="h-4 w-4" /> Thank you for sponsoring!
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

