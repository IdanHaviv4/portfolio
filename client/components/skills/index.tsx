import { skills as skills_data } from "@/constants";

const Skills = ({
  skills,
  className = "",
}: {
  skills: (keyof typeof skills_data)[];
  className?: string;
}) => {
  return (
    <div className="shrink-0 flex pr-3">
      {skills.map((skill, idx) => {
        const Icon = skills_data[skill];

        return (
          <div
            className={`w-6 h-9 ${className}`}
            key={skill}
            style={{
              zIndex: skills.length - idx,
            }}
          >
            <Icon className="h-full aspect-square rounded-full" />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
