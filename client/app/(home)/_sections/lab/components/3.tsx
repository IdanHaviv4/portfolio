const Component3 = () => (
  <div className="relative bg-white/40 px-8 py-6 rounded-[2rem] flex items-start gap-6 border-2! border-solid! border-white/60 my-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:scale-x-95 before:translate-y-[5%] before:bg-white/40 before:rounded-[inherit]">
    <img
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="relative shrink-0 w-24 aspect-square rounded-full object-cover border-4! border-solid! border-white!"
      alt="pfp"
    />

    <div className="relative flex flex-col gap-10 mt-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-[1.5rem]! font-medium! leading-6">
            Mae Shaw
          </span>
          <span className="text-[0.8rem]! text-[#626262]! font-medium!">
            @maeshaw
          </span>
        </div>

        <p className="w-full max-w-105 text-[1rem]! text-[#626262]!">
          If you like my work, consider supporting me on Paypal and help me make
          a dream come true.
        </p>
      </div>

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
        <button className="px-6 py-2 rounded-lg bg-[#0a0a14] text-[1rem]! text-white! border-2! border-solid border-[#0a0a14] cursor-pointer">
          Follow
        </button>
        <button className="px-6 py-2 rounded-lg text-[1rem]! text-[#0a0a14]! border-2! border-solid border-[#0a0a14] cursor-pointer">
          View profile
        </button>
      </div>
    </div>
  </div>
);

export default Component3;
