import Elysia, { t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { ACCESS_TOKEN_SECRET } from "../config";
import { prisma } from "@repo/database";

export const profileRouter = new Elysia({ prefix: "/profile" }).use(jwt({ name: "accessToken", secret: ACCESS_TOKEN_SECRET })).get(
  "/",
  async ({ headers, accessToken }) => {
    const token = headers["authorization"]?.replace("Bearer ", "");
    if (!token) {
      return { message: "No access token" };
    }

    const payload = (await accessToken.verify(token)) as { userId: string };

    const user = await prisma.user.findUnique({
      where: {
        id: payload.userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return { user };
  },
  {
    headers: t.Object({
      authorization: t.String(),
    }),
  }
);
