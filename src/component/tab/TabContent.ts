import styled from "styled-components";

const TabContent = styled.div<any>`
  display: ${(props : any) => (props.isActive ? "block" : "none")};
`;

export default TabContent;
