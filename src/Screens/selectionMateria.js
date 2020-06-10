import React from "react";
import Button from "../Components/button";
import { withRouter } from "react-router";
import { simple } from "../actions";
import { useSelector } from "react-redux";



const SelectionMateria = ({ history }) => {
 const level = useSelector(state => state.checkLevel)
console.log(level); 
  const checkLevel = (materia) => {
    return materia + level;
  };

  return (
    <div style={{display : "flex",}}>
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
  );
};

export default withRouter(SelectionMateria);
