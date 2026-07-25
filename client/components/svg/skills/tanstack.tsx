import { SVGProps, useId } from "react";
import TanstackImg from "@/public/assets/skills/tanstack.png";

const Tanstack = (props: SVGProps<SVGSVGElement>) => {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 81.125 81.125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g clipPath={`url(#clip0_${uid}`}>
        <rect width="81.125" height="81.125" fill="#D9D9D9" />
        <rect width="81.125" height="81.125" fill={`url(#pattern0_${uid})`} />
      </g>
      <defs>
        <pattern
          id={`pattern0_${uid}`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={`#image0_${uid}`}
            transform="matrix(0.0005167 0 0 0.000526094 -0.0535714 -0.0727273)"
          />
        </pattern>
        <clipPath id={`clip0_${uid}`}>
          <rect width="81.125" height="81.125" fill="white" />
        </clipPath>
        <image
          id={`image0_${uid}`}
          width="2160"
          height="2160"
          preserveAspectRatio="none"
          xlinkHref={TanstackImg.src}
        ></image>
      </defs>
    </svg>
  );
};

export default Tanstack;
