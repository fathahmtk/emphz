import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'safety';
  fullWidth?: boolean;
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 rounded-sm font-display focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest";
  
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-900 shadow-sm hover:shadow-md border border-transparent",
    secondary: "bg-accent-orange text-navy-900 hover:bg-white hover:text-navy-900 focus:ring-accent-orange shadow-sm hover:shadow-md font-bold",
    safety: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 shadow-sm hover:shadow-md",
    outline: "bg-transparent text-navy-900 border border-navy-300 hover:border-navy-900 hover:bg-navy-900 hover:text-white focus:ring-navy-500",
    ghost: "bg-transparent text-gray-600 hover:text-accent-orange hover:bg-gray-50",
    white: "bg-white text-navy-900 border border-transparent hover:bg-gray-50 shadow-sm hover:shadow-md"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};