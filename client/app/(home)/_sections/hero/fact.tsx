"use client";

import { useMemo } from "react";

const Fact = () => {
  const facts = useMemo(
    () => [
      {
        label: "Favoite Color 🖌️",
        answer: (
          <div className="w-full h-full flex justify-center items-center bg-linear-150 from-sky-500 to-cyan-400">
            <h1 className="font-bold! text-white!">BLUE</h1>
          </div>
        ),
      },
      // {
      //   label: "WPM ⌨️",
      //   answer: (
      //     <div className="w-full h-full flex justify-center items-center gap-1">
      //       <div
      //         className="absolute inset-0 opacity-[0.06]"
      //         style={{
      //           backgroundImage:
      //             "radial-gradient(circle, #000 1px, transparent 1px)",
      //           backgroundSize: "14px 14px",
      //         }}
      //       />

      //       <div className="relative flex items-baseline gap-1.5">
      //         <h1 className="font-bold! font-mono! tracking-tight tabular-nums">
      //           78
      //         </h1>
      //       </div>

      //       <span className="relative w-0.5 h-8 bg-accent rounded-full animate-pulse" />
      //     </div>
      //   ),
      // },
    ],
    [],
  );

  const fact = useMemo(
    () => facts[Math.floor(Math.random() * facts.length)],
    [],
  );

  return (
    <div className="group row-span-2 w-full h-full rounded-lg flex flex-col justify-center items-center cursor-pointer perspective-midrange">
      <div className="w-full h-full relative transition duration-700 transform-3d ease-out group-hover:rotate-y-180 *:absolute *:top-0 *:left-0 *:w-full *:h-full *:rounded-lg *:backface-hidden *:flex *:flex-col *:justify-center *:items-center *:bg-section">
        <div>
          <p className="text-[1rem]!">Fun Fact (hover to reveal)</p>
          <h2>{fact.label}</h2>
        </div>

        <div className="rotate-y-180 overflow-hidden">{fact.answer}</div>
      </div>
    </div>
  );
};

export default Fact;
