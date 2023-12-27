const paddingDirection = {
  t: "padding-top",
  l: "padding-left",
  b: "padding-bottom",
  r: "padding-right",
};

type PaddingDynamicProps = { [key in keyof typeof paddingDirection]?: string };

const paddingDynamic = (props: PaddingDynamicProps) => {
  let paddingValue = ``;

  for (const key in props) {
    if (paddingDirection[key as keyof PaddingDynamicProps]) {
      paddingValue += `
        ${paddingDirection[key as keyof PaddingDynamicProps]} : ${
        props[key as keyof PaddingDynamicProps]
      }px;
        `;
    }
  }
  return paddingValue;
};

export default paddingDynamic;
