"use client";

import { useState } from "react";
import { updateVolunteerStatusAction } from "@/app/actions/volunteer";
import { Search, Filter, Check, X, FileText, AlertCircle } from "lucide-react";

export default function VolunteersManager({ initialVolunteers = [] }) {
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loadingMap, setLoadingMap] = useState({});
  const [selectedMotivation, setSelectedMotivation] = useState(null);

  const handleUpdateStatus = async (id, status) => {
    const confirmationMsg =
      status === "APPROVED"
        ? "Are you sure you want to APPROVE this volunteer application?"
        : "Are you sure you want to DECLINE this volunteer application?";

    if (!confirm(confirmationMsg)) return;

    setLoadingMap((prev) => ({ ...prev, [id]: true }));

    try {
      const res = await updateVolunteerStatusAction(id, status);
      if (res.error) {
        alert(res.error);
      } else {
        setVolunteers((prev) =>
          prev.map((v) => (v.id === id ? { ...v, status } : v))
        );
      }
    } catch (err) {
      alert("Failed to update status.");
    } finally {
      setLoadingMap((prev) => ({ ...prev, [id]: false }));
    }
  };

  // Filter application list
  const filteredVolunteers = volunteers.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.email.toLowerCase().includes(search.toLowerCase()) ||
      v.phone.toLowerCase().includes(search.toLowerCase()) ||
      v.location.toLowerCase().includes(search.toLowerCase()) ||
      v.skills.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "ALL" || v.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Filters & search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search by name, skills, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 focus:border-teal-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-zinc-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="block rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:border-teal-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          >
            <option value="ALL">All Statuses</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>
      </div>

      {/* Applications Grid/Table */}
      <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-500 dark:text-zinc-400">
            <thead className="bg-zinc-50 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:bg-zinc-950">
              <tr>
                <th className="px-6 py-4">Applicant</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Skills & Talents</th>
                <th className="px-6 py-4">Availability</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Letter</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {filteredVolunteers.map((v) => (
                <tr key={v.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20">
                  <td className="px-6 py-4">
                    <div className="font-bold text-zinc-900 dark:text-white">
                      {v.name}
                    </div>
                    <div className="text-xxs text-zinc-400">
                      {v.email} • {v.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold">{v.location}</td>
                  <td className="px-6 py-4 text-xs max-w-[200px] truncate" title={v.skills}>
                    {v.skills}
                  </td>
                  <td className="px-6 py-4 text-xs">{v.availability}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xxs font-bold ${
                        v.status === "APPROVED"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400"
                          : v.status === "PENDING"
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400"
                          : "bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400"
                      }`}
                    >
                      {v.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {v.motivation ? (
                      <button
                        onClick={() => setSelectedMotivation(v)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400"
                      >
                        <FileText className="h-4 w-4" /> View
                      </button>
                    ) : (
                      <span className="text-zinc-400 text-xxs font-medium">None</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {v.status === "PENDING" && (
                      <div className="flex justify-end gap-1.5">
                        <button
                          onClick={() => handleUpdateStatus(v.id, "APPROVED")}
                          disabled={loadingMap[v.id]}
                          className="inline-flex h-8 px-2.5 items-center gap-1 rounded-lg bg-teal-600 text-xs font-bold text-white hover:bg-teal-700 disabled:opacity-50 transition-colors"
                        >
                          <Check className="h-3.5 w-3.5" /> Approve
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(v.id, "REJECTED")}
                          disabled={loadingMap[v.id]}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 hover:bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:hover:bg-zinc-950 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                    {v.status !== "PENDING" && (
                      <span className="text-xxs font-bold text-zinc-400">Processed</span>
                    )}
                  </td>
                </tr>
              ))}
              {filteredVolunteers.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-zinc-400">
                    No matching applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Motivation Letter Modal */}
      {selectedMotivation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 border border-zinc-100 shadow-2xl dark:bg-zinc-900 dark:border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Motivation Letter
              </h3>
              <button
                onClick={() => setSelectedMotivation(null)}
                className="rounded-lg p-1 hover:bg-zinc-50 dark:hover:bg-zinc-950"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4">
              <span className="text-xs font-semibold text-zinc-400">Applicant:</span>
              <p className="font-bold text-sm text-zinc-800 dark:text-zinc-200">
                {selectedMotivation.name}
              </p>
              
              <div className="mt-4 rounded-2xl bg-zinc-50 p-4 border border-zinc-100 text-sm leading-6 text-zinc-600 dark:bg-zinc-950/50 dark:border-zinc-850 dark:text-zinc-400 max-h-60 overflow-y-auto">
                {selectedMotivation.motivation}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedMotivation(null)}
                className="rounded-xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
