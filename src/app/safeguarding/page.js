import Link from "next/link";
import { ArrowLeft, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Child Protection & Safeguarding Policy | HH Foundation",
  description: "Learn about the HH Foundation commitment to protecting children and vulnerable individuals across all educational and medical outreaches.",
};

export default function SafeguardingPage() {
  const guidelines = [
    {
      title: "Core Commitment & Purpose",
      text: "HH Foundation operates under a zero-tolerance policy for child abuse, exploitation, or harassment in any form. Our primary goal is to ensure a safe, nurturing, and respectful environment for every child participating in our educational scholarships, medical missions, and community programs."
    },
    {
      title: "Volunteer & Staff Code of Conduct",
      text: "All personnel, field volunteers, and medical officers must adhere to strict guidelines. They must treat all children with equal respect, avoid spending unsupervised one-on-one time with a child behind closed doors, and refrain from any behavior that could be perceived as abusive or inappropriate."
    },
    {
      title: "Photography, Media & Privacy Consent",
      text: "We protect child privacy. Photos or videos of children are only captured during campaigns after obtaining explicit written or signed consent from parent(s) or legal guardian(s). Children's full real names, specific school details, or exact home addresses are never published alongside promotional materials."
    },
    {
      title: "Digital Safety & Communication",
      text: "Volunteers and external mentors are strictly prohibited from contacting children directly via personal social media channels, phone numbers, or messaging apps. All official communication regarding scholarship tutoring or mentorship must flow through authorized parent/guardian contacts or foundation supervisors."
    },
    {
      title: "Mandatory Incident Reporting",
      text: "Any volunteer or staff member who witnesses, suspects, or receives an allegation of child safety violations is legally and ethically bound to report it immediately. Reports should be made to our child safety officer via info@hephzibahhumanitarianf.org or by calling +234 807 588 9097."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-5xl">
            Child Protection & Safeguarding
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <span>HEPHZIBAH Humanitarian Foundation</span>
            <span>•</span>
            <span>Last Updated: March 22, 2026</span>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-sm space-y-10 text-sm leading-8 text-zinc-700 dark:text-zinc-300">
          
          <p className="text-zinc-500 dark:text-zinc-400 italic">
            This policy outlines our commitments and mandatory protocols to ensure the safety and welfare of children during all HH Foundation programs and field operations.
          </p>

          <div className="space-y-10 pt-4">
            {guidelines.map((g, idx) => (
              <section key={idx} className="space-y-4 pb-10 border-b border-zinc-100 last:border-0 last:pb-0 dark:border-zinc-800/60">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">
                  {idx + 1}. {g.title}
                </h2>
                <p className="text-zinc-650 dark:text-zinc-400 leading-7 text-xs sm:text-sm mt-3">
                  {g.text}
                </p>
              </section>
            ))}
          </div>

          {/* Reporting Banner */}
          <div className="rounded-2xl bg-slate-50 dark:bg-zinc-950/50 p-6 border border-zinc-150 dark:border-zinc-800 mt-8 space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Have a Concern? Report Safely
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              If you witness any violation of these rules, contact our response team at{" "}
              <a href="mailto:info@hephzibahhumanitarianf.org" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                info@hephzibahhumanitarianf.org
              </a>{" "}
              or call{" "}
              <a href="tel:+2348075889097" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
                +234 807 588 9097
              </a>
              . All reports are handled with absolute confidentiality and immediate intervention.
            </p>
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
