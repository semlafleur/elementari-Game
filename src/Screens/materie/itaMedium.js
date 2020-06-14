import React, { useState } from "react";
import "../../mateStyle.css";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
import HomeButton from "@material-ui/icons/Home";
import ReactAudioPlayer from "react-audio-player";
import dettato from "../../extra/dettatoMedio.mp3";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const styles = {
    button: {
      marginLeft: 10,
    },
  };

  const risultato = 'L’inverno è un periodo di attesa e di riposo per molte creature. Si arresta lo sviluppo della pianticella di frumento che sorrise al novembrino; si chiude in sé e quasi non respira l’albero che donò le sue foglie ai venti autunnali; le piante di fori che offrirono profumi e colori si riducono spesso a radici affondate nelle viscere del terreno. Molti animali si rifugiano nelle viscere della terra e dormono per lunghi mesi, e molti insetti sono vivi soltanto nelle piccole uova, che si schiuderanno a primavera. Anche il riposo è una legge della natura: si risparmiano le forze per la nuova fioritura e per la nuova vita primaverile.'


  const ItaMedium = ({history}) => {
 const [input, setInput] = useState("");
 const [button, setbutton] = useState(undefined);
 const [escapeButton, setescapeButton] = useState(undefined);


 const checkInput  = () => {
     if (input === risultato )
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
     
 }


  return (
    <>
      <div>
        <Button onClick={() => history.push("/")}>
          <HomeButton />
        </Button>
      </div>
      <div className={"Home"}>
        <h1>Scrivi quello che senti nell'audio</h1>
        <ReactAudioPlayer src={dettato} controls />
      </div>
      <div className={"App"}>
        <TextareaAutosize
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        </div>
        <div className={"App"} >
        <Button
          style={styles.button}
          color={"primary"}
          variant={"contained"}
          onClick={() => checkInput()}
        >
          Verifica
        </Button>

        
      
      {button}
      </div>
    </>
  );
};
export default withRouter(ItaMedium);
