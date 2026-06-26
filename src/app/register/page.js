"use client";

import { useActionState, useEffect } from "react";
import { registerAction } from "@/app/actions/auth";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(registerAction, null);

  useEffect(() => {
    if (state?.success) {
      router.push("/");
      router.refresh();
    }
  }, [state, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-12 dark:bg-zinc-950">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-white p-8 shadow-xl shadow-zinc-200/50 dark:bg-zinc-900 dark:shadow-none">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
            <Heart className="h-6 w-6 fill-current" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Sign up to track your donations and apply for volunteering
          </p>
        </div>

        {/* Form */}
        <form action={formAction} className="mt-8 space-y-6">
          {state?.error && (
            <div className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700 dark:bg-red-950/20 dark:text-red-400">
              {state.error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-teal-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-teal-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-teal-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Creating account..." : "Sign up"}
          </button>
        </form>

        {/* Footer info */}
        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400"
          >
            Sign in instead
          </Link>
        </p>
      </div>
    </div>
  );
}
