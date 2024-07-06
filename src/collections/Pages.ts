import { CollectionConfig } from "payload/types";
import { Hero } from "../blocks/Hero";
import { Carousel } from "../blocks/Carousel";

const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "pageType",
      label: "Page Type",
      type: "select",
      options: [
        {
          label: "Home",
          value: "home",
        },
        {
          label: "About Me",
          value: "about-me",
        },
        {
          label: "Contact",
          value: "contact",
        },
        {
          label: "Socials",
          value: "socials",
        },
      ],
      required: true,
    },
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
    // homepage fields
    {
      name: "heroHeading",
      label: "Hero Heading",
      type: "text",
      admin: {
        condition: (data) => data.pageType === "home",
      },
    },
    {
      name: "heroSubHeading",
      label: "Hero Subheading",
      type: "text",
      admin: {
        condition: (data) => data.pageType === "home",
      },
    },

    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Hero, Carousel],
    },
  ],
};

export default Pages;
