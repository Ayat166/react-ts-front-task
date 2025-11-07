import React, { useState } from "react";
import "../../styles/checkbox.css";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange, label }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheck = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label className="checkbox-container" onClick={toggleCheck}>
      <span className={`checkbox ${isChecked ? "checked" : ""}`}>
          <svg
            className="check-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12L10.5 18L19 7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;
