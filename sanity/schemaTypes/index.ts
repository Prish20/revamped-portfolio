import { type SchemaTypeDefinition } from "sanity";
import services from "@/sanity/schemaTypes/services";
import projects from "@/sanity/schemaTypes/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, projects],
};
