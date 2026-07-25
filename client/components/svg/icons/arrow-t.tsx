import { SVGProps } from "react";

const ArrowTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 9L7 15H11V22H13V15H17L12 9Z" />
    <path d="M12 2C7.04 2 3 6.04 3 11H5C5 7.14 8.14 4 12 4C15.86 4 19 7.14 19 11H21C21 6.04 16.96 2 12 2Z" />
  </svg>
);

export default ArrowTop;
