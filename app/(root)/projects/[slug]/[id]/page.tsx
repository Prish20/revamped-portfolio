// page.tsx
import React from "react";
import { client } from "@/sanity/lib/client";
import { TIMELINE_BY_ID_OR_SLUG_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";

const Page = async ({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) => {
  const { id, slug } = await params;
  const projects = await client.fetch(TIMELINE_BY_ID_OR_SLUG_QUERY, {
    id,
    slug,
  });

  if (!projects) return notFound();
  const {
    title,
    content: { images, description, live, github },
  } = projects;

  return (
    <BlurFade>
      <div className="container  mb-24 lg:px-12">
        <div className="my-12 flex flex-col items-center shadow-2xl">
          <h1 className="m-6 text-3xl font-extrabold text-black dark:text-neutral-200 sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 px-6 text-base font-medium text-black/75 dark:text-neutral-200 sm:text-lg md:text-xl lg:mx-24">
            {description}
          </p>
          <div className="my-6 flex flex-row gap-8">
            <Link href={live || ""} target="_blank" rel="noopener noreferrer">
              <Button
                className="rounded-full bg-accent/85 p-4 font-extrabold uppercase text-white transition-all duration-500 hover:scale-105 hover:bg-accent/85 lg:p-8"
                size="sm"
              >
                Live Demo
              </Button>
            </Link>
            <Link href={github || ""} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full bg-accent/85 p-4 px-2 font-extrabold uppercase text-white transition-all duration-500 hover:scale-105 hover:bg-accent/85 lg:p-8">
                Github
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-6 md:px-12 ">
          {images.map(
            (image: { asset: { _ref: string }; alt?: string }, idx: number) => (
              <div key={idx} className="relative">
                <Image
                  src={urlFor(image.asset).url()}
                  alt={image.alt || ""}
                  width={500}
                  height={500}
                  className="h-auto w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </BlurFade>
  );
};

export default Page;
