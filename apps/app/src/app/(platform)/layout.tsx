import { Button } from "@repo/ui/button";
import { Folder, MapPinHouseIcon, Podcast } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <main className="max-w-5xl mx-auto py-4 min-h-screen flex flex-col justify-between">
      <div className="space-y-8">
        <header className="flex justify-between items-center">
          <div className="text-xl tracking-tight text-white font-bold">fedbase.</div>
          <Link href="/login">
            <Button size="sm" variant="outline">
              Login to fedbase
            </Button>
          </Link>
        </header>
        {/* <div className="flex gap-6 items-center text-gray-400">
          <div className="flex items-center gap-2">
            <Folder size={16} />
            Feedback
          </div>
          <div className="flex items-center gap-2">
            <Podcast size={16} />
            Changelog
          </div>
          <div className="flex items-center gap-2">
            <MapPinHouseIcon size={16} />
            Roadmap
          </div>
        </div> */}
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">{children}</div>
          <div>{sidebar}</div>
        </div>
      </div>
      <footer className="text-sm border-t pt-4 text-gray-700 border-gray-900 flex justify-between ">
        <div>All right reserved by fedbase. @2025</div>
        <div className="flex gap-5 items-center">
          <div>Feature Request</div>
          <div>Bug Report</div>
          <div>Contact Us</div>
        </div>
      </footer>
    </main>
  );
}
