import React from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";
import Image from "next/image";

export const Hero = () => {
  return (
    <MaxWidthWrapper
      className="h-[calc(100dvh-6.5rem)] flex flex-col-reverse sm:flex-row items-center py-13 w-full "
      id={"about-me"}
    >
      <div className="max-w-[37.5rem]">
        <div>
          <h1 className="text-[3rem] text-primary">
            Hello I&apos;am <strong>Rahul Rai UI UX</strong>{" "}
            <span className="text-transparent text-outline font-bold ">
              Designer
            </span>{" "}
            Based In <strong>Nepal</strong>
          </h1>{" "}
        </div>
        <p>
          Hello , With one year of experience in UI/UX design at Sterling Wells,
          a UK-based company, I have contributed to designing intuitive and
          user-friendly digital solutions. I have collaborated with
          cross-functional teams to enhance usability, streamline workflows, and
          deliver seamless user experiences.
        </p>
      </div>
      <Image src={"/hero.png"} alt={"hero_image"} height={941} width={796} />
    </MaxWidthWrapper>
  );
};
