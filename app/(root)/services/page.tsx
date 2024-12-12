import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import BlurFade from "@/components/ui/blur-fade";
// import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

// eslint-disable-next-line camelcase
export const experimental_ppr = true;

const Page = async () => {
  // const projects = await client.fetch(SERVICES_QUERY);
  const { data: projects } = await sanityFetch({ query: SERVICES_QUERY });
  return (
    <div className="container">
      <BlurFade>
        <HoverEffect items={projects} />
      </BlurFade>
      <SanityLive />
    </div>
  );
};
export default Page;
