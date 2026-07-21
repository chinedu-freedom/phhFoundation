import Link from "next/link";

export const metadata = {
  title: "Terms of Service | HH Foundation",
  description: "Read the governing terms and conditions regarding donations, platform usage, and volunteer agreements with the Hephzibah Humanitarian Foundation.",
};

const SECTIONS = [
  {
    title: "Acceptance of These Terms",
    content: (
      <div className="space-y-3">
        <p>Welcome to the official website of <strong>Hephzibah Humanitarian Foundation</strong> (&quot;the Foundation,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).</p>
        <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, online services, digital platforms, donation portals, applications, and related services.</p>
        <p>By accessing or using our website, you agree to be legally bound by these Terms. If you do not agree, please discontinue use of the website.</p>
      </div>
    )
  },
  {
    title: "About the Foundation",
    content: (
      <p>
        Hephzibah Humanitarian Foundation is a non-profit, non-governmental humanitarian organization established to improve lives through humanitarian assistance, education, healthcare, poverty reduction, community development, advocacy, emergency response, environmental sustainability, and related charitable activities in Nigeria and internationally.
      </p>
    )
  },
  {
    title: "Eligibility",
    content: (
      <div className="space-y-3">
        <p>You may use this website only if:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>you have legal capacity to enter into binding agreements under applicable law;</li>
          <li>the information you provide is accurate and current; and</li>
          <li>your use complies with these Terms and all applicable laws.</li>
        </ul>
        <p>Where a user is under the age of 18, use of certain services may require the consent or supervision of a parent or legal guardian.</p>
      </div>
    )
  },
  {
    title: "Acceptable Use",
    content: (
      <div className="space-y-3">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>violate any applicable law or regulation;</li>
          <li>upload malicious software, viruses, or harmful code;</li>
          <li>interfere with the security or operation of the website;</li>
          <li>attempt unauthorized access to our systems;</li>
          <li>impersonate another individual or organization;</li>
          <li>submit false or misleading information;</li>
          <li>misuse donation platforms;</li>
          <li>harass, threaten, or abuse other users;</li>
          <li>copy or reproduce website content without authorization;</li>
          <li>engage in fraudulent fundraising using the Foundation&apos;s name, logo, or reputation.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Donations",
    content: (
      <div className="space-y-3">
        <p>Donations made through the Foundation are voluntary and support our charitable mission.</p>
        <p>Unless required by law or expressly stated, donations are generally non-refundable.</p>
        <p>The Foundation reserves the right to decline or refund any donation where necessary to comply with applicable laws, sanctions, anti-money laundering obligations, or ethical standards.</p>
      </div>
    )
  },
  {
    title: "Volunteer Services",
    content: (
      <div className="space-y-3">
        <p>Individuals applying to volunteer acknowledge that:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>submission of an application does not guarantee acceptance;</li>
          <li>volunteer opportunities depend on organizational needs;</li>
          <li>volunteers must comply with Foundation policies and safeguarding requirements;</li>
          <li>the Foundation may suspend or terminate volunteer participation where appropriate.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Partnerships",
    content: (
      <div className="space-y-3">
        <p>Organizations seeking partnership with the Foundation may submit expressions of interest through designated channels.</p>
        <p>Submission of a proposal does not create any contractual relationship until a written agreement is executed by authorized representatives.</p>
      </div>
    )
  },
  {
    title: "Intellectual Property",
    content: (
      <div className="space-y-3">
        <p>Unless otherwise stated, all content on this website, including logos, trademarks, text, photographs, graphics, reports, publications, videos, software, databases, and designs, is owned by or licensed to Hephzibah Humanitarian Foundation and is protected by applicable intellectual property laws.</p>
        <p>No content may be reproduced, distributed, modified, sold, or publicly displayed without prior written permission, except where permitted by law.</p>
      </div>
    )
  },
  {
    title: "User Content",
    content: (
      <div className="space-y-3">
        <p>Where users submit comments, testimonials, photographs, stories, applications, or other content, they grant the Foundation a non-exclusive, worldwide, royalty-free licence to use, reproduce, publish, adapt, and display such content for humanitarian, educational, promotional, reporting, and fundraising purposes, subject to applicable privacy laws.</p>
        <p>Users confirm they have the right to submit such content.</p>
      </div>
    )
  },
  {
    title: "Privacy",
    content: (
      <p>
        Your use of this website is also governed by our <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Privacy Policy</Link>. By using the website, you acknowledge that your personal information will be processed in accordance with that Privacy Policy.
      </p>
    )
  },
  {
    title: "Third-Party Services",
    content: (
      <p>
        Our website may contain links to third-party websites or services. The Foundation is not responsible for the content, security, availability, or privacy practices of external websites. Access to third-party websites is at your own risk.
      </p>
    )
  },
  {
    title: "International Use",
    content: (
      <p>
        The Foundation operates internationally. Users accessing this website from outside Nigeria are responsible for complying with the laws of their own jurisdictions. Nothing in these Terms authorizes activities prohibited by local law.
      </p>
    )
  },
  {
    title: "Sanctions and Compliance",
    content: (
      <p>
        The Foundation reserves the right to refuse donations, partnerships, registrations, or services where required to comply with applicable sanctions, anti-money laundering laws, anti-terrorism financing regulations, export controls, or other legal obligations.
      </p>
    )
  },
  {
    title: "Disclaimer",
    content: (
      <p>
        The website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Although we strive to ensure accuracy, we do not guarantee that all information is complete, current, or error-free. Nothing on this website constitutes legal, financial, medical, or professional advice.
      </p>
    )
  },
  {
    title: "Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p>To the fullest extent permitted by applicable law, Hephzibah Humanitarian Foundation, its Trustees, officers, employees, volunteers, partners, and affiliates shall not be liable for any indirect, incidental, consequential, punitive, or special damages arising from:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>use of the website;</li>
          <li>inability to access the website;</li>
          <li>reliance on website content;</li>
          <li>interruptions or technical failures;</li>
          <li>cyberattacks beyond our reasonable control;</li>
          <li>unauthorized access to user information despite reasonable security measures.</li>
        </ul>
        <p>Nothing in these Terms excludes liability where exclusion is prohibited by law.</p>
      </div>
    )
  },
  {
    title: "Indemnification",
    content: (
      <div className="space-y-3">
        <p>You agree to indemnify and hold harmless Hephzibah Humanitarian Foundation, its Trustees, officers, employees, volunteers, and representatives from any claims, liabilities, damages, costs, or expenses arising from:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>your breach of these Terms;</li>
          <li>your misuse of the website;</li>
          <li>violation of applicable laws; or</li>
          <li>infringement of another person&apos;s rights.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Suspension and Termination",
    content: (
      <p>
        The Foundation may suspend, restrict, or terminate access to the website without notice where necessary to protect website security, investigate suspected misconduct, comply with legal obligations, or protect the Foundation&apos;s reputation or operations.
      </p>
    )
  },
  {
    title: "Force Majeure",
    content: (
      <p>
        The Foundation shall not be liable for any failure or delay in performing its obligations where caused by circumstances beyond its reasonable control, including natural disasters, armed conflict, terrorism, civil unrest, epidemics, pandemics, governmental actions, power failures, or internet disruptions.
      </p>
    )
  },
  {
    title: "Changes to These Terms",
    content: (
      <p>
        The Foundation reserves the right to amend these Terms at any time. Updated Terms will become effective upon publication on the website unless otherwise stated. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.
      </p>
    )
  },
  {
    title: "Governing Law and Dispute Resolution",
    content: (
      <div className="space-y-3">
        <p>These Terms shall be governed by the laws of the Federal Republic of Nigeria. Where the Foundation operates internationally, mandatory laws of other jurisdictions may also apply where required.</p>
        <p>The parties shall first seek to resolve disputes amicably through negotiation. If a dispute cannot be resolved through negotiation, it may be referred to mediation before any court proceedings, unless urgent legal relief is required. Nothing in this clause limits the Foundation&apos;s right to seek appropriate legal remedies in any competent court where necessary.</p>
      </div>
    )
  },
  {
    title: "Severability",
    content: (
      <p>
        If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
      </p>
    )
  },
  {
    title: "Entire Agreement",
    content: (
      <p>
        These Terms, together with the Privacy Policy and any other policies expressly incorporated by reference, constitute the entire agreement between the Foundation and users regarding the use of this website.
      </p>
    )
  },
  {
    title: "Contact Information",
    content: (
      <div className="space-y-2 mt-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm">
        <p><strong>Hephzibah Humanitarian Foundation</strong></p>
        <p><strong>Email:</strong> <a href="mailto:info@hephzibahhumanitarianf.org" className="text-blue-600 dark:text-blue-400 hover:underline">info@hephzibahhumanitarianf.org</a></p>
        <p><strong>Telephone:</strong> 08075889097</p>
        <p><strong>Registered Office:</strong> 10 Prof. Daddy Hezekiah Avenue, Inland-town Onitsha, Anambra State, Nigeria</p>
        <p><strong>Website:</strong> <a href="https://hephzibahhumanitarianf.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">hephzibahhumanitarianf.org</a></p>
      </div>
    )
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-5xl">
            Terms of Service
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <span>Hephzibah Humanitarian Foundation</span>
            <span>•</span>
            <span>Last Updated: July 16, 2026</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-sm space-y-10 text-sm leading-8 text-zinc-700 dark:text-zinc-300">
          {SECTIONS.map((section, idx) => (
            <section key={idx} className="space-y-4 pb-10 border-b border-zinc-100 last:border-0 last:pb-0 dark:border-zinc-800/60">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins">
                {idx + 1}. {section.title}
              </h2>
              <div className="text-zinc-650 dark:text-zinc-400 leading-7 text-xs sm:text-sm mt-3">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
