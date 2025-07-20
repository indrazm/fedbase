import { Newspaper, Bug, Lightbulb, MessageSquare, Star, Zap, Users, Settings } from "lucide-react";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="space-y-4 text-sm">
      <div className="text-gray-200 font-semibold tracking-tight">Boards</div>
      <section className="space-y-1">
        <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 px-4 py-2.5 rounded-lg text-gray-300 font-medium">
          <Newspaper size={16} />
          All posts
        </div>
        <div className="flex items-center gap-2 bg-transparent border border-transparent px-4 py-2.5 rounded-lg text-gray-300 font-medium hover:bg-gray-900/50">
          <Bug size={16} />
          Bug Reports
        </div>
        <div className="flex items-center gap-2 bg-transparent border border-transparent px-4 py-2.5 rounded-lg text-gray-300 font-medium hover:bg-gray-900/50">
          <Lightbulb size={16} />
          Feature Requests
        </div>
        <div className="flex items-center gap-2 bg-transparent border border-transparent px-4 py-2.5 rounded-lg text-gray-300 font-medium hover:bg-gray-900/50">
          <MessageSquare size={16} />
          General Discussion
        </div>
        <div className="flex items-center gap-2 bg-transparent border border-transparent px-4 py-2.5 rounded-lg text-gray-300 font-medium hover:bg-gray-900/50">
          <Star size={16} />
          Product Updates
        </div>
        <div className="flex items-center gap-2 bg-transparent border border-transparent px-4 py-2.5 rounded-lg text-gray-300 font-medium hover:bg-gray-900/50">
          <Zap size={16} />
          Integrations
        </div>
        <div className="flex items-center gap-2 bg-transparent border border-transparent px-4 py-2.5 rounded-lg text-gray-300 font-medium hover:bg-gray-900/50">
          <Users size={16} />
          Community
        </div>
        <div className="flex items-center gap-2 bg-transparent border border-transparent px-4 py-2.5 rounded-lg text-gray-300 font-medium hover:bg-gray-900/50">
          <Settings size={16} />
          Platform Settings
        </div>
      </section>
    </div>
  );
};
