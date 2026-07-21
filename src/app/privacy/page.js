import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | HH Foundation",
  description: "Learn how the Hephzibah Humanitarian Foundation collects, uses, and secures your personal and transactional information.",
};

const SECTIONS = [
  {
    title: "Introduction",
    content: (
      <div className="space-y-3">
        <p>Hephzibah Humanitarian Foundation (&quot;the Foundation,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy, confidentiality, and security of the personal information entrusted to us by our donors, beneficiaries, volunteers, employees, partners, website visitors, and members of the public.</p>
        <p>This Privacy Policy explains how we collect, use, disclose, store, and protect personal information obtained through our website and other interactions with the Foundation.</p>
        <p>By using our website or engaging with our services, you acknowledge that you have read and understood this Privacy Policy.</p>
      </div>
    )
  },
  {
    title: "Scope",
    content: (
      <div className="space-y-3">
        <p>This Privacy Policy applies to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Our official website.</li>
          <li>Online donation platforms.</li>
          <li>Volunteer and employment applications.</li>
          <li>Grant and partnership applications.</li>
          <li>Email communications.</li>
          <li>Events and registration forms.</li>
          <li>Social media interactions where applicable.</li>
          <li>Any other services operated by the Foundation.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Information We Collect",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-zinc-800 dark:text-zinc-200">Personal Identification Information</h4>
          <p className="mt-1 text-zinc-650 dark:text-zinc-400">Full name, date of birth (where necessary), gender (optional), nationality, residential address, email address, and telephone number.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-800 dark:text-zinc-200">Donation Information</h4>
          <p className="mt-1 text-zinc-650 dark:text-zinc-400">Donation amount, payment confirmation, donation history, and Gift Aid or tax-related information where applicable.</p>
          <p className="mt-1 text-xs text-zinc-550 dark:text-zinc-400"><strong>Note:</strong> We do not store your full payment card details. Payments are processed through secure third-party payment providers.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-800 dark:text-zinc-200">Volunteer and Employment Information</h4>
          <p className="mt-1 text-zinc-650 dark:text-zinc-400">Curriculum Vitae (CV), educational qualifications, employment history, professional certifications, references, and background information where legally permitted.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-800 dark:text-zinc-200">Beneficiary Information</h4>
          <p className="mt-1 text-zinc-650 dark:text-zinc-400">Where necessary for delivering humanitarian services, we may collect information relating to household information, program eligibility, demographic information, and emergency contact details.</p>
          <p className="mt-1 text-xs text-zinc-550 dark:text-zinc-400">We only collect the minimum information required to administer our programmes.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-800 dark:text-zinc-200">Technical Information</h4>
          <p className="mt-1 text-zinc-650 dark:text-zinc-400">When you visit our website, we may automatically collect IP address, browser type, device information, operating system, pages visited, date and time of access, referral websites, cookies and similar technologies.</p>
        </div>
      </div>
    )
  },
  {
    title: "How We Use Your Information",
    content: (
      <div className="space-y-3">
        <p>We use personal information to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Deliver humanitarian programmes.</li>
          <li>Process donations.</li>
          <li>Respond to enquiries.</li>
          <li>Manage volunteer opportunities.</li>
          <li>Recruit employees.</li>
          <li>Administer events.</li>
          <li>Improve our website.</li>
          <li>Send newsletters (with your consent where required).</li>
          <li>Maintain financial records.</li>
          <li>Comply with legal obligations.</li>
          <li>Prevent fraud and ensure website security.</li>
          <li>Prepare reports for donors and regulators.</li>
          <li>Improve programme effectiveness.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Legal Basis for Processing",
    content: (
      <div className="space-y-3">
        <p>Where applicable, we process personal information based on:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Your consent.</li>
          <li>Performance of a contract.</li>
          <li>Compliance with legal obligations.</li>
          <li>Protection of vital interests.</li>
          <li>Legitimate interests consistent with our charitable objectives.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Cookies",
    content: (
      <p>
        Our website may use cookies to improve website functionality, remember user preferences, measure website performance, understand visitor behaviour, and enhance user experience. You may disable cookies through your browser settings, although some website features may not function properly.
      </p>
    )
  },
  {
    title: "Information Sharing",
    content: (
      <div className="space-y-3">
        <p>We do not sell or rent personal information. We may share information with:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Government agencies where required by law.</li>
          <li>Financial institutions for payment processing.</li>
          <li>Technology service providers.</li>
          <li>Independent auditors.</li>
          <li>Legal advisers.</li>
          <li>Partner organizations involved in programme delivery.</li>
          <li>International donors where reporting obligations exist.</li>
        </ul>
        <p>Such disclosures are limited to what is necessary and subject to appropriate safeguards.</p>
      </div>
    )
  },
  {
    title: "International Data Transfers",
    content: (
      <p>
        As an international humanitarian organization, we may transfer personal information outside Nigeria where necessary to support our programmes, partnerships, or operations. Where such transfers occur, we will implement appropriate safeguards to protect personal information in accordance with applicable laws.
      </p>
    )
  },
  {
    title: "Data Security",
    content: (
      <p>
        We employ appropriate administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, disclosure, or destruction. While we strive to safeguard all personal information, no method of electronic transmission or storage is completely secure.
      </p>
    )
  },
  {
    title: "Data Retention",
    content: (
      <p>
        We retain personal information only for as long as necessary to deliver our services, meet legal obligations, resolve disputes, maintain financial records, support audits, and protect our legitimate interests. When information is no longer required, it will be securely deleted or anonymized.
      </p>
    )
  },
  {
    title: "Your Rights",
    content: (
      <div className="space-y-3">
        <p>Subject to applicable law, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Request access to your personal information.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of personal information where appropriate.</li>
          <li>Restrict or object to certain processing activities.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Request a copy of your information in a portable format where applicable.</li>
          <li>Lodge a complaint with the appropriate data protection authority.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Children's Privacy",
    content: (
      <p>
        The Foundation is committed to protecting children. Where our programmes involve children, personal information will only be collected where legally permitted and, where appropriate, with the consent of a parent, guardian, or authorized representative.
      </p>
    )
  },
  {
    title: "Third-Party Links",
    content: (
      <p>
        Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites. Users should review the privacy policies of those websites before providing personal information.
      </p>
    )
  },
  {
    title: "Changes to this Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our operations or legal requirements. The revised version will be posted on our website together with the updated effective date.
      </p>
    )
  },
  {
    title: "Contact Us",
    content: (
      <div className="space-y-2 mt-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm">
        <p><strong>Hephzibah Humanitarian Foundation</strong></p>
        <p><strong>Email:</strong> <a href="mailto:info@hephzibahhumanitarianf.org" className="text-blue-600 dark:text-blue-400 hover:underline">info@hephzibahhumanitarianf.org</a></p>
        <p><strong>Telephone:</strong> 08075889097</p>
        <p><strong>Registered Office:</strong> 10 Prof. Daddy Hezekiah Avenue, Inland-town Onitsha, Anambra State, Nigeria</p>
        <p><strong>Website:</strong> <a href="https://hephzibahhumanitarianf.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">hephzibahhumanitarianf.org</a></p>
      </div>
    )
  },
  {
    title: "Governing Law",
    content: (
      <p>
        This Privacy Policy shall be governed by the laws of the Federal Republic of Nigeria. Where the Foundation processes personal information in other jurisdictions, it will also endeavor to comply with applicable data protection laws in those jurisdictions to the extent required.
      </p>
    )
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins sm:text-5xl">
            Privacy Policy
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
