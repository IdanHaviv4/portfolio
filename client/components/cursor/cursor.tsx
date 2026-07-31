"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursor_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onmousemove = (e) => {
      if (!cursor_ref.current) return;

      cursor_ref.current.style.left = `${e.clientX}px`;
      cursor_ref.current.style.top = `${e.clientY}px`;
    };

    return () => {
      window.onmousemove = null;
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 -translate-x-1/2 w-6 aspect-square z-50 transition-[top_500ms,left_500ms,scale_200ms,rotate_200ms] ease-out pointer-events-none"
      data-cursor
      ref={cursor_ref}
    >
      <Image src="/assets/cursor.png" width={48} height={48} alt="cursor" />
    </div>
  );
};

export default Cursor;
