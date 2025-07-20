import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Link } from "react-router";

export default function Page() {
  return (
    <form className="space-y-6 w-100">
      <section className="text-center space-y-2">
        <h3>fedbase.</h3>
        <p>Login to your account</p>
      </section>
      <section className="space-y-3">
        <Input name="email" placeholder="Email address" />
        <Input name="password" placeholder="Password" type="password" />
        <Button fullwidth>Login</Button>
      </section>
      <section className="text-center space-y-2">
        <p>Forgot password?</p>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </section>
    </form>
  );
}
