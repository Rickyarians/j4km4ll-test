import styled from "styled-components";
import { COLOR } from "../../const";

const StyledTitle = styled.h1<any>`
  color: ${COLOR.PRIMARY};
  font-family: "Montserrat", serif;
  font-weight: 700;
  font-size: ${(p) => (p.size ? p.size + "px" : "36px")};
  position: relative;
  z-index: 2;
`;
const TitleOuter = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 1px;
    bottom: 5px;
    width: 305px;
    height: 8px;
    background-color: #eeeeee;
    z-index: 1;
  }
  @media (max-width: 768px) {
    &:before {
      width: 150px;
    }
  }
`;

const Heading1 = ({ children } : any) => {
  return (
    <TitleOuter>
      <StyledTitle>{children}</StyledTitle>
    </TitleOuter>
  );
};

const Heading2 = ({ children } : any) => (
  <StyledTitle size={24}>{children}</StyledTitle>
);

export { Heading1, Heading2 };
