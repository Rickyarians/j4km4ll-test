import { useState } from "react";
import { InputContainer, InputTextAreaStyled, Label } from ".";

interface InputTextAreaProps {
    name?: string;
    label?: string;
    field?: any;
    withCounter?: any;
    errors?: any;
}

export const InputTextArea = ({ name, label, field, withCounter, errors } : InputTextAreaProps) => {
    const [isFocused, setFocused] = useState(field.value || false);
    return (
      <InputContainer
        error={errors?.hasOwnProperty(name)}
        success={field.value && !errors?.hasOwnProperty(name)}
      >
        <Label htmlFor={name} isFocused={isFocused} animateLabel={true}>
          {label}
        </Label>
        <InputTextAreaStyled
          {...field}
          name={name}
          id={name}
          isFocused={isFocused}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(field.value || false);
            field.onBlur();
          }}
        />
        {withCounter && <p>{field?.value?.length || 0} / 120</p>}
      </InputContainer>
    );
  };
  