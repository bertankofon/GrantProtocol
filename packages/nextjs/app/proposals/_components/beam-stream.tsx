"use client";

import React, { forwardRef, useRef } from "react";
import { FundItLogo } from "../../../components/assets/FundItLogo";
import { UserIcon } from "@heroicons/react/24/outline";
import { AnimatedBeam } from "~~/components/magicui/animated-beam";
import { cn } from "~~/lib/utils";

// eslint-disable-next-line react/display-name
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

export function BeamStream() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <FundItLogo className="h-10 w-10" />
          </Circle>
          <Circle ref={div2Ref}>
            <UserIcon className="h-10 w-10" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam duration={3} containerRef={containerRef} fromRef={div1Ref} toRef={div2Ref} />
    </div>
  );
}
