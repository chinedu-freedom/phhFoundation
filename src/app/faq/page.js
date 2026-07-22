import FAQList from "./FAQList";

export const metadata = {
  title: "Frequently Asked Questions | HH Foundation",
  description: "Find answers to questions about donations, volunteering, educational sponsorships, and financial transparency.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Information",
      items: [
        {
          question: "What is the Hephzibah Humanitarian Foundation?",
          answer: "Hephzibah Humanitarian Foundation is a non-profit humanitarian organization dedicated to providing hope and relief through educational scholarships, free medical outreach, women empowerment initiatives, and community development projects."
        },
        {
          question: "Where are you located and which regions do you serve?",
          answer: "Our main administrative headquarters is located in Nigeria. We primarily serve underserved rural and semi-urban communities across West Africa, focusing on communities with limited access to clean water, clinics, and quality schools."
        },
        {
          question: "Is the foundation registered?",
          answer: "Yes, Hephzibah Humanitarian Foundation is registered as a non-governmental organization (NGO) under corporate affairs regulations, governed by a board of trustees comprising reputable community leaders and professionals."
        }
      ]
    },
    {
      category: "Donations & Receipts",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We support multiple secure payment methods including local and international Credit/Debit cards via Paystack and Stripe, direct Bank Transfers, and USDT (crypto) wallets. All online payments are encrypted and secured."
        },
        {
          question: "Can I make an anonymous donation?",
          answer: "Yes, absolutely! On our donation form, you can check the 'Donate Anonymously' option. Your name and contact details will not be saved or published, though a secure receipt reference will still be generated for bookkeeping."
        },
        {
          question: "Will I receive a receipt for my donation?",
          answer: "Yes, unless you donate anonymously. A detailed PDF receipt and a thank-you letter will be sent automatically to the email address you provide as soon as your transaction is verified by the payment gateway."
        },
        {
          question: "How are the funds distributed?",
          answer: "At least 90% of all public donations go directly to funding field outreach campaigns, medical kits, school supplies, and vocational tools. The remaining 10% or less covers minor administrative operations and platform maintenance."
        }
      ]
    },
    {
      category: "Volunteering",
      items: [
        {
          question: "How do I apply to become a volunteer?",
          answer: "To volunteer, navigate to our 'Get Involved' page, fill in your details (including contact info, location, and skills), and submit. Once our administrators review your profile, they will update your status and reach out."
        },
        {
          question: "Are there specific skills required to volunteer?",
          answer: "We welcome volunteers from all backgrounds! We frequently need educators, medical staff, graphic designers, logistics handlers, and writers. However, passion and commitment are the primary criteria."
        },
        {
          question: "Is there any cost associated with volunteering?",
          answer: "No, volunteering with the Hephzibah Humanitarian Foundation is free. We do not charge volunteers. For remote or local campaigns, basic logistics, water, and lunch are typically provided by the foundation."
        }
      ]
    },
    {
      category: "Transparency & Programs",
      items: [
        {
          question: "How does the Educational Sponsorship work?",
          answer: "We identify children from low-income homes, orphans, or widows' children who cannot afford school fees. We match them with sponsorships funded by our campaigns, directly paying tuition fees to their school and tracking their term-by-term academic progress."
        },
        {
          question: "How does the foundation ensure financial transparency?",
          answer: "We publish annual financial audits and project reports outlining total donations received and detailed project spend. We also maintain a database transaction ledger, ensuring every single naira is fully accounted for."
        },
        {
          question: "Where can I read your safeguarding policies and application guidelines?",
          answer: "Our Child Protection & Safeguarding Policy, Scholarship Application Guide, and Data Privacy policies are fully accessible to view on our Resources & Policies page."
        }
      ]
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Support Center
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
          Have questions about sponsorships, donations, volunteering, or how we operate? Browse through our popular topics.
        </p>
      </div>

      <FAQList categories={faqCategories} />
    </div>
  );
}

