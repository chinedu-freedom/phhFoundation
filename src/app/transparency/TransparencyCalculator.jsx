"use client";

import { useState } from "react";
import { DollarSign, ShieldCheck, Heart, Award, ArrowRight } from "lucide-react";

export default function TransparencyCalculator() {
  const [donationAmount, setDonationAmount] = useState(10000);

  // Allocations percentages
  const allocations = [
    {
      label: "Education & Scholarships",
      percentage: 45,
      icon: "🎓",
      color: "bg-blue-600",
      textColor: "text-blue-600 dark:text-blue-400",
      desc: "Funding tuition, notebooks, school bags, and primary teaching staff."
    },
    {
      label: "Medical & Health Outreaches",
      percentage: 25,
      icon: "🩺",
      color: "bg-emerald-600",
      textColor: "text-emerald-600 dark:text-emerald-400",
      desc: "Supplying pharmaceutical drugs, clinical diagnostic kits, and medical personnel."
    },
    {
      label: "Youth & Human Empowerment",
      percentage: 15,
      icon: "💼",
      color: "bg-sky-500",
      textColor: "text-sky-500",
      desc: "Providing tools like sewing machines, computers, and micro-business startup grants."
    },
    {
      label: "Operations & Admin Compliance",
      percentage: 10,
      icon: "🏢",
      color: "bg-zinc-500",
      textColor: "text-zinc-500 dark:text-zinc-400",
      desc: "Ensuring regulatory compliance, website hosting, and secure transaction handling."
    },
    {
      label: "Disaster Relief & General Emergency",
      percentage: 5,
      icon: "🚨",
      color: "bg-amber-500",
      textColor: "text-amber-500",
      desc: "Quick emergency food response, shelter repair, and immediate survival kits."
    }
  ];

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleSliderChange = (e) => {
    setDonationAmount(Number(e.target.value));
  };

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
      {/* Slider Controls */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-3xl bg-white p-8 border border-zinc-200 shadow-xl shadow-zinc-150/10 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-blue-600" />
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Allocation Simulator
            </h3>
          </div>

          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
            Enter an amount below to see exactly how your donation is distributed to fund direct programs vs operations.
          </p>

          {/* Amount input */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Donation Amount (₦)
              </label>
              <div className="relative rounded-2xl shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500 text-sm font-bold">
                  ₦
                </div>
                <input
                  type="number"
                  min="1000"
                  max="1000000"
                  step="1000"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Math.max(0, Number(e.target.value)))}
                  className="block w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 py-3.5 pl-9 pr-4 text-sm text-zinc-900 font-bold focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                />
              </div>
            </div>

            {/* Slider */}
            <div className="pt-2">
              <input
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={donationAmount}
                onChange={handleSliderChange}
                className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-zinc-800"
              />
              <div className="flex justify-between text-xxs font-bold text-zinc-400 mt-2">
                <span>₦5k</span>
                <span>₦100k</span>
                <span>₦250k</span>
                <span>₦500k+</span>
              </div>
            </div>
          </div>

          {/* Direct Impact callout */}
          <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">90% Direct Program Ratio</h4>
              <p className="text-xxs text-zinc-400 dark:text-zinc-500 mt-0.5">
                Every NGN is directed immediately to the chosen outreach.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Allocation breakdown list */}
      <div className="lg:col-span-7 space-y-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">
          Where Your {formatCurrency(donationAmount || 0)} Goes:
        </h3>
        
        <div className="space-y-4 mt-6">
          {allocations.map((alloc, idx) => {
            const calculatedAmount = ((donationAmount || 0) * alloc.percentage) / 100;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-md shadow-zinc-100/10 dark:bg-zinc-900 dark:border-zinc-800/80 dark:shadow-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-blue-500/30"
              >
                <div className="flex items-start gap-3.5">
                  <span className="text-xl mt-0.5 bg-zinc-50 dark:bg-zinc-950 p-2.5 rounded-xl shrink-0">
                    {alloc.icon}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      {alloc.label}
                      <span className={`text-xxs font-bold px-2 py-0.5 rounded-full ${alloc.color}/10 ${alloc.textColor}`}>
                        {alloc.percentage}%
                      </span>
                    </h4>
                    <p className="text-xxs text-zinc-500 dark:text-zinc-400 mt-1 max-w-md leading-normal">
                      {alloc.desc}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-100 dark:border-zinc-850">
                  <span className={`text-sm font-extrabold ${alloc.textColor} font-poppins`}>
                    {formatCurrency(calculatedAmount)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
