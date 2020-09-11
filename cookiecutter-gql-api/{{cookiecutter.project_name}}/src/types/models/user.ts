import { objectType } from "@nexus/schema";

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.email();
    t.model.name();
    t.model.role();
    t.model.posts();
  },
});

export default User;
