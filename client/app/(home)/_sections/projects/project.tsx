"use client";

import { ArrowTopRightIcon } from "@/components/icons";
import { projects, skills } from "@/constants";
import { useCallback, useEffect, useRef } from "react";

const Project = ({
  idx,
  title,
  description,
  ...project
}: (typeof projects)[0] & { idx: number }) => {
  const btn_ref = useRef<HTMLButtonElement>(null);
  const img_ref = useRef<HTMLImageElement>(null);

  const updateComponents = useCallback((is_hovering: boolean) => {
    if (!btn_ref.current || !img_ref.current) return;

    img_ref.current.style.scale = is_hovering ? "1.05" : "1";

    const btn_label = btn_ref.current.querySelector("span")!;
    const btn_arrow_icon = btn_ref.current.querySelector("svg")!;

    btn_label.style.transform = `translateX(${is_hovering ? "0%" : `${(btn_arrow_icon.clientWidth + 8) / 2}px`})`;
    btn_arrow_icon.style.transform = `translateY(${is_hovering ? 0 : 150}%)`;
  }, []);

  useEffect(() => {
    updateComponents(false);
  }, []);

  return (
    <div className="grid grid-cols-2 items-end gap-5">
      <div
        className="w-full h-fit rounded-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => updateComponents(true)}
        onMouseLeave={() => updateComponents(false)}
      >
        <img
          ref={img_ref}
          src={`/assets/projects/${idx + 1}.jpg`}
          alt={`project-${idx + 1}`}
          className="w-full h-auto transition duration-200 ease-out"
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

        <button
          className="bg-secondary rounded-lg px-5 py-1.5 cursor-pointer flex items-center gap-2 overflow-hidden transition duration-200 ease-out"
          ref={btn_ref}
          onMouseEnter={() => updateComponents(true)}
          onMouseLeave={() => updateComponents(false)}
        >
          <span className="text-white! font-medium! transition duration-200 ease-out">
            Explore Project
          </span>

          <ArrowTopRightIcon className="w-5 aspect-square fill-white transition duration-200 ease-out" />
        </button>
      </div>
    </div>
  );
};

export default Project;
