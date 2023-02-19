import styled from "styled-components";

const Row = styled.div<any>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: ${(p : any) => (p.gap ? "-16px" : 0)};
  margin-left: ${(p : any) => (p.gap ? "-16px" : 0)};
  & > div {
    padding: ${(p: any) => (p.gap ? "16px" : 0)};
  }
`;

export default Row;
