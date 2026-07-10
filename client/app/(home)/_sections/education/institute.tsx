import Chevron from "@/components/icons/chevron";
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
    <div className="relative w-full pb-6">
      <div className="absolute top-0 left-0 shrink-0 w-12 h-full flex justify-center items-center -z-10">
        <div
          className="w-[2px] h-full rounded-full"
          style={{
            background:
              "repeating-linear-gradient(0deg, var(--color-section), var(--color-section) 10px, transparent 10px, transparent 20px)",
          }}
        ></div>
      </div>

      <details
        open={idx === 0}
        className="group w-full flex flex-col items-start gap-1"
      >
        <summary className="list-none [&::-webkit-details-marker]:hidden shrink-0 w-full flex justify-between items-center cursor-pointer">
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

            <div className="shrink-0 w-9 aspect-square bg-section rounded-full flex justify-center items-center">
              <Chevron className="w-7 aspect-square fill-text-secondary transition duration-200 ease-out rotate-180 group-open:rotate-0" />
            </div>
          </div>
        </summary>

        <div className="w-full gap-3 hidden group-open:flex">
          <div className="shrink-0 w-12"></div>

          <div className="grow w-full">
            <div className="w-full flex flex-col gap-6 transition duration-200 ease-out">
              <p>{description}</p>

              <ul className="ml-5 list-disc *:text-text-secondary! flex flex-col gap-[inherit]">
                {bulletpoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <div></div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Institute;
