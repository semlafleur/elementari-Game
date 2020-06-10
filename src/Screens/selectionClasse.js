import React from 'react'
import Button from '../Components/button'
import { withRouter } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { setDifficult } from '../actions'
import "../mateStyle.css"



const SelectionClasse = ({ history }) => {
    const dispatch = useDispatch();
    const level = useSelector(state => state.checkLevel)
    const wrapFunction = (difficult) => {
        dispatch(setDifficult(difficult));
        history.push("/selectionMateria")
        console.log(level)

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
