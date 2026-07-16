import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://phhfoundation.org"),
  title: {
    default: "HEPHZIBAH Humanitarian Foundation | HHF",
    template: "%s | HEPHZIBAH Humanitarian Foundation"
  },
  description: "HEPHZIBAH Humanitarian Foundation (HHF) is a non-governmental organization dedicated to improving lives through humanitarian assistance, educational scholarships, healthcare outreach, skills development, and community empowerment.",
  keywords: [
    "Humanitarian aid Nigeria", 
    "Education scholarships", 
    "Healthcare outreach Africa", 
    "Poverty alleviation", 
    "HH Foundation",
    "HEPHZIBAH Humanitarian Foundation",
    "NGO Nigeria",
    "Charity donations Nigeria"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HEPHZIBAH Humanitarian Foundation (HHF)",
    description: "Transforming lives and building hope through educational scholarships, healthcare outreach, and community empowerment.",
    url: "https://phhfoundation.org",
    siteName: "HEPHZIBAH Humanitarian Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HEPHZIBAH Humanitarian Foundation (HHF)",
    description: "Transforming lives and building hope through educational scholarships, healthcare outreach, and community empowerment.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-zinc-900 bg-neutral-bg dark:bg-zinc-950 dark:text-zinc-100 font-sans">
        <Analytics />
        <Header />
        <main className="flex-1 flex flex-col pt-20">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}


