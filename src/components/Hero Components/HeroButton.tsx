import React, { FC } from "react";

interface HeroButtonProps {
  icon: FC<React.SVGProps<SVGSVGElement>>; // Type for the icon component
  text: string; // The text to display on the button
  className?: string; // Additional class names for styling
  onClick?: () => void; // Optional onClick handler
}

const HeroButton: FC<HeroButtonProps> = ({
  icon: Icon,
  text,
  className = "",
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 transition duration-300 ease-in-out ${className}`}
  >
    <Icon className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]" />
    <span className="flex items-center text-xs font-medium uppercase md:text-base">
      {text}
    </span>
  </button>
);

export default HeroButton;
