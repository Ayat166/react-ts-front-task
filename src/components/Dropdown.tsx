import LineDropdown from "./ui/LineDropdown";
import ListItem from "./ListItem";

interface DropdownProps {
    mainoption: string;
    options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({mainoption,options}) => {
  return (
    <>
        <ListItem text={mainoption} />
        <LineDropdown />
        {options.map((option, i) => (
            <ListItem key={i} text={option} />
        ))}
        <LineDropdown />
    </>
  )
}

export default Dropdown
