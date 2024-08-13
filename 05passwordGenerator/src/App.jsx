import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState();

  // ref hook
  const passwordRef=useRef(null)
  const copyPass = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
    }
  };
  




  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, num, char, setPassword]);
  useEffect(() => {passwordGenerator()},[length,num,char,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 justify-center">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPass} className="bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex">
          <label className="mr-2 text-white">
            <input
              type="checkbox"
              checked={num}
              onChange={(e) => setNum(e.target.checked)}
            />
            Include numbers
          </label>
          <label className="mr-2 text-white">
            <input
              type="checkbox"
              checked={char}
              onChange={(e) => setChar(e.target.checked)}
            />
            Include special characters
          </label>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full rounded-lg outline-none"
          />
          <span className="text-white ml-2">{length} characters</span>
        </div>
      </div>
    </>
  );
}

export default App;
