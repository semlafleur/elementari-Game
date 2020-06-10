import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';


const ItaSimple = () => {
    const animali = ["cane","gatto", "serpente", ]
    const  [input, setInput] = useState("")
    console.log(input)
    return (
        <div style={{display : "flex"}}>
      
           <TextField id="standard-basic" label="Inserisci il nome dell'animale" value={input}  />
           
        </div>
    );
};
export default ItaSimple;
