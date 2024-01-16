const paddingDirection = {
  t: "padding-top",
  l: "padding-left",
  b: "padding-bottom",
  r: "padding-right",
};

type PaddingKeys = keyof typeof paddingDirection;
type PaddingDynamicPropsType = {
  [K in PaddingKeys]?: (typeof paddingDirection)[K];
};

const paddingDynamic = (props: PaddingDynamicPropsType) => {
  let paddingValue = ``;

  for (const key in props) {
    if (paddingDirection[key as PaddingKeys]) {
      paddingValue += `
        ${paddingDirection[key as PaddingKeys]} : ${
        props[key as PaddingKeys]
      }px;
        `;
    }
  }

  return paddingValue;
};

export default paddingDynamic;
