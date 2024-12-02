import React from "react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Projects } from "@/sanity/types";

export type ProjectsTypeCard = Omit<Projects, "projects">;

const ProjectsCard = ({ projects }: { projects: ProjectsTypeCard }) => {
  const { num, title, category, description, image, stack, live, github } =
    projects;
  return (
    <>
      <li className="startup-card group">
        <p className="project_num">{num}</p>
        <div className="project_flex">
          <div className="!md:flex-col !flex !flex-col">
            <h3 className="project_title text-accent">{title}</h3>
            <h2 className=" my-3 text-nowrap text-sm capitalize lg:my-6">
              {category}
            </h2>
            <p className="break-after-auto text-sm text-white/60 md:text-base">
              {description}
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="thumbnail"
              className="size-auto rounded-xl xl:h-[360px] xl:max-w-[560px]"
            />
          </div>
        </div>
        {stack?.map(
          ({
            name,
            technologies,
            _key,
          }: {
            name?: string;
            technologies?: string[];
            _key: string;
          }) => (
            <li key={_key} className="text-base text-accent md:text-xl">
              <span className="font-bold">{name || "Unknown"}: </span>
              {technologies?.join(", ") || "No technologies listed"}
            </li>
          ),
        ) || <li className="no-result">No stack information available</li>}
        <div className="mb-8 mt-10 flex items-center gap-6">
          <Link href={live || ""}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="shad_trigger group ">
                  <BsArrowUpRight className="text-2xl text-white group-hover:text-accent md:text-3xl" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Demo</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Link href={github || ""}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="shad_trigger2 group">
                  <BsGithub className="text-2xl text-white group-hover:text-accent md:text-3xl" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
      </li>
    </>
  );
};
export default ProjectsCard;
