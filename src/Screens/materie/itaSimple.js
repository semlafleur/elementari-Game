import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import "../../mateStyle.css"
import cane from "../../extra/cane.jpg"
import gatto from "../../extra/gatto.jpg"
import gallina from "../../extra/gallina.jpg" 
import rana from "../../extra/rana.jpg" 
import topo from "../../extra/topo.jpg" 
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from "@material-ui/core";
import { withRouter } from "react-router"


const styles = {
    button : {
        marginLeft : 10,    
    }
}

const animal = {0 : gatto,1 :cane, 2 : gallina, 3 : topo, 4 : rana} ;
const animalString = {0 : "gatto",1 :"cane", 2 : "gallina", 3 : "topo", 4 : "rana"} ;
const imageUlitizated = [0];


const ItaSimple = ({history}) => {
    const  [input, setInput] = useState("")
    const [randomIndex, setRandomIndex] = useState(0);
    const [button, setbutton] = useState(undefined);
    const [escapeButton, setescapeButton] = useState(undefined);

const setPitcure = () => {
   
    
    if(imageUlitizated.length === 5 ) {
        setescapeButton(<Button variant={"contained"} style={{ marginTop: 10 }} onClick={() => history.push("/selectionMateria")}>Gioco finito clicca qui per scegliere una altra materia ! </Button>)
    return
    }
   const random = Math.floor(Math.random() * 5);
    setbutton(undefined);
   setInput("");
   console.log(input)
   if (randomIndex === random || imageUlitizated.includes(random)) return setPitcure();
   imageUlitizated.push(random)
     setRandomIndex(random)
   return;
}
const checkRisposta = () => {
   
 if (animalString[randomIndex] === input.toLowerCase()) setbutton(<Button variant={"contained"} style={{ backgroundColor: "#4CC417", marginTop: 10 }} onClick={() => alert("bravo continua così")}>Corretto</Button>);
    else setbutton(<Button variant={"contained"} style={{ backgroundColor: "#FF0000", marginTop: 10 }} onClick={() => alert("Hai fatto sbagliato, farai megio la prossima volta")}>sbagliato</Button>)

}
    return (
        <div className={"Home"} >
            
        <h1>Scrivi il nome dell'animale raffigurato</h1>
        <img  src={animal[randomIndex]}></img>
        <div className={"App"}>
           <TextField id="standard-basic" label="Nome Animale" value={input} onChange={event => setInput(event.target.value)} />
        <Button  style={styles.button}  color={"primary"} variant={"contained"}  onClick={() =>
          checkRisposta()

        }>verifica</Button>
           <Button style={styles.button}variant={"contained"} onClick={()=> setPitcure()}>Nuovo <ArrowForwardIcon/></Button>
        </div>
        <div>
        {button}
        <div>
        {escapeButton}
      </div>
      </div>
        </div>
    );
};
export default ItaSimple;

//Mapping e confronto chiave-valore