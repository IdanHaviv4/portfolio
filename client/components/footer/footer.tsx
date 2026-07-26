"use client";

import { motion } from "framer-motion";
import { Wave } from ".";
import { Icons } from "../";
import Resume from "../resume";
import Socials from "../socials";
import Signature from "./signature";
import { getInitialTransition } from "@/lib/helpers";

const Footer = () => {
  return (
    <section className="w-full flex flex-col">
      <Wave className="fill-secondary w-full" />

      <div className="w-full bg-secondary">
        <div className="relative before:absolute before:top-0 before:left-0 before:-translate-y-1 before:w-full before:h-2 before:bg-secondary"></div>

        <div className="w-full px-6 pt-4 pb-20 not-xs:pb-10">
          <div className="w-full max-w-max-width mx-auto flex justify-between">
            <div className="flex flex-col justify-between gap-10 items-start">
              <div className="relative">
                <motion.h1
                  {...getInitialTransition()}
                  className="text-[6rem]! text-white! leading-20! not-xs:text-[4.5rem]! not-xs:leading-16!"
                >
                  Idan
                  <br />
                  Haviv
                </motion.h1>

                <Signature className="w-28 absolute top-[85%] left-[85%] not-xs:w-24" />
              </div>

              <motion.p
                {...getInitialTransition(1)}
                className="text-text-secondary-dark!"
              >
                © 2026 Idan Haviv. Designed & developed by me.
              </motion.p>
            </div>

            <div className="flex flex-col justify-between gap-10 not-md:hidden">
              <div className="grid grid-cols-[repeat(1,min-content)] gap-2">
                <Resume className="w-fit bg-[#363E41]!" transition_order={2} />

                <Socials variant="dark" transition_order={3} />
              </div>

              <motion.button
                {...getInitialTransition(4)}
                className="group relative bg-accent rounded-lg px-5 py-1.5 cursor-pointer flex justify-center items-center gap-2 overflow-hidden transition duration-200 ease-out"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="text-white! font-medium! transition duration-200 ease-out translate-x-4 group-hover:translate-x-0">
                  Back to Top
                </span>

                <Icons.ArrowTopIcon className="w-5 aspect-square fill-white translate-y-[150%] transition duration-200 ease-out group-hover:translate-y-0" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
