import Link from "next/link";
import { Scale, FileText, Landmark, ShieldCheck, Users, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Constitution | HH Foundation",
  description: "Read the official Constitution of Hephzibah Humanitarian Foundation detailing our aims, objectives, legal framework, and governance rules.",
};

export default function ConstitutionPage() {
  const articles = [
    {
      id: "art-1",
      num: "1",
      title: "Name",
      content: "The name of the organization shall be \"HEPHZIBAH HUMANITARIAN FOUNDATION\"."
    },
    {
      id: "art-2",
      num: "2",
      title: "Legal Status",
      content: "The Foundation shall be a non-profit, non-governmental, non-political, and charitable organization registered under the laws of the Federal Republic of Nigeria. It may establish offices, branches, country chapters, representative offices, or affiliated programs in any country where it is legally permitted to operate."
    },
    {
      id: "art-3",
      num: "3",
      title: "Registered Office",
      content: "The registered headquarters shall be situated in Nigeria. The Foundation may establish State Offices within Nigeria, Regional Offices, International Country Offices, Liaison or Representative Offices, Project Offices, and Virtual Offices where permitted by law."
    },
    {
      id: "art-4",
      num: "4",
      title: "Aims and Objectives",
      content: "The Foundation shall pursue charitable and humanitarian purposes within Nigeria and internationally, including humanitarian relief, poverty alleviation, education, healthcare, women and youth empowerment, child welfare, disability inclusion, environmental sustainability, peacebuilding, WASH initiatives, food security, support for refugees and IDPs, disaster recovery, human rights advocacy, capacity building, research and policy development, promotion of the SDGs, partnerships with governments and institutions, and other lawful charitable activities consistent with its mission."
    },
    {
      id: "art-5",
      num: "5",
      title: "Board of Trustees",
      content: "Minimum Number: Three (3) Trustees. Maximum Number: Fifteen (15) Trustees. Qualification: Trustees shall be persons of integrity with relevant experience and commitment to the Foundation’s mission. Trustees may be citizens of Nigeria or any other country, subject to applicable laws. Tenure: Trustees shall serve a term of four (4) years and may be reappointed for one additional term. A Trustee ceases to hold office if they resign, their tenure expires without reappointment, they are declared bankrupt, suffer mental incapacity, or are convicted of a criminal offence involving dishonesty or homicide by a court of competent jurisdiction."
    },
    {
      id: "art-6",
      num: "6",
      title: "International Operations",
      content: "The Foundation may operate humanitarian and development projects worldwide, register branches and affiliates where required, employ staff and volunteers from any country, receive local and international grants and donations, join humanitarian networks, enter into partnerships and MOUs, participate in global initiatives, and comply with the laws of every jurisdiction in which it operates."
    },
    {
      id: "art-7",
      num: "7",
      title: "Membership",
      content: "Membership shall be open to individuals and organizations worldwide that support the Foundation’s objectives and agree to abide by this Constitution."
    },
    {
      id: "art-8",
      num: "8",
      title: "Officers",
      content: "The Foundation shall have a Chairperson who is the Executive Director/Chief Executive Officer, Secretary, Vice Chairperson who is the Director of Operations/Chief Organizing Officer (COO), Treasurer, Financial Secretary, Director of Programmes, Director of International Partnerships, Director of Communications, Legal Adviser, and any additional officers approved by the Board."
    },
    {
      id: "art-9",
      num: "9",
      title: "Meetings",
      content: "Meetings may be held physically, virtually, or through any approved electronic platform. International Trustees shall enjoy equal participation and voting rights."
    },
    {
      id: "art-10",
      num: "10",
      title: "Finance",
      content: "The Foundation may receive funding from donations, grants, international donor agencies, CSR initiatives, philanthropic foundations, governments, UN agencies, fundraising campaigns, memberships, endowments, lawful investments, social enterprises, and any other lawful source. All funds shall be used solely to advance the Foundation’s charitable objectives."
    },
    {
      id: "art-11",
      num: "11",
      title: "Banking",
      content: "The Foundation may operate bank accounts in Nigeria and other countries where legally authorized. The Board shall determine authorized signatories and financial controls."
    },
    {
      id: "art-12",
      num: "12",
      title: "Accountability",
      content: "The Foundation shall maintain transparent financial records and be subject to periodic internal and external audits in accordance with applicable laws and donor requirements."
    },
    {
      id: "art-13",
      num: "13",
      title: "Amendment",
      content: "This Constitution may be amended by a two-thirds majority vote of the Board of Trustees."
    },
    {
      id: "art-14",
      num: "14",
      title: "Dissolution",
      content: "Upon dissolution, all remaining assets shall be transferred to one or more registered charitable organizations with similar objectives in accordance with applicable laws. No Trustee, officer, or member shall benefit personally from the distribution of assets."
    },
    {
      id: "art-15",
      num: "15",
      title: "Compliance",
      content: "The Foundation shall conduct its affairs in accordance with the Constitution of the Federal Republic of Nigeria, applicable international laws, donor regulations, anti-money laundering and counter-terrorism financing requirements, anti-corruption standards, and the laws of every country in which it operates."
    },
    {
      id: "art-16",
      num: "16",
      title: "Adoption",
      content: "This Constitution shall take effect immediately upon its adoption by the Founding Trustees of Hephzibah Humanitarian Foundation."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-16">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header Banner */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 mb-5 border border-blue-100 dark:border-blue-900/30 shadow-sm">
            <Scale className="h-7 w-7" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-poppins">
            Constitution & Governing Charter
          </h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
            The legal structure, aims, and operational parameters of Hephzibah Humanitarian Foundation.
          </p>
        </div>

        {/* Governing Info Card */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-sm mb-10 space-y-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-2.5">
            <Landmark className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Preamble
          </h2>
          <p className="text-sm leading-8 text-zinc-650 dark:text-zinc-300 font-medium">
            We, the Founding Trustees of Hephzibah Humanitarian Foundation, recognizing the need to promote human dignity, social justice, sustainable development, and humanitarian service, hereby establish this Foundation as a non-profit, non-political, and non-religious charitable organization. We adopt this Constitution to govern its operations within the Federal Republic of Nigeria and internationally, in accordance with applicable laws and internationally accepted humanitarian principles.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6 mb-12">
          {articles.map((art) => (
            <div 
              key={art.id} 
              id={art.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-poppins flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 border border-blue-100/30">
                  {art.num}
                </span>
                Article {art.num}: {art.title}
              </h3>
              <p className="mt-4 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
                {art.content}
              </p>
            </div>
          ))}
        </div>

        {/* Signatories Area */}
        <div className="bg-zinc-50/50 dark:bg-zinc-950/30 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 text-center">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">Authorized Signatories</h3>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
            Signatures on file under corporate affairs registration records.
          </p>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-5">
              <span className="text-xxs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Trustee CEO</span>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white mt-1">Chairperson</h4>
              <p className="text-xxs text-zinc-405 dark:text-zinc-500 mt-0.5">Chief Executive Officer</p>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-5">
              <span className="text-xxs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Trustee Sec</span>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white mt-1">Secretary</h4>
              <p className="text-xxs text-zinc-405 dark:text-zinc-500 mt-0.5">Board of Trustees</p>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-5 sm:col-span-2 lg:col-span-1">
              <span className="text-xxs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Trustee COO</span>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white mt-1">Director of Operations</h4>
              <p className="text-xxs text-zinc-405 dark:text-zinc-500 mt-0.5">Chief Organizing Officer</p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link 
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <FileText className="h-4 w-4" /> Back to Resources & Reports
          </Link>
        </div>

      </div>
    </div>
  );
}
