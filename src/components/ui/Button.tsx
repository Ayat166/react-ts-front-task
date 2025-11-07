import React, { useState } from "react";
import "../../styles/button.css";

type ButtonVariant = "primary" ;

interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  disabled = false,
  onClick,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className={`btn ${variant} ${disabled ? "disabled" : ""} ${isPressed ? "pressed" : ""}`}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
