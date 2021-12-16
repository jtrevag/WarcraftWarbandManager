import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import Home from './Home'
import Booster from './Booster';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      view: 'Home'
    }
  }

  render() {
    return (
      <div className="App container">
        <h1>Warcraft Army Manager</h1>
          {this.state.view === "Home" ? <Home setView={(view) => {this.setState({view})}}></Home> : 
          this.state.view === "Booster" ? <Booster setView={(view) => {this.setState({view})}}></Booster> : ""}
      </div>
    );
  }
}

export default App;
