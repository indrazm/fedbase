import type { Route } from "./+types/home";
import { Button } from "@repo/ui/button";
import { PostCard } from "components/postCard";
import { ChartLine, Flame, Plus } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

const dummyData = [
  {
    isPinned: true,
    title: "Live chat & help desk module",
    upvoteNumber: 23,
    description: "Update: The live chat & help desk module is now available in the platform.",
    category: "bug",
  },
  {
    isPinned: false,
    title: "Product feedback module",
    upvoteNumber: 12,
    description: "Update: The product feedback module is now available in the platform.",
    category: "feedback",
  },
  {
    isPinned: false,
    title: "Feature request module",
    upvoteNumber: 12,
    description: "Update: The feature request module is now available in the platform.",
    category: "feature_request",
  },
] as const;

export default function Page() {
  return (
    <main className="space-y-5">
      <section className="space-y-1 p-5 rounded-lg bg-indigo-600/50">
        <div className="text-xl font-medium text-white tracking-tight">Share your product feedback!</div>
        <p className="text-indigo-200">Please tell us what we can do to make fedbase the best product for you.</p>
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
        {dummyData.map((item) => (
          <PostCard key={item.title} {...item} />
        ))}
      </section>
    </main>
  );
}
