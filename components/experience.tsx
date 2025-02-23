import React from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { cn } from "@/utils";

const EXPERIENCE_DATA = [
  {
    title: "Junior UI UX Designer at Sterling Wells",
    date: "June 2024–Present",
    description:
      "Gained 1 year of experience in designing intuitive and user-centric digital products. Done UI design for various projects, ensuring seamless user experiences. Collaborated with Developers, Business analyst, Business owner to translate business goals into functional designs. Focused on enhancing usability, accessibility, and visual appeal, improving overall product efficiency and engagement.",
  },
  {
    title: "UI UX Designer Internship",
    date: "Jan 2024–March 2024",
    description:
      "Worked as a UI/UX Design Intern for two months, gaining hands-on experience in designing intuitive and user-friendly digital experiences. Assisted in user research, wireframing, prototyping, and UI design for various projects. Collaborated with cross-functional teams to enhance usability and aesthetics, improving the overall user experience.",
  },
];

export const Experience = () => {
  return (
    <section className="py-13 bg-foreground h-[48.25rem]" id={"contact-me"}>
      <MaxWidthWrapper className="flex flex-col items-center gap-13 ">
        <h2 className="text-white text-[3rem]">
          My <strong>Experience</strong>
        </h2>
        <div className="flex flex-col gap-8 w-full">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "px-6 py-7 rounded-lg flex flex-col gap-7 text-white ",
                {
                  "bg-primary border border-primary": index === 0,
                  "bg-transparent border border-white": index === 1,
                }
              )}
            >
              <div className="flex items-center justify-between font-semibold">
                <h4 className="text-2xl ">{item.title}</h4>
                <p>{item.date}</p>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
