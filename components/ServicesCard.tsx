import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { Services } from "@/sanity/types";

export type ServicesTypeCard = Omit<Services, "services">;
export const ServicesCard = ({ services }: { services: ServicesTypeCard }) => {
  const { num, title, description, _id } = services;
  return (
    <div>
      <li className="startup-card group">
        <p className="text-4xl text-accent">{num}</p>
        <div className="mt-4 flex flex-col gap-2 hover:text-accent">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg text-white/50">{description}</p>
        </div>
        <Link href={`/services/${_id}`} className="mt-4">
          <div className="services-link">
            <BsArrowDownRight className="services-btn" />
          </div>
        </Link>
      </li>
    </div>
  );
};
export default ServicesCard;
