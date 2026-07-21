"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DonateFaq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How is my donation allocated and tracked?",
      a: "Direct public contributions fund field execution—medical supplies, orphan scholarships, and widow empowerment. Every donation is assigned a unique reference code, recorded in our database, and updates live campaign totals."
    },
    {
      q: "Is online payment safe and secure?",
      a: "Yes. All online payments are handled directly by Paystack using bank-level 256-bit SSL encryption and PCI-DSS compliance. We never process or store your raw credit/debit card numbers."
    },
    {
      q: "What payment methods are supported?",
      a: "Through our Paystack gateway, you can pay using Debit/Credit Cards (Mastercard, Visa, Verve), Bank Transfers, USSD codes, or Mobile Wallets."
    },
    {
      q: "Will I receive an official receipt?",
      a: "Yes. Immediately upon successful transaction confirmation, an automated email receipt containing your donation reference, amount, and designated campaign is dispatched to your email address."
    },
    {
      q: "Can I donate anonymously?",
      a: "Yes. Simply toggle the 'Donate Anonymously' option in the form. Your personal identity will not be publicly displayed or linked to the donation record."
    },
    {
      q: "Can international supporters donate?",
      a: "Yes. International debit and credit cards (USD, GBP, EUR, CAD) are accepted by Paystack and automatically converted to NGN at current official exchange rates."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200/80 bg-slate-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenFaq(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
            >
              <span className="text-sm font-bold text-zinc-900 dark:text-white font-poppins">
                {faq.q}
              </span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-blue-600 shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-zinc-400 shrink-0" />
              )}
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 animate-fadeIn">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
