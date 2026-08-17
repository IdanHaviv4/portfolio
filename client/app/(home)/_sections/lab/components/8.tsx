import { Icons } from "@/components";
import Image from "next/image";

const Component8 = () => {
  return (
    <div className="bg-white rounded-3xl p-2 grid grid-cols-[min-content] grid-rows-[auto_min-content]">
      <Image
        src="/assets/lab/components/8/preview.jpg"
        className="rounded-2xl overflow-hidden"
        loading="lazy"
        width={500}
        height={500}
        alt="hotel-preview"
      />

      <div className="p-2 flex flex-col">
        <div className="flex justify-between items-center gap-12 not-xs:gap-4">
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

        <div className="flex justify-between items-center gap-12 not-xs:gap-4">
          <div className="flex items-center gap-0.5">
            <Icons.LocationIcon className="w-4 aspect-square fill-[#8a8c8e]" />

            <span className="text-[0.8rem]! text-[#8a8c8e]! whitespace-nowrap not-xs:text-[0.65rem]!">
              Ubud Bah, Indonesia
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
