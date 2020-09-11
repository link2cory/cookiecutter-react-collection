import { PrismaClient } from "@prisma/client";
import { Request } from "apollo-server";

const prisma = new PrismaClient();

export interface Context {
  request: Request;
  prisma: PrismaClient;
}

export function createContext(request: Request): Context {
  return {
    request,
    prisma,
  };
}
