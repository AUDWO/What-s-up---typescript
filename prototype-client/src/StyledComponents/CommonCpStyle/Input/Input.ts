import styled from "styled-components";

import marginDynamic from "../../customCssFunc/marginCustom";
import paddingDynamic from "../../customCssFunc/paddingCustom";

interface Direction {
  t?: string;
  r?: string;
  b?: string;
  l?: string;
}

/*
let borderDirection = {
  borderL: "border-left",
  borderR: "border-right",
  borderT: "border-top",
  borderB: "border-bottom",
};

interface BorderDirection {
  borderL: "border-left",
  borderR: "border-right",
  borderT: "border-top",
  borderB: "border-bottom",
}

type BorderDynamicProps = { [key in keyof BorderDirection]?: string };

let borderDynamic = (props: BorderDynamicProps) => {
  let borderValue = ``;
  for (const key in props) {
    if (borderDirection[key as keyof BorderDynamicProps]) {
      borderValue += `
      ${borderDirection[key as keyof BorderDynamicProps]} : ${
        props[key as keyof BorderDynamicProps].borderPx
      } solid ${props[key].color}
      `;
    }
  }

  return borderValue;
};*/

//  border: ${(props) => props.border.borderPx} solid
//${(props) => props.border.color};

interface InputProps {
  fontSize?: string;
  height?: string;
  width?: string;
  borderR?: string;
  padding?: string;
  backC?: string;
  border?: {
    borderPx: string;
    color: string;
  };
  pd: Direction;
  mg: Direction;
}

export const Input = styled.input<InputProps>`
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderR};
  padding: ${(props) => props.padding};
  ${(props) => marginDynamic(props.mg)};
  ${(props) => paddingDynamic(props.pd)};
  background-color: ${(props) => props.backC};
  border: ${(props) =>
    props.border
      ? `${props.border.borderPx} solid
    ${props.border.color}`
      : "none"};
  ${(props) => borderDynamic(props)};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: 글자색;
    -webkit-box-shadow: 0 0 0px 1000px 배경색 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
