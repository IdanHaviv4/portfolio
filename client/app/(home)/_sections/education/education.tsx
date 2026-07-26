"use client";

import Title from "@/components/title";
import { education } from "@/constants";
import Institute from "./institute";
import { motion } from "framer-motion";
import { getInitialTransition } from "@/lib/helpers";

const Education = () => {
  return (
    <section id="education" className="w-full flex flex-col gap-6 items-center">
      <motion.div {...getInitialTransition()}>
        <Title label={"Education"} tag={"education"} orientation="center" />
      </motion.div>

      <div className="w-full flex flex-col items-start">
        {education.map((institute, idx) => (
          <Institute key={idx} {...institute} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Education;
