import { defineQuery } from "next-sanity";

export const SERVICES_QUERY =
  defineQuery(`*[_type == "services"] | order(num asc) {
  title, _id, description, num
}`);

export const SERVICES_BY_ID_QUERY =
  defineQuery(`*[_type == "services" && _id == $id][0] {
  title, _id, description, num, image
}`);
