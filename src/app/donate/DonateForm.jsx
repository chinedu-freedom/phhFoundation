"use client";

import { useState, useEffect } from "react";
import { createDonationAction, confirmDonationAction } from "@/app/actions/donation";
import { Heart, Landmark, CreditCard, DollarSign, Wallet, ShieldCheck, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import CustomSelect from "@/components/CustomSelect";

export default function DonateForm({ 
  campaigns = [], 
  initialCampaignId = "", 
  initialAmount = "",
  paymentRef = "",
  isPaystackPayment = false
}) {
  const presets = [5000, 10000, 20000, 50000];

  const parsedInitialAmount = parseFloat(initialAmount) || 0;
  const isPreset = presets.includes(parsedInitialAmount);

  const [campaignId, setCampaignId] = useState(initialCampaignId);
  const [amountType, setAmountType] = useState(
    parsedInitialAmount > 0 ? (isPreset ? "preset" : "custom") : "preset"
  );
  const [presetAmount, setPresetAmount] = useState(
    parsedInitialAmount > 0 && isPreset ? parsedInitialAmount : 10000
  );
  const [customAmount, setCustomAmount] = useState(
    parsedInitialAmount > 0 && !isPreset ? parsedInitialAmount.toString() : ""
  );
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("PAYSTACK");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successDonation, setSuccessDonation] = useState(null);
  
  // Payment Simulation Modal state
  const [simulationRef, setSimulationRef] = useState(null);
  const [simulationAmount, setSimulationAmount] = useState(0);

  // Auto-verify Paystack transactions on callback redirect
  useEffect(() => {
    if (paymentRef && isPaystackPayment) {
      const verifyPaystackTrx = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await confirmDonationAction(paymentRef);
          if (res.error) {
            setError(res.error);
            toast.error(res.error);
          } else {
            toast.success("Payment verified! Thank you for your support.");
            setSuccessDonation({
              reference: paymentRef,
              amount: res.donation.amount,
              donorName: res.donation.donorName || "Anonymous Donor",
              donorEmail: res.donation.donorEmail,
              paymentMethod: res.donation.paymentMethod,
            });
            // Clean browser URL reference to prevent duplicate verification on reload
            if (typeof window !== "undefined") {
              window.history.replaceState({}, document.title, window.location.pathname);
            }
          }
        } catch (err) {
          console.error("Auto verification error:", err);
          setError("Failed to verify Paystack transaction.");
          toast.error("Failed to verify Paystack transaction.");
        } finally {
          setLoading(false);
        }
      };
      verifyPaystackTrx();
    }
  }, [paymentRef, isPaystackPayment]);

  const getFinalAmount = () => {
    return amountType === "preset" ? presetAmount : parseFloat(customAmount) || 0;
  };

  const handleInitialize = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const finalAmount = getFinalAmount();
    if (finalAmount <= 0) {
      const errMessage = "Please enter or select a valid donation amount.";
      setError(errMessage);
      toast.error(errMessage);
      setLoading(false);
      return;
    }

    if (!isAnonymous && (!donorName || !donorEmail)) {
      const errMessage = "Please provide your name and email address.";
      setError(errMessage);
      toast.error(errMessage);
      setLoading(false);
      return;
    }

    // Build form data to submit
    const formData = new FormData();
    formData.append("amount", finalAmount.toString());
    formData.append("donorName", donorName);
    formData.append("donorEmail", donorEmail);
    formData.append("isAnonymous", isAnonymous.toString());
    formData.append("campaignId", campaignId);
    formData.append("paymentMethod", paymentMethod);

    try {
      const res = await createDonationAction(null, formData);
      if (res.error) {
        setError(res.error);
        toast.error(res.error);
      } else if (res.checkoutUrl) {
        toast.success("Redirecting to Paystack payment gateway...");
        window.location.href = res.checkoutUrl;
      } else {
        setSimulationRef(res.reference);
        setSimulationAmount(finalAmount);
        toast.success("Donation initialized! Please complete payment simulation.");
      }
    } catch (err) {
      const errMessage = "An unexpected error occurred. Please try again.";
      setError(errMessage);
      toast.error(errMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSimulateSuccess = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await confirmDonationAction(simulationRef);
      if (res.error) {
        setError(res.error);
        toast.error(res.error);
      } else {
        toast.success("Payment successful! Thank you for your support.");
        setSuccessDonation({
          reference: simulationRef,
          amount: simulationAmount,
          donorName: isAnonymous ? "Anonymous Donor" : donorName,
          donorEmail: isAnonymous ? null : donorEmail,
          paymentMethod,
        });
        setSimulationRef(null);
      }
    } catch (err) {
      const errMessage = "Error confirming simulated payment.";
      setError(errMessage);
      toast.error(errMessage);
    } finally {
      setLoading(false);
    }
  };

  if (successDonation) {
    return (
      <div className="rounded-3xl bg-blue-50/50 p-8 text-center border border-blue-100 dark:bg-blue-950/10 dark:border-blue-900/30">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">
          Thank You for Your Support!
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Your donation was processed successfully. A confirmation email and receipt have been sent to{" "}
          <strong className="text-zinc-900 dark:text-white">
            {successDonation.donorEmail || "your email"}
          </strong>.
        </p>

        {/* Receipt card */}
        <div className="mt-8 mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Receipt Summary</h3>
          <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex justify-between">
              <span>Amount:</span>
              <strong className="text-zinc-950 dark:text-white">₦{successDonation.amount.toLocaleString()}</strong>
            </div>
            <div className="flex justify-between">
              <span>Donor:</span>
              <span>{successDonation.donorName}</span>
            </div>
            <div className="flex justify-between">
              <span>Method:</span>
              <span>{successDonation.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span>Reference:</span>
              <span className="font-mono text-xs">{successDonation.reference}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setSuccessDonation(null);
            setAmountType("preset");
            setPresetAmount(10000);
            setCustomAmount("");
            setDonorName("");
            setDonorEmail("");
            setIsAnonymous(false);
          }}
          className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <form onSubmit={handleInitialize} className="space-y-8 rounded-3xl bg-white p-8 shadow-xl shadow-zinc-200/50 border border-zinc-100 dark:bg-zinc-900 dark:shadow-none dark:border-zinc-800">
        {error && (
          <div className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700 dark:bg-red-950/20 dark:text-red-400">
            {error}
          </div>
        )}

        {/* 1. Campaign Target Dropdown */}
        <div>
          <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
            Select Campaign (Optional)
          </label>
          <div className="mt-2">
            <CustomSelect
              value={campaignId}
              onChange={setCampaignId}
              options={[
                { value: "", label: "General Humanitarian Fund" },
                ...campaigns.map((c) => ({ value: c.id, label: c.title }))
              ]}
              className="w-full"
              icon={<Heart className="h-4 w-4" />}
            />
          </div>
        </div>

        {/* 2. Amount Section */}
        <div>
          <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
            Donation Amount (NGN)
          </label>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {presets.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setAmountType("preset");
                  setPresetAmount(amount);
                }}
                className={`rounded-xl py-3.5 text-center text-sm font-semibold transition-all border cursor-pointer ${
                  amountType === "preset" && presetAmount === amount
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-white dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-800"
                }`}
              >
                ₦{amount.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setAmountType("custom")}
              className={`rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all cursor-pointer ${
                amountType === "custom"
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-white dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-800"
              }`}
            >
              Custom Amount
            </button>
            {amountType === "custom" && (
              <div className="relative flex-1 rounded-xl shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                  ₦
                </div>
                <input
                  type="number"
                  required
                  min="500"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount (Min ₦500)"
                  className="block w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3.5 pl-8 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                />
              </div>
            )}
          </div>
        </div>

        {/* 3. Donor Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
              Donor Information
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              Donate Anonymously
            </label>
          </div>

          {!isAnonymous && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Full Name"
                  className="block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="Email Address"
                  className="block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : `Donate ₦${getFinalAmount().toLocaleString()}`}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span>Secured encryption by bank-level gateway protocols.</span>
        </div>
      </form>

      {/* Payment Gateway Simulation Modal overlay */}
      {simulationRef && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSimulationRef(null);
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <div className="w-full max-w-md rounded-3xl bg-white p-8 border border-zinc-100 shadow-2xl dark:bg-zinc-900 dark:border-zinc-800">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
                Simulated Payment Gateway
              </h3>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                Method: <strong className="text-zinc-700 dark:text-zinc-300">{paymentMethod}</strong> | Ref: {simulationRef}
              </p>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-950/50">
                <span className="text-sm font-semibold text-zinc-500">Transaction Total</span>
                <div className="mt-1 text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                  ₦{simulationAmount.toLocaleString()}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleSimulateSuccess}
                  disabled={loading}
                  className="rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                >
                  {loading ? "Confirming..." : "Simulate Successful Transfer"}
                </button>
                <button
                  type="button"
                  onClick={() => setSimulationRef(null)}
                  disabled={loading}
                  className="rounded-xl border border-zinc-200 py-3 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-950 transition-colors"
                >
                  Cancel Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
