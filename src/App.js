import "./App.css";
import { Component } from "react";
import Home from "./Home";
import Booster from "./Booster/Booster";
import Manager from "./Manager/Manager";
import Airtable from "airtable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      view: "Home",
      miniatures: [],
      cards: []
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

      base("Cards")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        this.setState({
          cards: [...this.state.cards, ...records],
        });
        fetchNextPage();
      });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="d-print-none">Warcraft Army Manager</h1>
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
        ) : this.state.view === "Manager" ? (
          <Manager
            miniatures={this.state.miniatures}
            cards={this.state.cards}
            setView={(view) => {
              this.setState({ view });
            }}
          ></Manager>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
