import Image from "next/image";

const Component1 = () => (
  <div className="bg-white grid grid-cols-[min-content] grid-rows-[repeat(2,min-content)] rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(338_83%_34%_/0.2)]">
    <div className="w-full aspect-video">
      <Image
        src="/assets/lab/components/1/food-banner.jpg"
        width={300}
        height={300}
        loading="lazy"
        className="w-full h-full object-cover"
        alt="food-newsletter"
      />
    </div>

    <div className="flex flex-col gap-4 p-4 w-64 xs:p-6 xs:w-80">
      <div className="flex flex-col items-center">
        <span className="text-[0.8rem]! text-[#5d5d6c]! font-medium! tracking-wider">
          SUBSCRIBE TODAY
        </span>
        <span className="text-[1.25rem]! font-medium! leading-4 xs:leading-6">
          Never miss a recipe
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <input
          className="w-full text-[0.8rem]! px-6 py-3 rounded-lg border-2! border-solid! text-center border-[#f0d9d4]"
          type="email"
          placeholder="Your email address"
        />
        <button className="text-[0.8rem]! w-full h-full flex justify-center items-center py-3 rounded-lg bg-[#f55951] text-white! font-medium shadow-[0_0_30px_hsl(338_83%_34%_/0.2)] cursor-pointer transition duration-200 ease-out hover:bg-[#f26861]">
          Subscribe
        </button>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[0.8rem]! text-[#5d5d6c]! text-center not-xs:leading-4">
          We wont send you spam
          <br />
          Unsubscribe at any time
        </p>
      </div>
    </div>
  </div>
);

export default Component1;
