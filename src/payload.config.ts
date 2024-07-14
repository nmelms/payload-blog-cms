import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

import Users from "./collections/Users";
import Pages from "./collections/Pages";
import { Media } from "./collections/Media";
import Blogs from "./collections/Blogs";

const adapter = s3Adapter({
  config: {
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_REGION,
    // ... Other S3 configuration
  },
  bucket: process.env.S3_BUCKET,
});

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,

      HTMLConverterFeature({}),
    ],
  }),

  collections: [Users, Pages, Media, Blogs],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    cloudStorage({
      enabled: true,
      collections: {
        media: {
          adapter: adapter,
          generateFileURL: ({ filename, prefix }) => {
            return [
              "https://dv8881tsav6g8.cloudfront.net/media",
              prefix,
              filename,
            ]
              .filter(Boolean)
              .join("/");
          }, // see docs for the adapter you want to use
        },
      },
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
