// export * from "./user";
// export * from "./post";

import path from "path";

import { makeSchema } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";

import * as userSchema from "./user";
import * as postSchema from "./post";

export default makeSchema({
  types: [userSchema, postSchema],
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: path.join(__dirname, "./../../schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts"),
  },
});
