"use client";

import { useRef } from "react";
import { Icons } from "../";
import { motion } from "framer-motion";
import { getInitialTransition } from "@/lib/helpers";

const Resume = ({
  className,
  include_scroll = true,
  transition_order,
}: {
  className?: string;
  include_scroll?: boolean;
  transition_order?: number;
}) => {
  const btn_ref = useRef<HTMLDivElement>(null);
  const content_ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      {...(transition_order !== undefined
        ? getInitialTransition(transition_order)
        : {})}
      className={`group row-span-2 h-fit bg-secondary px-16 py-12 rounded-lg flex justify-center items-center cursor-pointer transition-transform duration-200 ease-out hover:scale-95 ${className ?? ""}`}
      ref={btn_ref}
      onMouseMove={(e) => {
        if (!content_ref.current || !btn_ref.current) return;

        const delta_x = e.clientX - btn_ref.current.offsetLeft;
        const offset_x = delta_x / btn_ref.current.clientWidth - 0.5;

        const delta_y =
          e.clientY +
          (include_scroll ? window.scrollY : 0) -
          btn_ref.current.offsetTop;
        const offset_y = delta_y / btn_ref.current.clientHeight - 0.5;

        content_ref.current.style.transform = `translate(${offset_x * 25}%, ${offset_y * 25}%)`;
        btn_ref.current.style.transform = `translate(${offset_x * 5}%, ${offset_y * 5}%)`;
      }}
      onMouseLeave={() => {
        if (!content_ref.current || !btn_ref.current) return;

        content_ref.current.style.transform = "";
        btn_ref.current.style.transform = "";
      }}
    >
      <div
        className="flex flex-col items-center gap-2 transition duration-200 ease-out group-hover:scale-[1.05]"
        ref={content_ref}
      >
        <Icons.ArrowTopRightIcon className="w-10 aspect-square fill-white" />

        <h2 className="text-white!">Resume</h2>
      </div>
    </motion.div>
  );
};

export default Resume;
