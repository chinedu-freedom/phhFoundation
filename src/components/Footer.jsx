import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/logo.jpeg"
                  alt="HH Foundation Logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                HH<span className="text-blue-600 dark:text-blue-400">Foundation</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Dedicated to transforming lives through impactful humanitarian aid, quality educational access, medical outreaches, and skill empowerment programs.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
              <span>© {new Date().getFullYear()} HH Foundation. All rights reserved.</span>
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
                <Link href="/events" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Outreach Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Media Gallery
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
                <Link href="/resources" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Reports & Resources
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
                  HH Innovation Center, Port Harcourt, Rivers State, Nigeria
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
                  hephzibahhumanitarianf@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub Footer Bar (Legal Links) */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
          <span className="text-xs text-zinc-400">
            Designed to build trust, transparency and hope.
          </span>
        </div>
      </div>
    </footer>
  );
}
