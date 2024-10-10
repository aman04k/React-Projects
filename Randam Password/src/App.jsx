import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(4); 
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg text-center p-6 my-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-6">🔒 Password Generator</h1>
        
        <div className="flex shadow-inner rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none py-3 px-4 w-full bg-gray-700 text-gray-200 placeholder-gray-400"
            placeholder="Generated Password"
            readOnly
          />
          <button
            className="outline-none py-3 px-4 bg-orange-500 text-white hover:bg-orange-600 transition"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="text-lg">Password Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-3/4"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="text-lg">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="cursor-pointer h-5 w-5 accent-orange-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-lg">Include Special Characters</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="cursor-pointer h-5 w-5 accent-orange-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
