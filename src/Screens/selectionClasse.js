import React from 'react'
import Button from '../Components/button'
import { withRouter } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { simple,medium,difficult, hard } from '../actions'
import "../mateStyle.css"


const SelectionClasse = ({ history }) => {
   

    const wrapFunction = (difficult) => {
        history.push("/selectionMateria")
      
    }

    return (
        <div className="Home">
        <h1>Scegli la tua Classe...</h1>
        <div style={{display : "flex"}}>
            <Button value={" 1-2 elementare"} onClick={() => wrapFunction("Simple")} />
            <Button value={"3-4 elementare"} onClick={() => wrapFunction("Medium")} />
            <Button value={"5 elementare"} onClick={() => wrapFunction("Hard")} />
        </div>

        </div>
    )
};

export default withRouter(SelectionClasse);
