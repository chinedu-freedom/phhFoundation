"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setSuccess(true);
    }
  }, [state]);

  if (success) {
    return (
      <div className="rounded-3xl bg-white p-8 border border-zinc-150 shadow-xl shadow-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none text-center py-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
          <CheckCircle className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white font-poppins">Message Sent Successfully!</h3>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Thank you for reaching out. We have logged your request and our support desk will respond shortly.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="space-y-6 rounded-3xl bg-white p-8 border border-zinc-150 shadow-xl shadow-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none"
    >
      {state?.error && (
        <div className="rounded-xl bg-red-50 p-4 text-xs font-semibold text-red-700 dark:bg-red-950/20 dark:text-red-400 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{state.error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="E.g., Scholarship Inquiry, Partnerships"
          className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Type your message details here..."
          className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all disabled:opacity-50"
      >
        <Send className="h-4 w-4" /> {isPending ? "Sending Message..." : "Send Message"}
      </button>
    </form>
  );
}
