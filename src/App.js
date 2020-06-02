import React from "react";
import Home from "./Screens/Home";
import selectionClasse from "./Screens/selectionClasse"
import "./App.css";
import { Container } from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 200,
  },
};
const App = () => {
  return (
    <Container>
      <Router>
      <div style={styles.container}>
        <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/selectionClasse" component={selectionClasse}/>
        {/* <Route exact path="/selectionClasse" component={sempliceSelectionMateria}/>
        <Route exact path="/selectionClasse" component={medioSelectionMateria}/>
        <Route exact path="/selectionClasse" component={difficileSelectionMateria}/>
        <Route exact path="/selectionClasse" component={difficileMate}/>
        <Route exact path="/selectionClasse" component={difficileIta}/>
        <Route exact path="/selectionClasse" component={difficileAmb}/>
        <Route exact path="/selectionClasse" component={medioMate}/>
        <Route exact path="/selectionClasse" component={medioIta}/>
        <Route exact path="/selectionClasse" component={medioAmb}/>
        <Route exact path="/selectionClasse" component={sempliceMate}/>
        <Route exact path="/selectionClasse" component={sempliceIta}/>
        <Route exact path="/selectionClasse" component={sempliceAmb}/> */}

          
        
        </Switch>
      </div>
      </Router>
    </Container>
  );
};

export default App;
