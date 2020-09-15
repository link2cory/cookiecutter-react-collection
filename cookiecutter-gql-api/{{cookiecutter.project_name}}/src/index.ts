import express from "express";
import { ApolloServer } from "apollo-server-express";

import { createContext } from "./context";
// import schema from "./createSchema";
import schema from "./schema";

const corsConfig = {
  credentials: true,
  allowedHeaders: ["Authorization"],
  exposedHeaders: ["Authorization"],
};

const server = new ApolloServer({
  schema,
  context: createContext,
});

const app = express();
server.applyMiddleware({ app, cors: corsConfig });

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
