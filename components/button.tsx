import { cn } from "@/utils";
import React, { HTMLAttributes } from "react";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "foreground";
}

export const Button = ({
  className = "",
  children = "Button",
  variant = "primary",
  ...props
}: IButton) => {
  return (
    <button
      className={cn(
        "px-6 h-14 py-6 bg-blue-500 text-white rounded  inline-flex items-center gap-2 ",
        {
          "bg-primary hover:bg-primary-hover": variant === "primary",
          "bg-foreground hover:bg-foreground-hover": variant === "foreground",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
