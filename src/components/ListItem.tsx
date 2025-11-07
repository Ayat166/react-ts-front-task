import React, { useState, type ReactNode } from "react";
import "../styles/listitem.css";
import Checkbox from "./ui/Checkbox";

interface ListItemProps {
  text: string;
  icon?: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="list-item">
      <span>{text}</span>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  );
};

export default ListItem;
