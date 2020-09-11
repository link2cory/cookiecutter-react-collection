import { mutationType } from "@nexus/schema";

const Mutation = mutationType({
  definition(t) {
    // https://nexusjs.org/api/nexus/schema#querytype
    // https://nexusjs.org/plugins/prisma/
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.crud.updateManyUser();
    t.crud.deleteOneUser();
    t.crud.deleteManyUser();

    t.crud.createOnePost();
    t.crud.updateOnePost();
    t.crud.updateManyPost();
    t.crud.deleteOnePost();
    t.crud.deleteManyPost();
  },
});

export default Mutation;
