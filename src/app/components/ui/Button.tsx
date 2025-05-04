// ui/Button.tsx
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "filled";
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  shadow?: boolean;
}

const Button = ({
  children,
  variant = "outline",
  className = "",
  onClick,
  size = "md",
  shadow = true,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl focus:outline-none transition-all duration-200 select-none border text-base cursor-pointer";
  const sizeMap = {
    sm: "px-4 py-2 text-base",
    md: "px-6 py-2 text-lg",
    lg: "px-7 py-3 text-xl",
  };
  const variants = {
    outline:
      "bg-white text-blue-800 border-blue-200 hover:bg-blue-50 hover:text-blue-900 active:scale-98 focus:ring-2 focus:ring-blue-300",
    filled:
      "bg-blue-700 text-white border-blue-700 hover:bg-blue-800 active:scale-98 focus:ring-2 focus:ring-blue-300",
  };
  const shadowClass = shadow ? "shadow-sm hover:shadow-md" : "";

  return (
    <button
      onClick={onClick}
      className={clsx(base, sizeMap[size], variants[variant], shadowClass, className)}
    >
      {children}
    </button>
  );
};

export default Button;
