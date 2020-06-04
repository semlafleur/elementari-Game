import React from "react";
import Button from "../Components/button";
import { withRouter } from "";
import { simple } from "../actions";
import { useSelector } from "react-redux";

const globalState = "Simple";

const ScegliMateria = ({ history }) => {


  const checkLevel = (materia) => {
    return materia + globalState;
  };

  return (
    <>
      <Button
        value={"Matematica"}
        onClick={() => history.push("/" + checkLevel("mate"))}
      />
      <Button
        value={"Italiano"}
        onClick={() => history.push("/" + checkLevel("ita"))}
      />
      <Button
        value={"Ambiente"}
        onClick={() => history.push("/" + checkLevel("amb"))}
      />
    </>
  );
};
export default withRouter(ScegliMateria);
