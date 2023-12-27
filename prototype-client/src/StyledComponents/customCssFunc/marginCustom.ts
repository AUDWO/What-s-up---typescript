const marginDirection = {
  l: "margin-left",
  r: "margin-right",
  b: "margin-bottom",
  t: "margin-top",
};

type MarginDynamicProps = { [key in keyof typeof marginDirection]?: string };

const marginDynamic = (props: MarginDynamicProps) => {
  let marginValue = ``;

  for (const key in props) {
    if (marginDirection[key as keyof MarginDynamicProps]) {
      marginValue += `
        ${marginDirection[key as keyof MarginDynamicProps]} : ${
        props[key as keyof MarginDynamicProps]
      }px;
        `;
    }
  }

  return marginValue;
};

export default marginDynamic;
