import Buttons from "./components/Buttons";
import Styles from "./App.module.css";
import Display from "./components/Display";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const handleButtonClick = (buttonText) => {
    let newInput = buttonText;

    if (buttonText === "C") {
      const newStr = input.substring(0, input.length - 1);
      setInput(newStr);
    } else if (buttonText === "C All") {
      setInput("");
    } else if (buttonText === "=") {
      setInput(eval(input));
    } else {
      setInput(input + newInput);
    }
  };

  return (
    <div className={Styles.calculator}>
      <Display input={input}></Display>
      <Buttons handleButtonClick={handleButtonClick}></Buttons>
    </div>
  );
};
export default App;
