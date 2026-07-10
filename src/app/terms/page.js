import Link from "next/link";
import { FileCheck, Landmark, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Terms of Service | HH Foundation",
  description: "Read the governing terms and conditions regarding donations, platform usage, and volunteer agreements with the HH Foundation.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 mb-4">
            <FileCheck className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-zinc-400 font-semibold uppercase tracking-wider flex items-center justify-center gap-1">
            <RefreshCw className="h-3 w-3" /> Last Updated: June 26, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-8 text-sm leading-8 text-zinc-700 dark:text-zinc-300">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">1</span>
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or submit donations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">2</span>
              Donations & Refund Policy
            </h2>
            <p>
              All donations made through our secure payment gateway simulation are contributions towards the humanitarian and educational operations of the HH Foundation. Because these funds are immediately allocated to active community projects, medical outreach supplies, or student tuitions, **all donations are non-refundable**.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">3</span>
              Volunteer Commitment
            </h2>
            <p>
              Applying as a volunteer does not guarantee selection or automated role assignment. Volunteers are expected to uphold the safeguarding policy and code of ethics detailed in our documentation library during all campaigns.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">4</span>
              Limitation of Liability
            </h2>
            <p>
              HH Foundation will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, including transaction interruptions or unauthorized account activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">5</span>
              Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with corporate regulations and guidelines for non-governmental associations.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

