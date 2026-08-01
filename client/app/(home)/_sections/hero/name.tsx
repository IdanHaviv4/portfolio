import Image from "next/image";
import { motion } from "framer-motion";
import { getInitialTransition } from "@/lib/helpers";

const Name = ({
  className = "",
  transition_order,
}: {
  className?: string;
  transition_order: number;
}) => {
  return (
    <motion.div
      {...getInitialTransition(transition_order)}
      className={`group relative w-full h-full min-h-26 flex flex-col gap-2 rounded-lg overflow-hidden cursor-pointer ${className}`}
    >
      <h1>Idan Haviv</h1>

      <div className="flex items-center gap-2">
        <div className="w-2 aspect-square rounded-full bg-[#00D218]"></div>

        <p className="text-[1rem]!">Available to work</p>
      </div>

      <Image
        src="/assets/hero/hi.png"
        width={150}
        height={150}
        loading="lazy"
        className="absolute right-0 bottom-0 origin-bottom-right not-pointer-coarse:translate-full scale-105 transition duration-700 ease-out group-hover:translate-x-1/5 group-hover:translate-y-0 group-hover:-rotate-15 pointer-coarse:translate-x-1/5 pointer-coarse:-rotate-15"
        alt="hi-img"
      />
    </motion.div>
  );
};

export default Name;
