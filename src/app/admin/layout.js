import Link from "next/link";
import NextImage from "next/image";
import { 
  LayoutDashboard, 
  HeartHandshake, 
  HandHeart, 
  Users, 
  BookOpen, 
  CalendarDays, 
  ArrowLeft,
  User,
  Image
} from "lucide-react";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const session = await getSession();

  // Guard: if not admin, redirect. Note: middleware handles this as well, but extra protection is good.
  if (!session || session.role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin");
  }

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Campaigns", href: "/admin/campaigns", icon: HeartHandshake },
    { name: "Donations", href: "/admin/donations", icon: HandHeart },
    { name: "Volunteers", href: "/admin/volunteers", icon: Users },
    { name: "Blog Posts", href: "/admin/blog", icon: BookOpen },
    { name: "Events", href: "/admin/events", icon: CalendarDays },
    { name: "Gallery", href: "/admin/gallery", icon: Image },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-zinc-200 px-6 dark:border-zinc-800">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-7 w-7 overflow-hidden rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
              <NextImage
                src="/logo.png"
                alt="PHH Logo"
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
              PHH Admin
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-950 dark:hover:text-white transition-all"
              >
                <Icon className="h-5 w-5 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer actions */}
        <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
          <Link
            href="/"
            className="flex w-full items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-950 dark:hover:text-white transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Exit Dashboard
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="pl-64 flex flex-col flex-1 w-full">
        {/* Admin Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 backdrop-blur px-8 dark:border-zinc-800 dark:bg-zinc-900/80">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
            Control Panel
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-3.5 py-1.5 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <User className="h-4 w-4 text-blue-600" />
              <span>{session.name} ({session.email})</span>
            </div>
            <a
              href="/logout"
              className="text-xs font-bold text-red-600 hover:text-red-700 dark:text-red-400"
            >
              Sign Out
            </a>
          </div>
        </header>

        {/* Subpage Contents */}
        <main className="flex-1 p-8 w-full max-w-7xl">
          {children}
        </main>
      </div>
    </div>
  );
}
