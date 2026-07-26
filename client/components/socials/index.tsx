"use client";

import Link from "next/link";
import Icons from "../svg";
import { Tooltip } from "@/components";
import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { getInitialTransition } from "@/lib/helpers";

const Socials = ({
  variant = "light",
  className = "",
  transition_order,
}: {
  variant?: "light" | "dark";
  className?: string;
  transition_order?: number;
}) => {
  const gmail_copied_ref = useRef<{
    el: HTMLDivElement | null;
    interval: NodeJS.Timeout | null;
  }>({ el: null, interval: null });

  const copyGmail = useCallback(async () => {
    await navigator.clipboard.writeText("havividan4@gmail.com");

    if (gmail_copied_ref.current.interval)
      clearTimeout(gmail_copied_ref.current.interval);

    gmail_copied_ref.current.el?.classList.remove("opacity-0");
    gmail_copied_ref.current.el?.classList.remove("translate-y-1/4");

    gmail_copied_ref.current.interval = setTimeout(() => {
      gmail_copied_ref.current?.el?.classList.add("opacity-0");
      gmail_copied_ref.current?.el?.classList.add("translate-y-1/4");
      gmail_copied_ref.current.interval = null;
    }, 3000);
  }, []);

  return (
    <motion.div
      {...(transition_order !== undefined
        ? getInitialTransition(transition_order)
        : {})}
      className={`w-full h-fit grid grid-cols-3 gap-0.5 ${className}`}
    >
      <Tooltip label="Gmail" variant={variant} className="rounded-full">
        <div
          className={`absolute top-0 right-0 z-20 text-[0.8rem]! font-medium! text-[#17c237]! px-2 rounded-full pointer-events-none translate-x-1/4 opacity-0 translate-y-1/4 transition duration-200 ease-out ${variant == "light" ? "bg-[#d3f4d9]" : "bg-[#2a5238]"}`}
          ref={(ref) => {
            gmail_copied_ref.current.el = ref;
          }}
        >
          Copied!
        </div>

        <div
          className={`w-full h-full p-3 bg-section rounded-full cursor-pointer transition duration-200 ease-out group-hover:scale-90 ${variant == "light" ? "bg-section" : "bg-section-dark"}`}
          onClick={copyGmail}
        >
          <Icons.GmailIcon className="w-full h-full" />
        </div>
      </Tooltip>

      <Tooltip label="Github" variant={variant} className="rounded-full">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Link href={"https://github.com/IdanHaviv4"} target="_blank">
            <div
              className={`w-full h-full p-3 bg-section rounded-full cursor-pointer transition duration-200 ease-out group-hover:scale-90 ${variant == "light" ? "bg-section" : "bg-section-dark"}`}
            >
              <Icons.GithubIcon
                className={`w-full h-full ${variant == "dark" && "[&_path]:fill-section!"}`}
              />
            </div>
          </Link>
        </div>
      </Tooltip>

      <Tooltip label="Linkedin" variant={variant} className="rounded-full">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Link
            href={"https://www.linkedin.com/in/idan-haviv-018027423/"}
            target="_blank"
          >
            <Icons.LinkedinIcon className="w-full h-full rounded-full  cursor-pointer transition duration-200 ease-out group-hover:scale-90" />
          </Link>
        </div>
      </Tooltip>
    </motion.div>
  );
};

export default Socials;
