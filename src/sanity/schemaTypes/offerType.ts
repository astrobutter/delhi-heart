import { defineField, defineType } from "sanity";

export const offerType = defineType({
  name: "offer",
  title: "Special Offer",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Offer Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "headline",
      title: "Bold Text (Headline)",
      type: "string",
    }),
    defineField({
      name: "subtext",
      title: "Subtext (Under Headline)",
      type: "string",
    }),
    defineField({
      name: "details",
      title: "Coupon Details (Back Side)",
      type: "text",
    }),
  ],
});
