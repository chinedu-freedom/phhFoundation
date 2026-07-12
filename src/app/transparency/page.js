import PageHeader from "@/components/PageHeader";
import { ShieldCheck, FileDown, PieChart, Landmark, Heart, Info, ArrowUpRight } from "lucide-react";
import TransparencyCalculator from "./TransparencyCalculator";

export const metadata = {
  title: "Financial Transparency & Accountability | HH Foundation",
  description: "View our audited statements, program allocations, and interactive donation breakdowns. We commit 90% of public funds directly to programs.",
};

export default function TransparencyPage() {
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

      {/* 4. Audits & Reports Portal */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Reporting Portal</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white font-poppins">
                Financial Audits & Statements
              </h2>
            </div>
            <p className="mt-4 md:mt-0 max-w-md text-xs text-zinc-500 dark:text-zinc-400">
              Our commitment to compliance, transparent stewardship, and verified resource allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Status Notice Card */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-100/70 dark:bg-zinc-900 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xxs font-extrabold bg-amber-50 text-amber-800 border border-amber-200/50 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Audit In Progress
                  </span>
                  <span className="text-xxs font-bold text-zinc-400">Fiscal Year 2026</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white font-poppins">
                  Inaugural Annual Financial Statement
                </h3>
                <p className="mt-4 text-xs leading-6 text-zinc-650 dark:text-zinc-400">
                  As our foundation initiates its formalized reporting cycle this year, our first comprehensive annual audited financial report is currently under preparation. We are working closely with external certified public accountants to verify all field expenses, administrative overheads, and campaign disbursements.
                </p>
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100/80 dark:bg-zinc-950/40 dark:border-zinc-850 flex gap-3 items-start">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-zinc-900 dark:text-white">Why no historical reports?</span>
                    <p className="mt-1 text-xxs text-zinc-500 dark:text-zinc-400 leading-normal">
                      Prior to this fiscal year, the foundation operated under direct private backing with zero public fundraising. With our expansion into public campaigns, we are establishing our independent third-party audit pipeline to guarantee maximum accountability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-850 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-xxs text-zinc-500 dark:text-zinc-550 font-medium">
                  Expected Publication: Late Q4 2026
                </span>
                <span className="inline-flex items-center gap-1 text-xxs text-blue-600 dark:text-blue-400 font-bold">
                  Reports will be downloadable here <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </div>

            {/* Audit Pipeline Timeline */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50/50 border border-slate-100/70 dark:bg-zinc-900/30 dark:border-zinc-850">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-6">
                Audit Timeline & Progress
              </h4>
              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800">
                
                {/* Step 1 */}
                <div className="relative pl-8 flex gap-4">
                  {/* <div className="absolute left-1.5 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-blue-600 border-4 border-white dark:border-zinc-900 shadow-sm" /> */}
                  <div>
                    <span className="block text-xxs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Step 1</span>
                    <span className="block text-xs font-bold text-zinc-900 dark:text-white mt-0.5">Ledger Integration</span>
                    <p className="text-xxs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                      Completed reconciliation of all local bank records and donation channels.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-8 flex gap-4">
                  {/* <div className="absolute left-1.5 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-blue-600 border-4 border-white dark:border-zinc-900 shadow-sm" /> */}
                  <div>
                    <span className="block text-xxs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Step 2</span>
                    <span className="block text-xs font-bold text-zinc-900 dark:text-white mt-0.5">Auditor Appointment</span>
                    <p className="text-xxs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                      Contracted certified independent auditors to perform full financial reviews.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-8 flex gap-4">
                  {/* <div className="absolute left-1.5 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-amber-500 border-4 border-white dark:border-zinc-900 shadow-sm animate-pulse" /> */}
                  <div>
                    <span className="block text-xxs font-bold text-amber-500 uppercase tracking-wider">Step 3 (Active)</span>
                    <span className="block text-xs font-bold text-zinc-900 dark:text-white mt-0.5">Asset & Outreach Verification</span>
                    <p className="text-xxs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                      Independent physical audit of field outreach projects and beneficiary payouts.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative pl-8 flex gap-4 opacity-50">
                  {/* <div className="absolute left-1.5 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-zinc-300 dark:bg-zinc-700 border-4 border-white dark:border-zinc-900" /> */}
                  <div>
                    <span className="block text-xxs font-bold text-zinc-400 uppercase tracking-wider">Step 4</span>
                    <span className="block text-xs font-bold text-zinc-900 dark:text-white mt-0.5">Public Publication</span>
                    <p className="text-xxs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                      Finalized financial statements will be made public and downloadable here.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
