import { useId } from "react";

export const ItemTen = ({ className }: { className?: string }) => {
  const uid = useId();

  return (
    <svg
      width="758"
      height="712"
      viewBox="0 0 758 712"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter={`url(#${uid}filter0_f_34_1304)`}>
        <circle
          cx="608.5"
          cy="608.5"
          r="568.5"
          fill={`url(#${uid}paint0_radial_34_1304)`}
          fillOpacity="0.24"
        />
      </g>
      <defs>
        <filter
          id={`${uid}filter0_f_34_1304`}
          x="0"
          y="0"
          width="1217"
          height="1217"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_34_1304" />
        </filter>
        <radialGradient
          id={`${uid}paint0_radial_34_1304`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(608.5 608.5) rotate(90) scale(568.5)"
        >
          <stop stopColor="#003BE2" />
          <stop offset="0.53" stopColor="#003BE2" stopOpacity="0.23" />
          <stop offset="0.75" stopColor="#003BE2" stopOpacity="0.06" />
          <stop offset="1" stopColor="#003BE2" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
