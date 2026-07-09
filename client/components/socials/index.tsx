import { GithubIcon, GmailIcon, LinkedinIcon } from "../icons";
import Tooltip from "../tooltip";

const Socials = () => {
  return (
    <div className="w-full h-fit grid grid-cols-3 gap-0.5">
      <Tooltip label="Gmail" className="rounded-full">
        <div className="w-full h-full p-3 bg-section rounded-full cursor-pointer transition duration-100 ease-out group-hover:scale-90">
          <GmailIcon className="w-full h-full" />
        </div>
      </Tooltip>

      <Tooltip label="Github" className="rounded-full">
        <div className="w-full h-full p-3 bg-section rounded-full  cursor-pointer transition duration-100 ease-out group-hover:scale-90">
          <GithubIcon className="w-full h-full" />
        </div>
      </Tooltip>

      <Tooltip label="Linkedin" className="rounded-full">
        <LinkedinIcon className="w-full h-full rounded-full  cursor-pointer transition duration-100 ease-out group-hover:scale-90" />
      </Tooltip>
    </div>
  );
};

export default Socials;
