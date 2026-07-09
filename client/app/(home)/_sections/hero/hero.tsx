"use client";

import { About, Age, Location, Skills, SecondarySkills } from "./";
import Socials from "@/components/socials";
import Resume from "@/components/resume";
import dynamic from "next/dynamic";

const Fact = dynamic(() => import("./fact"), {
  ssr: false,
  loading: () => <span></span>,
});

const Hero = () => {
  return (
    <div className="w-fit h-min justify-center grid grid-cols-[repeat(3,min-content)] grid-rows-[repeat(5,min-content)] gap-5">
      <div className="w-full h-full flex flex-col gap-2">
        <h1>Idan Haviv</h1>

        <div className="flex items-center gap-2">
          <div className="w-2 aspect-square rounded-full bg-[#00D218]"></div>

          <p className="text-[1rem]">Available to work</p>
        </div>
      </div>

      <Age />

      <Skills />

      <About />

      <Location />

      <Resume />

      <SecondarySkills />

      <Fact />

      <Socials />
    </div>
  );
};

export default Hero;
