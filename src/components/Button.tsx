
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  size = "default",
  className,
  href,
  onClick,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none rounded-full";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };
  
  const sizes = {
    default: "h-11 px-6 py-2.5",
    sm: "h-9 px-4 py-2 text-sm",
    lg: "h-12 px-8 py-3 text-lg",
  };
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
  
  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
