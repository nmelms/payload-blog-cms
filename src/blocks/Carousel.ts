import { Block } from "payload/types";

export const Carousel: Block = {
  slug: "carousel",
  labels: {
    singular: "Carousel",
    plural: "Carousels",
  },
  fields: [
    {
      name: "images",
      type: "array",
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "link",
          type: "relationship",
          relationTo: "pages",
          required: true,
        },
      ],
    },
  ],
};
