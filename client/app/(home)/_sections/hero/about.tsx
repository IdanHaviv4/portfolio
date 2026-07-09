import moment from "moment";

const About = () => {
  return (
    <div className="w-full col-span-2 bg-section rounded-lg px-5 py-4">
      <p className="w-full">
        A (mostly) self-taught, curious and fast learner who has been devoted to
        computer science for{" "}
        {moment()
          .utc()
          .diff(
            moment(parseInt(process.env.NEXT_PUBLIC_BDAY_EPOCH!)).add(
              12,
              "years",
            ),
            "years",
          )}{" "}
        years.
        <br />
        <br />
        Specializes in strong UI & UX designs with professional Frontend &
        Backend development.
      </p>
    </div>
  );
};

export default About;
