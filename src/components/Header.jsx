import Link from "next/link";
import { getSession } from "@/lib/auth";
import { Heart, Menu, User, LogOut } from "lucide-react";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-transform group-hover:scale-105">
            <Heart className="h-5 w-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            PHH<span className="text-blue-600 dark:text-blue-400">Foundation</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-300 dark:hover:text-blue-400"
          >
            About Us
          </Link>
          <Link
            href="/programs"
            className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-300 dark:hover:text-blue-400"
          >
            Programs
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-300 dark:hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            href="/impact"
            className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-300 dark:hover:text-blue-400"
          >
            Our Impact
          </Link>
          <Link
            href="/get-involved"
            className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-300 dark:hover:text-blue-400"
          >
            Get Involved
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-300 dark:hover:text-blue-400"
          >
            FAQs
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-3">
              {session.role === "ADMIN" && (
                <Link
                  href="/admin"
                  className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 transition-all hover:bg-blue-100 dark:border-blue-900/55 dark:bg-blue-950/20 dark:text-blue-400"
                >
                  Admin Panel
                </Link>
              )}
              <span className="hidden text-xs text-zinc-500 sm:inline-block dark:text-zinc-400">
                Hi, {session.name.split(" ")[0]}
              </span>
              <Link
                href="/logout"
                title="Log Out"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-zinc-800 dark:hover:border-red-950 dark:hover:bg-red-950/30 dark:hover:text-red-400 transition-all"
              >
                <LogOut className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:hover:border-blue-950 dark:hover:bg-blue-950/30 dark:hover:text-blue-400 transition-all"
            >
              <User className="h-4 w-4" />
            </Link>
          )}

          <Link
            href="/donate"
            className="hidden sm:flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.98]"
          >
            Donate Now
          </Link>

          {/* Mobile Menu Button */}
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 md:hidden dark:border-zinc-800 dark:text-zinc-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
