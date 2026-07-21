import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default async function Header() {
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
