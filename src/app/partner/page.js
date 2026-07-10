import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import PartnerForm from "./PartnerForm";
import { Shield, FileSpreadsheet, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Partner With Us | HH Foundation",
  description: "Collaborate with Princess Hephzibah Humanitarian Foundation in Onitsha and across Nigeria. We design high-impact CSR partnerships, employee engagement programs, and co-branded advocacy campaigns.",
};

export default function PartnerPage() {
  const pathways = [
    {
      title: "GIVE",
      description: "Directly fund educational, healthcare, and skill empowerment programs.",
      deliverables: [
        "Sponsor classrooms & school builds",
        "Fund annual learning scholarships",
        "Donate digital devices & medical kits",
        "Corporate matching grants"
      ],
      color: "from-blue-500/10 to-sky-500/5 dark:from-blue-900/20 dark:to-sky-900/10",
      border: "border-blue-100 dark:border-blue-900/30"
    },
    {
      title: "ENGAGE",
      description: "Activate your workforce through custom volunteering and social initiatives.",
      deliverables: [
        "Corporate payroll giving programs",
        "Employee mentorship & skills matching",
        "Hands-on community outreach events",
        "Interactive CSR team-building days"
      ],
      color: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-900/20 dark:to-teal-900/10",
      border: "border-emerald-100 dark:border-emerald-900/30"
    },
    {
      title: "AMPLIFY",
      description: "Leverage your brand voice to build shared value and raise local awareness.",
      deliverables: [
        "Co-branded CSR campaigns",
        "Cause-related marketing campaigns",
        "Event sponsorships & joint activations",
        "Media advocacy collaborations"
      ],
      color: "from-indigo-500/10 to-violet-500/5 dark:from-indigo-900/20 dark:to-violet-900/10",
      border: "border-indigo-100 dark:border-indigo-900/30"
    },
    {
      title: "SCALE",
      description: "Co-design and pilot systemic interventions with long-term monitoring.",
      deliverables: [
        "Multi-year community interventions",
        "Targeted rural outreach scaling",
        "Educational infrastructure development",
        "Joint research & efficacy tracking"
      ],
      color: "from-amber-500/10 to-orange-500/5 dark:from-amber-900/20 dark:to-orange-900/10",
      border: "border-amber-100 dark:border-amber-900/30"
    }
  ];

  const sdgs = [
    { number: "03", title: "Good Health & Well-being", desc: "Sponsoring medical outreaches, pediatric healthcare checks, and sanitary health kits in local Nigerian communities." },
    { number: "04", title: "Quality Education", desc: "Constructing tech-enabled libraries, funding scholarships, and providing basic school essentials." },
    { number: "05", title: "Gender Equality", desc: "Empowering young girls through targeted coding classes, hygiene resources, and leadership training." },
    { number: "08", title: "Decent Work & Economic Growth", desc: "Providing vocational training, business mentoring, and micro-grants for marginalized women." }
  ];

  const partnerLogos = [
    { name: "Victor & Associates Ltd", role: "Corporate Collaborator" },
    { name: "Anngood Ventures", role: "Business Partner" },
    { name: "Living Christ Mission Inc.", role: "Faith-based Collaborator" },
    { name: "National Youth Service Corps (NYSC)", role: "Government Partner" }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Page Header Hero */}
      <PageHeader
        subtitle="Institutional & Corporate Partnerships"
        title="Partnerships Power Change"
        description="We work with brands, corporates, and governments to build scalable, community-led programs that deliver measurable educational and medical impact."
        bgImage="/group.jpeg"
        alt="Institutional partners and community gathering"
      />

      {/* 2. Intro Statement / The Value Prop */}
      <section className="py-20 bg-white dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Our Approach</span>
              <h2 className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins tracking-tight">
                Corporate Social Responsibility Built on Real, Verifiable Results
              </h2>
              <p className="mt-4 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                At the HH Foundation, we believe that address-level interventions are the key to long-term impact. By partnering with us, your organization doesn&apos;t just fund projects; you co-create sustainable development solutions for underserved communities in Nigeria.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">100% Impact Model</h4>
                    <p className="mt-1 text-xs text-zinc-550 dark:text-zinc-400">
                      All corporate sponsorship funds go directly into programmatic field expenses. Administrative and operational costs are fully funded by private board contributions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shrink-0">
                    <FileSpreadsheet className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Granular Impact Reporting</h4>
                    <p className="mt-1 text-xs text-zinc-550 dark:text-zinc-400">
                      Receive quarterly project logs, visual media documentations, and audit-ready financial transparency reports that verify exactly where and how your contribution made a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 w-full overflow-hidden rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-slate-100/50 dark:border-zinc-800">
              <Image
                src="/pepl.jpeg"
                alt="Community partners and volunteers gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partnership Pathways */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Co-Create With Us</span>
            <h2 className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins tracking-tight">
              Select Your Collaboration Pathway
            </h2>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Choose an alignment structure that fits your organization&apos;s CSR mandate, brand goals, or operational capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((pw, idx) => (
              <div 
                key={idx}
                className={`rounded-3xl border ${pw.border} bg-gradient-to-br ${pw.color} p-6 shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-all`}
              >
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins tracking-wide">
                    {pw.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed">
                    {pw.description}
                  </p>
                  
                  <ul className="mt-6 space-y-3">
                    {pw.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SDG Alignment */}
      <section className="py-20 bg-white dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Global Standards</span>
            <h2 className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins tracking-tight">
              Aligned with Sustainable Development Goals
            </h2>
            <p className="mt-3 text-xs text-zinc-550 dark:text-zinc-450">
              We design our community initiatives across Nigeria to tie directly into key United Nations SDGs, strengthening your corporate ESG disclosures.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sdgs.map((sdg, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 hover:border-blue-500/30 transition-colors"
              >
                <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 opacity-60 font-mono">
                  {sdg.number}
                </span>
                <h4 className="mt-4 text-sm font-bold text-zinc-900 dark:text-white font-poppins">
                  {sdg.title}
                </h4>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {sdg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Intakes Form & Info Showcase */}
      <section id="partner-form-section" className="py-20 bg-slate-50 dark:bg-zinc-950/40 border-t border-slate-100/80 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Left side: Strategic CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Connect with Us</span>
              <h2 className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins tracking-tight">
                Let&apos;s Design a Collaboration Plan
              </h2>
              <p className="mt-4 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                Whether you want to sponsor a learning lab, run an employee engagement drive, or build shared brand value, our partnerships team will work with you at every step.
              </p>

              {/* Supporter logos */}
              <div className="mt-10">
                <span className="block text-xs font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-widest mb-4">
                  Trusted Collaborators Include:
                </span>
                <div className="flex flex-wrap gap-2">
                  {partnerLogos.map((pl, idx) => (
                    <span 
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 text-xs font-semibold text-zinc-800 dark:text-zinc-300 border border-slate-100/60 dark:border-zinc-800/80 shadow-[0_4px_12px_rgb(0,0,0,0.01)] hover:bg-slate-50/50 transition-colors"
                      title={pl.role}
                    >
                      {pl.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Interactive Form Container */}
            <div className="lg:col-span-7">
              <PartnerForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
