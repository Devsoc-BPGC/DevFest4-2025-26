import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "DevFest 5.0",
  description: "Flagship Developer Event of Bits Goa conducted by Google DevSoc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} ${geistSans.className}`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
