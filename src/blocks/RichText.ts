import { Block } from "payload/types";

export const RichText: Block = {
  slug: "RichText",
  labels: {
    singular: "RichText",
    plural: "RichText",
  },
  fields: [
    {
      name: "Text",
      type: "richText",
    },
  ],
};
