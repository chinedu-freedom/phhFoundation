"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, FileText, ArrowDownToLine, Info } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { toast } from "sonner";

const RESOURCES = [
  {
    id: "child-safeguarding",
    title: "Child Protection & Safeguarding Policy",
    description: "Our strict guidelines for volunteers, medical practitioners, and staff during kids' bootcamps and outreaches.",
    category: "Policies",
    fileSize: "680 KB",
    format: "PDF",
    publishDate: "Mar 22, 2026",
    downloadUrl: "/safeguarding",
  },
  {
    id: "scholarship-guide",
    title: "2026 Educational Scholarship Application Guide",
    description: "Eligibility criteria, school lists, and instructions for parents/guardians applying for student tuition sponsorships.",
    category: "Guidelines",
    fileSize: "1.2 MB",
    format: "PDF",
    publishDate: "Jan 10, 2026",
    downloadUrl: "/scholarships-guide",
  },
  {
    id: "privacy-policy-doc",
    title: "Data Privacy & Protection Policy (GDPR/NDPR)",
    description: "Detailed documentation of how we process donor data, secure transaction logs, and comply with privacy rules.",
    category: "Policies",
    fileSize: "520 KB",
    format: "PDF",
    publishDate: "Jun 14, 2026",
    downloadUrl: "/privacy",
  },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Financial Audits", "Policies", "Guidelines"];

  const filteredResources = RESOURCES.filter((res) => {
    const matchesCategory = selectedCategory === "All" || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* Page Header */}
      <PageHeader
        subtitle="Transparency"
        title="Resources & Reports"
        description="Access and read our safeguarding policies, application guidelines, and future financial reports."
        bgImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1600&auto=format&fit=crop&q=80"
        alt="Library background"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 space-y-10">
          
          {/* Transparency Info Callout */}
          <div className="rounded-3xl bg-blue-50/50 p-6 border border-blue-100 dark:bg-blue-950/10 dark:border-blue-900/30 flex items-start gap-4">
            <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Our Commitment to Accountability</h4>
              <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed">
                As a registered humanitarian trust, HH Foundation operates under strict stewardship mandates. All annual financial audits are compiled by accredited third-party chartered accountants and posted here for public access.
              </p>
            </div>
          </div>

          {/* Search and Category filters */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-zinc-200 dark:border-zinc-800 pb-8">
            <div className="flex flex-wrap gap-2 order-2 md:order-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80 order-1 md:order-2">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:bg-zinc-800"
              />
            </div>
          </div>

          {/* Resources List */}
          <div className="space-y-4">
            {selectedCategory === "Financial Audits" ? (
              <div className="rounded-3xl border border-dashed border-zinc-200 p-12 text-center dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                <Info className="mx-auto h-8 w-8 text-blue-500 mb-4" />
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">No Audits Available Yet</h4>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                  HH Foundation was established in 2026. In accordance with our commitment to transparency, our first annual audited financial report for the 2026 fiscal year will be compiled by accredited third-party auditors and published here in early 2027.
                </p>
              </div>
            ) : (
              <>
                {filteredResources.map((res) => (
                  <div
                    key={res.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-3xl bg-white p-6 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <span className="inline-block text-xxs font-bold uppercase tracking-wider text-zinc-400">
                          {res.category}
                        </span>
                        <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {res.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          {res.description}
                        </p>
                        
                        {/* File Meta */}
                        <div className="flex items-center gap-4 pt-1.5 text-xxs text-zinc-400 font-semibold uppercase tracking-wider">
                          <span>Format: {res.format}</span>
                          <span>•</span>
                          <span>Size: {res.fileSize}</span>
                          <span>•</span>
                          <span>Published: {res.publishDate}</span>
                        </div>
                      </div>
                    </div>

                    {res.downloadUrl.startsWith("/") ? (
                      <Link
                        href={res.downloadUrl}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3.5 shadow-md shadow-blue-500/10 shrink-0 self-start sm:self-auto transition-colors"
                      >
                        View Document
                      </Link>
                    ) : (
                      <a
                        href={res.downloadUrl}
                        onClick={(e) => {
                          e.preventDefault();
                          toast.info(`Simulating download of: ${res.title}`);
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3.5 shadow-md shadow-blue-500/10 shrink-0 self-start sm:self-auto transition-colors"
                      >
                        <ArrowDownToLine className="h-4 w-4" /> Download File
                      </a>
                    )}
                  </div>
                ))}

                {filteredResources.length === 0 && (
                  <div className="py-16 text-center text-zinc-400">
                    No reports or documents match your search parameters.
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
