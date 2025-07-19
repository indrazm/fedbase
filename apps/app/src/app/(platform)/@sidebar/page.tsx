import { Newspaper } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-4 text-sm">
      <div className="text-gray-200 font-semibold tracking-tight">Boards</div>
      <section>
        <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 px-4 py-2.5 rounded-lg text-gray-300 font-medium">
          <Newspaper size={16} />
          All posts
        </div>
        <div className="flex items-center gap-2 bg-transparent border border-transparent px-4 py-2.5 rounded-lg text-gray-300 font-medium">
          <Newspaper size={16} />
          All posts
        </div>
      </section>
    </div>
  );
}
