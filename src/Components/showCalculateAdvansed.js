import React from "react";
import "../mateStyle.css";


export const Show = ({
  num1 = 1,
  num2 = 2,
  result = 3,
  segno = "+"
}) => {
  const operation = num1 + " " + segno + " " + num2 + " = " + result;
  return <span className={"Numeri"}>{operation}</span>;
};

export default Show;