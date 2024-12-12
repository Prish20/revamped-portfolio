import type { Metadata } from "next";
import "../globals.css";

import React from "react";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";

// import { FloatingDock } from "@/components/ui/floating-dock.";
// import { FiGithub, FiLinkedin } from "react-icons/fi";
// import { FaXTwitter } from "react-icons/fa6";

// const items = [
//   {
//     title: "Github",
//     icon: <FiGithub />,
//     href: "https://github.com/Prish20",
//   },
//   {
//     title: "LinkedIn",
//     icon: <FiLinkedin />,
//     href: "",
//   },
//   {
//     title: "Twitter",
//     icon: <FaXTwitter />,
//     href: "",
//   },
// ];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Christadrian Sanya",
  description:
    "A passionate Full-Stack Software Engineer specializing in scalable, high-performance web applications. I&apos;m proficient in various programming languages and eager to bring my skills to your team to build exceptional web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        {/* Floating Dock */}
        {/* <div className=" sticky bottom-0 z-40"> */}
        {/*  <div className="sticky -mb-16 mt-12 !flex "> */}
        {/*    <FloatingDock items={items} /> */}
        {/*  </div> */}
        {/* </div> */}
      </body>
    </html>
  );
}
