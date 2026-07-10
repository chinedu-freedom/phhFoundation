import PageHeader from "@/components/PageHeader";
import { ShieldCheck, FileDown, PieChart, Landmark, Heart, Info, ArrowUpRight } from "lucide-react";
import TransparencyCalculator from "./TransparencyCalculator";

export const metadata = {
  title: "Financial Transparency & Accountability | HH Foundation",
  description: "View our audited statements, program allocations, and interactive donation breakdowns. We commit 90% of public funds directly to programs.",
};

export default function TransparencyPage() {
  const reports = [
    {
      year: "2025",
      title: "Annual Audited Financial Report",
      type: "PDF Document",
      size: "2.4 MB",
      desc: "Full balance sheets, cashflow reports, and independent auditor remarks."
    },
    {
      year: "2024",
      title: "Annual Audited Financial Report",
      type: "PDF Document",
      size: "2.1 MB",
      desc: "Historical statement of program expenses and direct relief disbursements."
    },
    {
      year: "2025",
      title: "PHH Impact & Program Prospectus",
      type: "PDF Document",
      size: "4.8 MB",
      desc: "Visual recap of completed medical drives, school scholarships, and outreach testimonials."
    },
    {
      year: "2023",
      title: "Annual Audited Financial Report",
      type: "PDF Document",
      size: "1.9 MB",
      desc: "Balance sheet review of our initial founding scholarship operations."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Header Banner */}
      <PageHeader
        subtitle="Our Pledge"
        title="Transparency & Financial Accountability"
        description="We believe you should know exactly where your support goes. We commit to direct program funding, external auditing, and open reporting."
        bgImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop&q=80"
        alt="Business document and reporting background"
      />

      {/* 2. Charity Water Style 100% Model Detail */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            
            {/* Visual Callout block */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-500/10 dark:bg-zinc-900 dark:border dark:border-zinc-800 dark:shadow-none relative overflow-hidden group">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200 dark:text-blue-400">The PHH Integrity Model</span>
                <h3 className="mt-4 text-3xl font-bold font-poppins leading-tight">
                  90% Direct Program Ratio
                </h3>
                <p className="mt-4 text-sm text-blue-150 dark:text-zinc-400 leading-relaxed">
                  Thanks to private seed sponsors and dedicated corporate founders who cover administrative logistics separately, <strong>90% of all public donations</strong> fund scholarships, pharmaceutical drugs, and student resources directly in the field.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="rounded-xl bg-white/10 px-4 py-2 border border-white/10 text-center">
                    <span className="block text-2xl font-bold font-poppins">90%</span>
                    <span className="text-xxs text-blue-200 uppercase tracking-widest font-bold">Programs</span>
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-2 border border-white/10 text-center">
                    <span className="block text-2xl font-bold font-poppins font-semibold">10%</span>
                    <span className="text-xxs text-blue-200 uppercase tracking-widest font-bold">Operations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Trusted Stewardship</span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-4xl">
                Every NGN Counts.
              </h2>
              <p className="text-sm leading-relaxed text-zinc-650 dark:text-zinc-400">
                At the HH Foundation, accountability is not a compliance metric—it is the foundation of our partnership with you. We maintain separate operational accounts to ensure that public campaign donations never mix with internal marketing costs or staffing salaries.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/50 shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs text-zinc-650 dark:text-zinc-400">
                    <strong>Annual Independent Auditing:</strong> Financial statements are reviewed annually by certified auditing firms.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/50 shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs text-zinc-650 dark:text-zinc-400">
                    <strong>Real-time Proof of Impact:</strong> Completed campaigns are followed up with updates, coordinates, and photo/video evidence.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Interactive Allocation Calculator */}
      <section className="py-20 bg-white dark:bg-zinc-950/30 border-t border-b border-slate-100/70 dark:border-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Visual Allocations</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              Track Your Support
            </h2>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Drag the simulator or enter a custom amount to see how we distribute your funds across active programs.
            </p>
          </div>

          <TransparencyCalculator />
        </div>
      </section>

      {/* 4. Audits & Reports Download Center */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Download Center</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white font-poppins">
                Financial Audit Statements
              </h2>
            </div>
            <p className="mt-4 md:mt-0 max-w-md text-xs text-zinc-500 dark:text-zinc-400">
              Review and download complete tax forms, audit filings, and prospective operational budgets to check compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reports.map((report, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-100/70 dark:bg-zinc-900 dark:border-zinc-800/80 hover:shadow-[0_20px_40px_rgba(59,130,246,0.04)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xxs font-extrabold px-2.5 py-1 bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 rounded-lg">
                      {report.year}
                    </span>
                    <span className="text-xxs text-zinc-400 font-bold">{report.size}</span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white font-poppins group-hover:text-blue-600 transition-colors">
                    {report.title}
                  </h3>
                  <p className="mt-2 text-xxs text-zinc-500 dark:text-zinc-400 leading-normal">
                    {report.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200/50 bg-zinc-50 px-4 py-2.5 text-xxs font-bold text-zinc-700 hover:bg-zinc-100 hover:border-blue-500 dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-zinc-450 dark:hover:bg-zinc-900 transition-all"
                  >
                    <FileDown className="h-3.5 w-3.5" /> Download Report
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
