import Link from "next/link";
import { BookOpen, GraduationCap, Calendar, CheckSquare, Info, ArrowLeft, Send } from "lucide-react";

export const metadata = {
  title: "Scholarship Application Guide (2026) | HH Foundation",
  description: "Read the official eligibility criteria, document requirements, and step-by-step instructions for the HH Foundation educational scholarship program.",
};

export default function ScholarshipGuidePage() {
  const steps = [
    {
      title: "Step 1: Check Eligibility",
      description: "Applicant must be a student in a public primary or secondary school. Focus is given to orphan children, kids from single-mother households, or families demonstrating verified low income."
    },
    {
      title: "Step 2: Gather Required Documents",
      description: "You will need: a birth certificate/age declaration, recent passport photographs, school terminal reports (academic results), and a recommendation letter from a community leader or school principal."
    },
    {
      title: "Step 3: Submit Online or In-Person",
      description: "Fill out our student enrollment form online or obtain a physical copy at our regional centers. Upload or submit photocopies of all required credentials before the application window closes."
    },
    {
      title: "Step 4: Screenings & Home Visit Verification",
      description: "Our welfare assessment team will conduct home visits and school audits to verify applicants' living conditions and academic needs to ensure scholarships go to those in most need."
    }
  ];

  const requirements = [
    "Student must maintain a minimum average academic performance (C average or above) to sustain annual renewal.",
    "Parents or legal guardians must attend seasonal PTA and progress review meetings organized by the foundation.",
    "The applicant must reside in one of our designated active rural or semi-urban outreach communities."
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 mb-4 border border-blue-200/30">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins">
            Scholarship Application Guide
          </h1>
          <p className="mt-2 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
            2026 Academic Sponsorship Cycle
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-8 text-sm leading-8 text-zinc-700 dark:text-zinc-300">
          
          <div className="space-y-4">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Program Overview
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
              The HH Foundation Educational Scholarship program covers tuition fees, uniforms, textbooks, and basic school supplies for children who are at risk of dropping out due to financial hardship. We believe that education is a fundamental right that breaks cycles of generational poverty.
            </p>
          </div>

          {/* Timeline Callout */}
          <div className="rounded-2xl bg-blue-50/50 dark:bg-blue-950/10 p-5 border border-blue-100 dark:border-blue-900/30 flex items-center gap-3">
            <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
            <p className="text-xs text-blue-900 dark:text-blue-300 leading-relaxed font-semibold">
              Application Window: Applications for the upcoming academic term open on August 1st and close on September 15th annually.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6 pt-4">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white font-poppins">
              Step-by-Step Application Process
            </h2>
            <div className="grid gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">{s.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Checklist */}
          <div className="space-y-4 pt-4 border-t border-zinc-150 dark:border-zinc-800">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Key Sponsorship Terms
            </h2>
            <ul className="space-y-3.5 pl-1.5">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Action call */}
          <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 p-6 border border-zinc-150 dark:border-zinc-800 mt-8 space-y-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Ready to apply?</h3>
              <p className="text-xxs text-zinc-400 dark:text-zinc-500">Contact our regional coordinators for physical copies or apply online.</p>
            </div>
            <a
              href="mailto:info@hephzibahhumanitarianf.org?subject=Scholarship%20Inquiry%202026"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 shadow-md shadow-blue-500/10 transition-colors"
            >
              <Send className="h-3.5 w-3.5" /> Email Inquiry
            </a>
          </div>

        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Resources & Reports
          </Link>
        </div>

      </div>
    </div>
  );
}
