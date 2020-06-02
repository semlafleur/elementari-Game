import React from "react";
import Button from "./Components/button";
import "./App.css";
import { Container } from "@material-ui/core";

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
      <div style={styles.container}>
        <Button value={" 1-2 elementare"} />
        <Button value={"3-4 elementare"} />
          <Button value={"5 elementare"} />

      </div>
    </Container>
  );
};

export default App;
