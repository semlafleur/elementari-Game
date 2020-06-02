import React from "react";
import Button from "./Components/button";
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
        <Button value={" 1-2 elementare"} location={"semplice"} />
        <Button value={"3-4 elementare"} location={"medio"} />
          <Button value={"5 elementare"}location={"difficile"}  />

      </div>
      </Router>
    </Container>
  );
};

export default App;
