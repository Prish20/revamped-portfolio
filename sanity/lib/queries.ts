import { defineQuery } from "next-sanity";

export const SERVICES_QUERY =
  defineQuery(`*[_type == "services"] | order(_createdAt asc) {
  title, _id, description, num
}`);

export const SERVICES_BY_ID_QUERY =
  defineQuery(`*[_type == "services" && _id == $id][0] {
  title, _id, description, num, image
}`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "projects"] | order(_createdAt asc) {
  num, title, category, image, description, _id, stack,
    live, github
}`);
