import { ComponentPropsWithoutRef } from "react";
import { StyledSelect } from "../styles/StyledSelect";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  defaultValue: string;
  options: {
    value: string;
    name: string;
  }[];
}

const Select: React.FC<SelectProps> = ({ defaultValue, options, ...props }) => {
  return (
    <StyledSelect defaultValue={defaultValue} {...props}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
