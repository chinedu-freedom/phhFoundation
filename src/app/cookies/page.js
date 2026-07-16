export const metadata = {
  title: "Cookie Policy | HH Foundation",
  description: "Read about how the HH Foundation platform utilizes cookies, session trackers, and analytics tools to support donations and newsletter updates.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-5xl">
            Cookie Policy
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <span>HEPHZIBAH Humanitarian Foundation</span>
            <span>•</span>
            <span>Last Updated: July 16, 2026</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-sm space-y-10 text-sm leading-8 text-zinc-700 dark:text-zinc-300">
          
          <section className="space-y-4 pb-10 border-b border-zinc-100 dark:border-zinc-800/60">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">
              1. What Are Cookies?
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 leading-7 text-xs sm:text-sm mt-3">
              Cookies are small text files stored on your browser or device when you visit websites. They help websites remember details about your visit, session status, preferences, and custom selections to streamline your navigation flow.
            </p>
          </section>

          <section className="space-y-4 pb-10 border-b border-zinc-100 dark:border-zinc-800/60">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">
              2. How We Use Cookies
            </h2>
            <div className="text-zinc-650 dark:text-zinc-400 leading-7 text-xs sm:text-sm mt-3 space-y-3">
              <p>
                On the HH Foundation website, we utilize cookies for the following operational needs:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 font-medium text-zinc-750 dark:text-zinc-400">
                <li><strong>Session Cookies:</strong> Keeping you logged into your secure Admin Dashboard.</li>
                <li><strong>Preference Cookies:</strong> Remembering your Dark/Light mode selection and currency choices.</li>
                <li><strong>Transaction Integrity:</strong> Protecting payment gateways (Stripe, Paystack, Flutterwave) from CSRF vulnerabilities during donation checkouts.</li>
                <li><strong>Performance Tracking:</strong> Analyzing site traffic volumes and page loading speeds.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4 last:pb-0 last:border-0">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">
              3. Managing Cookie Settings
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 leading-7 text-xs sm:text-sm mt-3">
              Most modern web browsers allow you to block or delete cookies through browser settings. However, please note that blocking all cookies might make certain parts of this website (specifically donation checkouts and admin dashboard login sessions) inaccessible or prone to validation errors.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
