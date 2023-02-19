import { InputCheckContainer, InputCheckStyled, Label } from "./index";

interface InputCheckProps {
  name?: string;
  label?: string;
  field?: any;
  type?: any;
  errors?: any;
}

export const InputCheck = ({ name, label, field, type, errors} : InputCheckProps) => {
  
    return (
      <InputCheckContainer>
        <InputCheckStyled
          {...field}
          type={type}
          name={name}
          id={name}
          checked={field.value}
        />
        <Label htmlFor={name} isFocused={false}>
          {label}
        </Label>
      </InputCheckContainer>
    );
  };