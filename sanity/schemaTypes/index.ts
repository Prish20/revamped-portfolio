import { type SchemaTypeDefinition } from "sanity";
import services from "@/sanity/schemaTypes/services";
import timeline from "@/sanity/schemaTypes/timeline";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, timeline],
};
