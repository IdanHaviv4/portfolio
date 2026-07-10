import {
  AndroidIcon,
  CIcon,
  CPPIcon,
  CSharpIcon,
  CSSIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HTMLIcon,
  JavaIcon,
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
import projects_json from "./projects.json" with { type: "json" };
import education_json from "./education.json" with { type: "json" };

export const skills = {
  android: AndroidIcon,
  c: CIcon,
  cpp: CPPIcon,
  csharp: CSharpIcon,
  css: CSSIcon,
  figma: FigmaIcon,
  firebase: FirebaseIcon,
  git: GitIcon,
  html: HTMLIcon,
  java: JavaIcon,
  javascript: JavascriptIcon,
  nestjs: NestJSIcon,
  nextjs: NextJSIcon,
  nodejs: NodeJSIcon,
  prisma: PrismaIcon,
  react: ReactIcon,
  sql: SQLIcon,
  tailwind: TailwindCSSIcon,
  tanstack: TanstackIcon,
  typescript: TypescriptIcon,
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
