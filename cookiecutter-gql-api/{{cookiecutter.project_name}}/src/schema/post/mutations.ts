import { extendType } from "@nexus/schema";

const addPostCrudToMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOnePost();
    t.crud.updateOnePost();
    t.crud.updateManyPost();
    t.crud.deleteOnePost();
    t.crud.deleteManyPost();
  },
});

export default addPostCrudToMutation;
