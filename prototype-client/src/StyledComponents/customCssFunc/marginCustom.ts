const marginDirection = {
  l: "margin-left",
  r: "margin-right",
  b: "margin-bottom",
  t: "margin-top",
};

type MarginKeys = keyof typeof marginDirection;
type MarginDynamicProps = {
  [K in MarginKeys]?: (typeof marginDirection)[K];
};

const marginDynamic = (props: MarginDynamicProps) => {
  let marginValue = ``;

  for (const key in props) {
    if (marginDirection[key as MarginKeys]) {
      marginValue += `
        ${marginDirection[key as MarginKeys]} : ${props[key as MarginKeys]}px;
        `;
    }
  }

  return marginValue;
};

export default marginDynamic;
