import moment from "moment";

const Age = () => {
  return (
    <div className="w-full h-fit bg-section rounded-lg flex flex-col gap-2 justify-center items-center md:py-8 not-md:h-full">
      <h2>
        {moment()
          .utc()
          .diff(moment(parseInt(process.env.NEXT_PUBLIC_BDAY_EPOCH!)), "years")}
      </h2>
      <p className="leading-2 not-md:hidden">Years Old</p>
      <p className="leading-2 md:hidden">Y/O</p>
    </div>
  );
};

export default Age;
