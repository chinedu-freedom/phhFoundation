import { Landmark, Cookie, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | PHH Foundation",
  description: "Read about how the PHH Foundation platform utilizes cookies, session trackers, and analytics tools to support donations and newsletter updates.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-105 text-blue-650 dark:bg-blue-950/50 dark:text-blue-400 mb-4">
            <Cookie className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins">
            Cookie Policy
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
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your browser or device when you visit websites. They help websites remember details about your visit, session status, preferences, and custom selections to streamline your navigation flow.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">2</span>
              How We Use Cookies
            </h2>
            <p>
              On the PHH Foundation website, we utilize cookies for the following operational needs:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-semibold text-zinc-650 dark:text-zinc-400">
              <li><strong>Session Cookies:</strong> Keeping you logged into your secure Admin Dashboard.</li>
              <li><strong>Preference Cookies:</strong> Remembering your Dark/Light mode selection and currency choices.</li>
              <li><strong>Transaction Integrity:</strong> Protecting payment gateways (Stripe, Paystack, Flutterwave) from CSRF vulnerabilities during donation checkouts.</li>
              <li><strong>Performance Tracking:</strong> Analyzing site traffic volumes and page loading speeds.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">3</span>
              Managing Cookie Settings
            </h2>
            <p>
              Most modern web browsers allow you to block or delete cookies through browser settings. However, please note that blocking all cookies might make certain parts of this website (specifically donation checkouts and admin dashboard login sessions) inaccessible or prone to validation errors.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
