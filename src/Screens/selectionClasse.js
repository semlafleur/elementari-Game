import React from 'react'
import Button from '../Components/button'
import { withRouter } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { simple,medium,difficult, hard } from '../actions'
import "../mateStyle.css"


const SelectionClasse = ({ history }) => {
   
    return (
        <div className="Home">
        <h1>Scegli la tua Classe...</h1>
        <div style={{display : "flex"}}>
            <Button value={" 1-2 elementare"} onClick={() => history.push("/Simple")} />
            <Button value={"3-4 elementare"} onClick={() => history.push("/Medium")} />
            <Button value={"5 elementare"} onClick={() => history.push("/Hard")} />
        </div>

        </div>
    )
};

export default withRouter(SelectionClasse);
