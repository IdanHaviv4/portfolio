"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";
import Icons from "../svg";
import Socials from "../socials";
import Resume from "../resume";
import { motion } from "framer-motion";
import { getInitialTransition } from "@/lib/helpers";

const Nav = () => {
  const pathname = usePathname();

  const name_ref = useRef<HTMLDivElement>(null);
  const nav_ref = useRef<HTMLDivElement>(null);
  const toggle_nav_btn = useRef<HTMLButtonElement>(null);

  const links = useMemo(
    () => ["home", "projects", "lab", "education", "certificates"],
    [],
  );

  const toggleName = useCallback(
    (hide?: boolean) => {
      for (const classname of ["opacity-0", "translate-y-1/4"])
        name_ref.current?.classList.toggle(
          classname,
          hide ?? (window.scrollY <= 73 && pathname.split("#").at(0) == "/"),
        );
    },
    [pathname],
  );

  const toggleMobileNav = useCallback(
    (open?: boolean) => {
      if (!nav_ref.current || !toggle_nav_btn.current) return;

      const should_open = open ?? !nav_ref.current.classList.contains("h-full");

      if (should_open) toggleName(false);
      else toggleName();

      toggle_nav_btn.current.scrollBy(
        0,
        toggle_nav_btn.current.clientWidth * (should_open ? 1 : -1),
      );

      for (const classname of ["h-full", "opened"])
        nav_ref.current?.classList.toggle(classname, should_open);
    },
    [pathname],
  );

  useEffect(() => {
    toggleMobileNav(false);

    window.onscroll = () => toggleName();

    return () => {
      window.onscroll = null;
    };
  }, [pathname]);

  return (
    <>
      <nav
        ref={nav_ref}
        className="fixed top-0 left-0 w-screen h-[64px] flex flex-col gap-10 z-40 bg-primary/50 backdrop-blur-2xl px-3 py-3 overflow-hidden xs:px-6 md:h-[64px]! transition-[height] duration-700 ease-out pointer-events-auto"
      >
        <div className="w-full h-fit max-w-max-width mx-auto flex justify-between items-center">
          <motion.div {...getInitialTransition()}>
            <Link
              href="/#home"
              className="cursor-pointer flex items-center gap-3"
            >
              <Icons.LogoIcon className="w-8 aspect-square" />

              <div
                className="flex flex-col gap-1 opacity-0 translate-y-1/4 transition duration-200 ease-out"
                ref={name_ref}
              >
                <span className="leading-4">Idan Haviv</span>

                <div className="flex items-center gap-2">
                  <div className="w-2 aspect-square rounded-full bg-[#00D218]"></div>

                  <p className="text-[0.8rem]! leading-3!">Available to work</p>
                </div>
              </div>
            </Link>
          </motion.div>

          <ul className="list-none flex items-center gap-9 not-md:hidden">
            {links.map((section, idx) => (
              <motion.li
                {...getInitialTransition(idx + 1)}
                className="cursor-pointer"
                key={section}
              >
                <Link
                  href={`/#${section}`}
                  className="capitalize text-[1rem]! transition duration-200 ease-out hover:text-accent!"
                >
                  {section}
                </Link>
              </motion.li>
            ))}
          </ul>

          <button
            className="w-6 aspect-square cursor-pointer flex flex-col justify-start items-start overflow-hidden md:hidden *:shrink-0 *:w-full *:aspect-square *:fill-text-primary *:transition *:duration-200 *:ease-out *:hover:fill-accent"
            ref={toggle_nav_btn}
            onClick={() => toggleMobileNav()}
          >
            <Icons.MenuIcon />
            <Icons.XIcon />
          </button>
        </div>

        <nav className="w-full h-full flex justify-between items-start pb-8 md:hidden not-sm:justify-start not-sm:gap-10 not-sm:flex-col not-sm:items-end">
          <ul className="list-none flex flex-col items-start gap-6 not-sm:w-full">
            {links.map((section) => (
              <li className="group cursor-pointer" key={section}>
                <Link href={`/#${section}`} onClick={() => toggleMobileNav()}>
                  <h1 className="capitalize transition duration-200 ease-out text-[2.25rem]! leading-6! group-hover:text-accent!">
                    {section}
                  </h1>
                </Link>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-[repeat(1,min-content)] gap-2">
            <Resume className="w-fit bg-[#363E41]!" include_scroll={false} />

            <Socials variant="light" />
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Nav;
