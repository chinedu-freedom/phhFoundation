"use client";

import { useState } from "react";
import { subscribeNewsletterAction } from "@/app/actions/newsletter";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isPending) return;

    setIsPending(true);
    const formData = new FormData();
    formData.append("email", email);

    try {
      const res = await subscribeNewsletterAction(null, formData);
      if (res?.success) {
        toast.success(res.message || "Subscribed successfully!");
        setEmail(""); // Clear the input field on success
      } else if (res?.error) {
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Failed to subscribe. Please check your network connection.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isPending}
        placeholder="Enter your email"
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-55"
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-xl cursor-pointer bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 min-w-[110px] disabled:bg-blue-600/70"
      >
        {isPending ? (
            "Subscribing...."
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
}
