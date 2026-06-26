import { prisma } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { Award, CheckCircle, Quote, FileDown, PieChart, TrendingUp, Heart } from "lucide-react";

export const metadata = {
  title: "Our Impact & Transparency | PHH Foundation",
  description: "Read about the verifiable, life-changing impact metrics, financial audits, transparency ratings, and beneficiary testimonials from PHH Foundation.",
};

const STATS = [
  { label: "Lives Impacted", end: 10000, suffix: "+", desc: "Children, widows, and vulnerable family members supported." },
  { label: "Scholarships Awarded", end: 500, suffix: "+", desc: "Full-tuition covers for primary and university students." },
  { label: "Intervention Projects", end: 150, suffix: "+", desc: "Healthcare camps, classroom builds, and coding camps." },
  { label: "Active Partners", end: 50, suffix: "+", desc: "Local clinics, corporate bodies, and global donors." },
];

const DEFAULT_TESTIMONIALS = [
  {
    id: "t1",
    name: "Chinyere Okeke",
    role: "Scholarship Beneficiary",
    quote: "Thanks to the PHH Foundation scholarship, I am currently studying Computer Science at the university. My dream of becoming a software engineer is now a reality. My widowed mother didn't have to worry about tuition.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "t2",
    name: "Mark Harrison",
    role: "Global Partner Sponsor",
    quote: "Partnering with PHH Foundation has been an absolute honor. Their transparency, regular updates, and direct community impact set them apart. We look forward to sponsoring more healthcare drives next year.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
];

export default async function ImpactPage() {
  // Query testimonials from db
  let testimonials = [];
  try {
    testimonials = await prisma.testimonial.findMany({
      where: { status: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error loading testimonials on Impact page:", error);
  }

  if (testimonials.length === 0) {
    testimonials = DEFAULT_TESTIMONIALS;
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=80"
            alt="Children playing background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Our Impact</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-poppins">
            Delivering Measurable Change
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100">
            We believe in complete transparency and accountability. Explore our verified performance stats, financial allocations, and real beneficiary stories.
          </p>
        </div>
      </section>

      {/* 2. Statistics Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-zinc-150 bg-white p-8 text-center dark:bg-zinc-900 dark:border-zinc-800 hover:border-blue-600 transition-all shadow-lg shadow-zinc-200/30 dark:shadow-none hover:-translate-y-1"
              >
                <span className="block text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-poppins">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </span>
                <h3 className="mt-4 font-bold text-zinc-900 dark:text-white text-base font-poppins">{stat.label}</h3>
                <p className="mt-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Financial Transparency Breakdown */}
      <section className="py-20 bg-white dark:bg-zinc-950/30 border-t border-b border-zinc-150 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Visual Chart */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-slate-50 p-8 border border-zinc-150 dark:bg-zinc-900 dark:border-zinc-850">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-blue-600" /> Fund Allocations
                </h3>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  How every Naira we raise is utilized to support our core mission.
                </p>

                {/* Progress bars as chart segments */}
                <div className="mt-8 space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-zinc-850 dark:text-zinc-300">
                      <span>Field Programs & Outreaches</span>
                      <span>85%</span>
                    </div>
                    <div className="mt-2 h-2.5 w-full rounded-full bg-zinc-200 overflow-hidden dark:bg-zinc-800">
                      <div className="h-full rounded-full bg-blue-600" style={{ width: "85%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-zinc-850 dark:text-zinc-300">
                      <span>Administrative & Compliance</span>
                      <span>10%</span>
                    </div>
                    <div className="mt-2 h-2.5 w-full rounded-full bg-zinc-200 overflow-hidden dark:bg-zinc-800">
                      <div className="h-full rounded-full bg-zinc-500" style={{ width: "10%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-zinc-850 dark:text-zinc-300">
                      <span>Logistics & Fundraising</span>
                      <span>5%</span>
                    </div>
                    <div className="mt-2 h-2.5 w-full rounded-full bg-zinc-200 overflow-hidden dark:bg-zinc-800">
                      <div className="h-full rounded-full bg-sky-400" style={{ width: "5%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Accountability</span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-4xl">
                Our Commitment to Transparency
              </h2>
              <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
                At the PHH Foundation, we know that every donor places immense trust in our hands. That is why we maintain zero-tolerance policies on administrative waste. By prioritizing volunteer operations and negotiating direct bulk logistics with partner clinics, we ensure <strong>85% of all incoming donations</strong> go directly to scholarships, medical checkups, and relief materials.
              </p>
              <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
                We submit our finances to annual third-party audits, ensuring our balance sheets are verified and available to the general public.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all"
                >
                  <FileDown className="h-4 w-4" /> Download 2024 Audit Report (PDF)
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  <FileDown className="h-4 w-4" /> 2025 Impact Prospectus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Stories of Change</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              Voices of Hope & Support
            </h2>
            <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
              Direct statements from beneficiaries who have had their lives transformed, and partners who make it possible.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="relative rounded-3xl border border-zinc-150 bg-white p-8 dark:bg-zinc-900 dark:border-zinc-800 shadow-lg shadow-zinc-200/30 dark:shadow-none flex flex-col justify-between"
              >
                <div>
                  <Quote className="h-8 w-8 text-blue-600/20 dark:text-blue-400/10 mb-4" />
                  <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400 italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-850">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={test.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"}
                      alt={test.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-sm font-poppins">{test.name}</h4>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
