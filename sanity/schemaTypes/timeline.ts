import { defineType } from "sanity";

export default defineType({
  name: "timeline",
  title: "Timeline",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "stack",
          title: "Stack",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "technologies",
                  type: "array",
                  of: [
                    {
                      type: "string",
                    },
                  ],
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
        {
          name: "images",
          title: "Images",
          type: "array",
          validation: (Rule) => Rule.required(),
          of: [
            {
              type: "image",
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: "live",
          type: "url",
          validation: (Rule) => Rule.uri(),
        },
        {
          name: "github",
          type: "url",
          validation: (Rule) => Rule.uri(),
        },
      ],
    },
  ],
});
