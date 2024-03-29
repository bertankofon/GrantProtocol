"use client";

import { AnimatedBeamDemo } from "../components/magicui/beam-demo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-24">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center">FundIt!</span>
            <span className="block text-4xl font-bold">Unleash Innovation, Empower Projects</span>
          </h1>
        </div>
        <AnimatedBeamDemo />
      </div>
    </>
  );
};

export default Home;
