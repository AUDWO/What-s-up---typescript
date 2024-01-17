import styled from "styled-components";
import marginDynamic from "../customCssFunc/marginCustom";

const WebTitle = styled.h1<{
  t?: string;
  l?: string;
  b?: string;
  r?: string;
  height: string;
}>`
  display: flex;
  ${(props) => marginDynamic(props)}
  align-items: center;
  font-size: 50px;
  font-family: "Ubuntu", sans-serif;
  height: ${(props) => (props.height ? props.height : "")};
  margin-bottom: 20px;
  margin-top: 20px;
`;

export default WebTitle;
