"use client";

import { useActionState, useEffect, useState, useRef } from "react";
import { createVolunteerApplicationAction } from "@/app/actions/volunteer";
import { Heart, Users, HandHeart, CheckCircle, ArrowRight, ArrowLeft, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedPage() {
  const [state, formAction, isPending] = useActionState(createVolunteerApplicationAction, null);
  const [success, setSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
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

  useEffect(() => {
    if (state?.success) {
      setSuccess(true);
    }
  }, [state]);

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

  // Determine final skills string
  const getSkillsValue = () => {
    if (selectedCategory === "OTHER") {
      return customSkills;
    }
    return selectedCategory;
  };

  if (success) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Application Received!
        </h1>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
          Thank you for applying to be a volunteer at HH Foundation. We have sent a confirmation email to the address provided. Our admin team will review your application soon.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Support Campaigns
          </Link>
        </div>
      </div>
    );
  }

  const skillOptions = [
    {
      id: "MEDICAL",
      icon: "🩺",
      title: "Medical & Healthcare Outreaches",
      description: "Sponsor and support our local clinical checkpoints, health screening campaigns, and medical camps.",
    },
    {
      id: "EDUCATION",
      icon: "🎓",
      title: "Education & Literacy Training",
      description: "Tutor students, donate educational materials, and volunteer in teaching orphanages.",
    },
    {
      id: "CREATIVE_MEDIA",
      icon: "🎨",
      title: "Creative & Media Support",
      description: "Provide graphic designs, photograph events, write newsletters, or coordinate digital reach.",
    },
    {
      id: "OPERATIONS",
      icon: "🤝",
      title: "Operations & Field Logistics",
      description: "Help build project setups, unpack distribution materials, or manage event queues.",
    },
    {
      id: "OTHER",
      icon: "⚡",
      title: "Other / Special Skills",
      description: "Any other expertise or professional support you'd like to bring directly to our team.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Join the Movement
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Become a Volunteer
        </h1>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
          Lend your voice, skills, and time to help us empower marginalized communities. Fill in the details below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Info Column (Left) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="rounded-3xl bg-blue-50/50 p-8 border border-blue-100 dark:bg-blue-950/10 dark:border-blue-900/30">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-400">Why Volunteer With Us?</h3>
            <ul className="mt-6 space-y-5 text-sm text-blue-950 dark:text-blue-300">
              <li className="flex gap-3">
                <Heart className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Make a direct, life-changing impact on local families and orphans.</span>
              </li>
              <li className="flex gap-3">
                <Users className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Join a passionate network of educators, doctors, and community builders.</span>
              </li>
              <li className="flex gap-3">
                <HandHeart className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Gain valuable project coordination, leadership, and field experience.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-zinc-200 rounded-3xl dark:border-zinc-800">
            <h4 className="font-bold text-zinc-900 dark:text-white">Need immediate support?</h4>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              If you have any questions about volunteer roles or locations, write to us at{" "}
              <a href="mailto:info@hephzibahhumanitarianf.org" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                info@hephzibahhumanitarianf.org
              </a>.
            </p>
          </div>
        </div>

        {/* Dynamic Multi-Step Form (Right) */}
        <div className="lg:col-span-8">
          {/* Stepper Header */}
          <div className="mb-8">
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
            <div className="mt-3 h-1.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          <form action={formAction} ref={formRef} className="space-y-6 rounded-3xl bg-white p-8 border border-zinc-200/80 shadow-2xl shadow-zinc-250/10 dark:bg-zinc-900 dark:border-zinc-800/80 dark:shadow-none">
            {/* Server side error display */}
            {state?.error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700 dark:bg-red-950/20 dark:text-red-400">
                <ShieldAlert className="h-5 w-5 shrink-0" />
                {state.error}
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
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">Please provide your contact details so we can reach you.</p>
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
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
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
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
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
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
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
                      className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
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
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">Select the superpower or field you wish to support. You can edit further in "Other".</p>
                </div>

                <div className="space-y-3">
                  {skillOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedCategory(opt.id)}
                      className={`flex w-full items-start gap-4 rounded-2xl p-4 text-left border transition-all ${
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
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">Almost there! Tell us when you are available and why you want to join us.</p>
                </div>

                <div>
                  <label htmlFor="availability-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Your Availability
                  </label>
                  <select
                    id="availability-visible"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="mt-2 block w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-3.5 text-xs text-zinc-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                  >
                    <option value="Flexible / On Call">Flexible / On Call</option>
                    <option value="Weekends Only">Weekends Only</option>
                    <option value="Weekdays Only">Weekdays Only</option>
                    <option value="Full-Time Availability">Full-Time Availability</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivation-visible" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Motivation Letter / Context (Optional)
                  </label>
                  <textarea
                    id="motivation-visible"
                    rows="5"
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
                  className="flex items-center gap-2 rounded-xl border border-zinc-200 px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-850 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/10 transition-colors ml-auto"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-bold text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 ml-auto"
                >
                  {isPending ? "Submitting Application..." : "Submit Volunteer Application"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
