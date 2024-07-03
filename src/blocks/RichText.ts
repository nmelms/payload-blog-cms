import { Block } from "payload/types";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { HTMLConverterFeature } from "@payloadcms/richtext-lexical";
import { lexicalHTML } from "@payloadcms/richtext-lexical";

export const RichText: Block = {
  slug: "RichText",
  labels: {
    singular: "RichText",
    plural: "RichText",
  },
  fields: [
    {
      name: "richText",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("richText", {
      name: "richText_html",
    }),
  ],
};
