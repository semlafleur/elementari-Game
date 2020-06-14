import React, { useState } from "react";
import "../../mateStyle.css";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
import HomeButton from "@material-ui/icons/Home";
import ReactAudioPlayer from "react-audio-player";
import dettato from "../../extra/dettatoDifficile.mp3";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const styles = {
    button: {
      marginLeft: 10,
    },
  };

  const risultato = 'Le api e i calabroni Il campo di lavanda era in subbuglio: papaveri e fiordalisi avevano tutti i petali che tremavano! Da qualche giorno api e calabroni litigavano senza tregua per via di un alveare sistemato proprio in mezzo ai fiori. “E’ nostro!” ronzavano le api. “Che faccia tosta!” rispondevano i calabroni. “E’ casa nostra!”. Non c’era verso di metterli d’accordo. A un certo punto, però, gli altri insetti, i topi campagnoli e gli uccelli, insomma, tutti gli abitanti del campo ne ebbero abbastanza e andarono a trovare il vecchio gufo, noto per la sua saggezza. Il vecchio gufo, che viveva nella cavità di un albero vicino al fiume, li ascoltò con calma, poi decise di andare a vedere di persona. Dall’alto sentì un gran rumoreggiare confuso e notò tattiche e manovre infernali… “Basta! Visto che non riuscite a mettervi d’accordo fra voi, ecco la mia decisione: api e calabroni costruiranno … un alveare simile a quello per cui state litigando!”… Da allora nel campo di lavanda è tornata la calma: le api ronzano nel loro alveare e tutti gli abitanti possono dormire sonni tranquilli.'


  const ItaHard = ({history}) => {
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
export default withRouter(ItaHard);
