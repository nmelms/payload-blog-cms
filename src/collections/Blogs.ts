import { CollectionConfig } from "payload/types";
import { RichText } from "../blocks/RichText";
import { Image } from "../blocks/Image";
import { Code } from "../blocks/Code";

const Blogs: CollectionConfig = {
  slug: "blogs",
  labels: {
    singular: "Blog",
    plural: "Blogs",
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: false,
    },
    {
      name: "tag",
      label: "tag",
      type: "text",
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [RichText, Image, Code],
    },
    {
      name: "tags",
      label: "Tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default Blogs;
