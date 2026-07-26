"use client";

import Title from "@/components/title";
import { projects } from "@/constants";
import Project from "./project";
import { motion } from "framer-motion";
import { getInitialTransition } from "@/lib/helpers";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col items-start gap-10 pb-20 md:gap-6"
    >
      <motion.div {...getInitialTransition(0, "bottom", "-10%")}>
        <Title label={"My Work"} tag={"projects"} />
      </motion.div>

      {projects.map((project, idx) => (
        <Project
          {...project}
          description={project.description.slice(0, 100)}
          idx={idx}
          key={idx}
        />
      ))}
    </section>
  );
};

export default Projects;
