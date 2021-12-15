import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Home'
import Booster from './Booster';

function App() {
  const [count, setCount] = useState(0);
  let [view, setView] = useState("Home");

  console.log("the value of view:", view);

  return (
    <div className="App">
      <h1>Warcraft Army Manager</h1>
      {view === "Home" ? <Home setView={setView}></Home> : 
      view === "Booster" ? <Booster setView={setView}></Booster> : ""}
    </div>
  );
}

export default App;
