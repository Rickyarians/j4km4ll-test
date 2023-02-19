import styled from "styled-components";
import { COLOR } from "../../const";


const TabNumber = styled.div<any>`
  color: ${(props : any) => (props.isActive ? "#fff" : COLOR.PRIMARY)};
  font-size: 18px;
  font-weight: 500;
  background-color: ${(props : any) =>
    props.isActive ? COLOR.PRIMARY : COLOR.SECONDARY};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
`;

export default TabNumber;
