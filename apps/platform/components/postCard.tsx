import { ArrowUp, PinIcon } from "lucide-react";
import React from "react";
import { CategoryBadge } from "@repo/ui/category-badge";

interface PostCardProps {
  isPinned: boolean;
  title: string;
  upvoteNumber: number;
  description: string;
  category: "bug" | "feedback" | "feature_request";
}

export const PostCard = (props: PostCardProps) => {
  return (
    <div className="flex bg-gray-900 not-last:border-b border-gray-800">
      <section className="flex-1 p-5 space-y-4">
        <section className="flex gap-2 items-center">
          {props.isPinned && (
            <div className="flex items-center gap-1 text-xs bg-gray-800 text-gray-300 border border-gray-500 px-2 py-1 rounded-lg font-medium text-gray-">
              <PinIcon size={12} /> Pinned
            </div>
          )}
          <CategoryBadge category={props.category} />
        </section>
        <div className="space-y-1">
          <div className="text-white font-medium tracking-tight">{props.title}</div>
          <div className="text-sm">{props.description}</div>
        </div>
      </section>
      <aside className="w-24  flex items-center justify-center">
        <div className="text-center text-sm space-y-2 font-bold ">
          <ArrowUp size={16} className="text-white " />
          <div>{props.upvoteNumber}</div>
        </div>
      </aside>
    </div>
  );
};
