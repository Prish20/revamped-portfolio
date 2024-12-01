import { type SchemaTypeDefinition } from "sanity";
import services from "@/sanity/schemaTypes/services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services],
};
