import moment from "moment";

const About = ({ className }: { className: string }) => {
  return (
    <div className={`w-full bg-section rounded-lg px-5 py-4 ${className}`}>
      <p className="w-full not-xs:text-[1rem]!">
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
