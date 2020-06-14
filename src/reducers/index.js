import React from "react";
import { combineReducers } from "redux";
import { simple, medium, hard } from "../Constants/levels";

const changeLevel = (state = 0, action) => {
  switch (action.type) {
    case "SIMPLE":
      return state+1
      case "MEDIUM":
      return state+2
      case "HARD":
      return state+3
    default:
      return state;
  }
};
const allReducers = combineReducers({
 changeLevel
});

export default allReducers;