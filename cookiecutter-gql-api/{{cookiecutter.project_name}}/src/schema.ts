import path from "path";

import { makeSchema } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";

import * as types from "./types";

const schema = makeSchema({
  types,
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: path.join(__dirname, "./../schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts"),
  },
});

export default schema;
