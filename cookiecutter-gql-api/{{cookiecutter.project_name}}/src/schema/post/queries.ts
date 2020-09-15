import { extendType } from "@nexus/schema";

const addPostCrudToQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.post();
  },
});

export default addPostCrudToQuery;
