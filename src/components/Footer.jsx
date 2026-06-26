import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Heart className="h-4.5 w-4.5 fill-current" />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                PHH<span className="text-blue-600 dark:text-blue-400">Foundation</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Dedicated to transforming lives through impactful humanitarian aid, quality educational access, medical outreaches, and skill empowerment programs.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
              <span>© {new Date().getFullYear()} PHH Foundation.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-zinc-950 dark:text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Humanitarian Programs
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Active Projects
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Impact Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-zinc-950 dark:text-white uppercase">
              Get Involved
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/donate" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Donate to a Campaign
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-zinc-950 dark:text-white uppercase">
              Contact Info
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  PHH Innovation Center, Port Harcourt, Rivers State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  +234 815 805 1119
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  info@phhfoundation.org
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
