
import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = true }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Main Logotype */}
      <div className="relative flex items-center font-display font-black tracking-tighter uppercase leading-none select-none">
        {/* EM */}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight" style={{ fontSize: 'inherit' }}>
          EM
        </span>
        
        {/* P - Custom Geometric SVG */}
        <div className="relative z-10 mx-0.5 flex items-center justify-center" style={{ width: '0.8em', height: '1em' }}>
            <svg viewBox="0 0 100 100" fill="currentColor" className="text-accent-teal w-full h-full">
                <path d="M10,0 L70,0 C85,0 95,10 95,35 C95,60 85,70 70,70 L40,70 L40,100 L10,100 L10,0 Z M40,25 L40,45 L65,45 C70,45 70,40 70,35 C70,30 70,25 65,25 L40,25 Z" />
            </svg>
        </div>
        
        {/* HZ */}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight" style={{ fontSize: 'inherit' }}>
          HZ
        </span>
      </div>

      {/* Tagline */}
      {showTagline && (
        <div className="flex items-center justify-center space-x-2 mt-2 w-full">
          <span className="text-[0.4em] tracking-[0.3em] text-gray-400 font-sans font-semibold uppercase text-center whitespace-nowrap">
            Honest <span className="text-accent-teal mx-0.5">•</span> Direct <span className="text-accent-teal mx-0.5">•</span> Real
          </span>
        </div>
      )}
    </div>
  );
};
