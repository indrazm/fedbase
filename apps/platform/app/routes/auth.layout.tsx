import { FedbaseLogo } from "@repo/brands";
import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex justify-center items-center h-screen">
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <FedbaseLogo />
        <Link to="/" className="text-sm font-medium">
          Back to fedbase
        </Link>
      </header>
      <Outlet />
    </div>
  );
}
