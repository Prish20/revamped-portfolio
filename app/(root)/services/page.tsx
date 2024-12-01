import React from "react";
import ServicesCard from "@/components/ServicesCard";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    _id: "1",
    description:
      "End-to-end web development solutions using modern frameworks like React, Node.js, and Express. I specialize in building fast, responsive, and scalable web applications that meet business needs while ensuring a seamless user experience across all devices.",
  },
  {
    num: "02",
    title: "UI/UX Design & Front-End Development",
    _id: "2",
    description:
      "I combine user-centered design principles with modern front-end technologies to create visually engaging and intuitive interfaces. From wireframes to fully responsive layouts using React, Tailwind CSS, or similar tools, I ensure your users have an outstanding experience.",
  },
];

const Services = () => {
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
