import React from 'react'
import Button from '../Components/button'
import { withRouter } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { setDifficult } from '../actions'


const SelectionClasse = () => {
const level = useSelector(state=>state.changeLevel);
console.log( "level : " + level)
const dispatch = useDispatch();

    return (
        <>
            <Button value={" 1-2 elementare"} onClick={() => dispatch(setDifficult("Simple"))} />
            <Button value={"3-4 elementare"} onClick={() => dispatch(setDifficult("Medium"))}/>
            <Button value={"5 elementare"} onClick={() => dispatch(setDifficult("Hard"))} />
        </>
    )
};

export default SelectionClasse;
