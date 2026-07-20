import Image from "next/image";

const Component3 = () => (
  <div className="relative bg-white/40 px-8 py-6 rounded-[2rem] flex flex-col items-start border-2! border-solid! border-white/60 my-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:scale-x-95 before:translate-y-[5%] before:bg-white/40 before:rounded-[inherit] not-sm:gap-6">
    <div className="relative flex items-center gap-2 sm:gap-4">
      <Image
        src="/assets/lab/components/3/pfp.webp"
        width={100}
        height={100}
        className="shrink-0 w-16 aspect-square rounded-full object-cover border-4! border-solid! border-white! sm:w-24"
        alt="pfp"
      />

      <div className="flex flex-col">
        <span className="text-[1.25rem]! font-medium! leading-6 sm:text-[1.5rem]!">
          Mae Shaw
        </span>
        <span className="text-[0.8rem]! text-[#626262]! font-medium!">
          @maeshaw
        </span>
      </div>
    </div>

    <div className="relative flex flex-col gap-6 sm:ml-28">
      <p className="w-full max-w-105 text-[0.8rem]! text-[#626262]! sm:text-[1rem]!">
        If you like my work, consider supporting me on Paypal and help me make a
        dream come true.
      </p>

      <div className="flex items-center gap-4 *:even:bg-white *:even:w-0.5 *:even:h-8 *:even:rounded-full">
        <div className="flex flex-col">
          <span className="text-[1.1rem]! font-medium! leading-4">74.3M</span>
          <span className="text-[0.8rem]! text-[#626262]! font-medium! leading-4">
            Views
          </span>
        </div>

        <div />

        <div className="flex flex-col">
          <span className="text-[1.1rem]! font-medium! leading-4">17</span>
          <span className="text-[0.8rem]! text-[#626262]! font-medium! leading-4">
            Rank
          </span>
        </div>

        <div />

        <div className="flex flex-col">
          <span className="text-[1.1rem]! font-medium! leading-4">45M</span>
          <span className="text-[0.8rem]! text-[#626262]! font-medium! leading-4">
            Downloads
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded-lg bg-[#0a0a14] text-[0.8rem]! text-white! border-2! border-solid border-[#0a0a14] cursor-pointer sm:text-[1rem]! sm:px-6">
          Follow
        </button>
        <button className="px-4 py-2 rounded-lg text-[0.8rem]! text-[#0a0a14]! border-2! border-solid border-[#0a0a14] cursor-pointer sm:text-[1rem]! sm:px-6">
          View profile
        </button>
      </div>
    </div>
  </div>
);

export default Component3;
