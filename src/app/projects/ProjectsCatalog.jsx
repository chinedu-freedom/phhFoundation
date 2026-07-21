"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, TrendingUp, Calendar, ShieldCheck, X } from "lucide-react";

export default function ProjectsCatalog({ initialCampaigns = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'active', 'completed'

  // Format currency helpers
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Filter and Search Logic
  const filteredCampaigns = useMemo(() => {
    return initialCampaigns.filter((campaign) => {
      const matchesSearch =
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase());

      const isActive = campaign.status === "ACTIVE";
      const isCompleted = campaign.status === "COMPLETED";

      if (activeTab === "active") {
        return matchesSearch && isActive;
      }
      if (activeTab === "completed") {
        return matchesSearch && isCompleted;
      }
      return matchesSearch;
    });
  }, [initialCampaigns, searchTerm, activeTab]);

  // Tab counts
  const counts = useMemo(() => {
    return {
      all: initialCampaigns.length,
      active: initialCampaigns.filter((c) => c.status === "ACTIVE").length,
      completed: initialCampaigns.filter((c) => c.status === "COMPLETED").length,
    };
  }, [initialCampaigns]);

  const handleReset = () => {
    setSearchTerm("");
    setActiveTab("all");
  };

  return (
    <div className="space-y-12">
      {/* Search and Filters Bar */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-zinc-200 dark:border-zinc-800 pb-8">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
            <Search className="h-4.5 w-4.5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search campaigns by name or focus..."
            className="w-full rounded-2xl border border-zinc-200 bg-white/80 py-3.5 pl-11 pr-10 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-600 focus:bg-white focus:outline-none dark:border-zinc-850 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Projects", count: counts.all },
            { id: "active", label: "Active", count: counts.active },
            { id: "completed", label: "Completed", count: counts.completed },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/15"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-850"
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-2 py-0.5 text-xxs font-bold ${
                  activeTab === tab.id
                    ? "bg-blue-500/30 text-white"
                    : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid Content */}
      {filteredCampaigns.length === 0 ? (
        <div className="text-center py-20 rounded-3xl bg-white border border-slate-100/60 p-8 dark:bg-zinc-900 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-400 dark:bg-zinc-950 dark:text-zinc-650">
            <Filter className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-lg font-bold text-zinc-900 dark:text-white font-poppins">No matching projects found</h3>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
            We couldn't find any projects matching your search term or active filter. Try resetting the filters.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handleReset}
              className="rounded-xl border border-zinc-200 px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-350 dark:hover:bg-zinc-850 transition-colors"
            >
              Reset Filters
            </button>
            <Link
              href="/donate"
              className="rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/10 transition-colors"
            >
              Sponsor Foundation
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCampaigns.map((campaign) => {
            const percentage = Math.min(
              Math.round((campaign.raisedAmount / campaign.targetAmount) * 100),
              100
            );
            const isActive = campaign.status === "ACTIVE";

            return (
                <div key={campaign.id} className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white dark:bg-zinc-900 dark:border-zinc-800/85 shadow-[0_8px_30px_rgb(0,0,0,0.025)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.04)] hover:-translate-y-1 transition-all duration-300 group">
                {/* Thumbnail Image */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={campaign.image || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80"}
                    alt={campaign.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Status Tag */}
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xxs font-bold text-white uppercase tracking-widest shadow-sm ${
                      isActive ? "bg-blue-600" : "bg-emerald-600"
                    }`}
                  >
                    {isActive ? "Active" : "Completed"}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3">
                      {campaign.description}
                    </p>
                  </div>

                  {/* Financial Progress Bar */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-blue-600 dark:text-blue-400">{percentage}% Raised</span>
                      <span className="text-zinc-400 dark:text-zinc-500">
                        Goal: {formatCurrency(campaign.targetAmount)}
                      </span>
                    </div>
                    {/* Tiny Modern Progress Bar */}
                    <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden dark:bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="mt-3 flex justify-between text-xxs font-semibold text-zinc-650 dark:text-zinc-400">
                      <span>{formatCurrency(campaign.raisedAmount)} raised</span>
                      {campaign.deadline && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(campaign.deadline).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  {isActive ? (
                    <Link
                      href={`/donate?campaignId=${campaign.id}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/10 hover:bg-blue-700 active:scale-[0.98] transition-all"
                    >
                      <TrendingUp className="h-4 w-4" /> Support this Campaign
                    </Link>
                  ) : (
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs font-bold text-emerald-700 dark:bg-emerald-950/15 dark:border-emerald-900/30 dark:text-emerald-400">
                      <ShieldCheck className="h-4 w-4" /> Completed & Funded
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
