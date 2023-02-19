import { InputRadioContainer, InputRadioStyled, OptionBox, OptionContainer } from ".";


interface InputRadioProps {
    name?: string;
    label?: string;
    field?: any;
    type?: any;
    options?: any;
}



export const InputRadio = ({ name, label, field, type, options }: InputRadioProps) => {
    return (
      <InputRadioContainer>
        {options.map((option : any) => (
          <OptionContainer
            key={option.value + "-input-radio-payment"}
            isChecked={field.value === option.value}
          >
            <InputRadioStyled
              {...field}
              type={type}
              name={name}
              id={option.value}
              value={option.value}
            />
            <label htmlFor={option.value}>
              <OptionBox>
                <p>{option.label}</p>
                <span>
                  {option.fee
                    ? option.fee?.toLocaleString("en-US")
                    : option.balance
                    ? option.balance?.toLocaleString("en-US") + " left"
                    : " "}
                </span>
              </OptionBox>
            </label>
          </OptionContainer>
        ))}
      </InputRadioContainer>
    );
  };
  