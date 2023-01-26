import React, { Dispatch, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface IAppContext {
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
}

const appContext = React.createContext<IAppContext>({} as IAppContext);

function App() {
  const [count, setCount] = useState(0);

  return (
    <appContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      <ComponentA />
    </appContext.Provider>
  );
}

const ComponentA = () => {
  const [isMan, setIsMan] = useState(true);

  return (
    <div>
      <input type="button" value="Man" onClick={() => setIsMan(true)} />
      <input type="button" value="Woman" onClick={() => setIsMan(false)} />
      {isMan ? <h1>Man</h1> : <h1>Woman</h1>}
    </div>
  );
};

const ComponentB = () => {
  const { setCount } = React.useContext(appContext);

  return (
    <div>
      <input
        type="button"
        value="Click Me!"
        onClick={() => setCount((i) => i + 1)}
      />
    </div>
  );
};

export default App;
