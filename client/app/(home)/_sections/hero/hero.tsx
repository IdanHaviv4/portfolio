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
    <section
      id="home"
      className="w-fit h-min grid grid-cols-[repeat(3,min-content)] grid-rows-[repeat(5,min-content)] gap-5"
    >
      <div className="group relative w-full h-full flex flex-col gap-2 rounded-lg overflow-hidden cursor-pointer">
        <h1>Idan Haviv</h1>

        <div className="flex items-center gap-2">
          <div className="w-2 aspect-square rounded-full bg-[#00D218]"></div>

          <p className="text-[1rem]!">Available to work</p>
        </div>

        <img
          src="/assets/hero/hi.png"
          className="absolute right-0 bottom-0 h-full aspect-square origin-bottom-right translate-full scale-135 transition duration-700 ease-out group-hover:translate-x-1/5 group-hover:translate-y-0 group-hover:-rotate-15"
        />
      </div>

      <Age />

      <Skills />

      <About />

      <Location />

      <Resume />

      <SecondarySkills />

      <Fact />

      <Socials />
    </section>
  );
};

export default Hero;
