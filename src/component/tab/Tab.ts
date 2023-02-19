import styled from "styled-components";
import { BG_TAB, WIDTH_TAB } from "../../const";

const Tab = styled.div`
  border-radius: 35px;
  background: ${BG_TAB};
  position: absolute;
  top: -${80 - 35}px;
  left: ${(100 - WIDTH_TAB) / 2}%;
  width: ${WIDTH_TAB}%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 1rem;
  }
`;

export default Tab;
