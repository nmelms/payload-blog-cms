import { Block } from "payload/types";

export const Code: Block = {
  slug: "code",
  labels: {
    singular: "Code",
    plural: "Code",
  },
  fields: [
    {
      name: "code",
      label: "code",
      type: "code",
    },
  ],
};
