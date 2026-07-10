import Skills from "@/components/skills";
import { education } from "@/constants";

const Institute = ({
  idx,
  name,
  timestamps: { from, to },
  description,
  skills,
  bulletpoints,
}: (typeof education)[0] & { idx: number }) => {
  return (
    <div className="w-full flex flex-col items-start gap-1">
      <div className="shrink-0 w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 aspect-square rounded-full bg-section p-1">
            <img
              src={`/assets/education/${idx + 1}.png`}
              className="w-full h-full object-contain"
              alt={`institution-${idx + 1}`}
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="text-[0.8rem]! font-medium!">
              {from} - {to}
            </p>
            <h2>{name}</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Skills skills={skills} />
        </div>
      </div>

      <div className="w-full flex gap-3">
        <div className="shrink-0 w-12 flex justify-center items-center">
          <div className="w-0.5 h-full bg-section rounded-full"></div>
        </div>

        <div className="grow w-full pb-9 flex flex-col gap-6">
          <p>{description}</p>

          <ul className="ml-5 list-disc *:text-text-secondary! flex flex-col gap-[inherit]">
            {bulletpoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Institute;
