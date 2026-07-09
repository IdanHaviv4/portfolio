import Title from "@/components/title";
import { projects, skills } from "@/constants";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-start gap-10">
      <Title label={"My Work"} tag={"projects"} />

      {projects.map(({ title, description, ...project }, idx) => (
        <div className="grid grid-cols-2 items-end gap-5" key={idx}>
          <div className="relative w-full aspect-1440/1020 rounded-lg overflow-hidden">
            <Image
              src={`/assets/projects/${idx + 1}.jpg`}
              fill
              className="object-cover"
              alt={`project-${idx + 1}`}
              quality={95}
            />
          </div>

          <div className="w-full flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2">
              <h2>{title}</h2>
              <p className="w-full line-clamp-2">{description}</p>
            </div>

            <div className="flex">
              {project.skills.map((skill, idx) => {
                const Icon = skills[skill];

                return (
                  <div
                    className="w-6 h-9"
                    key={skill}
                    style={{
                      zIndex: project.skills.length - idx,
                    }}
                  >
                    <Icon className="h-full aspect-square rounded-full" />
                  </div>
                );
              })}
            </div>

            <button className="bg-secondary text-white! font-medium! rounded-lg px-5 py-1.5 cursor-pointer">
              Explore Project
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
