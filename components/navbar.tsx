import React from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";
import Link from "next/link";
import { Button } from "./button";
import { CV_LINK } from "@/data";

const NAV_ITEMS = [
  {
    label: "About Me",
    href: "#about-me",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact Me",
    href: "#contact-me",
  },
];

export const Navbar = () => {
  return (
    <div className="border-b shadow-[0px_-4px_14px_0px_#00000040] h-[6.5rem] flex items-center ">
      <MaxWidthWrapper
        as={"nav"}
        className="flex items-center justify-between px-8  "
      >
        <ul className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="font-semibold text-xl">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="underline font-bold text-xl">
          <Link href={CV_LINK} target="_blank">
            Resume
          </Link>
        </Button>
      </MaxWidthWrapper>
    </div>
  );
};
