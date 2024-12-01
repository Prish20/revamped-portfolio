import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-16 xl:items-start xl:space-y-0">
        {/* Flex container */}
        <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row xl:gap-12 xl:space-x-12 xl:pb-24 xl:pt-16">
          {/* Photo Section */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>

          {/* Text Section */}
          <div className="order-2 space-y-6 text-center xl:order-none xl:text-left">
            <h1 className="h1 mb-2 text-4xl font-bold leading-snug text-white xl:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-accent">Christadrian Sanya</span>
            </h1>
            <span className="text-2xl uppercase tracking-wide text-gray-300">
              Full-Stack Software Engineer
            </span>
            <p className="mb-4 max-w-md leading-relaxed text-gray-400">
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

              {/* Social Icons */}
              <Social
                containerStyles="flex gap-4 justify-center xl:justify-start"
                iconStyles="w-8 h-8 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
