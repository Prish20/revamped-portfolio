import { defineQuery } from "next-sanity";

export const SERVICES_QUERY =
  defineQuery(`*[_type == "services"] | order(num asc) {
  title, _id, description, num
}`);
