"use client";

import { useEffect, useState } from "react";
import { submitPartnerForm } from "@/app/actions/partner";
import { CheckCircle, AlertTriangle, Loader2, Building, User, Mail, Phone, MessageSquare, HelpCircle } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";
import { toast } from "sonner";

export default function PartnerForm() {
  const [success, setSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState({});

  // Field states for validation
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [partnerType, setPartnerType] = useState("GIVE");
  const [message, setMessage] = useState("");

  const partnerOptions = [
    { value: "GIVE", label: "GIVE (Classroom Sponsorships, Scholarships, Material Donations)" },
    { value: "ENGAGE", label: "ENGAGE (Employee Volunteering, Corporate Match Campaigns)" },
    { value: "AMPLIFY", label: "AMPLIFY (Advocacy, Branding, Product Co-collaborations)" },
    { value: "SCALE", label: "SCALE (Multi-year Intervention Projects, Program Scaling)" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!orgName.trim()) newErrors.orgName = "Organization name is required";
    if (!contactName.trim()) newErrors.contactName = "Contact person name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!message.trim()) newErrors.message = "Message or proposal details are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsPending(true);

    const formData = new FormData();
    formData.append("orgName", orgName);
    formData.append("contactName", contactName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("partnerType", partnerType);
    formData.append("message", message);

    try {
      const res = await submitPartnerForm(null, formData);
      if (res?.success) {
        toast.success("Partnership proposal submitted successfully!");
        setSuccess(true);
        // Reset form
        setOrgName("");
        setContactName("");
        setEmail("");
        setPhone("");
        setPartnerType("GIVE");
        setMessage("");
      } else if (res?.error) {
        setErrors({ form: res.error });
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Failed to submit partnership proposal. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-3xl border border-green-100 bg-green-50/50 p-8 dark:bg-green-950/10 dark:border-green-900/30 text-center animate-fadeIn">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white font-poppins">
          Inquiry Submitted Successfully!
        </h3>
        <p className="mt-2 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed max-w-md mx-auto">
          Thank you for reaching out. We have sent a confirmation email to <span className="font-semibold text-blue-600 dark:text-blue-400">{email || "your inbox"}</span>. Our partnership coordinator will follow up with you within 2-3 business days.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-lg cursor-pointer bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-100/75 bg-white p-8 dark:bg-zinc-900 dark:border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.025)] relative backdrop-blur-md">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
      
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins mb-1">
        Ready to Partner with Us?
      </h3>
      <p className="text-xs text-zinc-550 dark:text-zinc-400 mb-6">
        Fill out the form below, and our team will design a customized impact proposal for your organization.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {errors.form && (
          <div className="rounded-xl bg-red-50 p-4 text-xs font-bold text-red-650 flex items-center gap-2 dark:bg-red-950/20 dark:text-red-400">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>{errors.form}</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Org Name */}
          <div>
            <label htmlFor="orgName" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Organization / Brand Name
            </label>
            <div className="relative mt-2">
              <Building className="absolute left-3 top-3.5 h-4 w-4 text-zinc-400" />
              <input
                id="orgName"
                name="orgName"
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="e.g. Acme Corp Foundation"
                className={`block w-full rounded-lg border ${
                  errors.orgName ? "border-red-500" : "border-zinc-200/50 dark:border-zinc-800/80"
                } bg-zinc-50 py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900`}
              />
            </div>
            {errors.orgName && <span className="mt-1 block text-xs font-bold text-red-500">{errors.orgName}</span>}
          </div>

          {/* Contact Person */}
          <div>
            <label htmlFor="contactName" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Contact Representative
            </label>
            <div className="relative mt-2">
              <User className="absolute left-3 top-3.5 h-4 w-4 text-zinc-400" />
              <input
                id="contactName"
                name="contactName"
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Jane Doe"
                className={`block w-full rounded-lg border ${
                  errors.contactName ? "border-red-500" : "border-zinc-200/50 dark:border-zinc-800/80"
                } bg-zinc-50 py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900`}
              />
            </div>
            {errors.contactName && <span className="mt-1 block text-xs font-bold text-red-500">{errors.contactName}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Corporate Email Address
            </label>
            <div className="relative mt-2">
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-zinc-400" />
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. partner@acme.org"
                className={`block w-full rounded-lg border ${
                  errors.email ? "border-red-500" : "border-zinc-200/50 dark:border-zinc-800/80"
                } bg-zinc-50 py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900`}
              />
            </div>
            {errors.email && <span className="mt-1 block text-xs font-bold text-red-500">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Phone Number
            </label>
            <div className="relative mt-2">
              <Phone className="absolute left-3 top-3.5 h-4 w-4 text-zinc-400" />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +234 803 123 4567"
                className={`block w-full rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-zinc-200/50 dark:border-zinc-800/80"
                } bg-zinc-50 py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900`}
              />
            </div>
            {errors.phone && <span className="mt-1 block text-xs font-bold text-red-500">{errors.phone}</span>}
          </div>
        </div>

        {/* Partnership Pathway */}
        <div>
          <label htmlFor="partnerType" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            Partnership Pathway / Pathway Type
          </label>
          <div className="mt-2">
            <input type="hidden" name="partnerType" value={partnerType} />
            <CustomSelect
              value={partnerType}
              onChange={setPartnerType}
              options={partnerOptions}
              className="w-full"
              icon={<HelpCircle className="h-4 w-4" />}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            Collaboration Details
          </label>
          <div className="relative mt-2">
            <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-zinc-400" />
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your brand goals, target focus areas (Enugu primary schools, maternal healthcare, widows skills, etc.), and how you'd like to partner..."
              className={`block w-full rounded-xl border ${
                errors.message ? "border-red-500" : "border-zinc-200/50 dark:border-zinc-800/80"
              } bg-zinc-50 py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900`}
            />
          </div>
          {errors.message && <span className="mt-1 block text-xs font-bold text-red-500">{errors.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-4 shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50"
        >
          {isPending ? (
            <>
            Submitting
            <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
          "Submit Partnership Proposal"
          )}
        </button>
      </form>
    </div>
  );
}
