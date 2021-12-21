import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Home from "./Home";
import Booster from "./Booster";
import Airtable from "airtable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      view: "Home",
      miniatures: [],
    };
  }

  componentDidMount() {
    var base = new Airtable({ apiKey: "keycAAcHBy1WJJYyl" }).base(
      "appi27ynSRiwJ0WEQ"
    );

    base("Miniatures")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        this.setState({
          miniatures: [...this.state.miniatures, ...records],
        });
        fetchNextPage();
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App container">
        <h1>Warcraft Army Manager</h1>
        {this.state.view === "Home" ? (
          <Home
            setView={(view) => {
              this.setState({ view });
            }}
          ></Home>
        ) : this.state.view === "Booster" ? (
          <Booster
            miniatures={this.state.miniatures}
            setView={(view) => {
              this.setState({ view });
            }}
          ></Booster>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
