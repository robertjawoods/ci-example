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
  const [isMan, setIsMan] = useState(0);

  return (
    <div>
      <input type="button" value="Man" onClick={() => setIsMan(true)} />
      <input type="button" value="Woman" onClick={() => setIsMan(false)} />
      {isMan ? <ComponentA /> : <ComponentB />}
    </div>
  );
};

interface Person { 
  id: number, 
  name: string,
  surname?: string
}

function printSurname(surname?: string) {
  console.log(surname);
}

const ComponentB = () => {
  const { setCount } = React.useContext(appContext);

  const t: Person = { 
    id: 1,
    name: 'test',
    surname: "surname"
  };

  
  printSurname(t.surname);

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
