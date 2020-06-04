import React from "react";
import { combineReducers } from "redux";
import { simple, medium, hard } from "../Constants/levels";

const changeLevel = (state = simple, action) => {
  switch (action.type) {
    case "SETDIFFICULT":
      return action.value;
    default:
      return state;
  }
};
const allReducers = combineReducers({
  changeLevel: changeLevel,
});

export default allReducers;
