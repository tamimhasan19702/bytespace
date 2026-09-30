import { useId } from "react";

export const ItemElelven = ({ className }: { className?: string }) => {
  const uid = useId();

  return (
    <svg
      width="425"
      height="554"
      viewBox="0 0 425 554"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter={`url(#${uid}filter0_f_34_1309)`}>
        <circle
          cx="49"
          cy="376"
          r="336"
          fill={`url(#${uid}paint0_radial_34_1309)`}
          fillOpacity="0.6"
        />
      </g>
      <defs>
        <filter
          id={`${uid}filter0_f_34_1309`}
          x="-327"
          y="0"
          width="752"
          height="752"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_34_1309" />
        </filter>
        <radialGradient
          id={`${uid}paint0_radial_34_1309`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(49 376) rotate(90) scale(336)"
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
