import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  let object = { key: "masterKey" };
  let myArray = [1, 2, 3, 4, 5, 6, 7, 87, 100];
  return (
    <>
      <h1 className="bg-blue-400 p-5 rounded-xl text-black mb-5">
        Tailwind Test
      </h1>
      <Card
        username="OverdoseGaming"
        myObject={object}
        arr={myArray}
        btnText="click me"
      />
      <Card username="Djspy" />
    </>
  );
}

export default App;
