import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  bgColor?: string; // Tailwind class or custom color
  textColor?: string; // Tailwind class
  rounded?: string; // e.g., "rounded-2xl"
  w?: string | number; // Tailwind width class or pixels
  h?: string | number; // Tailwind height class or pixels
  px?: number;
  py?: number;
  loading?: boolean; // show spinner
  disabled?: boolean;
};

const GButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  rounded = "rounded-xl",
  w,
  h,
  px = 4,
  py = 2,
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`        ${bgColor} ${textColor} ${rounded} 
        px-${px} py-${py} 
        ${w ? (typeof w === "number" ? `w-[${w}px]` : w) : ""} 
        ${h ? (typeof h === "number" ? `h-[${h}px]` : h) : ""} 
        flex justify-center items-center gap-2 shadow-sm
        disabled:opacity-50 disabled:cursor-not-allowed
     `}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          {" "}
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>{" "}
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>{" "}
        </svg>
      )}{" "}
      <span>{text}</span>{" "}
    </button>
  );
};

export default GButton;
