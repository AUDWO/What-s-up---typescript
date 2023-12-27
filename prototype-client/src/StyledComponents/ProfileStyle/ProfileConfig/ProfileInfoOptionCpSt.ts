import styled from "styled-components";

import marginDynamic from "../../customCssFunc/marginCustom";

interface Directions {
  t?: string;
  l?: string;
  b?: string;
  r?: string;
}

export const ConfigOptionTitle = styled.div<Directions>`
  ${(props) => marginDynamic(props)};
`;

export const Email = styled.span<Directions>`
  ${(props) => marginDynamic(props)};
`;
