import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center justify-center", className)}>
    <svg 
        width="120" 
        height="40" 
        viewBox="0 0 900 300" 
        xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Accent Gradient for P */}
        <linearGradient id="pGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2AA7A3"/>
          <stop offset="100%" stopColor="#0E6F73"/>
        </linearGradient>
      </defs>

      {/* EMPHZ Text */}
      <text x="450" y="150"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Inter, Arial, sans-serif"
            fontSize="120"
            fontWeight="700"
            fill="hsl(var(--foreground))"
            letterSpacing="6">
        EM<tspan fill="url(#pGradient)">P</tspan>HZ
      </text>

      {/* Tagline */}
      <text x="450" y="215"
            textAnchor="middle"
            fontFamily="Inter, Arial, sans-serif"
            fontSize="22"
            fontWeight="500"
            fill="hsl(var(--muted-foreground))"
            letterSpacing="4">
        HONEST • DIRECT • REAL
      </text>
    </svg>
  </div>
);

export default Logo;
