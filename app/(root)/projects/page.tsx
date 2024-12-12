import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React from "react";

import { urlFor } from "@/sanity/lib/image";
import { TIMELINE_QUERY } from "@/lib/queries";
import Link from "next/link";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import BlurFade from "@/components/ui/blur-fade";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt: string;
};

export interface TimelineItem {
  title: string;
  _id: string;
  slug: {
    current: string;
  };
  content: {
    description: string;
    images: SanityImage[];
  };
}

export default async function Page() {
  const { data: timelineData } = await sanityFetch({ query: TIMELINE_QUERY });

  const formattedData = timelineData.map((item: TimelineItem) => ({
    title: item.title,
    content: (
      <div>
        <p className="mb-8 text-sm font-normal text-black dark:text-neutral-200 md:text-sm">
          {item.content.description}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {item.content.images.map((image, idx) => (
            <Image
              key={idx}
              src={urlFor(image.asset).url()}
              alt={image.alt || ""}
              width={500}
              height={500}
              className="timeline rounded-xl transition-all duration-500 hover:scale-105"
            />
          ))}
        </div>
        <div className="w-full py-8">
          <Link href={`/projects/${item.slug.current}/${item._id}`}>
            <Button
              className={cn(
                "rounded-full bg-accent/85 p-2 px-4 uppercase text-white transition-all duration-500 hover:scale-105 hover:bg-accent/85 lg:p-8",
                "mt-4",
              )}
            >
              <div className="flex items-center justify-center">
                <FaSquareArrowUpRight />
                <span className="ml-2">View Project</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    ),
  }));

  return (
    <>
      <BlurFade>
        <div className="container">
          <Timeline data={formattedData} />
        </div>
        <SanityLive />
      </BlurFade>
    </>
  );
}
