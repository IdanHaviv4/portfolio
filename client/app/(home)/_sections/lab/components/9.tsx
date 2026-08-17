import { Icons } from "@/components";
import Image from "next/image";

const Component9 = () => {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col gap-6 border-2! border-solid border-[#f2f2f2]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-24 not-xs:gap-6">
          <div className="flex items-center gap-1">
            <div className="w-4 aspect-square flex justify-center items-center">
              <div className="w-2 aspect-square rounded-full bg-[#0db926]"></div>
            </div>

            <span className="text-[1rem]! font-medium!">
              Weekly Design Sync
            </span>
          </div>

          <span className="text-[0.8rem]!">29:49</span>
        </div>

        <div className="flex items-center gap-1">
          <Icons.CalendarIcon className="w-4 aspect-square fill-[#4c4c4c]" />

          <span className="text-[0.8rem]! text-[#4c4c4c]!">
            Thu, Sep 5 · 10:00-11:00 AM
          </span>
        </div>

        <div className="flex items-center gap-1">
          <Icons.LocationIcon className="w-4 aspect-square fill-[#4c4c4c]" />

          <span className="text-[0.8rem]! text-[#4c4c4c]!">Room 204, HQ</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[0.8rem]! px-2 py-0.5 rounded-lg bg-[#fce6f2] text-[#a03263]!">
            Design Team
          </span>

          <span className="text-[0.8rem]! px-2 py-0.5 rounded-lg bg-[#dbf1f7] text-[#1e474b]!">
            Sprint Planning
          </span>
        </div>
      </div>

      <div className="flex items-center -space-x-3">
        {new Array(5).fill(0).map((_, idx, arr) => {
          if (idx >= arr.length - 1)
            return (
              <div
                key={idx}
                className="w-10 aspect-square rounded-full bg-[#f2f2f2] flex justify-center items-center text-[1rem]! text-[#4c4c4c]!"
              >
                +5
              </div>
            );

          return (
            <Image
              key={idx}
              src={`/assets/lab/components/9/${idx + 1}.jpg`}
              width={100}
              height={100}
              loading="lazy"
              className="w-10 aspect-square rounded-full"
              alt={`pfp-${idx + 1}`}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-[1fr_1fr_auto] gap-2">
        <button className="text-[0.8rem]! font-medium! text-white! py-2 rounded-lg bg-[#181818] border-2! border-solid border-[#181818]">
          Join Call
        </button>
        <button className="text-[0.8rem]! font-medium! py-2 rounded-lg bg-transparent border-2! border-solid border-[#f2f2f2]">
          Reschedule
        </button>
        <button className="h-full aspect-square rounded-lg border-2! border-solid border-[#f2f2f2] p-2">
          <Icons.MessageIcon className="fill-[#181818]" />
        </button>
      </div>
    </div>
  );
};

export default Component9;
