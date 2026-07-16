"use client";

import { ArrowTopRightIcon } from "@/components/icons";
import Skills from "@/components/skills";
import { projects } from "@/constants";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const Project = ({
  idx,
  title,
  description,
  skills,
}: (typeof projects)[0] & { idx: number }) => {
  const router = useRouter();

  const btn_ref = useRef<HTMLButtonElement>(null);
  const img_ref = useRef<HTMLImageElement>(null);
  const interactive_components_ref = useRef<(HTMLElement | null)[]>([]);

  const updateComponents = useCallback((is_hovering: boolean) => {
    if (!btn_ref.current || !img_ref.current) return;

    img_ref.current.style.scale = is_hovering ? "1.05" : "1";

    const btn_bg = btn_ref.current.querySelector("div")!;
    const btn_arrow_icon = btn_ref.current.querySelector("svg")!;

    btn_bg.style.scale = is_hovering ? "1" : "0.86 1";
    btn_arrow_icon.style.transform = `translateY(${is_hovering ? 0 : 150}%)`;
  }, []);

  useEffect(() => {
    updateComponents(false);

    for (const component of interactive_components_ref.current) {
      if (!component) continue;

      component.onmouseenter = () => updateComponents(true);
      component.onmouseleave = () => updateComponents(false);
      component.onclick = () => {
        router.push(`/project/${idx + 1}`);
      };
    }

    return () => {
      for (const component of interactive_components_ref.current) {
        if (!component) continue;

        component.onmouseenter = null;
        component.onmouseleave = null;
        component.onclick = null;
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-2 items-end gap-5">
      <div
        className="w-full h-fit rounded-lg overflow-hidden cursor-pointer"
        ref={(ref) => {
          interactive_components_ref.current.push(ref!);
        }}
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

        <Skills skills={skills} />

        <button
          className="relative px-5 py-1.5 rounded-lg cursor-pointer flex items-center gap-2 overflow-hidden transition duration-200 ease-out"
          ref={(ref) => {
            btn_ref.current = ref;
            interactive_components_ref.current.push(ref!);
          }}
        >
          <div className="absolute top-0 left-0 bg-secondary rounded-lg w-full h-full origin-left -z-10 transition duration-200 ease-out"></div>
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
