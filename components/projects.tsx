"use client";
import React from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { TCR } from "./tcr";
import { PROJECTS_DATA } from "@/data";

export const Projects = () => {
  return (
    <div className="py-13" id="projects">
      <MaxWidthWrapper className="flex flex-col gap-13">
        <h2 className=" text-[3rem] text-center">
          My <strong>Projects</strong>
        </h2>

        <div className="flex flex-col gap-[3.75rem]">
          {PROJECTS_DATA.map((item, index) => {
            const { data, order } = item;

            return (
              <TCR
                key={order + index}
                data={data}
                order={order}
                parentIndex={index}
              />
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
