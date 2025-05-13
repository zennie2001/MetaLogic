import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Poppins} from 'next/font/google';
import ReasponsiveNav from "@/components/Home/Navbar/ReasponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets:['latin']
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Metalogic Software Pvt. Ltd.",
  description: "Metalogic Software Pvt. Ltd. next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ReasponsiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
