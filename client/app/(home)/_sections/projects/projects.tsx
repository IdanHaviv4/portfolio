import Title from "@/components/title";
import { projects } from "@/constants";
import Project from "./project";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-start gap-6">
      <Title label={"My Work"} tag={"projects"} />

      {projects.map((project, idx) => (
        <Project {...project} idx={idx} key={idx} />
      ))}
    </div>
  );
};

export default Projects;
