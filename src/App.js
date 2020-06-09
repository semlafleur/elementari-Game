import React from "react";
import Home from "./Screens/Home";
import SelectionClasse from "./Screens/selectionClasse";
import  SelectionMateria from "./Screens/selectionMateria"


import AmbHard from "./Screens/materie/ambHard";
import AmbMedium from "./Screens/materie/ambMedium";
import AmbSimple from "./Screens/materie/ambSimple";

import MateHard from "./Screens/materie/mateHard";
import MateMedium from "./Screens/materie/mateMedium";
import MateSimple from "./Screens/materie/mateSimple";

import ItaHard from "./Screens/materie/itaHard";
import ItaMedium from "./Screens/materie/itaMedium";
import ItaSimple from "./Screens/materie/itaSimple";

import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Route exact path="/" component={Home} />
            <Route exact path="/selectionClasse" component={SelectionClasse} />
            <Route exact path="selectionMateria" component={SelectionMateria} />

            <Route exact path="/ambHard" component={AmbHard} />
            <Route exact path="/ambMedium" component={AmbMedium} />
            <Route exact path="/ambSimple" component={AmbSimple} />

            <Route exact path="/mateHard" component={MateHard} />
            <Route exact path="/mateMedium" component={MateMedium} />
            <Route exact path="/mateSimple" component={MateSimple} />

            <Route exact path="/itaHard" component={ItaHard} />
            <Route exact path="/itaMedium" component={ItaMedium} />
            <Route exact path="/itaSimple" component={ItaSimple} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
};

export default App;