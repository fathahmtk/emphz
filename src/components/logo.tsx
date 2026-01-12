import { cn } from "@/lib/utils";

const Logo = ({ className, ...props }: { className?: string, [key: string]: any }) => (
  <div className={cn("flex items-center justify-center", className)}>
    <svg width="250" height="75" viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor">
      {/* E */}
      <path d="M90 60 H175 V95 H125 V120 H170 V150 H125 V185 H175 V220 H90 Z"
            />

      {/* M */}
      <path d="M195 220 V60 H230 L265 135 L300 60 H335 V220 H305 V140 L265 190 L225 140 V220 Z"
            />

      {/* P (BEST-MATCH RECONSTRUCTION) */}
      <path
        fill="#C45100"
        d="
          M355 60
          H415
          C485 60 520 95 520 135
          C520 175 485 210 415 210
          H395
          L355 255
          V60
          Z

          M395 95
          V175
          H420
          C460 175 485 155 485 135
          C485 110 460 95 420 95
          Z
        "
      />

      {/* H */}
      <path d="M550 60 V220 H585 V150 H630 V220 H665 V60 H630 V120 H585 V60 Z"
            />

      {/* Z */}
      <path d="M685 60 H820 V95 L735 190 H820 V220 H685 V190 L770 95 H685 Z"
            />
    </svg>
  </div>
);

export default Logo;
