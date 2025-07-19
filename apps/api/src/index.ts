import { Elysia } from "elysia";
import { authRouter } from "./router/auth";
import { swagger } from "@elysiajs/swagger";
import { profileRouter } from "./router/profile";
import { feedbackRouter } from "./router/feedback";

const app = new Elysia()
  .use(swagger())
  .get("/health", () => "ok")
  .use(authRouter)
  .use(profileRouter)
  .use(feedbackRouter)
  .listen(8000);

export type App = typeof app;
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
