import { Icons } from "@/components";

const Component5 = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-[#ffffff] rounded-2xl shadow-[0_0_30px_#d9c8e5]">
      <div className="w-full flex justify-end">
        <div className="w-8 aspect-square flex justify-center items-center rounded-full bg-[#f7f7fc] cursor-pointer">
          <span className="text-[#b8b7cc]!">&#10006;</span>
        </div>
      </div>

      <div className="relative w-18 before:absolute before:left-0 before:bottom-0 before:w-full before:h-2 before:rounded-[100%] before:bg-[#f6eaee] before:translate-y-1/2">
        <Icons.CookieIcon className="relative w-12 aspect-square z-10" />{" "}
        <Icons.CookieIcon className="w-10 aspect-square absolute right-0 bottom-0 opacity-70 -rotate-45" />{" "}
      </div>

      <span className="text-[1rem]! text-[#343e5a]! font-medium! max-w-42 text-center leading-5">
        Yet another cookie disclaimer!
      </span>

      <p className="text-[0.8rem]! text-[#5f667c]! text-center max-w-64">
        We use cookies to improve your experience. you're agreeing to the
        collection of data as described in our{" "}
        <u className="text-inherit! [font-size:inherit]! font-medium! cursor-pointer">
          Cookie Policy
        </u>
        .
      </p>

      <button className="text-[0.8rem]! text-white! font-medium! rounded-full bg-linear-to-r from-[#f073c6] to-[#ff6390] px-14 py-2 cursor-pointer shadow-[0_5px_10px_#f073c680]">
        Got it
      </button>
    </div>
  );
};

export default Component5;
