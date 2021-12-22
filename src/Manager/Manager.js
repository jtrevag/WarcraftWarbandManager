import { useState } from "react";
import Select from "react-select";
import ArmyManagerRow from "./ArmyManagerRow";

export default function Manager({ setView }) {
  const [faction, setFaction] = useState("");
  const [army, setArmy] = useState(Array.apply(null, Array(3)).map(() => {return undefined}));
  const factions = [
    { value: "Horde", label: "Horde" },
    { value: "Alliance", label: "Alliance" },
    { value: "Monster", label: "Monster" },
  ];

  function loadArmy() {
    let jsx = "";
    for (let character in army) {
      jsx += <ArmyManagerRow character={character}></ArmyManagerRow>;
    }
    return jsx;
  }

  return (
    <div>
      <h3>Warband Manager</h3>
      <div className="mb-3 row d-print-none">
        <div className="col-md-4">
          <button
            className="btn btn-danger"
            onClick={() => {
              setView("Home");
            }}
          >
            Go Back
          </button>
        </div>
        <div className="col-md-4">
          <Select
            onChange={(input) => {
              input ? setFaction(input.value) : setFaction("");
            }}
            isClearable={true}
            options={factions}
          ></Select>
        </div>
      </div>
      <div>
        {faction
          ? army.map((character, index) => {
              return <ArmyManagerRow key={index} character={character}></ArmyManagerRow>;
            })
          : ""}
      </div>
    </div>
  );
}
