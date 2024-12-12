import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload, FiGithub } from "react-icons/fi";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock.";

const items = [
  {
    title: "Github",
    icon: <FiGithub />,
    href: "",
  },
  {
    title: "LinkedIn",
    icon: <FiGithub />,
    href: "",
  },
  {
    title: "Twitter",
    icon: <FiGithub />,
    href: "",
  },
];

const Home = () => {
  return (
    <>
      <section className="h-full overflow-hidden">
        <div className="container mx-auto flex h-full flex-row items-center justify-center space-y-16 xl:items-start xl:space-y-0">
          {/* Flex container */}
          <div className="flex w-full flex-col items-center justify-between gap-16 md:flex-row xl:flex-row xl:gap-12 xl:space-x-12 xl:pb-24 xl:pt-16">
            {/* Text Section */}
            <div className="order-2 space-y-6 text-center xl:order-none xl:text-left">
              <h1 className="mb-4 text-4xl font-extrabold leading-snug text-black xl:text-5xl">
                Hi, I&apos;m{" "}
                <span className="text-accent">Christadrian Sanya</span>
              </h1>
              <span className="text-2xl uppercase tracking-wide text-black/85">
                Full-Stack Software Engineer
              </span>
              <p className="mb-4 max-w-md font-medium leading-relaxed text-black/70">
                A passionate Full-Stack Software Engineer specializing in
                scalable, high-performance web applications. I&apos;m proficient
                in various programming languages and eager to bring my skills to
                your team to build exceptional web solutions.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 xl:flex-row xl:justify-start">
                {/* Download Button with hover effect */}
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 rounded-full border-accent uppercase text-accent transition duration-300 ease-in-out hover:bg-accent hover:text-gray-900"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </div>
            </div>
            {/* Image Section */}
            <div className="order-2 mb-8 md:order-2 xl:order-none xl:mb-0">
              <Image
                src="/assets/Path.png"
                alt="Path"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="absolute z-40 -rotate-90 items-center justify-end">
          {/* Floating Dock */}
          <FloatingDock items={items} />
        </div>
      </section>
    </>
  );
};

export default Home;
