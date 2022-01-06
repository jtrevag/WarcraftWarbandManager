import { Component } from "react";
import ArmyViewer from "./ArmyViewer/ArmyViewer";
import CharacterViewer from "./CharacterViewer/CharacterViewer";

export default class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      army: Array.apply(null, Array(3)).map(() => {
        return undefined;
      }),
      managerView: "ArmyViewer",
      faction: undefined,
    };
  }

  setManagerView() {
    this.setState({ managerView: "CharacterViewer" });
  }

  render() {
    return (
      <div>
        <h3>Warband Manager</h3>
        {this.state.managerView === "CharacterViewer" ? (
          <CharacterViewer
            faction={this.state.faction}
            miniatures={this.props.miniatures}
          ></CharacterViewer>
        ) : (
          <ArmyViewer
            army={this.state.army}
            setView={(view) => {
              this.props.setView(view);
            }}
            setManagerView={(managerView) => {
              this.setState({ managerView });
            }}
            faction = {this.state.faction}
            setFaction={(faction) => {
              this.setState({faction});
            }}
          ></ArmyViewer>
        )}
      </div>
    );
  }
}
