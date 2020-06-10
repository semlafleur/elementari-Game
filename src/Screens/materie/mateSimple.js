import React, { useState } from "react";
import "../../mateStyle.css";
import { ShowAddiction } from "../../Components/showCalculate";
import Button from "@material-ui/core/Button";

const styles = {
  true: {
    backgroundColor: "#4CC417",
    margin : 5,
  },
  false: {
    backgroundColor: "	#FF0000",
    margin: 5
  },
  div: {
    marginRight: 20,
    clear : 'both',
    display : "block"

  }
};
const random = Math.floor(Math.random() * 2);
const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10)
const result = (random === 1 ? num1 + num2 : Math.floor(Math.random() * 20))
let correct = undefined;

const checkValues = () => {
  const correctResult = num1 + num2;
  if (correctResult === result) correct = true;
  else correct = false;
};
checkValues();
console.log(result)

const MateSimple = () => {
  const [button, setbutton] = useState(undefined)



  const generateButton = (buttonClick) => {

    if (correct === buttonClick) setbutton(<Button variant={"contained"} style={{backgroundColor :"#4CC417"}} >Corretto</Button>);
    else setbutton(<Button variant={"contained"} style={{backgroundColor :"#FF0000"}} >sbagliato</Button>)

  }
  const reload = () => {
    window.location.reload(false);
    setbutton(undefined);
  }


  return (
    <>
      <div className={"App"}>
        <ShowAddiction num1={num1} num2={num2} resullt={result} />
      </div>
      <div style={styles.div} >
        <Button style={styles.true} variant={"contained"} onClick={() =>
          generateButton(true)

        }>
          vero
        </Button>
        <Button style={styles.false} variant={"contained"} onClick={() =>
          generateButton(false)

        }>
          falso
        </Button>
        {button}
        <Button variant={"contained"} color={"primary"} onClick={() => reload()}>Ricarica</Button>
      </div>
    </>
  );
}
export default MateSimple