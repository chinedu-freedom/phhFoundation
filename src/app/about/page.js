import { prisma } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Mail, CheckCircle, Award, Video, FileText, ExternalLink, Sparkles, MapPin } from "lucide-react";

import PageHeader from "@/components/PageHeader";

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

export const metadata = {
  title: "About Us | HH Foundation",
  description: "Learn about the mission, vision, values, history, and dedicated team behind HH Foundation's humanitarian, educational, and healthcare efforts.",
};

const DEFAULT_TEAM = [
  {
    id: "founder",
    name: "Princess Hephzibah",
    role: "Founder & Executive Director",
    bio: "Championing humanitarian responses since 2012. Dedicated to quality education, healthcare outreaches, and youth empowerment across Nigeria.",
    image: "/image.jpeg",
    linkedin: "https://linkedin.com",
  },
  {
    id: "programs",
    name: "Sarah Jenkins",
    role: "Director of Programs",
    bio: "Over 10 years of experience in NGO operations and field coordination. Specializes in educational sponsorships and rural relief.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    id: "medical",
    name: "Dr. David Alao",
    role: "Medical Outreach Coordinator",
    bio: "Dedicated medical practitioner leading our rural healthcare teams to deliver free medical consults, prescription drugs, and basic surgeries.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    id: "operations",
    name: "Michael Okon",
    role: "Head of Operations & Logistics",
    bio: "Manages volunteer coordination, distribution networks, and event logistics to ensure transparent, fast aid delivery in the field.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
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

  // List of award image paths from public folder
  const awardImages = [
    { src: "/reward.jpeg", title: "Ministry of Labour Award" },
    { src: "/reward1.jpeg", title: "Honorary Recognition" },
    { src: "/reward2.jpeg", title: "Garki Chiefdom Title" },
    { src: "/reward3.jpeg", title: "Garki Chiefdom Merit Award" },
    { src: "/reward7.jpeg", title: "ABU Leadership Award" },
    { src: "/reward10.jpeg", title: "IOMP Professional Membership" }
  ];

  // Drive Evidence Folders
  const driveLinks = [
    { label: "Garki Chiefdom Council Recognition", url: "https://drive.google.com/drive/folders/1bCod0sFyHWIRVQTRZyRNAU6SlCefw5WK" },
    { label: "Ahmadu Bello University Awards", url: "https://drive.google.com/drive/folders/1nCxkuqWjLy-0bmXx58QrQBG-iYc-Kl_k" },
    { label: "Management Professionals Honors", url: "https://drive.google.com/drive/folders/19J-zRuv08OjwCb0IESekIYM8cNZ9Ug9i" },
    { label: "Foundation Outreach Archives", url: "https://drive.google.com/drive/folders/1Q3ubeeFIKPHIL_9HuTbDbjauTNsJ1SgS" }
  ];

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
                  Since 2012, I have been at the forefront of championing sustainable humanitarian responses through my outreach initiative, <strong>Princess Hephzibah Outreach Program</strong>. By addressing immediate socio-economic challenges, we strive to build self-reliant communities, ensure that vulnerable groups receive the essential support they need to survive, and create a lasting legacy of structural empowerment.
                </p>
                <p>
                  Within the past decade, over 5000 women and girls, local churches, and marginalized communities have benefitted directly from our structured intervention projects. This milestone was made possible by the unwavering support and kind donations of public-spirited individuals, alongside strategic partnerships with corporate organizations including Victor and Associates Ltd, Anngood Ventures, Living Christ Mission Inc., and the National Youth Service Corps (NYSC) Scheme, Nigeria. These collaborations have allowed us to scale our efforts across multiple regions, ensuring aid reaches those who need it most.
                </p>
                <p>
                  Gratefully, through these initiatives, life and living conditions have been dramatically improved by breaking generational cycles of poverty and resource scarcity. We support struggling families with non-refundable micro-business grants, award comprehensive academic scholarships for students hit hard by economic crises (spanning secondary through tertiary education), and run vocational training programs that equip women and girls with scalable entrepreneurship skills to build resilient, self-sustained futures.
                </p>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white font-poppins mt-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-600" /> What Inspired Our Work?
                </h4>
                <p>
                  Before gaining admission into the University, I had the privilege of venturing into business. It was the most financially liberating experience of my life. I didn’t think furthering my education was necessary because I was relatively comfortable. It was until I had a conversation with a friend that I had the conviction to go back to school.
                </p>
                <p>
                  My experience as a political science student at the University of Nigeria Nsukka empowered my mind. I realized that there is a limit to where business can take you; however, being educated opens your mind to possibilities and makes you better at what you do. This inspired my decision to start the foundation. It is my dream for every child to have their skills nurtured whilst accessing quality education. Vocational skills are great, but when backed up with quality education, they become profound.
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
                  The urgency in actualizing the Sustainable Development Goals by 2030 has made collective action imperative. Princess Hephzibah Humanitarian Foundation was established to contribute its quota towards bridging the gaps that exist in Education through active humanitarian response, robust scholarship schemes, and provision of learning materials.
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
              In recognition of our commitment to advancing Education and community development, the Princess Hephzibah Humanitarian Foundation has received prestigious titles and awards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            {/* Awards Narrative and Drive Links */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl bg-white p-8 border border-slate-100 dark:bg-zinc-900 dark:border-zinc-850 shadow-sm">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins mb-4">Verifiable Honors & Prestigious Titles</h4>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed mb-6">
                  Princess Hephzibah has been honored by <strong>The Garki Chiefdom Council AMAC</strong> (conferring a prestigious title to a non-indigene for the first time), <strong>Ahmadu Bello University Postgraduate Representative Council</strong>, and the <strong>International Organization of Management Professionals</strong>, among others.
                </p>
                <div className="space-y-3">
                  <span className="text-xxs font-bold text-zinc-400 uppercase tracking-widest block mb-1">Official Evidence Folders:</span>
                  {driveLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-150 bg-zinc-50/50 hover:bg-white hover:border-blue-500 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 transition-all text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-blue-600 shrink-0" />
                        {link.label}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards Image Showcase Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {awardImages.map((award, index) => (
                <div 
                  key={index}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 shadow-sm bg-zinc-100"
                >
                  <Image 
                    src={award.src}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-xxs font-bold text-white tracking-wide">{award.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-lg font-poppins">{member.name}</h3>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider block mt-1">
                  {member.role}
                </span>
                <p className="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400 line-clamp-3">
                  {member.bio}
                </p>
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850 flex items-center gap-3">
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
                  <a
                    href={`mailto:info@hephzibahhumanitarianf.org`}
                    className="text-zinc-400 hover:text-blue-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


