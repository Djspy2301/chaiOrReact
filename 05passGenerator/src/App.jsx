import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [inNumbers, setNumbers] = useState(false);
  const [inCharacters, setCharacters] = useState(false);
  const [Password, setPassword] = useState("");
  const passRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (inNumbers) str += "0123456789";
    if (inCharacters) str += "!@#$%^&*(){}|+_-?~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
      // console.log(char);
    }

    setPassword(pass);
  }, [length, inNumbers, inCharacters, setPassword]);

  const copyPassToClipboard = useCallback(() => {
    passRef.current?.select(); //to highlight selected reffrence
    passRef.current?.setSelectionRange(0, 100); //to set range for selection
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    passGenerator();
  }, [length, inNumbers, inCharacters, passGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-2 my-8 text-orange-400 text-2xl bg-gray-600">
        <div className="flex shadow flex-col rounded-lg overflow-hidden mb-4">
          <h3 className="m-auto text-2xl mt-3 mb-7">Password Generator</h3>
          <div className="flex flex-row">
            <input
              type="text"
              value={Password}
              className="outline-none w-full py-1 px-3 mb-7 rounded-l-2xl"
              placeholder="Password"
              readOnly
              ref={passRef}
            />
            <button
              className="flex outline-none text-white pb-3 bg-blue-400 py-1 px-3 mb-7 rounded-r-2xl"
              onClick={copyPassToClipboard}
            >
              copy
            </button>
          </div>
          <div className="text-lg">
            <label className="mr-1">Length: {length}</label>
            <input
              className="mr-3 cursor-pointer"
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="mr-1">Numbers</label>
            <input
              className="mr-3"
              type="checkbox"
              value={inNumbers}
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label className="mr-1">Characters</label>
            <input
              className="mb-10"
              type="checkbox"
              value={inCharacters}
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
