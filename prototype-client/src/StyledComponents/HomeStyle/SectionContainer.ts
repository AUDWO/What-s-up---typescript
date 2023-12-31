import styled from "styled-components";
import marginDynamic from "../customCssFunc/marginCustom";

const SectionContainer = styled.div<{}>`
  postion: ${(props) => (props.fixed ? "fixed" : "")};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  padding: 20px;
  ${(props) => marginDynamic(props)}
`;

export default SectionContainer;
