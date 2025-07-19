import { Button } from "@repo/ui/button";
import { Folder, MapPinHouseIcon, Podcast } from "lucide-react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div className="max-w-5xl mx-auto my-4 space-y-8">
      <header className="flex justify-between items-center">
        <div className="text-xl tracking-tight text-white font-bold">fedbase.</div>
        <Button size="sm" variant="outline">
          Login to fedbase
        </Button>
      </header>
      <div className="flex gap-6 items-center text-gray-400">
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
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">{children}</div>
        <div>{sidebar}</div>
      </div>
    </div>
  );
}
