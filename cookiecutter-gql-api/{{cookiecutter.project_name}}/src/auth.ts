import { IncomingMessage } from "http";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient, User } from "@prisma/client";

export const hashPassword = (password: string) => bcrypt.hashSync(password, 3);

export const getTokenFromUser = (user: User) => ({
  token: jwt.sign(user, process.env.SECRET_KEY),
});

const isUser = (input: any): input is User => (input as User).email !== undefined;

const decodeToken = (token: string): User | null => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return isUser(decoded) ? decoded : null;
  } catch (e) {
    return null;
  }
};

const getTokenFromAuthHeader = (req: IncomingMessage) => {
  if (req.headers.authorization) {
    return req.headers.authorization.replace("Bearer ", "");
  }
  return null;
};

const verifyPassword = (user: User, password: string) => bcrypt.compareSync(password, user.password);

const getUserOrNullFromEmail = async (email: string, prisma: PrismaClient) => {
  const persistedUser = await prisma.user.findOne({
    where: { email },
  });

  return persistedUser;
};

const getUserOrNullFromToken = async (token: string, prisma: PrismaClient) => {
  const user = decodeToken(token);
  return user ? getUserOrNullFromEmail(user.email, prisma) : null;
};

export const getUserFromRequest = async (
  req: IncomingMessage,
  prisma: PrismaClient,
) => {
  const token = getTokenFromAuthHeader(req);
  if (token) {
    const user = await getUserOrNullFromToken(token, prisma);
    return user;
  }
  return null;
};

export const getUserTokenFromCredentials = async (
  email: string,
  password: string,
  prisma: PrismaClient,
) => {
  const user = await getUserOrNullFromEmail(email, prisma);

  if (user && verifyPassword(user, password)) {
    return getTokenFromUser(user);
  }

  return { token: "" };
};
