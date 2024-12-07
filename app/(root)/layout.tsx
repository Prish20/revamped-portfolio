import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import React from "react";
import Header from "@/components/Header";

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
      </body>
    </html>
  );
}
