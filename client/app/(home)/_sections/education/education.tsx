import Title from "@/components/title";
import { education } from "@/constants";
import Institute from "./institute";

const Education = () => {
  return (
    <section id="education" className="w-full flex flex-col gap-6 items-center">
      <Title label={"Education"} tag={"education"} orientation="center" />

      <div className="w-full flex flex-col items-start">
        {education.map((institute, idx) => (
          <Institute key={idx} {...institute} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Education;
