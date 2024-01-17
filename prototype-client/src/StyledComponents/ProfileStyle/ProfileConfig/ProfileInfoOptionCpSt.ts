import styled from "styled-components";
import marginDynamic from "../../customCssFunc/marginCustom";

type Direction = {
  t?: string;
  l?: string;
  b?: string;
  r?: string;
};

export const ConfigOptionTitle = styled.div<Direction>`
  ${(props) => marginDynamic(props)};
`;

export const Email = styled.span<Direction>`
  ${(props) => marginDynamic(props)};
`;
