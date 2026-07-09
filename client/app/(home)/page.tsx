import { HeroSection, ProjectsSection } from "./_sections";

export default function Home() {
  return (
    <div className="w-full max-w-212 mx-auto pt-20 flex flex-col gap-20">
      <HeroSection />

      <ProjectsSection />
    </div>
  );
}
