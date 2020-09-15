import { PrismaClient, User } from "@prisma/client";

import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

import { getUserFromRequest } from "./auth";

const prisma = new PrismaClient();

export interface Context {
  incomingContext: ExpressContext;
  prisma: PrismaClient;
  user: User | null;
}

export async function createContext(
  incomingContext: ExpressContext,
): Promise<Context> {
  return {
    incomingContext,
    prisma,
    user: await getUserFromRequest(incomingContext.req, prisma),
  };
}
