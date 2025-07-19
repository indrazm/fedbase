import { treaty } from "@elysiajs/eden";
import type { App } from "@repo/api";

export const apiClient = treaty<App>("localhost:3000");
