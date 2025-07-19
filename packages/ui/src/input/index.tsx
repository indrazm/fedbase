import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const inputVariants = tv({
  base: [
    "block w-full text-gray-100 font-medium placeholder:text-gray-500 tracking-tight",
    "border border-gray-700 bg-gray-900/20 px-4 py-2.5 rounded-lg",
    "focus-within:outline-none focus-within:border-indigo-500 transition duration-200",
    "focus-within:ring-4 focus-within:ring-indigo-950",
    "disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
  ],
});

type InputStyle = VariantProps<typeof inputVariants>;
export interface InputProps extends InputStyle, React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <input {...props} className={twMerge(inputVariants({ ...props }), props.className)} />;
};
