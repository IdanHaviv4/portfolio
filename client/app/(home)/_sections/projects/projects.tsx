import Title from "@/components/title";
import { projects } from "@/constants";
import Project from "./project";

const Projects = () => {
  return (
    <section id="projects" className="w-full flex flex-col items-start gap-6">
      <Title label={"My Work"} tag={"projects"} />

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
