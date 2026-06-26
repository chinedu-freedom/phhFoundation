import Image from "next/image";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Contact Us | PHH Foundation",
  description: "Get in touch with the PHH Foundation team. Find our office address, phone numbers, email details, and submission form.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&auto=format&fit=crop&q=80"
            alt="Office staff background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Contact Us</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-poppins">
            Get in Touch
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100">
            Have questions about our programs, scholarships, or how you can sponsor? Send us a message or call.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Form */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Side: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Main Info */}
              <div className="rounded-3xl border border-zinc-150 bg-white p-8 dark:bg-zinc-900 dark:border-zinc-800 shadow-lg shadow-zinc-200/30 dark:shadow-none">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins">Contact Info</h3>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  Feel free to contact us via any of the channels below.
                </p>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white font-poppins">Headquarters</h4>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-5">
                        PHH Innovation Center, Port Harcourt, Rivers State, Nigeria
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white font-poppins">Phone Lines</h4>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        +234 815 805 1119
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white font-poppins">Email Address</h4>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-semibold">
                        info@phhfoundation.org
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white font-poppins">Office Hours</h4>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        Mon - Fri: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Container */}
              <div className="rounded-3xl overflow-hidden border border-zinc-150 bg-zinc-100 h-60 relative dark:border-zinc-800">
                {/* Embedded Iframe Mock or Simulated Map graphic */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-blue-950 text-white">
                  <MapPin className="h-8 w-8 text-blue-400 animate-bounce mb-3" />
                  <h4 className="font-bold text-sm font-poppins">PHH Innovation Center Location</h4>
                  <p className="text-xs text-blue-200 mt-2">
                    Port Harcourt, Rivers State, Nigeria
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
