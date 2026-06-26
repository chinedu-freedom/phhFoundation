import Image from "next/image";
import Link from "next/link";
import { BookOpen, Stethoscope, Briefcase, Apple, ShieldAlert, Heart, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Our Programs | PHH Foundation",
  description: "Explore the core humanitarian, educational, medical, and skill development programs of the PHH Foundation.",
};

const PROGRAMS = [
  {
    id: "education",
    title: "Education & Scholarships",
    description: "Sponsoring school fees, learning materials, and modern IT bootcamp bootcamps for orphans and children in rural communities.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    keyFocus: ["Tuition Coverages", "Textbooks & Uniforms", "Youth Coding Bootcamps", "School Renovation"],
  },
  {
    id: "healthcare",
    title: "Medical Outreaches",
    description: "Bringing clinical setups to rural centers to offer free medical consultations, maternal care, basic surgeries, and prescription drugs.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1584515901367-f1c27b744aae?w=800&auto=format&fit=crop&q=80",
    keyFocus: ["General Checkups", "Free Prescription Medicines", "Maternal Healthcare", "Vision Exams & Glasses"],
  },
  {
    id: "skills",
    title: "Skill Acquisition & Empowerment",
    description: "Training widows and young people in tailoring, catering, computer literacy, and soap-making, alongside start-up grants.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=80",
    keyFocus: ["Tailoring & Design", "Computer Literacy", "Catering & Baking", "Micro-grants & Equipment"],
  },
  {
    id: "food",
    title: "Food Support Program",
    description: "Distributing dry food relief packages containing rice, oil, beans, and nutritional items to low-income and elderly citizens.",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",
    keyFocus: ["Community Feeding Drives", "Elderly Welfare Packs", "Maternal Nutrition Packs", "Emergency Dry Food Packs"],
  },
  {
    id: "disaster",
    title: "Emergency & Disaster Relief",
    description: "Providing rapid logistics, shelter support, clothing, and primary survival materials to areas affected by floods or fire.",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=800&auto=format&fit=crop&q=80",
    keyFocus: ["Temporary Shelter Aid", "Displacement Kits", "Emergency Medication", "Sanitation Supplies"],
  },
  {
    id: "orphan",
    title: "Orphan Support & Welfare",
    description: "Providing funding, healthcare plans, and nutritional support to partner orphanage homes, ensuring orphans thrive.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",
    keyFocus: ["Orphanage Nutrition Plans", "Health Insurance Plans", "Clothing Drives", "Mental Well-being Support"],
  },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Page Header */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&auto=format&fit=crop&q=80"
            alt="Medical outreach clinic background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">What We Do</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-poppins">
            Humanitarian Programs
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100">
            A comprehensive overview of our core intervention sectors designed to build resilience and long-term self-sustenance.
          </p>
        </div>
      </section>

      {/* 2. Programs Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {PROGRAMS.map((program) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={program.id}
                  className="flex flex-col md:flex-row gap-6 rounded-3xl bg-white p-6 border border-zinc-150 shadow-xl shadow-zinc-200/40 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none transition-all duration-300 hover:shadow-2xl hover:border-blue-500 group"
                >
                  {/* Left Side: Program Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white font-poppins group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                        {program.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                        Key Areas of Focus
                      </h4>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-semibold">
                        {program.keyFocus.map((focus, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850 flex">
                      <Link
                        href={`/donate?program=${program.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Support this Program <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Image Banner */}
                  <div className="w-full md:w-48 h-48 md:h-auto relative rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Action Callout */}
      <section className="py-16 bg-white dark:bg-zinc-950/30 border-t border-zinc-150 dark:border-zinc-900 text-center">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-3xl">
            Sponsor a Specific Intervention
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-zinc-500 dark:text-zinc-400">
            You can direct your donation to any of these programs. Choose a campaign and make a direct contribution.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
