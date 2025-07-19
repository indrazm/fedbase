import Elysia from "elysia";
import { jwt } from "@elysiajs/jwt";
import { ACCESS_TOKEN_SECRET } from "../config";
import { prisma } from "@repo/database";

export const feedbackRouter = new Elysia({ prefix: "/feedback" })
  .decorate({ prisma: prisma })
  .use(jwt({ name: "accessToken", secret: ACCESS_TOKEN_SECRET, exp: "30d" }))
  .get("/", async ({ prisma }) => {
    const feedbacks = await prisma.feedback.findMany({
      select: {
        id: true,
        content: true,
        userId: true,
        createdAt: true,
        likes: {
          select: {
            userId: true,
          },
        },
      },
    });
    return { feedbacks };
  });
