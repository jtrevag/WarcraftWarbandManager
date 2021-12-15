import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Home'

function App() {
  const [count, setCount] = useState(0);
  let [view, setView] = useState("Home");

  return (
    <div className="App">
      <h4>Warcraft Army Manager</h4>
      {view === "Home" ? <Home setView={setView}></Home> : 
      view === "Booster" ? (<div>Mr.booster</div>) : ""}
    </div>
  );
}

export default App;
