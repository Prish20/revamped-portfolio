import React from "react";
import ServicesCard, { ServicesTypeCard } from "@/components/ServicesCard";
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";

const Services = async () => {
  const services = await client.fetch(SERVICES_QUERY);
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
    </>
  );
};
export default Services;
