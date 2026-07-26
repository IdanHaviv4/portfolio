"use client";

import { About, Age, Location, Skills, SecondarySkills, Name } from "./";
import Socials from "@/components/socials";
import Resume from "@/components/resume";
import dynamic from "next/dynamic";
import Image from "next/image";

const Fact = dynamic(() => import("./fact"), {
  ssr: false,
  loading: () => <span></span>,
});

const Hero = () => {
  return (
    <>
      <section id="home" className="w-screen h-min px-3 xs:px-6">
        <div
          className="w-full p-4 rounded-3xl overflow-hidden xs:p-6 md:py-10 md:px-0 not-lg:[--bg-position:left]"
          style={{
            background:
              "url(/assets/hero/bg.jpg) no-repeat var(--bg-position, center)/cover",
          }}
        >
          <div className="w-full max-w-max-width mx-auto h-min grid grid-cols-[1fr_min-content_1fr] gap-5 not-lg:hidden">
            <Name />

            <Age />

            <Skills className="row-span-2 grid-cols-4" />

            <About className="col-span-2" />

            <Location className="row-span-3" />

            <Resume />

            <div className="w-full h-fit flex flex-col gap-1">
              <p>Also experienced with</p>

              <SecondarySkills />
            </div>

            <Fact className="row-span-2" />

            <Socials />
          </div>

          <div className="w-fit max-w-max-width mx-auto h-min grid gap-5 grid-cols-[repeat(2,min-content)] not-md:hidden lg:hidden">
            <Name />

            <Fact />

            <About className="col-span-2" />

            <Location className="row-span-3" />

            <Age />

            <Socials />

            <Resume className="col-span-1! row-span-2!" />

            <SecondarySkills className="z-20" />

            <Skills className="w-full col-span-2 grid-cols-8" />
          </div>

          <div className="w-fit max-w-90 mx-auto h-min grid grid-cols-[1fr_min-content] gap-5 md:hidden">
            <Name className="col-span-2" />

            <About className="col-span-2" />

            <Location className="col-span-2" />

            <Fact className="min-w-48 min-h-10" />

            <SecondarySkills className="w-20 row-span-2 grid-cols-1!" />

            <Resume className="row-span-1! h-full px-8! py-6!" />

            <Socials />

            <Age />

            <div></div>

            <Skills className="col-span-2 w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
