import Image from "next/image";

const Location = () => {
  return (
    <div className="row-span-3 h-full flex flex-col justify-between gap-4 items-start bg-section rounded-lg overflow-hidden group cursor-pointer relative isolate">
      <div className="relative z-10 w-full flex flex-col px-5 py-4 transition duration-700 ease-out group-hover:-translate-y-1">
        <p>Located in</p>
        <h2>Hadera, Israel 🇮🇱</h2>
      </div>

      <div className="relative w-72 aspect-1.75/1">
        <Image
          src="/assets/hero/globe.png"
          width={512}
          height={512}
          className="w-full h-full object-cover object-top scale-110 origin-top transition duration-700 ease-out group-hover:scale-[1.3] group-hover:-rotate-15 group-hover:translate-x-[-10%]"
          alt="globe"
        />
      </div>
    </div>
  );
};

export default Location;
