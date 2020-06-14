import React from "react";
import Ambiente from "../../Components/ambiente"
import yak from "../../extra/yak.jpg"
import mantideReligiosa from "../../extra/mantideReligiosa.jpg"
import germanoReale from "../../extra/germanoReale.png"
import ranaNeraDelSudAfrica from "../../extra/RanaNeraDelSudAfrica.jpg"
import pitbull from "../../extra/pitbull.jpg"
import { withRouter } from "react-router";



const animal = { 0: yak, 1: mantideReligiosa, 2: germanoReale, 3: ranaNeraDelSudAfrica, 4: pitbull };
const animalString = {
  0: "yak",
  1: "mantide religiosa",
  2: "germano reale",
  3: "rana nera del sud africa",
  4: "pitbull",
};


const AmbHard = ({history}) => {

  return (
    <>
   
      <Ambiente image={animal} imageString={animalString} onClick1={() => history.push("/selectionMateria")} onCLick2={() => history.push("/")}/>
    </>
  );
};
export default withRouter(AmbHard)
