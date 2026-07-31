import { motion } from "framer-motion";
import Image from "next/image";
import { getInitialTransition } from "@/lib/helpers";

const Location = ({
  className = "",
  transition_order,
}: {
  className?: string;
  transition_order: number;
}) => {
  return (
    <motion.div
      {...getInitialTransition(transition_order)}
      className={`h-full flex flex-col justify-between gap-4 items-start bg-section/50 backdrop-blur-2xl rounded-lg overflow-hidden group cursor-pointer relative ${className} not-md:w-full not-md:items-end`}
    >
      <div className="relative z-10 w-full flex flex-col px-5 py-4 transition duration-700 ease-out group-hover:-translate-y-1">
        <p className="not-sm:text-[1rem]!">Located in</p>
        <h2>Hadera, Israel 🇮🇱</h2>
      </div>

      <div className="relative w-72 h-40 not-sm:w-56 not-sm:h-28">
        <Image
          src="/assets/hero/globe.png"
          width={512}
          height={512}
          loading="lazy"
          className="w-full h-full object-cover object-top scale-110 origin-top transition duration-700 ease-out group-hover:scale-[1.4] group-hover:-rotate-15 group-hover:translate-[-10%]"
          alt="globe"
        />
      </div>
    </motion.div>
  );
};

export default Location;
