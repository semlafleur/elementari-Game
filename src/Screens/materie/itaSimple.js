import React from "react";
import TextField from '@material-ui/core/TextField';


const ItaSimple = () => {
    const animali = ["cane","gatto", "serpente", ]
    return (
        <>
        
           <TextField id="standard-basic" label="Inserisci il nome dell'animale" />
        </>
    );
};
export default ItaSimple;
