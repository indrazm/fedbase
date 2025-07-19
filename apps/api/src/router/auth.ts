import Elysia, { t } from "elysia";
import { Logger } from "@repo/logger";
import { prisma, Prisma } from "@repo/database";
import bcrypt from "bcrypt";
import { jwt } from "@elysiajs/jwt";
import { ACCESS_TOKEN_SECRET } from "../config";

export const authRouter = new Elysia({ prefix: "/auth" })
  .decorate({ logger: new Logger() })
  .use(jwt({ name: "accessToken", secret: ACCESS_TOKEN_SECRET, exp: "30d" }))
  .post(
    "/register",
    async ({ body, logger, set }) => {
      logger.info(`Hashing password for user ${body.email}`);
      const hashedPassword = await bcrypt.hash(body.password, 10);

      try {
        logger.info(`Creating user ${body.email}`);
        const user = await prisma.user.create({
          data: {
            name: body.name,
            email: body.email,
            password: hashedPassword,
          },
          select: {
            id: true,
            name: true,
            email: true,
          },
        });

        set.status = 201;
        return { message: "User registered", user };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          logger.error(`Error creating user ${body.email}`, error);
          set.status = 400;
          return { message: "User already exists" };
        }

        logger.error(`Error creating user ${body.email}`, error as Error);
        set.status = 500;
        return { message: "Error creating user" };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        password: t.String(),
      }),
    }
  )
  .post(
    "/login",
    async ({ body, logger, set, accessToken }) => {
      logger.info(`Logging in user ${body.email}`);
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });

      if (!user) {
        logger.warn(`User ${body.email} not found`);
        set.status = 404;
        return { message: "User not found" };
      }

      if (!user.password) {
        logger.warn(`User ${body.email} has no password`);
        set.status = 401;
        return { message: "User has no password" };
      }

      logger.info(`Checking password for user ${body.email}`);
      const passwordMatch = await bcrypt.compare(body.password, user.password);

      if (!passwordMatch) {
        logger.warn(`Password for user ${body.email} does not match`);
        set.status = 401;
        return { message: "Password does not match" };
      }

      logger.info(`User ${body.email} logged in`);
      set.status = 200;

      logger.info(`Signing access token for user ${body.email}`);
      const access_token = await accessToken.sign({ userId: user.id });
      return { message: "User logged in", access_token };
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    }
  );
