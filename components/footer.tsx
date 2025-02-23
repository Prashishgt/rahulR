import React from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "./icon";

export const Footer = () => {
  return (
    <footer className="py-20 bg-[#F5EAE5]">
      <MaxWidthWrapper className="flex flex-col items-center sm:gap-[3.75rem] gap-6">
        <h2 className="text-3xl">
          Get In <strong>Touch</strong>
        </h2>
        <div className="flex flex-col sm:flex-row items-center sm:gap-28 gap-10">
          <Link
            href={"tel:+977 9818797766"}
            className="flex items-center gap-6 text-2xl font-semibold hover:underline"
          >
            <PhoneIcon /> <p>+977 9818797766</p>
          </Link>
          <Link
            href={"mailto:rahulrai6.rs@gmail.com"}
            className="flex items-center gap-6 text-2xl font-semibold hover:underline"
          >
            <MailIcon /> <p>rahulrai6.rs@gmail.com</p>
          </Link>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
