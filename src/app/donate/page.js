import { prisma } from "@/lib/db";
import DonateForm from "./DonateForm";
import DonateFaq from "./DonateFaq";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Make a Donation | Hephzibah Humanitarian Foundation",
  description: "Support direct grassroots campaigns. Donate securely via Paystack, Stripe, Card, or Direct Bank Wire Transfer.",
};

export default async function DonatePage({ searchParams }) {
  // Fetch active campaigns for dropdown selection
  let campaigns = [];
  try {
    campaigns = await prisma.campaign.findMany({
      where: { status: "ACTIVE" },
      select: {
        id: true,
        title: true,
      },
    });
  } catch (error) {
    console.error("Database fetch failed in donate page SSR:", error);
  }
  const resolvedParams = await searchParams;
  const initialCampaignId = resolvedParams?.campaignId || "";
  const initialAmount = resolvedParams?.amount || "";
  const paymentRef = resolvedParams?.reference || "";
  const isPaystackPayment = resolvedParams?.payment === "paystack";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <PageHeader
        subtitle="Empower Communities"
        title="Every Gift Changes a Life"
        description="100% of public donations directly fund grassroots healthcare, orphan education, and youth empowerment projects across vulnerable communities."
        bgImage="/people1.jpeg"
        alt="Hephzibah Foundation outreach"
      />

      {/* 2. Original Form Section (Centered) */}
      <section className="py-12 md:py-20 bg-slate-50 dark:bg-zinc-950/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              Make a Direct Impact
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Your generous contribution empowers orphans, supports widows, and delivers vital medical aid across vulnerable communities.
            </p>
          </div>

          <DonateForm 
            campaigns={campaigns} 
            initialCampaignId={initialCampaignId} 
            initialAmount={initialAmount} 
            paymentRef={paymentRef}
            isPaystackPayment={isPaystackPayment}
          />
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="py-16 bg-white dark:bg-zinc-950/40 border-t border-slate-100 dark:border-zinc-900">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Donor Assistance
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-4xl">
              Frequently Asked Donation Questions
            </h2>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              Clear answers regarding payments, security, and allocation.
            </p>
          </div>

          <DonateFaq />
        </div>
      </section>

      {/* 4. Section Before Footer */}
      <section className="py-16 bg-blue-600 text-white dark:bg-zinc-900 dark:border-t dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-extrabold font-poppins sm:text-3xl">
            Want to See How Every Naira Is Spent?
          </h2>
          <p className="mt-3 text-sm text-blue-100 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Use our interactive transparency calculator to inspect exactly how funds are distributed across medicine, education, and field logistics.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/transparency"
              className="rounded-xl bg-white px-6 py-3 text-xs font-bold text-blue-600 hover:bg-blue-50 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 shadow-md transition-all flex items-center gap-2"
            >
              Explore Financial Portal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
