import { motion } from "framer-motion";
import moment from "moment";
import { getInitialTransition } from "@/lib/helpers";

const Age = ({ transition_order }: { transition_order: number }) => {
  return (
    <motion.div
      {...getInitialTransition(transition_order)}
      className="w-full h-full bg-section backdrop-blur-2xl rounded-lg flex flex-col gap-2 justify-center items-center md:py-8"
    >
      <h2>
        {moment()
          .utc()
          .diff(moment(parseInt(process.env.NEXT_PUBLIC_BDAY_EPOCH!)), "years")}
      </h2>
      <p className="leading-2 not-md:hidden">Years Old</p>
      <p className="leading-2 md:hidden">Y/O</p>
    </motion.div>
  );
};

export default Age;
