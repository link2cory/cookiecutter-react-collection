import { objectType } from "@nexus/schema";

const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.published();
    t.model.title();
    t.model.author();
  },
});

export default Post;
