import { HTMLMotionProps } from "framer-motion";

export const getInitialTransition: (
  transition_order?: number,
  orientation?: "left" | "right" | "top" | "bottom",
) => HTMLMotionProps<"div"> = (transition_order, orientation = "bottom") => {
  const key =
    orientation == "top" || orientation == "bottom"
      ? "translateY"
      : "translateX";

  return {
    initial: {
      opacity: 0,
      [key]: orientation == "top" || orientation == "left" ? -8 : 8,
      pointerEvents: "none",
    },
    whileInView: { opacity: 1, [key]: 0, pointerEvents: "auto" },
    viewport: { once: true, margin: "0px 0px -20% 0px" },
    transition: { duration: 0.2, delay: (transition_order ?? 0) * 0.1 },
  };
};
