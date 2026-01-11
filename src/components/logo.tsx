import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("font-headline text-2xl font-black tracking-tighter text-primary", className)}>
    betterlogo
  </div>
);

export default Logo;
