import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "PHH Foundation | Transforming Lives, Building Hope",
  description: "Dedicated to humanitarian aid, educational sponsorships, healthcare outreach, and skill empowerment.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-zinc-900 bg-neutral-bg dark:bg-zinc-950 dark:text-zinc-100 font-sans">
        <Header />
        <main className="flex-1 flex flex-col pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


