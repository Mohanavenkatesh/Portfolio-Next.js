import "../styles/globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "../components/ThemeToggle";

// Font
const Quicksandfont = Quicksand({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-Quicksand",
});

// Enhanced metadata with more SEO and social sharing features
export const metadata = {
  title: "Mohan App | Mohanavenkatesh's Portfolio",
  description: "Explore the portfolio of Mohanavenkatesh: Frontend Developer, UI/UX Enthusiast, and Web Technology Explorer. Discover projects, skills, and ways to connect.",
  keywords: [
    "Mohanavenkatesh",
    "Portfolio",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "UI/UX",
    "Projects",
    "JavaScript",
    "Web Design"
  ],
  authors: [
    { name: "Mohanavenkatesh A", url: "https://github.com/Mohanavenkatesh" }
  ],
  creator: "Mohanavenkatesh A",
  openGraph: {
    title: "Mohan App | Mohanavenkatesh's Portfolio",
    description: "Explore the portfolio of Mohanavenkatesh: Frontend Developer, UI/UX Enthusiast, and Web Technology Explorer.",
    url: "https://mohan-portfolio.vercel.app/",
    siteName: "Mohan App",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohanavenkatesh Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohan App | Mohanavenkatesh's Portfolio",
    description: "Explore the portfolio of Mohanavenkatesh: Frontend Developer, UI/UX Enthusiast, and Web Technology Explorer.",
    creator: "@mohanavenkatesh_a",
    images: ["/images/og-image.png"]
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  themeColor: "#18181b"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Quicksandfont.variable}`}>
      <body className={`antialiased  max-w-xl  mt-8 mx-auto`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <div className="fixed bottom-2 right-5 z-50">
            <ThemeToggle />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
