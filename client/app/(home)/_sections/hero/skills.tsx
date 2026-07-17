import { Icons } from "@/components";
import Tooltip from "@/components/tooltip";

const Skills = () => {
  const skills = [
    { icon: <Icons.HTMLIcon />, label: "HTML" },
    { icon: <Icons.CSSIcon />, label: "CSS" },
    { icon: <Icons.JavascriptIcon />, label: "JavaScript" },
    { icon: <Icons.TypescriptIcon />, label: "TypeScript" },
    { icon: <Icons.ReactIcon />, label: "React" },
    { icon: <Icons.NextJSIcon />, label: "NextJS" },
    { icon: <Icons.TanstackIcon />, label: "TanStack" },
    { icon: <Icons.NodeJSIcon />, label: "NodeJS" },
    { icon: <Icons.TailwindCSSIcon />, label: "Tailwind" },
    { icon: <Icons.NestJSIcon />, label: "NestJS" },
    { icon: <Icons.PrismaIcon />, label: "Prisma" },
    { icon: <Icons.SQLIcon />, label: "SQL" },
    { icon: <Icons.FirebaseIcon />, label: "Firebase" },
    { icon: <Icons.AndroidIcon />, label: "Android" },
    { icon: <Icons.GitIcon />, label: "Git" },
    { icon: <Icons.FigmaIcon />, label: "Figma" },
  ];

  return (
    <div className="row-span-2 w-fit h-full grid grid-cols-[repeat(4,min-content)] grid-rows-4 gap-0.5">
      {skills.map(({ icon, label }, idx) => (
        <Tooltip
          label={label}
          key={idx}
          style={{ zIndex: `${skills.length - idx}` }}
          className="rounded-full"
        >
          <div className="rounded-full cursor-pointer *:w-full *:h-full *:rounded-full transition duration-200 ease-out group-hover:scale-90">
            {icon}
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default Skills;
