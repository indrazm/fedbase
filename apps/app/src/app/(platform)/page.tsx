import { Button } from "@repo/ui/button";
import { ChartLine, FireExtinguisher, Flame, Plus } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className="space-y-5">
      <section className="space-y-1 p-5 border border-indigo-400 rounded-lg bg-indigo-600/50">
        <div className="text-xl font-medium text-white tracking-tight">Share your product feedback!</div>
        <p className="text-indigo-200">Please tell us what we can do to make Featurebase the best product for you.</p>
      </section>
      <section className="flex justify-between">
        <div className="flex gap-4">
          <Button variant="outline" size="sm">
            <Flame size={16} className="fill-amber-500 text-amber-500" />
            Trendings
          </Button>
          <Button variant="outline" size="sm">
            <ChartLine size={16} className="text-gray-500" />
            Most voted
          </Button>
        </div>
        <Button size="sm">
          <Plus size={16} />
          Create new post
        </Button>
      </section>
      <section className="rounded-xl overflow-hidden border border-gray-800">
        <div className="bg-gray-900 p-6 space-y-4 border-b border-gray-800">
          <div className="bg-emerald-950/50 border border-emerald-900 w-fit text-emerald-500 rounded-lg text-xs font-medium px-2 py-1">Beta</div>
          <div className="space-y-1">
            <div className="text-white font-medium tracking-tight">Live chat & help desk module</div>
            <div className="text-sm">Update: The live chat & help desk module is now available in the platform.</div>
          </div>
        </div>
        <div className="bg-gray-900 p-6 space-y-4 border-b border-gray-800">
          <div className="bg-rose-950/50 border border-rose-900 w-fit text-rose-500 rounded-lg text-xs font-medium px-2 py-1">Bug</div>
          <div className="space-y-1">
            <div className="text-white font-medium tracking-tight">Live chat & help desk module</div>
            <div className="text-sm">Update: The live chat & help desk module is now available in the platform.</div>
          </div>
        </div>{" "}
        <div className="bg-gray-900 p-6 space-y-4 ">
          <div className="bg-indigo-950/50 border border-indigo-900 w-fit text-indigo-200 rounded-lg text-xs font-medium px-2 py-1">Feedback</div>
          <div className="space-y-1">
            <div className="text-white font-medium tracking-tight">Live chat & help desk module</div>
            <div className="text-sm">Update: The live chat & help desk module is now available in the platform.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
