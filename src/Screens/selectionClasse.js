import React from 'react'
import Button from '../Components/button'
import { withRouter } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { setDifficult } from '../actions'


const SelectionClasse = ({history}) => {
const dispatch = useDispatch();
 const level = useSelector(state =>state.checkLevel)
const wrapFunction = (difficult) => {
 dispatch(setDifficult(difficult));
 history.push("/selectionMateria")

}

    return (
        <>
            <Button value={" 1-2 elementare"} onClick={() => wrapFunction("Simple") } />
            <Button value={"3-4 elementare"} onClick={() => wrapFunction("Medium")}/>
            <Button value={"5 elementare"} onClick={() => wrapFunction("Hard") } />
        </>
    )
};

export default withRouter(SelectionClasse);
