import { Icons } from "@/components";
import Tooltip from "@/components/tooltip";
import { getInitialTransition } from "@/lib/helpers";
import { motion } from "framer-motion";

const SecondarySkills = ({
  className = "",
  transition_order,
}: {
  className?: string;
  transition_order?: number;
}) => {
  const skills = [
    { icon: <Icons.CIcon />, label: "C" },
    { icon: <Icons.CPPIcon />, label: "C++" },
    { icon: <Icons.CSharpIcon />, label: "C#" },
    { icon: <Icons.JavaIcon />, label: "Java" },
  ];

  return (
    <motion.div
      {...(transition_order !== undefined
        ? getInitialTransition(transition_order)
        : {})}
      className={`grid grid-cols-4 gap-0.5 ${className}`}
    >
      {skills.map(({ icon, label }, idx) => (
        <Tooltip
          label={label}
          key={idx}
          style={{ zIndex: `${skills.length - idx}` }}
          className="rounded-full"
        >
          <div className="rounded-full cursor-pointer *:h-full *:aspect-square *:rounded-full transition duration-200 ease-out group-hover:scale-90">
            {icon}
          </div>
        </Tooltip>
      ))}
    </motion.div>
  );
};

export default SecondarySkills;
