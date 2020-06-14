import React from "react";
import "../../mateStyle.css";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
import HomeButton from "@material-ui/icons/Home";



const AmbSimple = ({history}) => {
    return (
        <>
            <Button onClick={() => history.push("/selectionMateria")} >
                Sei troppo giovane per fare ambiente, clicca qui per scegliere un altra materia
            </Button>
        </>
    );
};
export default withRouter(AmbSimple)
