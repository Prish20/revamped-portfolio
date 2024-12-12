"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/resume", name: "Resume" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-primary">
        <div className="items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/Logo.svg" alt="Logo" width={180} height={180} />
          </Link>
        </div>

        <nav className="my-12 flex flex-col items-center justify-center gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${pathname === link.path && "border-b-2 border-accent text-accent"} font-medium capitalize transition-all hover:text-accent`}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
