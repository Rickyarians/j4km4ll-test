import { useState } from "react";
import styled from "styled-components";
import { Controller } from "react-hook-form";
import { InputCheck } from "./component/InputCheck";
import { InputRadio } from "./component/InputRadio";
import { InputText } from "./component/InputText";
import { InputTextArea } from "./component/InputTextArea";

const Input = ({ field, ...p }: any) => {
  return (
    <Controller
      name={p.name}
      control={p.control}
      rules={p.rules}
      render={({ field } : any) =>
        p.type === "textarea" ? (
          <InputTextArea {...p} field={field} />
        ) : p.type === "checkbox" ? (
          <InputCheck  
            field={field} 
            {...p} 
          />
        ) : p.type === "radio" ? (
          <InputRadio 
           {...p} 
           field={field} />
        ) : (
          <InputText 
          {...p} 
          field={field} />
        )
      }
    />
  );
};

export default Input;
