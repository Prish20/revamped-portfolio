import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import BlurFade from "@/components/ui/blur-fade";
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/lib/queries";

const Page =async () => {
  const projects = await client.fetch(SERVICES_QUERY);
  return (
    <div className="container">
      <BlurFade>
        <HoverEffect items={projects} />
      </BlurFade>
    </div>
  );
};
export default Page;
