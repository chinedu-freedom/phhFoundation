"use client";

import { useState } from "react";
import { confirmDonationAction } from "@/app/actions/donation";
import { Search, Filter, Check, ShieldAlert } from "lucide-react";

export default function DonationsManager({ initialDonations = [] }) {
  const [donations, setDonations] = useState(initialDonations);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loadingMap, setLoadingMap] = useState({});

  const handleConfirm = async (reference) => {
    if (!confirm(`Are you sure you want to mark transaction ${reference} as SUCCESSFUL? This will update the campaign progress and trigger the Zoho confirmation email.`)) {
      return;
    }

    setLoadingMap((prev) => ({ ...prev, [reference]: true }));

    try {
      const res = await confirmDonationAction(reference);
      if (res.error) {
        alert(res.error);
      } else {
        // Update local state
        setDonations((prev) =>
          prev.map((d) =>
            d.reference === reference ? { ...d, status: "SUCCESSFUL" } : d
          )
        );
      }
    } catch (err) {
      alert("Error updating donation status.");
    } finally {
      setLoadingMap((prev) => ({ ...prev, [reference]: false }));
    }
  };

  // Filter logic
  const filteredDonations = donations.filter((d) => {
    const matchesSearch =
      (d.donorName || "").toLowerCase().includes(search.toLowerCase()) ||
      (d.donorEmail || "").toLowerCase().includes(search.toLowerCase()) ||
      d.reference.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "ALL" || d.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search by donor, email, or reference..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          />
        </div>

        {/* Filter status */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-zinc-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="block rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          >
            <option value="ALL">All Statuses</option>
            <option value="PENDING">Pending</option>
            <option value="SUCCESSFUL">Successful</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>
      </div>

      {/* Donations Table */}
      <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-500 dark:text-zinc-400">
            <thead className="bg-zinc-50 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:bg-zinc-950">
              <tr>
                <th className="px-6 py-4">Reference</th>
                <th className="px-6 py-4">Donor Details</th>
                <th className="px-6 py-4">Campaign</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {filteredDonations.map((d) => (
                <tr key={d.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20">
                  <td className="px-6 py-4 font-mono text-xs font-bold text-zinc-900 dark:text-white">
                    {d.reference}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-zinc-900 dark:text-white">
                      {d.isAnonymous ? "Anonymous" : d.donorName}
                    </div>
                    <div className="text-xs text-zinc-400">
                      {d.isAnonymous ? "N/A" : d.donorEmail}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-[180px] truncate">
                    {d.campaign?.title || "General Fund"}
                  </td>
                  <td className="px-6 py-4 font-extrabold text-zinc-900 dark:text-white">
                    ₦{d.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold">{d.paymentMethod}</td>
                  <td className="px-6 py-4 text-xs">
                    {new Date(d.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xxs font-bold ${
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
                  <td className="px-6 py-4 text-right">
                    {d.status === "PENDING" && (
                      <button
                        onClick={() => handleConfirm(d.reference)}
                        disabled={loadingMap[d.reference]}
                        className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
                      >
                        <Check className="h-3.5 w-3.5" /> Approve
                      </button>
                    )}
                    {d.status === "SUCCESSFUL" && (
                      <span className="text-xxs font-bold text-zinc-400">Verified</span>
                    )}
                  </td>
                </tr>
              ))}
              {filteredDonations.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-zinc-400">
                    No matching donations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
