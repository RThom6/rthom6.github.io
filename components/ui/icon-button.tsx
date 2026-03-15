import React from "react";

const IconButton = ({
  title,
  icon,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`p-[3px] relative mt-6 ${otherClasses}`}
    >
      <div className="absolute bg-purple inset-0 rounded-lg" />
      <div
        className={
          "px-10 py-2 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center gap-2"
        }
      >
        {title}
        {icon}
      </div>
    </button>
  );
};

export default IconButton;
