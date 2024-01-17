let borderDirection = {
  borderL: "border-left",
  borderR: "border-right",
  borderT: "border-top",
  borderB: "border-bottom",
};
type BorderKeys = keyof typeof borderDirection;
type BorderDynamic = {
  [K in BorderKeys]?: (typeof borderDirection)[K];
};

let borderDynamic = (props: BorderDynamic) => {
  let borderValue = ``;
  for (const key in props) {
    if (borderDirection[key as BorderKeys]) {
      borderValue += `
              ${borderDirection[key as BorderKeys]} : ${
        props[key].borderPx
      } solid ${props[key].color}
              `;
    }
  }

  return borderValue;
};
