import React from "react";
interface ButtonProps {
  children?: React.ReactNode;
  type: "galaxy" | "lifted";
  classType?: "history";
  onClick: () => void;
  buttonNativeProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  classType,
  onClick,
  buttonNativeProps,
  children,
}) => {
  return (
    <button
      className={`${type} ${classType}`}
      onClick={onClick}
      {...buttonNativeProps}
    >
      <span>{children}</span>
    </button>
  );
};
