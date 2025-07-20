import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/home.layout.tsx", [index("routes/home.tsx")]),
  layout("routes/auth.layout.tsx", [route("/register", "routes/register.tsx"), route("/login", "routes/login.tsx")]),
] satisfies RouteConfig;
