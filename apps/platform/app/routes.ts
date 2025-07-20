import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/home.layout.tsx", [index("routes/home.tsx")]),
  layout("routes/auth.layout.tsx", [route("/register", "routes/auth.register.tsx"), route("/login", "routes/auth.login.tsx")]),
] satisfies RouteConfig;
