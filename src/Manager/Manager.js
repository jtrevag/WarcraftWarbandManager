import { Component } from "react";
import ArmyViewer from "./ArmyViewer/ArmyViewer";
import CharacterViewer from "./CharacterViewer/CharacterViewer";
import UnitViewer from "./UnitViewer/UnitViewer";

export default class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      army: Array.apply(null, Array(3)).map(() => {
        return undefined;
      }),
      managerView: "ArmyViewer",
      faction: undefined,
      index: -1,
      managedUnit: undefined,
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
            setManagerView={(managerView) => {
              this.setState({ managerView });
            }}
            index={this.state.index}
            setArmyUnit={(index, character) => {
              const newArmyUnit = this.state.army.slice(); //copy the array
              newArmyUnit[index] = character; //execute the manipulations
              this.setState({ army: newArmyUnit }); //set the new state
            }}
            setManagedUnit={(character) => {
              this.setState({ managedUnit: character });
            }}
          ></CharacterViewer>
        ) : this.state.managerView === "UnitViewer" ? (
          <UnitViewer
            character={this.state.managedUnit}
            cards={this.props.cards}
          ></UnitViewer>
        ) : (
          <ArmyViewer
            army={this.state.army}
            setView={(view) => {
              this.props.setView(view);
            }}
            setManagerView={(managerView) => {
              this.setState({ managerView });
            }}
            faction={this.state.faction}
            setFaction={(faction) => {
              this.setState({ faction });
            }}
            selectIndex={(index) => {
              this.setState({ index });
            }}
          ></ArmyViewer>
        )}
      </div>
    );
  }
}
