import moment from "moment";

const Age = () => {
  return (
    <div className="w-full h-fit py-8 bg-section rounded-lg flex flex-col justify-center items-center">
      <h2>
        {moment()
          .utc()
          .diff(moment(parseInt(process.env.NEXT_PUBLIC_BDAY_EPOCH!)), "years")}
      </h2>
      <p>Years Old</p>
    </div>
  );
};

export default Age;
