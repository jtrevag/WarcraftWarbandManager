import { useState } from "react";
import BoosterRow from "./BoosterRow";
import Select from "react-select";
import "./Booster.css";

export default function Booster({ setView, miniatures }) {
  const [booster, setBooster] = useState([]);
  const [faction, setFaction] = useState("");
  const factions = [
    { value: "Horde", label: "Horde" },
    { value: "Alliance", label: "Alliance" },
    { value: "Monster", label: "Monster" },
  ];

  function generateBooster() {
    let chosenFaction = faction;

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    if (!chosenFaction) {
      chosenFaction = factions[getRandomInt(3)].value;
    }

    const myFactionCharacters = miniatures.filter(
      (miniature) => miniature.get("Faction") === chosenFaction
    );
    console.log(myFactionCharacters);
    const epicAndRareCharacters = myFactionCharacters.filter(
      (record) => record.get("Rarity") !== "Common"
    );
    const rareCharacters = myFactionCharacters.filter(
      (record) => record.get("Rarity") === "Rare"
    );
    const commonCharacters = myFactionCharacters.filter(
      (record) => record.get("Rarity") === "Common"
    );

    let commonIndex = getRandomInt(commonCharacters.length);
    let character1 =
      epicAndRareCharacters[getRandomInt(epicAndRareCharacters.length)];
    let character2 = null;
    let character3 = commonCharacters[commonIndex];

    if (character1.get("Rarity") === "Epic") {
      character2 = rareCharacters[getRandomInt(rareCharacters.length)];
    } else {
      do {
        character2 = commonCharacters[getRandomInt(commonCharacters.length)];
      } while (
        character3.get("Character Name") === character2.get("Character Name")
      );
    }
    setBooster([character1, character2, character3]);
  }

  return (
    <div>
      <h3>Random Booster Generator</h3>
      <div className="row booster-row">
        <div className="col-md-4">
          <button
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
        <div className="col-md-4">
          <button
            onClick={() => {
              generateBooster();
            }}
          >
            Generate Booster
          </button>
        </div>
      </div>
      <div>
        {booster.map((character) => {
          return character ? (
            <BoosterRow character={character}></BoosterRow>
          ) : null;
        })}
      </div>
    </div>
  );
}
