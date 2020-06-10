import React from "react";
import "../mateStyle.css";


export const ShowAddiction = ({
  num1 = 1,
  num2 = 2,
  resullt = 3,
  segno = "+"
}) => {
  const operation = num1 + " " + segno + " " + num2 + " = " + resullt;
  return <span className={"Numeri"}>{operation}</span>;
};
