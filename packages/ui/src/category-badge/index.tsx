import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const badgeStyle = tv({
  base: " w-fit border rounded-lg text-xs font-medium px-2 py-1",
  variants: {
    variant: {
      DEFAULT: "bg-gray-950/50  border-gray-900 text-gray-500",
      bug: "bg-rose-950/50  border-rose-900 text-rose-500",
      feedback: "bg-yellow-950/50  border-yellow-900 text-yellow-500",
      feature_request: "bg-blue-950/50  border-blue-900 text-blue-500",
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

export const CategoryBadge = (props: CategoryBadgeProps) => {
  return <div className={badgeStyle({ variant: props.category })}>{props.category}</div>;
};
