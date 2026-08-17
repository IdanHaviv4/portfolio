import { Icons } from "@/components";
import Image from "next/image";

const Component8 = () => {
  return (
    <div className="group w-fit bg-white rounded-3xl p-2 grid grid-cols-[min-content] grid-rows-[auto_min-content]">
      <div className="w-full h-auto rounded-2xl overflow-hidden">
        <Image
          src="/assets/lab/components/8/preview.jpg"
          className="w-full h-full object-cover transition duration-200 ease-in-out group-hover:scale-105"
          loading="lazy"
          width={500}
          height={500}
          alt="hotel-preview"
        />
      </div>

      <div className="p-2 flex flex-col">
        <div className="flex justify-between items-center gap-8 not-xs:gap-4">
          <span className="text-[1.1rem]! whitespace-nowrap not-xs:text-[1rem]!">
            Sao Pulo Hotel
          </span>

          <div className="flex items-center">
            <span className="text-[1rem]! not-xs:text-[0.9rem]!">$900</span>
            <span className="text-[0.8rem]! text-[#8a8c8e]! whitespace-nowrap not-xs:text-[0.65rem]!">
              /Night
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center gap-8 not-xs:gap-4">
          <div className="flex items-center gap-0.5">
            <Icons.LocationIcon className="w-4 aspect-square fill-[#8a8c8e]" />

            <span className="text-[0.8rem]! text-[#8a8c8e]! whitespace-nowrap not-xs:text-[0.65rem]!">
              Ubud, Bali, Indonesia
            </span>
          </div>

          <div className="flex items-center gap-0.5">
            <Icons.StarIcon className="w-4 aspect-square fill-[#ffbe4e]" />

            <span className="text-[0.8rem]! text-[#8a8c8e]! whitespace-nowrap not-xs:text-[0.65rem]!">
              4.9 (1,092 Reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component8;
