import { Icons } from "@/components";
import Tooltip from "@/components/tooltip";

const SecondarySkills = ({ className = "" }: { className?: string }) => {
  const skills = [
    { icon: <Icons.CIcon />, label: "C" },
    { icon: <Icons.CPPIcon />, label: "C++" },
    { icon: <Icons.CSharpIcon />, label: "C#" },
    { icon: <Icons.JavaIcon />, label: "Java" },
  ];

  return (
    <div className={`grid grid-cols-4 gap-0.5 ${className}`}>
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
    </div>
  );
};

export default SecondarySkills;
