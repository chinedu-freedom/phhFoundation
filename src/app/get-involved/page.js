"use client";

import { useState, useRef } from "react";
import { createVolunteerApplicationAction } from "@/app/actions/volunteer";
import { 
  Heart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Loader2, 
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Award
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CustomSelect from "@/components/CustomSelect";
import CountUp from "@/components/CountUp";
import { toast } from "sonner";

export default function GetInvolvedPage() {
  const [success, setSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const formRef = useRef(null);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [customSkills, setCustomSkills] = useState("");
  const [availability, setAvailability] = useState("Flexible / On Call");
  const [motivation, setMotivation] = useState("");

  // Validation states
  const [errors, setErrors] = useState({});

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!name.trim()) newErrors.name = "Full name is required";
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
      if (!phone.trim()) newErrors.phone = "Phone number is required";
      if (!location.trim()) newErrors.location = "Location is required";
    } else if (step === 2) {
      if (!selectedCategory) {
        newErrors.skills = "Please select a focus area or specialty";
      } else if (selectedCategory === "OTHER" && !customSkills.trim()) {
        newErrors.skills = "Please describe your specific skills";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      handleNextStep();
      return;
    }

    setError(null);
    setIsPending(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("location", location);
    formData.append("skills", getSkillsValue());
    formData.append("availability", availability);
    formData.append("motivation", motivation);

    try {
      const res = await createVolunteerApplicationAction(null, formData);
      if (res?.success) {
        toast.success("Application received successfully!");
        setSuccess(true);
      } else if (res?.error) {
        setError(res.error);
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Failed to submit application. Please check your connection.");
    } finally {
      setIsPending(false);
    }
  };

  const getSkillsValue = () => {
    if (selectedCategory === "OTHER") {
      return customSkills;
    }
    return selectedCategory;
  };

  if (success) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 animate-bounce">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl font-poppins">
          Welcome to the Family!
        </h1>
        <p className="mt-4 text-base text-zinc-650 dark:text-zinc-400 leading-relaxed">
          Thank you for signing up to volunteer with the Hephzibah Humanitarian Foundation. A confirmation has been sent to your email. Our team coordinator will contact you shortly regarding upcoming field outreaches.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 transition-all shadow-md"
          >
            Back to Home
          </Link>
          <Link
            href="/impact"
            className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all"
          >
            View Our Impact
          </Link>
        </div>
      </div>
    );
  }

  const availabilityOptions = [
    { value: "Flexible / On Call", label: "Flexible / On Call" },
    { value: "Weekends Only", label: "Weekends Only" },
    { value: "Weekdays Only", label: "Weekdays Only" },
    { value: "Full-Time Availability", label: "Full-Time Availability" },
  ];

  const skillOptions = [
    {
      id: "MEDICAL",
      icon: "🩺",
      title: "Medical & Healthcare Outreaches",
      description: "Support doctors, nurses, and pharmacists in rural medical camps and wellness screenings.",
    },
    {
      id: "EDUCATION",
      icon: "🎓",
      title: "Education & Youth Mentorship",
      description: "Teach basic IT skills, tutor children in orphanages, and distribute learning supplies.",
    },
    {
      id: "CREATIVE_MEDIA",
      icon: "🎨",
      title: "Storytelling, Media & Design",
      description: "Capture field photography, record video stories, create social graphics, or write updates.",
    },
    {
      id: "OPERATIONS",
      icon: "🤝",
      title: "Event Operations & Logistics",
      description: "Coordinate distribution queues, manage relief packages, and assist on-site field logistics.",
    },
    {
      id: "OTHER",
      icon: "⚡",
      title: "Special Skills & Professional Expertise",
      description: "Offer legal, accounting, tech, or administrative services tailored to foundation projects.",
    },
  ];

  const volunteerPillars = [
    {
      title: "Field Outreaches",
      desc: "Work directly in rural villages, medical checkups, and food distribution drives.",
      image: "/group.jpeg",
      badge: "Hands-On",
    },
    {
      title: "Skill Mentorship",
      desc: "Empower youth and widows with vocational training, coding, and business advice.",
      image: "/people2.jpeg",
      badge: "Knowledge",
    },
    {
      title: "Digital Advocacy",
      desc: "Amplify stories, manage campaigns, and spread hope across global networks.",
      image: "/people1.jpeg",
      badge: "Creative",
    },
  ];

  const faqs = [
    {
      q: "Who can volunteer with the Hephzibah Humanitarian Foundation?",
      a: "Anyone with a passion for helping others! We welcome students, medical professionals, educators, creatives, business owners, and retirees. Roles range from hands-on field outreach to remote digital contributions."
    },
    {
      q: "Do I need prior medical or professional qualifications?",
      a: "Not necessarily. While clinical roles require medical certification, most outreach roles—such as event logistics, food package distribution, youth tutoring, and media support—require no prior experience."
    },
    {
      q: "How often are volunteer field missions organized?",
      a: "We organize quarterly major medical and educational drives, along with monthly community welfare visits. You can participate based on your availability—whether full-time, weekends, or on-call."
    },
    {
      q: "Can I volunteer remotely?",
      a: "Yes! We have active digital roles in social media management, graphic design, content writing, grant research, and online mentorship."
    },
    {
      q: "Will I receive training before field deployment?",
      a: "Yes. Every volunteer receives a brief orientation session and safety guidelines before participating in any physical community outreach."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Page Header */}
      <PageHeader
        subtitle="Join Our Movement"
        title="Volunteer With Purpose"
        description="Turn your empathy into tangible action. Join hundreds of passionate changemakers delivering health, education, and hope to underserved communities."
        bgImage="/group.jpeg"
        alt="HH Foundation volunteers in the field"
      />

      {/* 2. Ways to Volunteer Pillars */}
      <section className="py-20 bg-white dark:bg-zinc-950/40 border-b border-slate-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Find Your Fit
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              How You Can Help Make a Difference
            </h2>
            <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
              Whether on the ground or behind a screen, your unique skills can ignite lasting transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {volunteerPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/70 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xxs font-bold uppercase tracking-wider text-white shadow-md">
                    {pillar.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-500/15 dark:bg-zinc-900 dark:border dark:border-zinc-800">
            <div className="text-center border-r border-blue-500/40 dark:border-zinc-800 last:border-r-0">
              <span className="block text-3xl font-extrabold font-poppins sm:text-4xl">
                <CountUp end={500} suffix="+" />
              </span>
              <span className="text-xs font-bold text-blue-150 uppercase tracking-widest dark:text-blue-400">Volunteers Registered</span>
            </div>
            <div className="text-center border-r border-blue-500/40 dark:border-zinc-800 last:border-r-0">
              <span className="block text-3xl font-extrabold font-poppins sm:text-4xl">
                <CountUp end={50} suffix="+" />
              </span>
              <span className="text-xs font-bold text-blue-150 uppercase tracking-widest dark:text-blue-400">Outreach Missions</span>
            </div>
            <div className="text-center border-r border-blue-500/40 dark:border-zinc-800 last:border-r-0">
              <span className="block text-3xl font-extrabold font-poppins sm:text-4xl">
                <CountUp end={100} suffix="%" />
              </span>
              <span className="text-xs font-bold text-blue-150 uppercase tracking-widest dark:text-blue-400">Grassroots Impact</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-extrabold font-poppins sm:text-4xl">
                <CountUp end={3} suffix="+" />
              </span>
              <span className="text-xs font-bold text-blue-150 uppercase tracking-widest dark:text-blue-400">Key Impact Sectors</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Volunteer Standalone Section (Room to Read Style) */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-950/20 border-b border-slate-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Why Volunteer?
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              Why Join the HH Foundation Network?
            </h2>
            <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
              Volunteering with us is more than giving your time—it's an opportunity to grow, connect, and transform lives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 mb-6">
                  <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins">Direct Grassroots Impact</h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  See the immediate, tangible result of your effort in real lives—delivering medical care, textbooks, and emergency aid to rural families.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 mb-6">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins">Empowered Community</h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Join a passionate network of doctors, educators, tech professionals, and youth leaders committed to social transformation.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 mb-6">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins">Growth & Recognition</h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Gain valuable field leadership experience, build project management skills, and receive official certificates of commendation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Volunteer Form Section */}
      <section id="apply-form" className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            
            {/* Info Column (Left) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Ready to Sign Up?
                </span>
                <h2 className="mt-3 text-3xl font-extrabold text-zinc-900 dark:text-white font-poppins sm:text-4xl">
                  Volunteer Registration Form
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  It takes less than 3 minutes to apply. Tell us your background, skills, and availability so we can match you with the right team.
                </p>
              </div>

              {/* Testimonial Quote Card */}
              <div className="rounded-3xl bg-blue-50/70 p-6 border border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/40 relative">
                <p className="text-xs italic leading-relaxed text-blue-950 dark:text-blue-200">
                  "Volunteering during the rural medical drive was one of the most rewarding experiences of my life. Seeing children receive free medication and checkups restored my faith in humanity."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0 border border-blue-300">
                    <Image
                      src="/team3.jpeg"
                      alt="Volunteer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-zinc-900 dark:text-white">Chioma N.</span>
                    <span className="block text-xxs text-blue-600 dark:text-blue-400 font-semibold">Field Medical Volunteer</span>
                  </div>
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="p-6 border border-zinc-200 rounded-3xl bg-white dark:bg-zinc-900 dark:border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Have Questions?</h4>
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                  If you have inquiries regarding volunteer roles or corporate partnerships, email our team directly at{" "}
                  <a href="mailto:info@hephzibahhumanitarianf.org" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                    info@hephzibahhumanitarianf.org
                  </a>.
                </p>
              </div>
            </div>

            {/* Stepper Form (Right Column) */}
            <div className="lg:col-span-7">
              {/* Stepper Header */}
              <div className="mb-6 rounded-2xl bg-white p-5 border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Step {currentStep} of 3
                  </span>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {currentStep === 1 && "Personal details"}
                    {currentStep === 2 && "Focus area & skills"}
                    {currentStep === 3 && "Schedule & context"}
                  </span>
                </div>
                {/* Stepper Track */}
                <div className="mt-3 h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6 rounded-3xl bg-white p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none">
                {/* Server side error display */}
                {error && (
                  <div className="flex items-center gap-2 rounded-2xl bg-red-50 p-4 text-xs font-semibold text-red-700 dark:bg-red-950/20 dark:text-red-400">
                    <ShieldAlert className="h-5 w-5 shrink-0" />
                    {error}
                  </div>
                )}

                {/* Hidden Inputs for Form Submission */}
                <input type="hidden" name="name" value={name} />
                <input type="hidden" name="email" value={email} />
                <input type="hidden" name="phone" value={phone} />
                <input type="hidden" name="location" value={location} />
                <input type="hidden" name="skills" value={getSkillsValue()} />
                <input type="hidden" name="availability" value={availability} />
                <input type="hidden" name="motivation" value={motivation} />

                {/* STEP 1: Basic Info */}
                {currentStep === 1 && (
                  <div className="space-y-5 animate-fadeIn">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins">Tell Us About Yourself</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Please provide your contact details so our team can reach you.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          id="name-visible"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                          placeholder="John Doe"
                        />
                        {errors.name && <span className="mt-1.5 block text-xs font-bold text-red-500">{errors.name}</span>}
                      </div>
                      <div>
                        <label htmlFor="email-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          id="email-visible"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                          placeholder="john@example.com"
                        />
                        {errors.email && <span className="mt-1.5 block text-xs font-bold text-red-500">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          id="phone-visible"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                          placeholder="+234 800 000 0000"
                        />
                        {errors.phone && <span className="mt-1.5 block text-xs font-bold text-red-500">{errors.phone}</span>}
                      </div>
                      <div>
                        <label htmlFor="location-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                          Current City & State
                        </label>
                        <input
                          id="location-visible"
                          type="text"
                          required
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                          placeholder="Enugu, Enugu State"
                        />
                        {errors.location && <span className="mt-1.5 block text-xs font-bold text-red-500">{errors.location}</span>}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Choose superpower */}
                {currentStep === 2 && (
                  <div className="space-y-5 animate-fadeIn">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins">Select Your Focus Area</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Select the superpower or field you wish to support.</p>
                    </div>

                    <div className="space-y-3">
                      {skillOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedCategory(opt.id)}
                          className={`flex cursor-pointer w-full items-start gap-4 rounded-2xl p-4 text-left border transition-all ${
                            selectedCategory === opt.id
                              ? "bg-blue-50/50 border-blue-500 dark:bg-blue-950/20"
                              : "bg-white border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-850"
                          }`}
                        >
                          <span className="text-2xl mt-0.5">{opt.icon}</span>
                          <div>
                            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{opt.title}</h4>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                              {opt.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>

                    {selectedCategory === "OTHER" && (
                      <div className="mt-4 animate-fadeIn">
                        <label htmlFor="customSkills-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                          Specify Your Skills / Specialty
                        </label>
                        <input
                          id="customSkills-visible"
                          type="text"
                          required
                          value={customSkills}
                          onChange={(e) => setCustomSkills(e.target.value)}
                          className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                          placeholder="e.g. Project Manager, PHP Programmer, Pediatric Doctor"
                        />
                      </div>
                    )}
                    {errors.skills && <span className="block text-xs font-bold text-red-500">{errors.skills}</span>}
                  </div>
                )}

                {/* STEP 3: Availability & Message */}
                {currentStep === 3 && (
                  <div className="space-y-5 animate-fadeIn">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins">Schedule & Motivation</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Almost there! Tell us when you are available and why you want to join us.</p>
                    </div>

                    <div>
                      <label htmlFor="availability-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Your Availability
                      </label>
                      <CustomSelect
                        value={availability}
                        onChange={setAvailability}
                        options={availabilityOptions}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label htmlFor="motivation-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Motivation Letter / Context (Optional)
                      </label>
                      <textarea
                        id="motivation-visible"
                        rows="4"
                        value={motivation}
                        onChange={(e) => setMotivation(e.target.value)}
                        className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                        placeholder="Tell us briefly why you wish to volunteer with the HH Foundation..."
                      />
                    </div>
                  </div>
                )}

                {/* Stepper Actions Buttons */}
                <div className="flex justify-between items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-850 transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <button
                      key="btn-next"
                      type="button"
                      onClick={handleNextStep}
                      className="flex items-center gap-2 cursor-pointer rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/10 transition-colors ml-auto"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      key="btn-submit"
                      type="submit"
                      disabled={isPending}
                      className="flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-bold text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 ml-auto"
                    >
                      {isPending ? (
                        <>
                          Submitting Application
                          <Loader2 className="h-4 w-4 animate-spin" /> 
                        </>
                      ) : (
                        "Submit Volunteer Application"
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Volunteer FAQ Accordion */}
      <section className="py-20 bg-white dark:bg-zinc-950/40 border-t border-slate-100 dark:border-zinc-900">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Got Questions?
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              Everything you need to know about volunteering with the Hephzibah Humanitarian Foundation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm font-bold text-zinc-900 dark:text-white font-poppins">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-zinc-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section className="py-16 bg-blue-600 text-white dark:bg-zinc-900 dark:border-t dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-extrabold font-poppins sm:text-3xl">
            Can't Volunteer in Person Right Now?
          </h2>
          <p className="mt-3 text-sm text-blue-100 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            You can still make a massive difference by sponsoring a medical supply kit or student scholarship.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-6 py-3 text-xs font-bold text-blue-600 hover:bg-blue-50 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 shadow-md transition-all"
            >
              Sponsor a Project
            </Link>
            <Link
              href="/projects"
              className="rounded-xl border border-white/30 bg-blue-700/40 px-6 py-3 text-xs font-bold text-white hover:bg-blue-700/60 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-750 transition-all"
            >
              Explore Active Campaigns
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
