import { useId } from "react";

export const ItemThree = ({ className }: { className?: string }) => {
  const uid = useId();

  return (
    <svg
      width={669}
      height={1217}
      viewBox="0 0 669 1217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter={`url(#${uid}filter0_f_34_1305)`}>
        <circle
          cx={60.5}
          cy={608.5}
          r={568.5}
          fill={`url(#${uid}paint0_radial_34_1305)`}
          fillOpacity={0.16}
        />
      </g>
      <defs>
        <filter
          id={`${uid}filter0_f_34_1305`}
          x={-548}
          y={0}
          width={1217}
          height={1217}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={20} result="effect1_foregroundBlur_34_1305" />
        </filter>
        <radialGradient
          id={`${uid}paint0_radial_34_1305`}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(60.5 608.5) rotate(90) scale(568.5)"
        >
          <stop stopColor="#003BE2" />
          <stop offset={0.53} stopColor="#003BE2" stopOpacity={0.23} />
          <stop offset={0.75} stopColor="#003BE2" stopOpacity={0.06} />
          <stop offset={1} stopColor="#003BE2" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
};
