import styled from "styled-components";
import marginDynamic from "../../customCssFunc/marginCustom";
import paddingDynamic from "../../customCssFunc/paddingCustom";

/*
let borderDynamic = (props) => {
  let borderValue = ``;
  for (const key in props) {
    if (borderDirection[key]) {
      borderValue += `
            ${borderDirection[key]} : ${props[key].borderPx} solid ${props[key].color}
            `;
    }
  }

  return borderValue;
};*/

/*
let borderDirection = {
  borderL: "border-left",
  borderR: "border-right",
  borderT: "border-top",
  borderB: "border-bottom",
};*/

//  border: ${(props) => props.border.borderPx} solid
//${(props) => props.border.color};

export const Input = styled.input<{
  t?: string;
  b?: string;
  l?: string;
  r?: string;
  fontSize: string;
  borderR: string;
  padding: string;
  backC: string;
  border: { borderPx: string; color: string };
}>`
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderR};
  padding: ${(props) => props.padding};
  ${(props) => paddingDynamic(props)};
  ${(props) => marginDynamic(props)};
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
