import styled from "styled-components";
import marginDynamic from "../customCssFunc/marginCustom";

const WebTitleWrap = styled.div<{
  t?: string;
  l?: string;
  b?: string;
  r?: string;
}>`
  ${(props) => marginDynamic(props)}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 300px;
`;

export default WebTitleWrap;
