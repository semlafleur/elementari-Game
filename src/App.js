import React from "react";
import Home from "./Screens/Home";
import selectionClasse from "./Screens/selectionClasse";

import ambHard from "./Screens/materie/ambHard";
import ambMedium from "./Screens/materie/ambMedium";
import ambSimple from "./Screens/materie/ambSimple";

import mateHard from "./Screens/materie/mateHard";
import mateMedium from "./Screens/materie/mateMedium";
import mateSimple from "./Screens/materie/mateSimple";

import itaHard from "./Screens/materie/itaHard";
import itaMedium from "./Screens/materie/itaMedium";
import itaSimple from "./Screens/materie/itaSimple";

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
            <Route exact path="/selectionClasse" component={selectionClasse} />

            <Route exact path="/ambHard" component={ambHard} />
            <Route exact path="/ambMedium" component={ambMedium} />
            <Route exact path="/ambSimple" component={ambSimple} />

            <Route exact path="/mateHard" component={mateHard} />
            <Route exact path="/mateMedium" component={mateMedium} />
            <Route exact path="/mateSimple" component={mateSimple} />

            <Route exact path="/itaHard" component={itaHard} />
            <Route exact path="/itaMedium" component={itaMedium} />
            <Route exact path="/itaSimple" component={itaSimple} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
};

export default App;
