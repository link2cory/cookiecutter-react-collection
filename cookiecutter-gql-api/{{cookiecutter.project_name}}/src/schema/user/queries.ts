import { extendType } from "@nexus/schema";

export const addUserCrudToQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.user();
  },
});

export const addCurrentUserToQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("currentUser", {
      type: "User",
      resolve: (_root, _args, { user }) => user,
    });
  },
});
