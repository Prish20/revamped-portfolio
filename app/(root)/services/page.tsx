import React from "react";
import ServicesCard, { ServicesTypeCard } from "@/components/ServicesCard";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const Services = async () => {
  const { data: services } = await sanityFetch({ query: SERVICES_QUERY });
  return (
    <>
      <section className="section-container">
        <ul className="card_grid mt-7">
          {services?.length > 0 ? (
            services.map((services: ServicesTypeCard) => (
              <ServicesCard key={services?._id} services={services} />
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
};
export default Services;
