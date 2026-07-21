import { prisma } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Mail, CheckCircle, Award, Video, FileText, ExternalLink, Sparkles, MapPin, Phone } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import AwardsShowcase from "@/components/AwardsShowcase";

const Linkedin = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Facebook = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const metadata = {
  title: "About Us | HH Foundation",
  description: "Learn about the mission, vision, values, history, and dedicated team behind HH Foundation's humanitarian, educational, and healthcare efforts.",
};

const DEFAULT_TEAM = [
  {
    id: "founder",
    name: "AMB. CHINAZAEKPERE FAVOUR UMELO",
    role: "Founder/ Executive Officer",
    bio: "Championing humanitarian responses since 2012. Dedicated to quality education, healthcare outreaches, and youth empowerment across Nigeria.",
    image: "/team1.jpeg",
    facebook: "https://www.facebook.com/share/1SZmFhWGte/",
    email: "princessnazihez@yahoo.com",
    whatsapp: "+2349066008854",
    objectPosition: "object-top",
  },
  {
    id: "secretary",
    name: "AMB Christian Ikoroha",
    role: "Secretary HHF",
    bio: "Over 10 years of experience in NGO operations and field coordination. Specializes in educational sponsorships and rural relief.",
    image: "/team2.jpeg",
    facebook: "https://www.facebook.com/search/top/?q=Chris%20Ikoroha",
    email: "chrisblessing2013@gmail.com",
    whatsapp: "+2348065628864",
    objectPosition: "object-top",
  },
  {
    id: "operations",
    name: "Festus Chukwudiebere Egbo",
    role: "Director of Operations",
    // role: "Director of Operations/ Chief Organizing Officer",
    bio: "Dedicated medical practitioner leading our rural healthcare teams to deliver free medical consults, prescription drugs, and basic surgeries.",
    image: "/team3.jpeg",
    facebook: "https://www.facebook.com/share/1C4pvbm6SB/?mibextid=wwXIfr",
    email: "festusegbo082@gmail.com",
    whatsapp: "+2347051307246",
    objectPosition: "object-top",
  },
  {
    id: "legal",
    name: "SERAH ONUOHA, ESQ.",
    role: "Legal Advisor",
    bio: "Manages volunteer coordination, distribution networks, and event logistics to ensure transparent, fast aid delivery in the field.",
    image: "/team4.jpeg",
    facebook: "https://www.facebook.com/serah.onuoha?mibextid=ZbWKwL",
    email: "serahonuoha14@gmail.com",
    whatsapp: "+2348034473836",
    objectPosition: "object-top",
  },
];

