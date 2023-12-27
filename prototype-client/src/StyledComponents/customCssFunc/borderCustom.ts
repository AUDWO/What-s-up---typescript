let borderDirection = {
  borderL: "border-left",
  borderR: "border-right",
  borderT: "border-top",
  borderB: "border-bottom",
};

let borderDynamic = (props: BorderDynamicProps) => {
  let borderValue = ``;
  for (const key in props) {
    if (borderDirection[key as keyof BorderDynamicProps]) {
      borderValue += `
        ${borderDirection[key as keyof BorderDynamicProps]} : ${
        props[key].borderPx
      } solid ${props[key].color}
        `;
    }
  }

  return borderValue;
};
