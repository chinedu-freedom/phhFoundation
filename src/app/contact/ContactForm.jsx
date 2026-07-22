"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Controlled form inputs state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("organisation", organisation);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const res = await submitContactForm(null, formData);
      if (res?.success) {
        toast.success("Message sent successfully!");
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setOrganisation("");
        setSubject("");
        setMessage("");
      } else if (res?.error) {
        setError(res.error);
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-3xl bg-white p-8 border border-slate-100/70 shadow-[0_15px_50px_rgba(0,0,0,0.025)] dark:bg-zinc-900 dark:border-zinc-800 text-center py-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
          <CheckCircle className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white font-poppins">Message Sent Successfully!</h3>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Thank you for reaching out. We have logged your request and our support desk will respond shortly.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-xl border border-zinc-200/50 bg-white px-5 py-2.5 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl bg-white p-8 border border-slate-100/70 shadow-[0_15px_50px_rgba(0,0,0,0.025)] dark:bg-zinc-900 dark:border-zinc-800"
    >
      {error && (
        <div className="rounded-xl bg-red-50 p-4 text-xs font-semibold text-red-700 dark:bg-red-950/20 dark:text-red-400 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="mt-2 block w-full rounded-xl border border-zinc-200/50 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="mt-2 block w-full rounded-xl border border-zinc-200/50 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+234..."
            className="mt-2 block w-full rounded-xl border border-zinc-200/50 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
          />
        </div>
        <div>
          <label htmlFor="organisation" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Your Organisation <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            placeholder="NGO, School or Company Name"
            className="mt-2 block w-full rounded-xl border border-zinc-200/50 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
          Subject <span className="text-zinc-400 font-normal">(Optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="E.g., Scholarship Inquiry, Partnerships"
          className="mt-2 block w-full rounded-xl border border-zinc-200/50 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message details here..."
          className="mt-2 block w-full rounded-xl border border-zinc-200/50 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        <Send className="h-4 w-4" /> {isPending ? "Sending Message..." : "Send Message"}
      </button>
    </form>
  );
}
