"use client";

import { Icons } from "@/components";
import Skills from "@/components/skills";
import { projects } from "@/constants";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";

const Project = ({ is_modal }: { is_modal?: true }) => {
  const { id: id_as_param } = useParams();

  if (!id_as_param) return notFound();

  const id = parseInt(id_as_param as string);

  if (isNaN(id)) return notFound();

  const project = projects[id - 1];

  if (!project) return notFound();

  useEffect(() => {
    if (is_modal) return;

    window.scrollTo(0, 0);
  }, [is_modal]);

  return (
    <section className="w-full max-w-max-width mx-auto flex flex-col gap-4">
      <div className="relative w-full aspect-video">
        <Image
          src={`/assets/projects/${id}.jpg`}
          width={1440}
          height={1024}
          className="absolute top-0 left-0 w-full h-auto rounded-lg"
          alt={`project-${id}-img`}
        />
      </div>

      <div className="relative w-full flex flex-col gap-[inherit] bg-primary before:absolute before:bottom-full before:left-0 before:w-full before:h-40 before:bg-linear-to-b before:from-transparent before:to-primary">
        <div className="relative w-full flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <h1>{project.title}</h1>
            <Skills skills={project.skills} />
          </div>

          <div className="h-24 aspect-square p-3 bg-section rounded-full cursor-pointer transition duration-200 ease-out group-hover:scale-90">
            <Icons.GithubIcon className="w-full h-full" />
          </div>
        </div>

        <p className="text-[1.2rem]! whitespace-pre-wrap">
          {project.description}
        </p>
      </div>
    </section>
  );
};

export default Project;
