import { CIcon, CPPIcon, CSharpIcon, JavaIcon } from "@/components/icons";
import Tooltip from "@/components/tooltip";

const SecondarySkills = () => {
  const skills = [
    { icon: <CIcon />, label: "C" },
    { icon: <CPPIcon />, label: "C++" },
    { icon: <CSharpIcon />, label: "C#" },
    { icon: <JavaIcon />, label: "Java" },
  ];

  return (
    <div className="w-full h-fit flex flex-col gap-1">
      <p>Also experienced with</p>

      <div className="grid grid-cols-4 gap-0.5">
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
    </div>
  );
};

export default SecondarySkills;
