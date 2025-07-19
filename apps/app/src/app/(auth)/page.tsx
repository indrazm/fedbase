"use client";

import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { useActionState } from "react";
import { loginUserAction } from "./action";

export default function Page() {
  const [_, action] = useActionState(loginUserAction, null);

  return (
    <form action={action} className="space-y-6 w-80">
      <section className="text-center space-y-2">
        <h3>fedbase.</h3>
        <p>Login to your account</p>
      </section>
      <section className="space-y-2">
        <Input name="email" placeholder="Email address" />
        <Input name="password" placeholder="Password" type="password" />
      </section>
      <Button fullwidth>Login</Button>
      <section className="text-center space-y-2">
        <p>Forgot password?</p>
        <p>Back to login options</p>
      </section>
    </form>
  );
}
