import React from "react";
import Button from "./components/ui/Button";
import Card from "./components/Card";
import "./styles/global.css";
import Dropdown from "./components/Dropdown";
const App: React.FC = () => {

  return (
    <div className="container">
      <Card>
        <Dropdown mainoption="All Pages" options={["Page 1", "Page 2", "Page 3" , "Page 4"]} />
        <Button text="Done" />
      </Card>
    </div>
  );
};

export default App;
