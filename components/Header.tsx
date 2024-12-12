"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const yOffset = window.scrollY;
    setScrollY(yOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.max(1 - scrollY / 300, 0.5);

  return (
    <header className="sticky top-0 z-40 bg-primary">
      <div className="container mx-auto flex items-center justify-between py-8 text-black transition-all duration-500">
        {/* Logo */}
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={180} height={180} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 transition-opacity duration-500 lg:flex xl:flex">
          <Nav />
          <Link href="/contact">
            <Button className="rounded-xl bg-black text-primary hover:bg-accent">
              Hire me
            </Button>
          </Link>
        </div>
        {/* Mobile Nav */}
        <div
          className="transition-opacity duration-500 lg:hidden"
          style={{ opacity }}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
