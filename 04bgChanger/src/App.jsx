import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("red");

  const changeBgColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-6 py-3 rounded-xl">
            <Button name="Red" color="red" changeColor={changeBgColor} />
            <Button name="Green" color="green" changeColor={changeBgColor} />
            <Button name="Blue" color="blue" changeColor={changeBgColor} />
            <Button name="Gray" color="gray" changeColor={changeBgColor} />
            <Button name="Black" color="black" changeColor={changeBgColor} />
            <Button name="Olive" color="olive" changeColor={changeBgColor} />
          </div>
        </div>
      </div>
    </>
  );
};

const Button = ({ name, color, changeColor }) => {
  const handleClick = () => {
    changeColor(color);
  };
  return (
    <button
      onClick={handleClick}
      className="flex flex-wrap justify-center rounded-full px-4 py-1 text-white"
      style={{ backgroundColor: color }}
    >
      {name}
    </button>
  );
};

export default App;
