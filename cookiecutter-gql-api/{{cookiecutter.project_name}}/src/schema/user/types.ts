import { inputObjectType, objectType } from "@nexus/schema";

export const User = objectType({
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

export const UserToken = objectType({
  name: "UserToken",
  definition(t) {
    t.string("token");
  },
});

// normally it is not necessary to create an inputObjectType
// for standard crud, but I think this is needed in order to
// avoid making the password queryable.  I wish there was a
// way to extend the generated InputType, but there doesn't
// seem to be a way as of the time of this writing
export const UserCreateInput = inputObjectType({
  name: "UserCreateInput",
  definition(t) {
    t.string("name");
    t.string("hello");
    t.string("email", { required: true });
    t.string("password", { required: true });
  },
});

export const UserCredentialsType = inputObjectType({
  name: "UserCredentialsType",
  definition(t) {
    t.string("email", { required: true });
    t.string("password", { required: true });
  },
});
