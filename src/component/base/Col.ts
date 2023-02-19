import styled from "styled-components";

const Col = styled.div<any>`
  max-width: ${(p : any) => (p.size ? 100 / (12 / p.size) + "%" : "100%")};
  flex: 0 0 ${(p : any) => (p.size ? 100 / (12 / p.size) + "%" : "100%")};
  @media (max-width: 768px) {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;

export default Col;
