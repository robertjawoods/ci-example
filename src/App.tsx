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
      <h1>Count: {count}</h1>

      <ComponentA />
    </appContext.Provider>
  );
}

const ComponentA = () => {
  return (
    <div>
      <ComponentB />
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
