import React, { HTMLAttributes } from "react";

const Tooltip = ({
  children,
  label,
  variant = "light",
  ...props
}: {
  children: React.ReactNode;
  label: string;
  variant?: "light" | "dark";
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`group relative h-full aspect-square ${props.className ?? ""}`}
    >
      {children}

      <span
        className={`text-[0.9rem]! font-medium shadow-[0_0_30px_hsla(0,0%,0%,0.2)] px-3 py-1 rounded-lg pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-1 transition duration-200 ease-out opacity-0 group-hover:opacity-100 ${variant == "light" ? "text-text-secondary! bg-section" : "text-text-secondary-dark! bg-section-dark"}`}
      >
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
