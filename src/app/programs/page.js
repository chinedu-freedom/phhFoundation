import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Stethoscope, Briefcase, Apple, ShieldAlert, Heart, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Our Programs | HH Foundation",
  description: "Explore the core humanitarian, educational, medical, and skill development programs of the HH Foundation.",
};

const PROGRAMS = [
  {
    id: "education",
    title: "Education & Scholarships",
    description: "Sponsoring school fees, learning materials, and modern IT bootcamps for orphans and children in rural communities.",
    detailedDescription: "Our education initiative aims to ensure that children from low-income households and orphans have access to qualitative and uninterrupted learning. We cover tuition fees, distribute textbooks and school uniforms, and organize youth coding bootcamps to prepare young minds for a digital future. By investing in their education, we build an enduring bridge out of generational poverty.",
    icon: BookOpen,
    image: "/people2.jpeg",
    keyFocus: ["Tuition Coverages", "Textbooks & Uniforms", "Youth Coding Bootcamps", "School Renovation"],
  },
  {
    id: "healthcare",
    title: "Medical Outreaches",
    description: "Bringing clinical setups to rural centers to offer free medical consultations, maternal care, basic surgeries, and prescription drugs.",
    detailedDescription: "Our healthcare program brings professional clinical care directly to communities lacking primary medical infrastructure. We coordinate mobile clinics offering general health checkups, free prescription medicines, maternal welfare programs, and essential vision exams. We are committed to preventing treatable illnesses and improving life expectancy.",
    icon: Stethoscope,
    image: "/people.jpeg",
    keyFocus: ["General Checkups", "Free Prescription Medicines", "Maternal Healthcare", "Vision Exams & Glasses"],
  },
  {
    id: "skills",
    title: "Skill Acquisition & Empowerment",
    description: "Training widows and young people in tailoring, catering, computer literacy, and soap-making, alongside start-up grants.",
    detailedDescription: "We foster self-reliance by training young people and widows in high-demand, practical vocations. Our intensive curriculums cover professional tailoring, computer literacy, and baking. To ensure long-term success, we equip graduates with startup micro-grants and physical equipment like sewing machines and ovens to launch their local enterprises.",
    icon: Briefcase,
    image: "/orentiation.jpeg",
    keyFocus: ["Tailoring & Design", "Computer Literacy", "Catering & Baking", "Micro-grants & Equipment"],
  },
  {
    id: "food",
    title: "Food Support Program",
    description: "Distributing dry food relief packages containing rice, oil, beans, and nutritional items to low-income and elderly citizens.",
    detailedDescription: "Our food support programs target grassroots hunger and malnutrition in remote villages. We organize community feeding drives and distribute dry food relief packages containing staples like rice, beans, grains, and cooking oil. Special care packages are tailored to meet the nutritional needs of vulnerable elderly citizens and mothers.",
    icon: Apple,
    image: "/people1.jpeg",
    keyFocus: ["Community Feeding Drives", "Elderly Welfare Packs", "Maternal Nutrition Packs", "Emergency Dry Food Packs"],
  },
  {
    id: "disaster",
    title: "Emergency & Disaster Relief",
    description: "Providing rapid logistics, shelter support, clothing, and primary survival materials to areas affected by floods or fire.",
    detailedDescription: "We deliver rapid response logistics, emergency shelters, clothing, and vital survival kits to families displaced by floods, fire outbreaks, or economic hardships. Working closely with community leaders, we provide immediate stabilization supplies and support long-term relocation and community rehabilitation efforts.",
    icon: ShieldAlert,
    image: "/group.jpeg",
    keyFocus: ["Temporary Shelter Aid", "Displacement Kits", "Emergency Medication", "Sanitation Supplies"],
  },
  {
    id: "orphan",
    title: "Orphan Support & Welfare",
    description: "Providing funding, healthcare plans, and nutritional support to partner orphanage homes, ensuring orphans thrive.",
    detailedDescription: "We partner with local orphanage homes to provide sustained funding, robust healthcare plans, and balanced nutritional programs for vulnerable children. We believe every child deserves a safe, loving environment to grow, which is why we sponsor educational tracks, clothing drives, and mental well-being sessions.",
    icon: Heart,
    image: "/group2.jpeg",
    keyFocus: ["Orphanage Nutrition Plans", "Health Insurance Plans", "Clothing Drives", "Mental Well-being Support"],
  },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Page Header */}
      <PageHeader
        subtitle="What We Do"
        title="Humanitarian Programs"
        description="A comprehensive overview of our core intervention sectors designed to build resilience and long-term self-sustenance."
        bgImage="/group.jpeg"
        alt="Medical outreach clinic background"
      />

      {/* 2. Programs Alternating Rows */}
      <section className="py-24 space-y-24 lg:space-y-32">
        {PROGRAMS.map((program, idx) => {
          const IconComponent = program.icon;
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={program.id}
              className="mx-auto max-w-7xl px-6 sm:px-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                {/* Image Column */}
                <div className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-zinc-800 bg-zinc-150 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Text Column */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins">
                    {program.title}
                  </h3>
                  
                  <p className="mt-4 text-base leading-relaxed text-zinc-650 dark:text-zinc-300">
                    {program.detailedDescription}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                      Key Areas of Focus
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-semibold">
                      {program.keyFocus.map((focus, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 pt-6 border-t border-zinc-150 dark:border-zinc-800 flex gap-4">
                    <Link
                      href={`/donate?program=${program.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-[0.98]"
                    >
                      Support this Program <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Action Callout */}
      <section className="py-20 bg-white dark:bg-zinc-950/30 border-t border-slate-100/80 dark:border-zinc-900 text-center">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-4xl">
            Sponsor a Specific Intervention
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-zinc-500 dark:text-zinc-400">
            You can direct your donation to any of these programs. Choose a campaign and make a direct contribution.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
