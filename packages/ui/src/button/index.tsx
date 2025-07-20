import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "border text-sm flex justify-center shadow items-center gap-2 font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition duration-75 cursor-pointer",
  variants: {
    variant: {
      primary: "border-indigo-600 bg-indigo-600 text-white",
      outline: "border-gray-800 text-gray-300 hover:bg-gray-800",
    },
    size: {
      sm: "py-2 px-4",
      md: "py-2.5 px-4",
      lg: "py-3.5 px-4",
    },
    fullwidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    fullwidth: false,
    size: "md",
  },
});

type ButtonStyle = VariantProps<typeof buttonVariants>;
interface ButtonProps extends ButtonStyle, React.HTMLAttributes<HTMLButtonElement> {}

function sanitizeProps(props: ButtonProps) {
  return {
    ...props,
    fullwidth: props.fullwidth?.toString(),
    className: twMerge(buttonVariants({ ...props }), props.className),
  };
}

export const Button = (props: ButtonProps) => {
  return <button {...sanitizeProps(props)} />;
};
