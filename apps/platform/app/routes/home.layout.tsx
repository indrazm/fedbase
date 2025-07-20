import { Button } from "@repo/ui/button";
import { Link, Outlet } from "react-router";
import { Sidebar } from "./home.sidebar";
import type { Route } from "./+types/home.layout";
import { tokenCookie } from "./auth.login";
import { api } from "lib/api";
import { Avatar } from "radix-ui";

export async function loader({ request }: Route.LoaderArgs) {
  const token = await tokenCookie.parse(request.headers.get("Cookie"));

  const { data } = await api.profile.get({
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!data?.user) {
    return { user: null };
  }

  return { user: data.user };
}

export default function HomeLayout({ loaderData }: Route.ComponentProps) {
  return (
    <main className="max-w-5xl mx-auto py-4 min-h-screen flex flex-col justify-between">
      <div className="space-y-8">
        <header className="flex justify-between items-center">
          <div className="text-xl tracking-wide text-white font-medium">fedbase.</div>
          {loaderData.user ? (
            <div className="flex gap-2 items-center">
              <div className="text-white font-medium text-sm">{loaderData.user.name}</div>
              <Avatar.Root className="flex justify-center items-center w-6 h-6 rounded-full text-xs bg-indigo-600 text-white">
                <Avatar.Fallback>{loaderData.user.name?.charAt(0)}</Avatar.Fallback>
              </Avatar.Root>
            </div>
          ) : (
            <Link to="/register">
              <Button size="sm" variant="outline">
                Register to fedbase
              </Button>
            </Link>
          )}
        </header>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <Outlet />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
      <footer className="text-center text-white">
        <div className="text-sm text-white">© 2023 fedbase. All Rights Reserved.</div>
      </footer>
    </main>
  );
}
