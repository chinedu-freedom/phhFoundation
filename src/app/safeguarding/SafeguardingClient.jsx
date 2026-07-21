"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { 
  ShieldAlert, 
  Users, 
  CheckCircle2, 
  Camera, 
  Smartphone, 
  AlertCircle, 
  ClipboardList 
} from "lucide-react";

export default function SafeguardingClient() {
  const policySections = [
    {
      id: "purpose",
      title: "Core Commitment & Purpose",
      icon: ShieldAlert,
      content: "Hephzibah Humanitarian Foundation (HH Foundation) operates under a zero-tolerance policy for child abuse, exploitation, or harassment in any form. Our primary goal is to ensure a safe, nurturing, and respectful environment for every child participating in our educational scholarships, medical missions, and community programs."
    },
    {
      id: "conduct",
      title: "Volunteer & Staff Code of Conduct",
      icon: Users,
      content: "All personnel, field volunteers, and medical officers must adhere to strict guidelines. They must treat all children with equal respect, avoid spending unsupervised one-on-one time with a child behind closed doors, and refrain from any behavior that could be perceived as abusive, inappropriate, or grooming."
    },
    {
      id: "recruitment",
      title: "Safe Recruitment & Verification",
      icon: CheckCircle2,
      content: "We implement rigorous screening procedures for all staff, tutors, and volunteers who interact with children. This includes mandatory background checks, reference validation, identity verification, and signed adherence to our child safeguarding charter before active deployment."
    },
    {
      id: "media",
      title: "Photography, Media & Privacy Consent",
      icon: Camera,
      content: "We protect child privacy. Photos or videos of children are only captured during campaigns after obtaining explicit written or signed consent from parent(s) or legal guardian(s). Children's full real names, specific school details, or exact home addresses are never published alongside promotional materials."
    },
    {
      id: "digital",
      title: "Digital Safety & Communication",
      icon: Smartphone,
      content: "Volunteers and external mentors are strictly prohibited from contacting children directly via personal social media channels, phone numbers, or messaging apps. All official communication regarding scholarship tutoring or mentorship must flow through authorized parent/guardian contacts or foundation supervisors."
    },
    {
      id: "reporting",
      title: "Mandatory Incident Reporting",
      icon: AlertCircle,
      content: "Any volunteer or staff member who witnesses, suspects, or receives an allegation of child safety violations is legally and ethically bound to report it immediately. Reports should be made to our child safety officer via info@hephzibahhumanitarianf.org or by calling +234 807 588 9097."
    },
    {
      id: "review",
      title: "Governance & Annual Policy Audit",
      icon: ClipboardList,
      content: "This policy is reviewed annually by our Board of Trustees and external legal advisors. Any updates are immediately communicated to all field coordinators and active partners to ensure continuous compliance with international child protection standards."
    }
  ];

  const [activeSection, setActiveSection] = useState("purpose");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when the heading is near the top-middle third
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

    policySections.forEach((section) => {
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
        subtitle="Safeguarding Policy"
        title="Child Protection & Safeguarding"
        description="Our comprehensive framework to ensure the safety, dignity, and protection of children across all our programs and outreach activities."
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=80"
        alt="Safe child education environment"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Table of Contents Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl border border-slate-100/70 bg-white p-8 dark:bg-zinc-900 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-poppins">Table of Contents</h3>
                <nav className="mt-6 space-y-1">
                  {policySections.map((section, idx) => (
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

              {/* Quick Report Panel */}
              <div className="rounded-3xl border border-zinc-200/50 bg-blue-50/50 p-8 dark:bg-blue-950/10 dark:border-blue-900/50 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2 font-poppins">
                  <ShieldAlert className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Whistleblower Protection
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  HH Foundation guarantees absolute confidentiality for all safeguarding reports. Reports are handled directly by our child safety response unit.
                </p>
                <div className="pt-2 space-y-2.5 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-zinc-600 dark:text-zinc-300">Email:</span>
                    <a href="mailto:info@hephzibahhumanitarianf.org" className="text-blue-600 dark:text-blue-400 hover:underline">
                      info@hephzibahhumanitarianf.org
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-zinc-600 dark:text-zinc-300">Helpline:</span>
                    <a href="tel:+2348075889097" className="text-blue-600 dark:text-blue-400 hover:underline">
                      +234 807 588 9097
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Content column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-3xl border border-slate-100/70 bg-white p-8 sm:p-12 dark:bg-zinc-900 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-12">
                
                <div className="border-b border-zinc-100 dark:border-zinc-800/60 pb-6">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest font-poppins">Official Policy Charter</span>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white font-poppins mt-2">Child Protection Charter</h2>
                  <p className="mt-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed italic">
                    This document serves as our operational policy standard. Every employee, volunteer, ambassador, contractor, and trustee of Hephzibah Humanitarian Foundation is required to review and sign their assent annually.
                  </p>
                </div>

                <div className="space-y-12">
                  {policySections.map((section, idx) => (
                    <div
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 group border-b border-zinc-100 dark:border-zinc-800/50 pb-8 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                          <section.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white font-poppins">
                          {idx + 1}. {section.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-8 sm:pl-13">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
