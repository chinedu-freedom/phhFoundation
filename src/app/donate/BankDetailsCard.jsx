"use client";

import { useState } from "react";
import { Landmark, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function BankDetailsCard() {
  const [copiedAccount, setCopiedAccount] = useState(false);

  const bankDetails = {
    bankName: "First Bank of Nigeria",
    accountName: "Hephzibah Humanitarian Foundation",
    accountNumber: "2034981120",
    sortCode: "011152303"
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    toast.success("Account number copied to clipboard!");
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  return (
    <div className="rounded-3xl bg-white p-8 border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50">
          <Landmark className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white font-poppins">
            Direct Bank Wire Transfer
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            For local and international bank transfers
          </p>
        </div>
      </div>

      <div className="space-y-3 rounded-2xl bg-slate-50 p-5 dark:bg-zinc-950/60 border border-slate-100 dark:border-zinc-800 text-xs">
        <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 dark:border-zinc-800">
          <span className="text-zinc-500 font-medium">Bank Name</span>
          <strong className="text-zinc-900 dark:text-white font-semibold">{bankDetails.bankName}</strong>
        </div>

        <div className="flex justify-between items-center pb-2 border-b border-slate-200/60 dark:border-zinc-800">
          <span className="text-zinc-500 font-medium">Account Name</span>
          <strong className="text-zinc-900 dark:text-white font-semibold text-right">{bankDetails.accountName}</strong>
        </div>

        <div className="flex justify-between items-center pt-1">
          <div>
            <span className="block text-zinc-500 font-medium">Account Number</span>
            <strong className="text-sm font-extrabold text-blue-600 dark:text-blue-400 font-mono tracking-wider">
              {bankDetails.accountNumber}
            </strong>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(bankDetails.accountNumber)}
            className="flex items-center gap-1.5 rounded-xl bg-blue-600/10 px-3 py-2 text-xxs font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all dark:bg-blue-950/50 dark:text-blue-400 cursor-pointer"
          >
            {copiedAccount ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Account</span>
              </>
            )}
          </button>
        </div>
      </div>

      <p className="text-xxs text-zinc-400 leading-relaxed italic">
        * Please include your full name or email address as the payment reference so our accounting team can verify and dispatch your official receipt.
      </p>
    </div>
  );
}
