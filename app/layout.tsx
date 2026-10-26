import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { programKeywords } from "@/lib/programs";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindCraft Academy | Discover. Develop. Deploy.",
  description:
    "Explore practical Mentorship Intern Programs and Mentor Internship Programs in software development, design, security, and marketing at MindCraft Academy in Pokhara, Nepal.",
  keywords: [...programKeywords, "MERN Stack internship", "Python mentorship", "UI/UX internship", "cybersecurity training Nepal", "Java internship Nepal", "digital marketing internship Nepal"],
  metadataBase: new URL("https://mindcraftacademy.com"),
  openGraph: {
    title: "MindCraft Academy | Mentorship Intern Programs",
    description:
      "Practical software internships and mentorship in Pokhara, Nepal. Discover. Develop. Deploy.",
    type: "website",
    locale: "en_NP",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
