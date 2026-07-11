import {
  AndroidIcon,
  CSSIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  NestJSIcon,
  NextJSIcon,
  NodeJSIcon,
  PrismaIcon,
  ReactIcon,
  SQLIcon,
  TailwindCSSIcon,
  TanstackIcon,
  TypescriptIcon,
} from "@/components/icons";
import Tooltip from "@/components/tooltip";

const Skills = () => {
  const skills = [
    { icon: <HTMLIcon />, label: "HTML" },
    { icon: <CSSIcon />, label: "CSS" },
    { icon: <JavascriptIcon />, label: "JavaScript" },
    { icon: <TypescriptIcon />, label: "TypeScript" },
    { icon: <ReactIcon />, label: "React" },
    { icon: <NextJSIcon />, label: "NextJS" },
    { icon: <TanstackIcon />, label: "TanStack" },
    { icon: <NodeJSIcon />, label: "NodeJS" },
    { icon: <TailwindCSSIcon />, label: "Tailwind" },
    { icon: <NestJSIcon />, label: "NestJS" },
    { icon: <PrismaIcon />, label: "Prisma" },
    { icon: <SQLIcon />, label: "SQL" },
    { icon: <FirebaseIcon />, label: "Firebase" },
    { icon: <AndroidIcon />, label: "Android" },
    { icon: <GitIcon />, label: "Git" },
    { icon: <FigmaIcon />, label: "Figma" },
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
