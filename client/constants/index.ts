import { Icons } from "@/components";
import projects_json from "./projects.json" with { type: "json" };
import education_json from "./education.json" with { type: "json" };

export const skills = {
  android: Icons.AndroidIcon,
  c: Icons.CIcon,
  cpp: Icons.CPPIcon,
  csharp: Icons.CSharpIcon,
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

export const projects = projects_json satisfies {
  title: string;
  description: string;
  skills: string[];
}[] as {
  title: string;
  description: string;
  skills: (keyof typeof skills)[];
}[];

export const education = education_json satisfies {
  name: string;
  description: string;
  timestamps: {
    from: string;
    to: string;
  };
  bulletpoints: string[];
  skills: string[];
}[] as {
  name: string;
  description: string;
  timestamps: {
    from: string;
    to: string;
  };
  bulletpoints: string[];
  skills: (keyof typeof skills)[];
}[];
