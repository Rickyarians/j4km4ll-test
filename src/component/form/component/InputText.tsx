import { useState } from "react";
import { InputContainer, Label } from ".";
import { InputTextStyled } from "./InputComponent";
import { FiCheck, FiX} from "react-icons/fi";
import { COLOR } from "src/const";
interface InputTextProps {
  name?: string;
  label?: string;
  field?: any;
  type? : any;
  errors?: any;
}

export const InputText = ({ name, label, field, type, errors } : InputTextProps) => {
    const [isFocused, setFocused] = useState(field.value || false);
    return (
      <InputContainer
        error={errors?.hasOwnProperty(name)}
        success={field.value && !errors?.hasOwnProperty(name)}
      >
        <Label 
        htmlFor={name} 
        isFocused={isFocused} 
        animateLabel={true}>
          {label}
        </Label>
        <InputTextStyled
          {...field}
          value={field.value || ""}
          inputRef={field.ref}
          type={type}
          name={name}
          id={name}
          isFocused={isFocused}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(field.value || false);
            field.onBlur();
          }}
        />
          {errors?.hasOwnProperty(name) && <FiX color={COLOR.PRIMARY} style={{
            position: 'absolute',
            top: 22,
            right: 10,
            fontSize: 14
          }}/>}
          {
            field.value && !errors?.hasOwnProperty(name) && <FiCheck color={COLOR.SUCCESS} style={{
              position: 'absolute',
              top: 22,
              right: 10,
              fontSize: 14
            }}/>
          }
      </InputContainer>
    );
  };
  