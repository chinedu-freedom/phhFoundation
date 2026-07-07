import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import CountUp from "@/components/CountUp";
import EventsCarousel from "@/components/EventsCarousel";
import { 
  Heart, 
  GraduationCap, 
  Stethoscope, 
  Utensils, 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Award,
  Target,
  ArrowUpRight
} from "lucide-react";

export default async function Home() {
  // Fetch active campaigns, blog posts, upcoming events, and testimonials from the database
  let campaigns = [];
  let blogPosts = [];
  let upcomingEvents = [];
  let testimonials = [];

  try {
    const [fetchedCampaigns, fetchedBlogPosts, fetchedUpcomingEvents, fetchedTestimonials] = await Promise.all([
      prisma.campaign.findMany({
        where: { status: "ACTIVE" },
        take: 3,
      }),
      prisma.blogPost.findMany({
        where: { status: "PUBLISHED" },
        take: 3,
        orderBy: { createdAt: "desc" },
      }),
      prisma.event.findMany({
        where: { status: "UPCOMING" },
        take: 3,
        orderBy: { date: "asc" },
      }),
      prisma.testimonial.findMany({
        where: { status: true },
        take: 2,
      }),
    ]);
    campaigns = fetchedCampaigns;
    blogPosts = fetchedBlogPosts;
    upcomingEvents = fetchedUpcomingEvents;
    testimonials = fetchedTestimonials;
  } catch (error) {
    console.error("Database fetch failed in home page SSR:", error);
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 40%, #38BDF8 100%)" }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=80"
            alt="Children smiling"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/70 to-transparent z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-sky-200 ring-1 ring-inset ring-white/20">
              <Heart className="h-4 w-4 fill-current text-sky-300" /> Together we can do more
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Together We Can <span className="text-sky-300">Transform Lives</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-xl">
              Join the HH Foundation in our commitment to provide educational scholarships, medical outreach, women empowerment, and disaster relief to marginalized communities.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-[0.98]"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="rounded-xl border border-white/25 bg-white/10 backdrop-blur px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-white/25"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact Statistics */}
      <section className="relative z-20 -mt-10 mx-auto max-w-7xl px-6 sm:px-8 w-full">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-8 shadow-xl shadow-zinc-200/50 sm:grid-cols-5 dark:bg-zinc-900 dark:shadow-none border border-slate-200 dark:border-zinc-800">
          <div className="flex flex-col items-center justify-center p-4 text-center border-r border-slate-100 last:border-0 dark:border-zinc-800">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              <CountUp end={10} suffix="k+" />
            </span>
            <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-zinc-400">Lives Impacted</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center border-r border-slate-100 last:border-0 dark:border-zinc-800">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              <CountUp end={500} suffix="+" />
            </span>
            <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-zinc-400">Scholarships</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center border-r border-slate-100 last:border-0 dark:border-zinc-800">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              <CountUp end={150} suffix="+" />
            </span>
            <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-zinc-400">Projects Done</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center border-r border-slate-100 last:border-0 dark:border-zinc-800">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              <CountUp end={50} suffix="+" />
            </span>
            <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-zinc-400">Partners</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center sm:col-span-1 col-span-2">
            <span className="text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
              <CountUp end={120} prefix="₦" suffix="M+" />
            </span>
            <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-zinc-400">Funds Raised</span>
          </div>
        </div>
      </section>

      {/* 3. Introduction Section (Mission & Vision) */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Who We Are</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Providing Hope, Support and Empowerment to the Vulnerable
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-zinc-400">
              HH Foundation is a non-governmental organization committed to helping families, widows, orphans, and students from impoverished backgrounds. We develop actionable programs in education, medical services, and career development to bring long-term sustainable growth to local communities.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Our Mission</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">To inspire hope, foster education, and alleviate poverty through impactful aid and skill acquisitions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Our Vision</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">A society where every individual has access to quality education, healthcare, and economic stability.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 dark:shadow-none">
            <Image
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=80"
              alt="Community group gathering"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Featured Programs */}
      <section className="bg-slate-100/60 py-24 sm:py-32 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">What We Do</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Our Core Outreach Programs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-zinc-400">
              We focus on specific, result-oriented initiatives that address direct needs in communities.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Program 1 */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Education & Scholarships</h3>
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-zinc-400 flex-1">
                Sponsoring underrepresented children through primary, secondary, and tertiary educational paths.
              </p>
              <Link href="/programs" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Program 2 */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Medical Outreach</h3>
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-zinc-400 flex-1">
                Delivering free healthcare screenings, treatments, and distribution of medicines directly to villages.
              </p>
              <Link href="/programs" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Program 3 */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Women Empowerment</h3>
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-zinc-400 flex-1">
                Providing business training, skills workshops, and startup micro-capital to widows and single mothers.
              </p>
              <Link href="/programs" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Program 4 */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Food Support</h3>
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-zinc-400 flex-1">
                Distributing food bundles to families experiencing malnutrition and severe financial distress.
              </p>
              <Link href="/programs" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Active Campaigns with Donation Progress */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Donate & Support</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Active Urgent Campaigns
            </h2>
          </div>
          <Link href="/donate" className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 transition-all shadow-sm">
            View All Campaigns <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => {
            const percentage = Math.min(Math.round((c.raisedAmount / c.targetAmount) * 100), 100);
            return (
              <div key={c.id} className="flex flex-col rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all hover:shadow-md hover:scale-[1.01]">
                <div className="relative aspect-16/10">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Campaign
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                    {c.description}
                  </p>

                  <div className="mt-8 flex-1 flex flex-col justify-end">
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-2 dark:bg-zinc-800">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="mt-4 flex justify-between text-xs font-semibold">
                      <div className="flex flex-col">
                        <span className="text-slate-400">Raised</span>
                        <span className="text-slate-900 dark:text-white">₦{c.raisedAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-slate-400">Goal</span>
                        <span className="text-slate-900 dark:text-white">₦{c.targetAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    <Link
                      href={`/donate?campaignId=${c.id}`}
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all"
                    >
                      Support Campaign
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-blue-900 py-24 sm:py-32 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Testimonials</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Stories of Impact & Hope
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.map((t) => (
                <div key={t.id} className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 backdrop-blur border border-white/10">
                  <p className="text-base italic leading-7 text-blue-50">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    {t.image && (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border border-blue-500">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-xs text-blue-300 font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Upcoming Events */}
      <section className="mx-auto max-w-[78rem] px-6 py-24 sm:px-8 sm:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Join Us</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Upcoming Events
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Be part of our mission. Join us in our upcoming community drives, outreaches, and charity events.
          </p>
        </div>
        <EventsCarousel events={upcomingEvents} />
      </section>

      {/* 7.5. Latest News / Blog */}
      <section className="bg-slate-100/50 dark:bg-zinc-950/40 border-t border-b border-slate-200/60 dark:border-zinc-800/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">From the Blog</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Latest Articles
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 px-5 py-3 text-sm font-bold text-slate-800 dark:text-white transition-all shadow-sm active:scale-[0.98]"
            >
              View All Articles <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p) => (
              <div key={p.id} className="flex flex-col rounded-3xl bg-white border border-slate-100 overflow-hidden dark:bg-zinc-900 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-bold text-lg text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <Link href={`/blog/${p.slug}`} className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700">
                    Read post <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partners Logos */}
      <section className="border-t border-slate-200 py-16 dark:border-zinc-800 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Our Trusted Partners & Supporters</span>
        </div>
        <div className="relative w-full flex overflow-x-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap gap-16 py-4 items-center shrink-0">
            {/* Set 1 */}
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">GLOBAL ACCORD</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">RED CROSS PARTNERS</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">AID ALLIANCE</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">COMMUNITY CARE</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">UN RESCUE MISSION</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">HOPE WORLDWIDE</span>
            
            {/* Set 2 (Identical for seamless looping) */}
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">GLOBAL ACCORD</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">RED CROSS PARTNERS</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">AID ALLIANCE</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">COMMUNITY CARE</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">UN RESCUE MISSION</span>
            <span className="text-xl font-extrabold text-slate-400 tracking-wider dark:text-zinc-600">HOPE WORLDWIDE</span>
          </div>
        </div>
      </section>

      {/* 9. Newsletter Signup Section */}
      <section className="bg-slate-900 py-16 text-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-2 text-sm text-blue-200">
              Get updates about our active campaigns, upcoming community bootcamps, and impact reports.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
