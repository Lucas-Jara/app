import { defineField, defineType } from "sanity";

export default defineType({
  name: "ads",
  title: "Ads",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        {
          type: "url",
          name: "instagram",
          title: "Instagram",
        },

        {
          type: "number",
          name: "whatsapp",
          title: "Whatsapp",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
