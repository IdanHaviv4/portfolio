import { Icons } from "@/components";
import projects_json from "./projects.json" with { type: "json" };
import education_json from "./education.json" with { type: "json" };

export const skills = {
  android: Icons.AndroidIcon,
  c: Icons.CIcon,
  cpp: Icons.CPPIcon,
  python: Icons.PythonIcon,
  css: Icons.CSSIcon,
  figma: Icons.FigmaIcon,
  firebase: Icons.FirebaseIcon,
  git: Icons.GitIcon,
  html: Icons.HTMLIcon,
  java: Icons.JavaIcon,
  javascript: Icons.JavascriptIcon,
  nestjs: Icons.NestJSIcon,
  nextjs: Icons.NextJSIcon,
  nodejs: Icons.NodeJSIcon,
  prisma: Icons.PrismaIcon,
  react: Icons.ReactIcon,
  sql: Icons.SQLIcon,
  tailwind: Icons.TailwindCSSIcon,
  tanstack: Icons.TanstackIcon,
  typescript: Icons.TypescriptIcon,
};

type ProjectT<SkillsT extends string = string> = {
  title: string;
  description: string;
  skills: SkillsT[];
  github?: string;
};

export const projects = projects_json satisfies ProjectT[] as ProjectT<
  keyof typeof skills
>[];

type EducationT<SkillsT extends string = string> = {
  name: string;
  description: string;
  timestamps: {
    from: string;
    to: string;
  };
  bulletpoints: string[];
  skills: SkillsT[];
};

export const education = education_json satisfies EducationT[] as EducationT<
  keyof typeof skills
>[];
