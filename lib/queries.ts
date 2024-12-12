import { defineQuery } from "next-sanity";

export const SERVICES_QUERY =
  defineQuery(`*[_type == "services"] | order(_createdAt asc){
  title, _id, description, link
}`);

export const TIMELINE_QUERY =
  defineQuery(`*[_type == "timeline"] | order(title desc) {
    title,
    _id,
    slug {
      current
      },
    content {
      description,
      images[] {
        asset->,
        alt
      }
    }
  }`);

export const TIMELINE_BY_ID_OR_SLUG_QUERY =
  defineQuery(`  *[_type == "timeline" && (_id == $id || slug.current == $slug)][0] {
    title,
    _id, slug,
    content {
      description,
      images[] {
        asset->,
        alt
      },
      stack,
      live,
      github,
    }
  }`);
