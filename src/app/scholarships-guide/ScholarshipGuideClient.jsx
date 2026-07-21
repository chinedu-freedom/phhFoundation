"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  CheckSquare, 
  Send,
  HelpCircle
} from "lucide-react";

export default function ScholarshipGuideClient() {
  const guideSections = [
    {
      id: "overview",
      title: "Program Overview",
      icon: BookOpen,
    },
    {
      id: "steps",
      title: "Step-by-Step Process",
      icon: GraduationCap,
    },
    {
      id: "terms",
      title: "Key Sponsorship Terms",
      icon: CheckSquare,
    },
  ];

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

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    guideSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      <PageHeader
        subtitle="Scholarship Guide"
        title="Scholarship Application Guide"
        description="Read the official eligibility criteria, document requirements, and step-by-step instructions for the HH Foundation educational scholarship program."
        bgImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&auto=format&fit=crop&q=80"
        alt="Students studying in class"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Table of Contents Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl border border-slate-100/70 bg-white p-8 dark:bg-zinc-900 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-poppins">Table of Contents</h3>
                <nav className="mt-6 space-y-1">
                  {guideSections.map((section, idx) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left text-xs sm:text-sm font-semibold py-2.5 px-3 rounded-xl transition-all flex items-center gap-3 cursor-pointer group ${
                        activeSection === section.id
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-zinc-650 hover:bg-slate-50 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-blue-400"
                      }`}
                    >
                      <section.icon className={`h-4.5 w-4.5 shrink-0 transition-colors ${
                        activeSection === section.id
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`} />
                      <span>{idx + 1}. {section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Inquiry Callout Panel */}
              <div className="rounded-3xl border border-zinc-200/50 bg-blue-50/50 p-8 dark:bg-blue-950/10 dark:border-blue-900/50 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2 font-poppins">
                  <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Have Questions?
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Our scholarship coordinators are here to assist you with physical form pick-ups, document validation, or questions about the process.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:hephzibahhumanitarianf@gmail.com?subject=Scholarship%20Inquiry%202026"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 shadow-md shadow-blue-500/10 transition-colors"
                  >
                    <Send className="h-3.5 w-3.5" /> Email Coordinator
                  </a>
                </div>
              </div>
            </div>

            {/* Detailed Content column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-3xl border border-slate-100/70 bg-white p-8 sm:p-12 dark:bg-zinc-900 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-12">
                
                <div className="border-b border-zinc-100 dark:border-zinc-800/60 pb-6">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest font-poppins">2026 Academic Sponsorship Cycle</span>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white font-poppins mt-2">Scholarship Application Guide</h2>
                  <p className="mt-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed italic">
                    This guide outlines the application process, requirements, and policy regulations for HH Foundation scholarships.
                  </p>
                </div>

                <div className="space-y-12">
                  {/* Overview Section */}
                  <div
                    id="overview"
                    className="scroll-mt-28 group border-b border-zinc-100 dark:border-zinc-800/50 pb-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white font-poppins">
                        1. Program Overview
                      </h3>
                    </div>
                    <div className="mt-4 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-8 sm:pl-13 space-y-4">
                      <p>
                        The HH Foundation Educational Scholarship program covers tuition fees, uniforms, textbooks, and basic school supplies for children who are at risk of dropping out due to financial hardship. We believe that education is a fundamental right that breaks cycles of generational poverty.
                      </p>
                      {/* Timeline Callout */}
                      <div className="rounded-2xl bg-blue-50/50 dark:bg-blue-950/10 p-5 border border-blue-100 dark:border-blue-900/30 flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <p className="text-xs text-blue-900 dark:text-blue-300 leading-relaxed font-semibold">
                          Application Window: Applications for the upcoming academic term open on August 1st and close on September 15th annually.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Steps Section */}
                  <div
                    id="steps"
                    className="scroll-mt-28 group border-b border-zinc-100 dark:border-zinc-800/50 pb-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white font-poppins">
                        2. Step-by-Step Process
                      </h3>
                    </div>
                    <div className="mt-6 sm:pl-13 grid gap-6">
                      {steps.map((s, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs">
                            {idx + 1}
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">{s.title}</h4>
                            <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">{s.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terms Section */}
                  <div
                    id="terms"
                    className="scroll-mt-28 group last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                        <CheckSquare className="h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white font-poppins">
                        3. Key Sponsorship Terms
                      </h3>
                    </div>
                    <div className="mt-4 sm:pl-13">
                      <ul className="space-y-3.5 pl-1.5">
                        {requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
