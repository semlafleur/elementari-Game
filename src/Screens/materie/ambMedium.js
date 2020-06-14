import React from "react";
import Ambiente from "../../Components/ambiente"
import gatto from "../../extra/gatto.jpg"
import cane from "../../extra/cane.jpg"
import gallina from "../../extra/gallina.jpg"
import topo from "../../extra/topo.jpg"
import rana from "../../extra/rana.jpg"


const animal = { 0: gatto, 1: cane, 2: gallina, 3: topo, 4: rana };
const animalString = {
  0: "gatto",
  1: "cane",
  2: "gallina",
  3: "topo",
  4: "rana",
};

const AmbMedium = () => {
  return (
    <>
          <Ambiente image={animal} imageString={animalString}/>
    </>
  );
};
export default AmbMedium
