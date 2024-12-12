import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="container my-24 bg-primary drop-shadow-2xl">
        <div className=" flex flex-col items-center gap-6 px-12 py-8 text-center lg:flex-row lg:justify-between lg:gap-0">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={140} height={140} />
          </Link>
          <div className="my-auto flex flex-row items-center justify-center gap-8">
            <Image
              src="/assets/github.png"
              alt="Logo"
              width={30}
              height={30}
              className="text-accent"
            />
            <Image
              src="/assets/linkedin.png"
              alt="logo"
              width={30}
              height={30}
            />
            <Image
              src="/assets/twitter.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="py-8 text-center text-black/50">
          <p>
            &copy; {new Date().getFullYear()} Christadrian Sanya. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
