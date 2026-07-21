"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent already exists in local storage
    const consent = localStorage.getItem("hh_cookie_consent");
    if (!consent) {
      // Small delay before showing banner for premium feel
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hh_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("hh_cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] rounded-3xl bg-slate-900 text-white border border-zinc-800 p-6 shadow-2xl shadow-black/40 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold tracking-tight font-poppins">Cookie Consent Policy</h4>
            <button
              onClick={() => setShowBanner(false)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            We use cookies to analyze web traffic, optimize payment integrations (Stripe, Paystack), and personalize outreach newsletter campaigns. Learn more in our{" "}
            <Link href="/privacy" className="text-blue-400 font-bold hover:underline">
              Privacy Policy
            </Link>.
          </p>

          <div className="mt-4 pt-2 flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="rounded-lg cursor-pointer bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleReject}
              className="rounded-lg cursor-pointer bg-zinc-800 px-4 py-2 text-xs font-bold text-zinc-300 hover:bg-zinc-700 transition-colors"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
