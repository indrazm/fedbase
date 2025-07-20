import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Link } from "react-router";

export default function Page() {
  return (
    <form className="space-y-6 w-100">
      <section className="text-center space-y-2">
        <h3>Sign Up</h3>
        <p>Create your account</p>
      </section>
      <section className="space-y-2">
        <Input name="name" placeholder="Name" />
        <Input name="email" placeholder="Email address" />
        <Input name="password" placeholder="Password" type="password" />
        <Button fullWidth>Register</Button>
      </section>
      <section className="text-center space-y-2">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </form>
  );
}
