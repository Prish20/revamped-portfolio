import React from "react";
import Photo from "@/components/Photo";
import GradualSpacing from "@/components/ui/gradual-spacing";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <BlurFade>
      <section className="container">
        <div className="order-2 flex h-full flex-col items-center gap-4 text-center transition-all duration-500 md:flex-col lg:flex-row xl:order-none">
          {/* Image Section */}
          <div className="">
            <Photo />
          </div>
          <div className="mx-4 flex flex-col md:mx-24">
            <div className="flex-1">
              <div className="mb-4 flex flex-col gap-2 text-center text-xl font-extrabold leading-snug text-black md:flex-row xl:text-4xl">
                Hi, I&apos;m{" "}
                <span>
                  <GradualSpacing
                    className="ml-2 text-accent"
                    text="Christadrian Sanya"
                  />
                </span>
              </div>
              <span className="text-lg uppercase tracking-wide text-black/85 md:text-2xl">
                Full-Stack Software Engineer
              </span>
              <p className=" mb-4 max-w-md font-medium leading-relaxed text-black/70">
                A passionate Full-Stack Software Engineer specializing in
                scalable, high-performance web applications. I&apos;m proficient
                in various programming languages and eager to bring my skills to
                your team to build exceptional web solutions.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 space-y-3 xl:flex-row xl:justify-start">
              {/* Download Button with hover effect */}
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-accent uppercase text-white transition duration-300 ease-in-out hover:bg-accent"
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
      </section>
      <div className="my-12">
        <Stats />
      </div>
    </BlurFade>
  );
};

export default Home;
