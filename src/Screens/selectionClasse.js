import React from 'react'
import Button from '../Components/button'
import { withRouter } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { simple, medium, hard } from '../actions'


const selectionClasse = () => {

const level = useSelector(state=>state.changeLevel);
const dispatch = useDispatch();

    return (
        <>
            <Button value={" 1-2 elementare"} onClick={() => dispatch(simple)} />
            <Button value={"3-4 elementare"} onClick={() => dispatch(medium)}/>
            <Button value={"5 elementare"} onClick={() => dispatch(hard)} />
        </>
    )
}
export default selectionClasse; 