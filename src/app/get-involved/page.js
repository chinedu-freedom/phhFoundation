"use client";

import { useActionState, useEffect, useState } from "react";
import { createVolunteerApplicationAction } from "@/app/actions/volunteer";
import { Heart, Users, HandHeart, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedPage() {
  const [state, formAction, isPending] = useActionState(createVolunteerApplicationAction, null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setSuccess(true);
    }
  }, [state]);

  if (success) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Application Received!
        </h1>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
          Thank you for applying to be a volunteer at HH Foundation. We have sent a confirmation email to the address provided. Our admin team will review your application soon.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
          >
            Back to Home
          </Link>
          <Link
            href="/donate"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Support Campaigns
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Join the Movement
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Become a Volunteer
        </h1>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
          Lend your voice, skills, and time to help us empower marginalized communities. Fill in the details below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Why Volunteer (Left) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-3xl bg-blue-50/50 p-8 border border-blue-100 dark:bg-blue-950/10 dark:border-blue-900/30">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-400">Why Volunteer With Us?</h3>
            <ul className="mt-6 space-y-4 text-sm text-blue-950 dark:text-blue-300">
              <li className="flex gap-3">
                <Heart className="h-5 w-5 text-blue-600 shrink-0" />
                <span>Make a direct, life-changing impact on local families and orphans.</span>
              </li>
              <li className="flex gap-3">
                <Users className="h-5 w-5 text-blue-600 shrink-0" />
                <span>Join a passionate network of educators, doctors, and community builders.</span>
              </li>
              <li className="flex gap-3">
                <HandHeart className="h-5 w-5 text-blue-600 shrink-0" />
                <span>Gain valuable project coordination, leadership, and field experience.</span>
              </li>
            </ul>
          </div>

          <div className="p-6">
            <h4 className="font-bold text-zinc-900 dark:text-white">Need immediate support?</h4>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              If you have any questions about volunteer roles or locations, write to us at{" "}
              <a href="mailto:hephzibahhumanitarianf@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold">
                hephzibahhumanitarianf@gmail.com
              </a>.
            </p>
          </div>
        </div>

        {/* Application Form (Right) */}
        <form action={formAction} className="lg:col-span-7 space-y-6 rounded-3xl bg-white p-8 border border-zinc-100 shadow-xl shadow-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none">
          {state?.error && (
            <div className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700 dark:bg-red-950/20 dark:text-red-400">
              {state.error}
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
                className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                placeholder="John Doe"
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
                className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                placeholder="+234 800 000 0000"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Current Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                placeholder="Lagos, Nigeria"
              />
            </div>
          </div>

          <div>
            <label htmlFor="skills" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
              Skills / Field of Specialization
            </label>
            <input
              id="skills"
              name="skills"
              type="text"
              required
              className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              placeholder="E.g., Pediatric Doctor, Primary Teacher, Graphic Designer"
            />
          </div>

          <div>
            <label htmlFor="availability" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              required
              className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
            >
              <option value="Weekends Only">Weekends Only</option>
              <option value="Weekdays Only">Weekdays Only</option>
              <option value="Full-Time Availability">Full-Time Availability</option>
              <option value="Flexible / On Call">Flexible / On Call</option>
            </select>
          </div>

          <div>
            <label htmlFor="motivation" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
              Motivation Letter (Optional)
            </label>
            <textarea
              id="motivation"
              name="motivation"
              rows="4"
              className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              placeholder="Tell us briefly why you wish to volunteer with the HH Foundation..."
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {isPending ? "Submitting Application..." : "Submit Volunteer Application"}
          </button>
        </form>
      </div>
    </div>
  );
}

