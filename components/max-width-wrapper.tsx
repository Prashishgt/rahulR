import { cn } from "@/utils";
import React, { ElementType, HTMLAttributes } from "react";

interface MaxWidthWrapperI<T extends ElementType = "div">
  extends HTMLAttributes<HTMLElement> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

export const MaxWidthWrapper = <T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: MaxWidthWrapperI<T>) => {
  const Component = as || "div";
  return (
    <Component className={cn("mx-auto max-w-7xl w-full", className)} {...props}>
      {children}
    </Component>
  );
};
