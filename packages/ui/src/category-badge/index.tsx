import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const badgeStyle = tv({
  base: "w-fit border rounded-lg text-xs font-medium px-2 py-1",
  variants: {
    variant: {
      DEFAULT: "bg-white border-white text-gray-900",
      bug: "bg-rose-950/50  border-rose-900 text-rose-500",
      feedback: "bg-indigo-950/50  border-indigo-900 text-indigo-500",
      feature_request: "bg-emerald-950/50  border-emerald-900 text-emerald-500",
    },
  },
  defaultVariants: {
    variant: "DEFAULT",
  },
});

export type CategoryBadgeStyle = VariantProps<typeof badgeStyle>;
interface CategoryBadgeProps extends CategoryBadgeStyle, React.HTMLAttributes<HTMLDivElement> {
  category: "bug" | "feedback" | "feature_request";
}

function getLabel(category: "bug" | "feedback" | "feature_request") {
  switch (category) {
    case "bug":
      return "Bug";
    case "feedback":
      return "Feedback";
    case "feature_request":
      return "Feature Request";
  }
}

export const CategoryBadge = (props: CategoryBadgeProps) => {
  return <div className={badgeStyle({ variant: props.category })}>{getLabel(props.category)}</div>;
};
