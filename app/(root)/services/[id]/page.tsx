import React from "react";
import { client } from "@/sanity/lib/client";
import { SERVICES_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
// eslint-disable-next-line camelcase
export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const services = await client.fetch(SERVICES_BY_ID_QUERY, { id });
  const { title, description, image } = services;
  if (!services) return notFound();
  return (
    <>
      <section className="pink_container !min-h-[260px] !rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt="thumbnail"
          className="h-auto max-w-full rounded-xl"
        />
        <h1 className="heading"> {title}</h1>
        <p className="sub-heading mb-6">{description}</p>
      </section>
      {/* TODO: Render selected projects for the startup */}
    </>
  );
};

export default Page;
