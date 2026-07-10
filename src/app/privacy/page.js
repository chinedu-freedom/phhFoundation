import Link from "next/link";
import { Shield, Lock, Eye, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | HH Foundation",
  description: "Learn how the HH Foundation collects, uses, and secures your personal and transactional information in compliance with GDPR and NDPR guidelines.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins">
            Privacy Policy
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
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us when you make a donation, register to volunteer, subscribe to our newsletter, or submit queries via our contact form. This information includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-semibold text-zinc-650 dark:text-zinc-400">
              <li>Personal Identification details (Name, email address, phone number, location).</li>
              <li>Sponsorship choices and campaign-specific notes.</li>
              <li>Professional references, resumes, and availability logs (for volunteers).</li>
              <li>Anonymity indicators for transaction references.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">2</span>
              How We Use Your Data
            </h2>
            <p>
              We utilize collected information to maintain our database ledger, issue secure donation receipts, provide email confirmations, organize volunteer shifts, and distribute newsletters. 
              <strong> We never sell, rent, or trade your personal information to third-party advertising companies.</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">3</span>
              Security & Payment Protection
            </h2>
            <p>
              All online donations are processed securely through certified payment gateways (Paystack, Flutterwave, Stripe) that utilize secure sockets layer (SSL) encryption protocols. Your card numbers, codes, or credentials are never stored on our local database.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">4</span>
              Donor Anonymity
            </h2>
            <p>
              If you check the &apos;Donate Anonymously&apos; option during donation, your name, profile photo, and email details will be masked in all public-facing charts and recent activity ledgers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">5</span>
              GDPR & NDPR Compliance
            </h2>
            <p>
              Under global data protection standards, you have the right to request access to, edit, or request complete deletion of any personal information we hold. For data erasure queries, please email us directly at{" "}
              <a href="mailto:info@hephzibahhumanitarianf.org" className="text-blue-600 hover:underline dark:text-blue-400 font-bold">
                info@hephzibahhumanitarianf.org
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

