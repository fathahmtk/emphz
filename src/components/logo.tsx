import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center justify-center", className)}>
    <svg 
      width="120" 
      height="40" 
      viewBox="0 0 180 60" 
      xmlns="http://www.w3.org/2000/svg" 
      className="text-foreground"
    >
      <defs>
        <linearGradient id="p-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g fontFamily="Poppins, sans-serif" fontWeight="900" fontSize="36">
        <text x="0" y="40" fill="currentColor">EM</text>
        <g transform="translate(65, 0)">
          <path d="M0 43L0 0L20 0C27.732 0 34 6.26801 34 14C34 21.732 27.732 28 20 28L15 28" fill="url(#p-gradient)" />
          <path d="M15 28L30 43" stroke="url(#p-gradient)" strokeWidth="8" />
        </g>
        <text x="100" y="40" fill="currentColor">HZ</text>
      </g>
    </svg>
  </div>
);

export default Logo;
