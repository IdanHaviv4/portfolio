import { SVGProps } from "react";

const Seperator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1440 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1440 64L0 0V64H1440Z" />
  </svg>
);

export default Seperator;
