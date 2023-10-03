import { useState } from "react";
import "./App.css";

function App() {
  //let counter = 25;
  let [counter, updateCounter] = useState(0);
  let [alert, setAlert] = useState("");

  const increment = () => {
    if (counter < 20) {
      console.log("incermented value", (counter += 1));
    } else {
      setAlert("Can't go beond 20!!!");
    }

    updateCounter(counter);
  };

  const decrement = () => {
    if (counter > 0) {
      console.log("decremented value", (counter -= 1));
    } else {
      setAlert("Can't go below 0!!!");
    }

    updateCounter(counter);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h3>{alert}</h3>
      <h2>Counter value: {counter}</h2>
      <button onClick={increment}>Add</button>
      <br />
      <button onClick={decrement}>Remove</button>
    </>
  );
}

export default App;
