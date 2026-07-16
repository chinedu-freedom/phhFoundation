import Link from "next/link";
import Image from "next/image";
import { getSession } from "@/lib/auth";
import { User, LogOut } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-[2px] shadow-md shadow-blue-500/10 transition-transform group-hover:scale-105 border border-zinc-100 dark:border-zinc-800">
            <Image
              src="/logo.jpeg"
              alt="HH Foundation Logo"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            HH<span className="text-blue-600 dark:text-blue-400">Foundation</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <NavLinks />

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-xs text-zinc-500 sm:inline-block dark:text-zinc-400">
                Hi, {session.name.split(" ")[0]}
              </span>
              <div className="relative group">
                <Link
                  href="/logout"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-zinc-800 dark:hover:border-red-950 dark:hover:bg-red-950/30 dark:hover:text-red-400 transition-all"
                >
                  <LogOut className="h-4 w-4" />
                </Link>
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 bg-zinc-900 dark:bg-zinc-850 text-white dark:text-zinc-100 text-[11px] font-medium px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-zinc-800 dark:border-zinc-700 z-50">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-zinc-900 dark:bg-zinc-850 border-t border-l border-zinc-800 dark:border-zinc-700" />
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <Link
                href="/login"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:hover:border-blue-950 dark:hover:bg-blue-950/30 dark:hover:text-blue-400 transition-all"
              >
                <User className="h-4 w-4" />
              </Link>
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 bg-zinc-900 dark:bg-zinc-850 text-white dark:text-zinc-100 text-[11px] font-medium px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-zinc-800 dark:border-zinc-700 z-50">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-zinc-900 dark:bg-zinc-850 border-t border-l border-zinc-800 dark:border-zinc-700" />
                Sign in
              </div>
            </div>
          )}

          <Link
            href="/donate"
            className="hidden sm:flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.98]"
          >
            Donate Now
          </Link>

          {/* Mobile Menu Button & Drawer */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
