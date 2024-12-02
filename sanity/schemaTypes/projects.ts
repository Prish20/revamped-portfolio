import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "num",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "technologies",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "live",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "github",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