export default async function AboutPage() {
  // Try to load team members from the DB; fallback to default list if empty
  let teamMembers = [];
  try {
    teamMembers = await prisma.teamMember.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Error loading team members from database:", error);
  }

  if (teamMembers.length === 0) {
    teamMembers = DEFAULT_TEAM;
  }



  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Header Banner */}
      <PageHeader
        subtitle="Who We Are"
        title="Transforming Lives, Building Hope"
        description="Dedicated to empowering marginalized communities through access to education, qualitative healthcare services, emergency relief, and skill acquisition."
        bgImage="/group.jpeg"
        alt="Classroom education background"
      />

      {/* 2. Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Mission */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 border border-slate-100/70 shadow-lg shadow-zinc-200/20 dark:bg-zinc-900 dark:border-zinc-800/85 dark:shadow-none transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">Our Mission</h3>
              <p className="text-xs leading-6 text-zinc-650 dark:text-zinc-400">
                To identify, support, and lift individuals and families out of extreme vulnerability by facilitating educational sponsorships, qualitative healthcare outreach, skill empowerment, and resource support.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 border border-slate-100/70 shadow-lg shadow-zinc-200/20 dark:bg-zinc-900 dark:border-zinc-800/85 dark:shadow-none transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">Our Vision</h3>
              <p className="text-xs leading-6 text-zinc-650 dark:text-zinc-400">
                A society where every child gets a quality education, every citizen has access to basic medical care, and vulnerable groups are equipped with local tools to achieve self-sustenance and dignity.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 border border-slate-100/70 shadow-lg shadow-zinc-200/20 dark:bg-zinc-900 dark:border-zinc-800/85 dark:shadow-none transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">Our Core Values</h3>
              <ul className="space-y-3 text-xs text-zinc-650 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Transparency:</strong> Open financial records.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Compassion:</strong> Putting human dignity first.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Empowerment:</strong> Creating self-sufficiency.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Impact:</strong> Actions backed by measurable metrics.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Journey & Founder's Inspiration */}
      <section className="py-20 bg-white dark:bg-zinc-950/30 border-t border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 items-center">
            {/* Story Text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Our Journey</span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-4xl">
                Championing Humanitarian Responses Since 2012
              </h2>
              <div className="space-y-4 text-sm leading-7 text-zinc-650 dark:text-zinc-400">
                <p>
                  Since 2012, our organization has been at the forefront of championing sustainable humanitarian responses through our community outreach initiatives. By addressing immediate socio-economic challenges, we strive to build self-reliant communities, ensure that vulnerable groups receive the essential support they need to survive, and create a lasting legacy of structural empowerment.
                </p>
                <p>
                  Within the past decade, over 5,000 women and girls, local churches, and marginalized communities have benefitted directly from our structured intervention projects. This milestone was made possible by the unwavering support and kind donations of public-spirited individuals, alongside strategic partnerships with corporate organizations including Victor and Associates Ltd, Anngood Ventures, Living Christ Mission Inc., and the National Youth Service Corps (NYSC) Scheme, Nigeria. These collaborations have allowed us to scale our efforts across multiple regions, ensuring aid reaches those who need it most.
                </p>
                <p>
                  Gratefully, through these initiatives, life and living conditions have been dramatically improved by breaking generational cycles of poverty and resource scarcity. We support struggling families with non-refundable micro-business grants, award comprehensive academic scholarships for students hit hard by economic crises (spanning secondary through tertiary education), and run vocational training programs that equip women and girls with scalable entrepreneurship skills to build resilient, self-sustained futures.
                </p>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white font-poppins mt-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-600" /> What Inspired Our Work?
                </h4>
                <p>
                  The motivation behind establishing the Hephzibah Humanitarian Foundation stems from a deep conviction in the transformative power of quality education paired with practical empowerment. While entrepreneurship provides financial independence, combining formal education with vocational skills unlocks limitless possibilities for long-term growth.
                </p>
                <p>
                  This vision drives our commitment to ensuring every child and young adult gains access to quality schooling while nurturing their innate skills for a self-sustained future. Vocational skills are essential, but when backed by quality education, their impact becomes profound.
                </p>
              </div>
            </div>

            {/* Side Media & Video Player */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-100/50 dark:border-zinc-800 bg-zinc-100">
                <video 
                  src="/giving.mp4" 
                  controls 
                  preload="metadata"
                  className="w-full h-auto object-cover max-h-[350px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-100/50 dark:border-zinc-800 bg-zinc-100 aspect-[3/4]">
                  <Image
                    src="/reward12.jpeg"
                    alt="Founder empowering a local business owner with a grinding machine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-100/50 dark:border-zinc-800 bg-zinc-100 aspect-[3/4]">
                  <Image
                    src="/reward13.jpeg"
                    alt="Founder distributing household packages to community women"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Impact & SDG Gaps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 items-center justify-center">
            {/* Impact Video */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-2xl border border-slate-100/50 dark:border-zinc-800 bg-zinc-100">
              <video 
                src="/giving1.mp4" 
                controls 
                preload="metadata"
                className="w-full h-auto object-cover max-h-[350px]"
              />
              <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
                <p className="text-xxs font-bold text-zinc-500 uppercase tracking-wider">Outreach Footage</p>
                <p className="text-xs font-semibold text-zinc-900 dark:text-white mt-0.5">Distribution of relief materials and cash gifts during community outreaches.</p>
              </div>
            </div>

            {/* Impact Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Our Impact</span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-4xl">
                Bridging Gaps in Quality Education (SDG 4)
              </h2>
              
              <div className="space-y-4 text-sm leading-7 text-zinc-650 dark:text-zinc-400">
                <p>
                  The urgency in actualizing the Sustainable Development Goals by 2030 has made collective action imperative. Hephzibah Humanitarian Foundation was established to contribute its quota towards bridging the gaps that exist in Education through active humanitarian response, robust scholarship schemes, and provision of learning materials.
                </p>
                <p>
                  Since inception in 2021, the organization has impacted the lives of <strong>2,500 students</strong> across all educational levels.
                </p>
                <ul className="space-y-3.5 mt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>COVID-19 Support:</strong> Partnered with organizations to provide relief materials, food, and cash gifts to over 800 people in Southeast Nigeria.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>CSS Waru Project (2023):</strong> As a serving corps member, donated blocks of toilets and learning materials, including 50 double-seater desks and seats, for students at Community Secondary School, Waru (Abuja, Nigeria), alongside fully renovating classrooms.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Honors & Recognition */}
      <section className="py-20 bg-slate-100/40 dark:bg-zinc-950/40 border-t border-zinc-150 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Honors & Titles</span>
            <h2 className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              Recognized for Dedicated Service
            </h2>
            <p className="mt-4 text-xs text-zinc-550 dark:text-zinc-400 max-w-xl mx-auto">
              In recognition of our commitment to advancing Education and community development, the Hephzibah Humanitarian Foundation has received prestigious titles and awards.
            </p>
          </div>

          <AwardsShowcase />
        </div>
      </section>

      {/* 6. Leadership & Team */}
      <section className="py-20 bg-white dark:bg-zinc-950/20 border-t border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Our Leadership</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              Meet the Dedicated Team
            </h2>
            <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
              The visionaries, program managers, and field experts working daily to deliver aid, education, and hope.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:border-blue-600 transition-all hover:shadow-xl hover:shadow-zinc-200/40 dark:hover:shadow-none"
              >
                <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.objectPosition || "object-center"} transition-transform duration-300 group-hover:scale-105`}
                  />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm font-poppins uppercase min-h-[2.5rem] flex items-center leading-snug">{member.name}</h3>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider block mt-1">
                  {member.role}
                </span>
                <p className="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400 line-clamp-3">
                  {member.bio}
                </p>
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850 flex items-center gap-3">
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name} Facebook Profile`}
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-zinc-400 hover:text-blue-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  {member.whatsapp && (
                    <a
                      href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-blue-600 transition-colors"
                      aria-label={`WhatsApp ${member.name}`}
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


