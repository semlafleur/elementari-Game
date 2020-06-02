import React from "react";
import "../CustomButton.scss";
import { withRouter } from "react-router-dom";

const Button = ({ value, location , history}) => {
  return <button className={"btn third"} onClick={() => history.push('/'+location)}>{value}</button>;
};
export default withRouter(Button);
