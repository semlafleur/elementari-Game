import React from "react";
import "../CustomButton.scss";


const Button = ({ value, onClick }) => {

  return <button className={"btn third"} onClick={onClick}>{value}</button>;
};
export default Button;
