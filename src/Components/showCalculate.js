import React from "react";
import "../mateStyle.css";

const styles = {

};

export const ShowAddiction = ({
  num1 = 1,
  num2 = 2,
  resullt = 3,
}) => {
  const operation = num1 + " + " + num2 + " = " + resullt;
  return <span className={"Numeri"}>{operation}</span>;
};
