import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/195jxKejnC/",
    hoverBg: "hover:bg-[#1877F2]",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: "Twitter",
    href: "https://x.com/hhfoundation_26",
    // hoverBg: "hover:bg-[#1DA1F2]",
    hoverBg: "hover:bg-black dark:hover:bg-zinc-800",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hhfoundation_26?igsh=MXZkOHk5eGhhaWtobQ==",
    hoverBg: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  /*
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    hoverBg: "hover:bg-[#0A66C2]",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    hoverBg: "hover:bg-[#FF0000]",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
      </svg>
    )
  },
  */
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@hhfoundation_26?_r=1&_t=ZS-9854Iyq70GW",
    hoverBg: "hover:bg-black dark:hover:bg-zinc-800",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.85.83 1.95 1.42 3.14 1.67v3.83c-1.84-.04-3.62-.75-5-2.01-.06 2.37-.03 4.75-.05 7.13-.02 2.45-.96 4.9-2.73 6.61-2.03 2.05-5.12 2.91-7.98 2.22-3.18-.7-5.74-3.46-6.19-6.68-.61-3.6 1.25-7.39 4.54-8.86 1.4-.64 2.98-.82 4.49-.52.01 1.27-.01 2.54.01 3.81-1.07-.37-2.29-.21-3.2.49-1.25.9-1.74 2.65-1.12 4.11.52 1.34 1.94 2.27 3.39 2.18 1.65-.05 3.06-1.34 3.23-2.99.08-3.08.03-6.16.05-9.24.03-1.02.01-2.05.02-3.07z" />
      </svg>
    )
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2348075889097",
    hoverBg: "hover:bg-[#25D366]",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.004 2C6.48 2 2.002 6.477 2.002 12c0 1.892.527 3.661 1.446 5.187L2 22l5.006-1.313c1.472.802 3.16 1.259 4.957 1.259 5.525 0 10.002-4.477 10.002-10S17.529 2 12.004 2zm5.273 14.853c-.22.614-1.272 1.134-1.774 1.185-.452.046-.86.208-2.885-.626-2.588-1.063-4.223-3.72-4.353-3.896-.13-.176-1.05-1.4-1.05-2.67 0-1.27.663-1.895.899-2.148.236-.253.513-.316.684-.316.17 0 .341.002.49.009.152.007.356-.058.558.441.208.512.71 1.742.772 1.868.062.126.104.272.02.44-.083.168-.125.272-.25.419-.125.146-.262.327-.375.439-.125.125-.255.26-.11.512.146.252.648 1.07 1.39 1.732.956.85 1.76 1.111 2.012 1.237.252.126.398.105.545-.063.147-.168.629-.734.796-.986.168-.252.336-.21.563-.126.227.084 1.44.679 1.692.805.252.126.42.189.482.294.062.105.062.608-.158 1.222z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-10 w-10 overflow-hidden shadow-sm dark:border-zinc-800">
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
            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-8 w-8 items-center justify-center rounded-xl bg-white text-zinc-600 border border-zinc-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:text-white hover:border-transparent ${social.hoverBg} dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800`}
                  title={social.name}
                  aria-label={`${social.name} Link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
              <li>
                <Link href="/blog" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Blog Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Resources & Policies
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
                <Link href="/partner" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-sm text-zinc-600 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400">
                  Financial Transparency
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
                  10 Prof. Daddy Hezekiah Avenue Inland-town Onitsha
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  08075889097
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  info@hephzibahhumanitarianf.org
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
