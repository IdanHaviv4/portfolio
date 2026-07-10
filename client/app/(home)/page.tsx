import {
  CertificatesSection,
  EducationSection,
  HeroSection,
  ProjectsSection,
} from "./_sections";

export default function Home() {
  return (
    <div className="w-full max-w-212 mx-auto pt-20 flex flex-col gap-[inherit]">
      <HeroSection />

      <ProjectsSection />

      <EducationSection />

      <CertificatesSection />
    </div>
  );
}
