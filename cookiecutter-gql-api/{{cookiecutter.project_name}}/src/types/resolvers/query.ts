import { queryType } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    // add some fields here.  See the nexus-schema docs for help
    // https://nexusjs.org/api/nexus/schema#querytype
    // https://nexusjs.org/plugins/prisma/
    t.crud.user();
    t.crud.post();
  },
});

export default Query;
