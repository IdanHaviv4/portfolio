import Chevron from "@/components/svg/icons/chevron";
import Skills from "@/components/skills";
import { education } from "@/constants";
import { motion } from "framer-motion";
import { getInitialTransition } from "@/lib/helpers";

const Institute = ({
  idx,
  name,
  timestamps: { from, to },
  description,
  skills,
  bulletpoints,
}: (typeof education)[0] & { idx: number }) => {
  return (
    <motion.div
      {...getInitialTransition(idx + 1)}
      className={`relative w-full ${idx < education.length - 1 ? "pb-6" : ""}`}
    >
      <div className="absolute top-0 left-0 shrink-0 w-12 h-full flex justify-center items-center -z-10 not-sm:w-8">
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
            <div className="w-8 aspect-square rounded-full bg-section sm:p-1 sm:w-12">
              <img
                src={`/assets/education/${idx + 1}.png`}
                loading="lazy"
                className="w-full h-full object-contain"
                alt={`institution-${idx + 1}`}
              />
            </div>

            <div className="flex flex-col items-start not-sm:gap-1">
              <p className="text-[0.8rem]! font-medium! not-sm:leading-2">
                {from} - {to}
              </p>
              <h2 className="not-sm:text-[1.1rem]!">{name}</h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Skills skills={skills} className="not-sm:h-7 not-sm:w-4.5" />

            <div className="shrink-0 p-1 aspect-square bg-section rounded-full flex justify-center items-center">
              <Chevron className="w-7 aspect-square fill-text-secondary transition duration-200 ease-out rotate-180 group-open:rotate-0 not-sm:w-5" />
            </div>
          </div>
        </summary>

        <div className="w-full gap-3 hidden group-open:flex">
          <div className="shrink-0 w-12 not-sm:w-8"></div>

          <div className="grow w-full">
            <div className="w-full flex flex-col gap-6 transition duration-200 ease-out">
              <p className="not-sm:text-[1rem]!">{description}</p>

              <ul className="list-none **:text-text-secondary! flex flex-col gap-[inherit]">
                {bulletpoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div></div>
                    <span className="not-sm:text-[1rem]!">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div></div>
          </div>
        </div>
      </details>
    </motion.div>
  );
};

export default Institute;
