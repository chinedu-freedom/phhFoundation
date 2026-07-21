"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, ArrowRight } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

export default function HeroDonateWidget({ campaigns = [] }) {
  const router = useRouter();
  const [campaignId, setCampaignId] = useState("");
  const [amountType, setAmountType] = useState("preset"); // 'preset' or 'custom'
  const [presetAmount, setPresetAmount] = useState(10000);
  const [customAmount, setCustomAmount] = useState("");

  const presets = [5000, 10000, 20000, 50000];

  const getFinalAmount = () => {
    return amountType === "preset" ? presetAmount : parseFloat(customAmount) || 0;
  };

  const handleProceed = (e) => {
    e.preventDefault();
    const finalAmount = getFinalAmount();
    if (finalAmount <= 0) return;

    // Direct routing to /donate with prefilled query parameters
    router.push(
      `/donate?amount=${finalAmount}&campaignId=${campaignId}`
    );
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white/95 p-6 shadow-2xl shadow-blue-950/20 border border-white/20 dark:bg-zinc-900/95 dark:border-zinc-800 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-150 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
          <Heart className="h-4.5 w-4.5 fill-current text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
            Quick Donation
          </h3>
        </div>
      </div>

      <form onSubmit={handleProceed} className="space-y-5">
        {/* Preset Amounts Grid */}
        <div>
          <div className="grid grid-cols-2 gap-3">
            {presets.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setAmountType("preset");
                  setPresetAmount(amount);
                }}
                className={`rounded-xl py-3 text-center text-xs font-bold transition-all border cursor-pointer ${
                  amountType === "preset" && presetAmount === amount
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10"
                    : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-800"
                }`}
              >
                ₦{amount.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAmountType("custom")}
              className={`rounded-xl border px-3 py-3 text-xs font-bold transition-all cursor-pointer ${
                amountType === "custom"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-800"
              }`}
            >
              Custom
            </button>
            {amountType === "custom" && (
              <div className="relative flex-1 rounded-xl shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 text-xs">
                  ₦
                </div>
                <input
                  type="number"
                  required
                  min="500"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Amount (Min ₦500)"
                  className="block w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-7 pr-3 text-xs text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                />
              </div>
            )}
          </div>
        </div>

        {/* Campaign Selection */}
        <div>
          <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            Select Campaign
          </label>
          <CustomSelect
            value={campaignId}
            onChange={setCampaignId}
            options={[
              { value: "", label: "General Operations Fund" },
              ...campaigns.map((c) => ({ value: c.id, label: c.title }))
            ]}
            className="w-full"
            icon={<Heart className="h-4 w-4" />}
          />
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all active:scale-[0.98] cursor-pointer"
        >
          Donate ₦{getFinalAmount().toLocaleString()} Now <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
