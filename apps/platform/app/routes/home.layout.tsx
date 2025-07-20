import { Button } from "@repo/ui/button";
import { Link, Outlet } from "react-router";
import { Sidebar } from "./home.sidebar";

export default function HomeLayout() {
  return (
    <main className="max-w-5xl mx-auto py-4 min-h-screen flex flex-col justify-between">
      <div className="space-y-8">
        <header className="flex justify-between items-center">
          <div className="text-xl tracking-tight text-white font-bold">fedbase.</div>
          <Link to="/register">
            <Button size="sm" variant="outline">
              Login to fedbase
            </Button>
          </Link>
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
