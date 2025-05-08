"use client";

interface ProfilePlaceholderProps {
  name: string;
  className?: string;
}

export default function ProfilePlaceholder({ name, className = "" }: ProfilePlaceholderProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getRandomColor = (name: string) => {
    const colors = [
      "from-blue-500 to-blue-700",
      "from-purple-500 to-purple-700",
      "from-green-500 to-green-700",
      "from-red-500 to-red-700",
      "from-yellow-500 to-yellow-700",
      "from-pink-500 to-pink-700",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div
      className={`relative w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br ${getRandomColor(
        name
      )} shadow-lg ${className}`}
    >
      <span className="text-2xl font-bold text-white">{getInitials(name)}</span>
    </div>
  );
}
