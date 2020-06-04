import React from 'react';
import Button from '../Components/button'
import { withRouter } from "react-router";


const Home = ({history}) => {

    return (
        <Button value={"Iniziamo"} onClick={() => history.push('/selectionClasse') } />
    )
};
export default withRouter(Home);
