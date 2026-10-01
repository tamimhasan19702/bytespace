import { useId } from "react";

export const ItemOne = ({ className }: { className?: string }) => {
  const uid = useId();

  return (
    <svg
      width="1025"
      height="711"
      viewBox="0 0 1025 711"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter={`url(#${uid}filter0_f_34_1308)`}>
        <circle
          cx="416.5"
          cy="102.5"
          r="568.5"
          fill={`url(#${uid}paint0_radial_34_1308)`}
          fillOpacity="0.4"
        />
      </g>
      <defs>
        <filter
          id={`${uid}filter0_f_34_1308`}
          x="-192"
          y="-506"
          width="1217"
          height="1217"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_34_1308" />
        </filter>
        <radialGradient
          id={`${uid}paint0_radial_34_1308`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(416.5 102.5) rotate(90) scale(568.5)"
        >
          <stop stopColor="#CBFC01" />
          <stop offset="0.53" stopColor="#CBFC01" stopOpacity="0.23" />
          <stop offset="0.75" stopColor="#CBFC01" stopOpacity="0.06" />
          <stop offset="1" stopColor="#CBFC01" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
