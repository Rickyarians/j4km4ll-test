import styled from "styled-components";
import { COLOR } from "../../../const";

const InputStyle = (p: any) => `
padding: ${p.isFocused ? "1.65rem .85rem .85rem .85rem" : "1.25rem .85rem"};
width: 100%;
&:focus {
  outline: none;
  box-shadow: none;
}
`;


const InputStyleTextArea = (p: any) => `
padding: ${p.isFocused ? "1.65rem .85rem .85rem .85rem" : "1.25rem .85rem"};
width: 100%;
height 200px;
&:focus {
  outline: none;
  box-shadow: none;
}
`;

export const InputTextStyled = styled.input`
  ${(p) => InputStyle(p)}
`;

export const InputTextAreaStyled = styled.textarea`
  ${(p) => InputStyleTextArea(p)}
`;


export const InputCheckStyled = styled.input`
position: relative;
height: 18px;
  &:before{
    content: "";
    display: block;
    background-color: #fff;
    height: 15px;
    width: 15px;
    border: 2px solid #ccc;
  }
  &:checked:before{
    background-color: #e0f4ea;
    border: 2px solid ${COLOR.SUCCESS};

  }
  &:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid ${COLOR.SUCCESS};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
`;


export const InputContainer = styled.div<any>`
position: relative;
margin-bottom: 1rem;
& > p {
  margin-top: 0;
  opacity: 0.4;
}
& > input,
& > textarea {
  font-family: 'Montserrat', sans-serif;
  border: ${(p: any) =>
    p.error
      ? "1px solid " + COLOR.PRIMARY
      : p.success
      ? "1px solid " + COLOR.SUCCESS
      : "1px solid #cccccc"};
}
& > label {
  opacity: ${(p :any) => (p.error || p.success ? "1" : ".4")};
  color: ${(p: any) =>
    p.error ? COLOR.PRIMARY : p.success ? COLOR.SUCCESS : "unset"};
}
`;


export const InputCheckContainer = styled.div`
position: relative;
display: flex;
align-items: center;
gap: 1rem;
margin-bottom: 1rem;
@media (max-width: 768px) {
  justify-content: start;
  margin-bottom: 0;
}
`;

interface LabelProps {
    animateLabel?: any;
    isFocused?: any;
}

export const Label = styled.label<LabelProps>`
    position: ${(p: any) => (p.animateLabel ? "absolute" : "relative")};
    left: ${(p : any) => (p.animateLabel ? "0.85rem" : "0")};
    top: ${(p :any) => (p.animateLabel ? (p.isFocused ? "10px" : "1.15rem") : 0)};
    opacity: ${(p : any) => (p.animateLabel ? "0.4" : "1")};
    font-size: ${(p : any) => (p.isFocused ? "12px" : "16px")};
    transition: 0.2s;
`;


export const InputRadioContainer = styled.div`
display: flex;
gap: 1rem;
width: 80%;
@media (max-width: 768px) {
  flex-direction: column;
}
`;

export const OptionContainer = styled.div<any>`
flex-basis: 0;
flex-grow: 1;
max-width: 100%;
& > label > div {
  background-color: ${(p: any) => (p.isChecked ? "#1BD97B1b" : "unset")};
  border: 3px solid ${(p: any) => (p.isChecked ? "#1BD97B" : "unset")};
}
`;


export const InputRadioStyled = styled.input`
  flex: 0;
  visibility: hidden;
  position: absolute;
`;

export const OptionBox = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  & > p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  & > span {
    font-weight: 600;
  }
`;
