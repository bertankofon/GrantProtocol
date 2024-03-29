"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "../../lib/utils";
import { FundItLogo } from "../assets/FundItLogo";
import { AnimatedBeam } from "./animated-beam";
import { HomeIcon } from "@heroicons/react/24/outline";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3", className)}
      >
        {children}
      </div>
    );
  },
);

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex w-full max-w-3xl items-center justify-center overflow-hidden" ref={containerRef}>
      <div className="flex h-full w-full flex-row items-stretch justify-between">
        <div className="flex flex-col justify-center gap-10">
          <Circle ref={div1Ref}>
            <HomeIcon className="h-6 w-6" />
          </Circle>
          <Circle ref={div2Ref}>
            <HomeIcon className="h-6 w-6" />
          </Circle>
          <Circle ref={div3Ref}>
            <HomeIcon className="h-6 w-6" />
          </Circle>
          <Circle ref={div4Ref}>
            <HomeIcon className="h-6 w-6" />
          </Circle>
          <Circle ref={div5Ref}>
            <HomeIcon className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <FundItLogo className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <HomeIcon className="text-black" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} />
    </div>
  );
}
