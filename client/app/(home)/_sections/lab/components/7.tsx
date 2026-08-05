import { Icons } from "@/components";
import Image from "next/image";

const Component7 = () => {
  return (
    <>
      <div className="w-full max-w-76 h-full grid grid-cols-1 bg-[#01c2c6] rounded-4xl overflow-hidden">
        <Image
          src="/assets/lab/components/7/bg.jpg"
          width={500}
          height={500}
          className="w-full aspect-square"
          alt="component-7-bg"
        />

        <div className="relative w-full flex flex-col gap-6 p-4 pt-0 before:absolute before:bottom-full before:left-0 before:w-full before:h-1/2 before:bg-linear-180 before:from-transparent before:to-[#01c2c6] before:z-10">
          <div className="flex flex-col gap-1">
            <span className="text-[1.75rem]! text-white! leading-8! font-light! tracking-tight">
              Smarter Travel
              <br />
              <span className="text-[1.75rem]! font-medium! text-white!">
                Better Experiences
              </span>
            </span>

            <p className="text-[0.8rem]! text-[#ededed]!">
              Plan better, travel smarter & create meaningful memories that last
              a lifetime
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <button className="w-full bg-white rounded-full py-3 text-[0.8rem]!">
              Continue with Email
            </button>
            <button className="w-full bg-black text-white! rounded-full py-3 text-[0.8rem]!">
              Continue with Apple
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-76 h-full flex flex-col gap-4 bg-[#fefefe] rounded-4xl p-4 overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 w-48 aspect-square rounded-full bg-[#4de4ff40] blur-3xl"></div>

        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2 w-28 aspect-square rounded-full bg-[#fa5eff40] blur-3xl"></div>

        <div className="relative w-full flex justify-between items-center">
          <Image
            src="/assets/lab/components/7/pfp.jpg"
            width={500}
            height={500}
            className="w-10 aspect-square rounded-full"
            alt="pfp"
          />

          <div className="p-2 rounded-full bg-[#f9f9f9]">
            <Icons.SearchIcon className="w-5 aspect-square fill-[#343249]" />
          </div>
        </div>

        <div className="relative flex flex-col">
          <span className="text-[1rem]! text-[#575757]! tracking-tight leading-4!">
            Hi, Joseph 👋
          </span>
          <span className="text-[1.25rem]! font-medium! tracking-tight">
            Let's plan your today?
          </span>
        </div>

        <div className="relative w-full flex flex-col bg-white rounded-4xl overflow-hidden shadow-[0_-15px_30px_#4de4ff15]">
          <div className="p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#f9f9f9]">
                <Icons.PlaneIcon className="w-5 aspect-square fill-[#343249]" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[1rem]! font-medium! leading-4!">
                  Maldives
                </span>

                <span className="text-[#575757]! text-[0.6rem]! leading-2!">
                  Indian Ocean · Nov - Apr
                </span>
              </div>
            </div>

            <div className="p-2 rounded-full bg-[#f9f9f9]">
              <Icons.ArrowTopRightIcon className="w-5 aspect-square fill-[#343249]" />
            </div>
          </div>

          <div className="relative w-full aspect-square flex justify-end items-end p-3">
            <Image
              src="/assets/lab/components/7/maldives.jpg"
              width={500}
              height={500}
              className="absolute top-0 left-0 w-full h-full rounded-t-4xl object-cover"
              alt="maldives-img"
            />

            <div className="w-full rounded-full bg-white z-10 p-2 flex items-center gap-2">
              <Image
                src="/assets/lab/components/7/ai.png"
                width={100}
                height={100}
                className="w-9 aspect-square opacity-75"
                alt="ai-img"
              />

              <div className="flex flex-col gap-1.5">
                <span className="text-[0.9rem]! font-medium! leading-3!">
                  Slide to talk
                </span>

                <span className="w-full line-clamp-1 text-ellipsis text-[#575757]! text-[0.6rem]! leading-2!">
                  Crystal clear waters, overwater villa
                </span>
              </div>

              <div className="p-2 rounded-full bg-[#f9f9f9]">
                <Icons.ChevronIcon className="w-5 aspect-square rotate-90 fill-[#343249]" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center p-4">
          <div className="w-fit rounded-full bg-white px-4 py-1 flex items-center gap-6 shadow-[0_5px_10px_#00000010]">
            <Icons.HomeIcon className="w-5 aspect-square fill-[#898989]" />
            <Icons.CalendarIcon className="w-5 aspect-square fill-[#898989]" />
            <Image
              src="/assets/lab/components/7/ai.png"
              width={100}
              height={100}
              className="w-10 aspect-square opacity-75"
              alt="ai-img"
            />
            <Icons.CompassIcon className="w-5 aspect-square fill-[#898989]" />
            <Icons.ProfileIcon className="w-5 aspect-square fill-[#898989]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component7;
