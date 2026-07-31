"use client";

import { About, Age, Location, Skills, SecondarySkills, Name } from "./";
import Socials from "@/components/socials";
import Resume from "@/components/resume";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { getInitialTransition } from "@/lib/helpers";

const Fact = dynamic(() => import("./fact"), {
  ssr: false,
  loading: () => <span></span>,
});

const Hero = () => {
  return (
    <>
      <section id="home" className="w-screen h-min px-3 xs:px-6">
        <div className="relative w-full p-4 rounded-3xl overflow-hidden xs:p-6 md:py-10 md:px-0">
          <div
            className="absolute top-0 left-0 w-full h-full -z-10 not-lg:[--bg-position:top]"
            style={{
              background:
                "url(/assets/hero/bg.jpg) no-repeat var(--bg-position, center)/cover",
            }}
          ></div>

          <div className="w-full max-w-max-width mx-auto h-min grid grid-cols-[1fr_min-content_1fr] gap-5 not-lg:hidden">
            <Name transition_order={0} />

            <Age transition_order={1} />

            <Skills className="row-span-2 grid-cols-4" transition_order={3} />

            <About className="col-span-2" transition_order={2} />

            <Location className="row-span-3" transition_order={4} />

            <Resume transition_order={5} />

            <motion.div
              {...getInitialTransition(7)}
              className="w-full h-fit flex flex-col gap-1"
            >
              <p>Also experienced with</p>

              <SecondarySkills />
            </motion.div>

            <Fact className="row-span-2" transition_order={8} />

            <Socials transition_order={6} />
          </div>

          <div className="w-fit max-w-max-width mx-auto h-min grid gap-5 grid-cols-[repeat(2,min-content)] not-md:hidden lg:hidden">
            <Name transition_order={0} />

            <Fact transition_order={1} />

            <About className="col-span-2" transition_order={2} />

            <Location className="row-span-3" transition_order={3} />

            <Age transition_order={4} />

            <Socials transition_order={5} />

            <Resume className="col-span-1! row-span-2!" transition_order={6} />

            <SecondarySkills className="z-20" transition_order={7} />

            <Skills
              className="w-full col-span-2 grid-cols-8"
              transition_order={8}
            />
          </div>

          <div className="w-fit max-w-90 mx-auto h-min grid grid-cols-[1fr_min-content] gap-5 md:hidden">
            <Name className="col-span-2" transition_order={0} />

            <About className="col-span-2" transition_order={1} />

            <Location className="col-span-2" transition_order={2} />

            <Fact className="min-w-48 min-h-10" transition_order={3} />

            <SecondarySkills
              className="w-20 row-span-2 grid-cols-1!"
              transition_order={5}
            />

            <Resume
              className="row-span-1! h-full px-8! py-6!"
              transition_order={4}
            />

            <Socials transition_order={6} />

            <Age transition_order={7} />

            <div></div>

            <Skills className="col-span-2 w-full" transition_order={8} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
