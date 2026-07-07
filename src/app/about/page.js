import { prisma } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { Heart, Target, Eye, Users, Mail, Shield, CheckCircle } from "lucide-react";

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
    name: "Dr. Emmanuel Harrison",
    role: "Founder & Executive Director",
    bio: "Passionate about sustainable community development, medical outreaches, and youth empowerment. Leads the strategic vision of HH Foundation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
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

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&auto=format&fit=crop&q=80"
            alt="Classroom education background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Who We Are</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-poppins">
            Transforming Lives, Building Hope
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100">
            Dedicated to empowering marginalized communities through access to education, qualitative healthcare services, emergency relief, and skill acquisition.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Mission */}
            <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 border border-zinc-100 shadow-lg shadow-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none transition-transform hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">Our Mission</h3>
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                To identify, support, and lift individuals and families out of extreme vulnerability by facilitating educational sponsorships, qualitative healthcare outreach, skill empowerment, and resource support.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 border border-zinc-100 shadow-lg shadow-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none transition-transform hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">Our Vision</h3>
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                A society where every child gets a quality education, every citizen has access to basic medical care, and vulnerable groups are equipped with local tools to achieve self-sustenance and dignity.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 border border-zinc-100 shadow-lg shadow-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none transition-transform hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">Our Core Values</h3>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
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

      {/* 3. Our Journey / Story */}
      <section className="py-20 bg-white dark:bg-zinc-950/30 border-t border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Our Story</span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-4xl">
                How We Started & Why We Serve
              </h2>
              <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
                HH Foundation was born from a desire to address the deep gaps in educational access and basic medical care in underrepresented communities. In rural settings, many brilliant children drop out due to minor financial constraints, and preventable illnesses go untreated because of a lack of basic clinical facilities.
              </p>
              <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
                What began as a small group of local volunteers pooling personal resources has grown into a structured humanitarian foundation. Today, we coordinate with domestic and international partners to carry out large-scale outreaches, sponsor hundreds of children in primary and tertiary schools, and support widows with tools to earn a livelihood.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/donate"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all"
                >
                  Join Us Today
                </Link>
                <Link
                  href="/projects"
                  className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  View Our Projects
                </Link>
              </div>
            </div>

            {/* Story Image */}
            <div className="lg:col-span-5 relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80"
                alt="Humanitarian outreach in community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Team */}
      <section className="py-20">
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
                    href={`mailto:hephzibahhumanitarianf@gmail.com`}
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

