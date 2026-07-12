"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Our Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/partner", label: "Partner" },
  { href: "/faq", label: "FAQs" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              isActive
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-zinc-600 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
