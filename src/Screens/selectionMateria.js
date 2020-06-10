import React from "react";
import Button from "../Components/button";
import { withRouter } from "react-router";
import { simple } from "../actions";
import { useSelector } from "react-redux";
import "../mateStyle.css"

const SelectionMateria = ({ history }) => {
  const level = useSelector((state) => state.checkLevel) || "Simple";
  console.log(level);
  const checkLevel = (materia) => {
    return materia + level;
  };

  return (
    <div className="Home">
    <h1>Scegli la materia che vuoi allenare</h1>
    <div style={{ display: "flex" }}>
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
    </div>
    </div>
  );
};

export default withRouter(SelectionMateria);
