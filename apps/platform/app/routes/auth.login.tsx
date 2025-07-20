import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Form, Link, redirect } from "react-router";
import type { Route } from "./+types/auth.login";
import { api } from "lib/api";
import { createCookie } from "react-router";

export const tokenCookie = createCookie("token", {
  maxAge: 60 * 60 * 24 * 7,
  httpOnly: true,
  secure: import.meta.env.NODE_ENV === "production",
  sameSite: "strict",
});

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();

  let email = formData.get("email") as string;
  let password = formData.get("password") as string;

  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required",
    };
  }

  const { data, error } = await api.auth.login.post({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: error.value.message,
    };
  }

  if (!data.access_token) {
    return {
      success: false,
      message: "Login failed",
    };
  }

  return redirect("/", {
    headers: {
      "Set-Cookie": await tokenCookie.serialize(data.access_token),
    },
  });
}

export default function Page({ actionData }: Route.ComponentProps) {
  return (
    <Form method="post" className="space-y-6 w-100">
      <section className="text-center space-y-2">
        <h3>Sign In</h3>
        <p>Login to your account</p>
      </section>
      <section className="space-y-3">
        <Input name="email" placeholder="Email address" />
        <Input name="password" placeholder="Password" type="password" />
        <Button fullWidth>Login</Button>
        {actionData?.success && <p className="text-emerald-500 text-center">Login success</p>}
        {!actionData?.success && <p className="text-rose-500 text-center">{actionData?.message}</p>}
      </section>
      <section className="text-center space-y-2">
        <p>Forgot password?</p>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </section>
    </Form>
  );
}
