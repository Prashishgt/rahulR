import { cn } from "@/utils";
import Image from "next/image";
import React, { Fragment, useState } from "react";

import { Button } from "./button";
import { ArrowIcon } from "./icon";

export const TCR = ({ data, order, parentIndex }) => {
  const IS_ODD = parentIndex % 2 !== 0;

  const [step, setStep] = useState(0);

  const nextSlide = () => {
    setStep((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setStep((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <section
      className={cn("py-16 px-8 rounded-lg  overflow-hidden w-full", {
        "bg-primary": !IS_ODD,
        "bg-foreground": IS_ODD,
      })}
    >
      <div className="relative w-full h-[25rem] overflow-hidden">
        <div
          className={cn("flex transition-all duration-500 ease-in-out h-full")}
        >
          {data.map((curr, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 w-full flex-shrink-0 grid-cols-2 grid h-full transition-opacity duration-500",
                {
                  "opacity-100": index === step,
                  "opacity-0 pointer-events-none": index !== step,
                }
              )}
            >
              {index !== 0 && (
                <h3
                  className={cn(
                    "absolute top-0  text-white font-bold text-xl",
                    {
                      "right-6": IS_ODD,
                      "left-6": !IS_ODD,
                    }
                  )}
                >
                  {order}. {data[0].title}
                </h3>
              )}

              <div
                className={cn("flex items-center h-[400px] rounded-lg", {
                  "order-2": !IS_ODD,
                  "order-1": IS_ODD,
                })}
              >
                <Image
                  height={397}
                  width={530}
                  src={curr.img}
                  alt={curr.title + "image"}
                  className="rounded-lg overflow-hidden"
                />
              </div>

              <div
                className={cn(
                  "flex flex-col justify-center gap-20 text-white px-6",
                  {
                    "order-1": !IS_ODD,
                    "order-2": IS_ODD,
                  }
                )}
              >
                <div className="flex flex-col gap-4">
                  {index === 0 && (
                    <strong className="text-3xl font-semibold">{order}</strong>
                  )}
                  <h3 className="text-2xl font-semibold">{curr.title}</h3>
                  <p>{curr.desc}</p>
                </div>

                <div className="flex items-center gap-4">
                  {index === 0 ? (
                    <Button
                      onClick={() => setStep(1)}
                      variant={IS_ODD ? "primary" : "foreground"}
                    >
                      Lets give you a tour <ArrowIcon />
                    </Button>
                  ) : (
                    <Fragment>
                      <Button
                        onClick={prevSlide}
                        variant={IS_ODD ? "primary" : "foreground"}
                      >
                        <ArrowIcon className="scale-x-[-1]" /> Previous
                      </Button>
                      {data.length - 1 === index ? (
                        <Button
                          onClick={() => setStep(0)}
                          variant={IS_ODD ? "primary" : "foreground"}
                        >
                          Back to page 1
                        </Button>
                      ) : (
                        <Button
                          onClick={nextSlide}
                          variant={IS_ODD ? "primary" : "foreground"}
                        >
                          Next <ArrowIcon />
                        </Button>
                      )}
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
