import {
  CertificatesSection,
  EducationSection,
  HeroSection,
  ProjectsSection,
} from "./_sections";

export default function Home() {
  return (
    <div className="w-full max-w-212 mx-auto flex flex-col gap-[inherit]">
      <HeroSection />

      <ProjectsSection />

      <EducationSection />

      <CertificatesSection />
    </div>
  );
}
