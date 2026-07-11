import { GithubIcon, GmailIcon, LinkedinIcon } from "../icons";
import Tooltip from "../tooltip";

const Socials = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  return (
    <div className="w-full h-fit grid grid-cols-3 gap-0.5">
      <Tooltip label="Gmail" variant={variant} className="rounded-full">
        <div
          className={`w-full h-full p-3 bg-section rounded-full cursor-pointer transition duration-200 ease-out group-hover:scale-90 ${variant == "light" ? "bg-section" : "bg-section-dark"}`}
        >
          <GmailIcon className="w-full h-full" />
        </div>
      </Tooltip>

      <Tooltip label="Github" variant={variant} className="rounded-full">
        <div
          className={`w-full h-full p-3 bg-section rounded-full cursor-pointer transition duration-200 ease-out group-hover:scale-90 ${variant == "light" ? "bg-section" : "bg-section-dark"}`}
        >
          <GithubIcon
            className={`w-full h-full ${variant == "dark" && "[&_path]:fill-section!"}`}
          />
        </div>
      </Tooltip>

      <Tooltip label="Linkedin" variant={variant} className="rounded-full">
        <LinkedinIcon className="w-full h-full rounded-full  cursor-pointer transition duration-200 ease-out group-hover:scale-90" />
      </Tooltip>
    </div>
  );
};

export default Socials;
