import React from 'react';
import Button from '../Components/button'
import "../mateStyle.css"
import { withRouter } from "react-router";


const Home = ({history}) => {

    return (
        <div className={"Home"}>
<h1>Gioco della scuola !!</h1>
        <Button value={"Iniziamo"} onClick={() => history.push('/selectionClasse') } />
        </div>
    )
};
export default withRouter(Home);
