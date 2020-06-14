import React, { useState } from "react";
import "../../mateStyle.css";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
import HomeButton from "@material-ui/icons/Home";
import ReactAudioPlayer from "react-audio-player";
import caneAudio from "../../extra/cane.mp3";
import gattoAudio from "../../extra/cane.mp3";
import TextField from "@material-ui/core/TextField";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";


const styles = {
    button: {
      marginLeft: 10,
    },
  };

const animal = [ gattoAudio, caneAudio ];
console.log(gattoAudio)
const animalString = ["gatto", "cane"];
const audioUtilizated = [];

const ItaSimple = ({ history }) => {
  const [input, setInput] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);
  const [button, setbutton] = useState(undefined);
  const [escapeButton, setescapeButton] = useState(undefined);

  const checkInput = () => {
    if (audioUtilizated.length === 2) {
      setescapeButton(
        <Button
          variant={"contained"}
          style={{ marginTop: 10 }}
          onClick={() => history.push("/selectionMaterie")}
        >
          Gioco finito clicca qui per scegliere una altra materia !
        </Button>
      );
      return;
    }
    const random = Math.floor(Math.random() * 2);
    setbutton(undefined);
    setInput("");
    if (randomIndex === random || audioUtilizated.includes(random))
      return checkInput();
    audioUtilizated.push(random);
    setRandomIndex(random);
    return;
  };

  const checkRisposta = () => {
    if (animalString[randomIndex] === input.toLowerCase())
      setbutton(
        <Button
          variant={"contained"}
          style={{ backgroundColor: "#4CC417", marginTop: 10 }}
          onClick={() => alert("bravo continua così")}
        >
          Corretto
        </Button>
      );
    else
      setbutton(
        <Button
          variant={"contained"}
          style={{ backgroundColor: "#FF0000", marginTop: 10 }}
          onClick={() =>
            alert("Hai fatto sbagliato, farai megio la prossima volta")
          }
        >
          sbagliato
        </Button>
      );
  };
  return (
    <>
      <div>
        <Button onClick={() => history.push("/")}>
          <HomeButton />
        </Button>
      </div>
      <div className={"Home"}>
        <h1>Scrivi quello che senti nell'audio</h1>
        <ReactAudioPlayer src={animal[randomIndex]} controls />
        </div>
        <div className={"App"}>
        <TextField
          id="standard-basic"
          label="Nome Animale"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
           <Button
            style={styles.button}
            color={"primary"}
            variant={"contained"}
            onClick={() => checkRisposta()}
          >Verifica</Button>
           <Button
            style={styles.button}
            variant={"contained"}
            onClick={() => checkInput()}
          >
            Nuovo <ArrowForwardIcon />
          </Button>
        {button}
      </div>
      
    </>
  );
};
export default withRouter(ItaSimple);
