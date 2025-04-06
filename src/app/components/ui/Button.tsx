// ui/Button.tsx
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "outline" | "filled";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "outline",
  className = "",
}: ButtonProps) => {
  const base =
    "px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer focus:outline-none transition-all duration-300 transform";
  const variants = {
    outline:
      "border border-bluey text-bluey hover:bg-bluey hover:-translate-y-1",
    filled: "bg-bluey text-white hover:bg-bluey hover:scale-105",
  };

  return (
    <button className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
};

export default Button;
