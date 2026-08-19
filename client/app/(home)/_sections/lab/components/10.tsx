import { Icons } from "@/components";
import Image from "next/image";

const Component10 = () => {
  return (
    <div className="w-full flex flex-col gap-8 px-4 py-3 sm:px-8 sm:py-6 md:px-16 md:py-12">
      <div className="w-full flex justify-between items-end not-lg:gap-4 not-lg:flex-col">
        <div className="flex flex-col items-start gap-2 not-lg:w-full">
          <span className="font-[Fredoka]! text-[0.8rem]! font-medium! text-[#5C4033]! bg-[#FFF4CE] rounded-full px-3 py-1">
            Customer Love
          </span>

          <div className="w-full flex flex-col gap-1 md:w-min">
            <span className="font-[Fredoka]! text-[1.25rem]! font-medium! text-[#5C4033]! md:whitespace-nowrap leading-7 xs:text-[1.5rem]!">
              SWEET WORDS FROM OUR HAPPY CUSTOMERS
            </span>

            <p className="text-[0.8rem]! text-[#5C4033]!">
              Nothing makes us happier than seeing our customers enjoy every
              scoop. Here's what people are saying about their meltzy
              experience.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-3 rounded-full border! border-solid border-[#5C4033]!">
            <Icons.ChevronIcon className="w-4 aspect-square fill-[#5C4033] -rotate-90" />
          </button>
          <button className="p-3 rounded-full border! border-solid border-[#5C4033]!">
            <Icons.ChevronIcon className="w-4 aspect-square fill-[#5C4033] rotate-90" />
          </button>
        </div>
      </div>

      <div className="relative w-full gap-2 grid-cols-2 grid-rows-[min-content] md:grid">
        <Image
          src="/assets/lab/components/10/img.jpg"
          width={500}
          height={500}
          className="w-full h-full rounded-xl object-cover not-xs:hidden"
          alt="testimonial-img"
        />

        <div
          className="bg-[#FFFAF2] rounded-xl grid px-4 py-3 gap-6 not-xs:relative! not-md:absolute not-md:bottom-0 not-md:left-0 not-md:gap-y-2 md:*:col-span-2 [--areas:'quote_author'_'description_description'] md:[--areas:'quote'_'description'_'author'] not-md:grid-cols-[min-content_1fr]"
          style={{
            gridTemplateAreas: `var(--areas)`,
          }}
        >
          <Icons.QuoteIcon
            className="w-12 aspect-square fill-[#5C4033] md:w-20"
            style={{
              gridArea: "quote",
            }}
          />

          <p
            className="text-[0.8rem]! text-[#5C4033]! font-[Fredoka]! col-span-2"
            style={{
              gridArea: "description",
            }}
          >
            Every visit to meltzy feels like stepping into a world of happiness!
            The flavors are so rich and creamy.
            <br />
            <br />
            Vanilla Bean has that perfect old school charm, and their Mint
            Chocolate Chip is my all time favorite. You can truly taste the love
            in every scoop.
          </p>

          <div
            className="flex items-center gap-2"
            style={{
              gridArea: "author",
            }}
          >
            <Image
              src="/assets/lab/components/10/pfp.jpg"
              width={128}
              height={128}
              className="w-10 aspect-square rounded-lg object-cover"
              alt="pfp"
            />

            <div className="w-fit h-fit flex flex-col gap-0.5">
              <span className="text-[0.8rem]! font-[Fredoka]! font-medium! text-[#5C4033]!">
                Emma Rodriguez
              </span>

              <div className="flex items-center gap-0.5">
                {new Array(5).fill(0).map((_, idx) => (
                  <Icons.StarIcon
                    key={idx}
                    className="w-3 aspect-square fill-[#FFA633]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component10;
