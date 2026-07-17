"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const Nav = () => {
  const pathname = usePathname();

  const name_ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    for (const classname of ["opacity-0", "translate-y-1/4"])
      name_ref.current?.classList.toggle(
        classname,
        window.scrollY <= 73 && pathname == "/",
      );
  }, [pathname]);

  useEffect(() => {
    handleScroll();

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    };
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-40 bg-primary/50 backdrop-blur-2xl">
      <div className="w-full max-w-max-width mx-auto flex justify-between items-center">
        <div
          className="flex flex-col opacity-0 translate-y-1/4 transition duration-200 ease-out"
          ref={name_ref}
        >
          <span className="leading-4">Idan Haviv</span>

          <div className="flex items-center gap-2">
            <div className="w-2 aspect-square rounded-full bg-[#00D218]"></div>

            <p className="text-[0.8rem]!">Available to work</p>
          </div>
        </div>

        <ul className="list-none flex items-center gap-9">
          {["home", "projects", "education", "certificates"].map((section) => (
            <li key={section}>
              <Link href={`/#${section}`} className="capitalize text-[1rem]!">
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
