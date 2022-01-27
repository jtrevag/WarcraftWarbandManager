import Select from "react-select";
import { useState } from "react";
import "./CharacterViewer.css";

export default function CharacterViewer({
  miniatures,
  faction,
  setManagerView,
  setArmyUnit,
  index,
  setManagedUnit
}) {
  const [raceFilter, setRaceFilter] = useState(undefined);
  const [classFilter, setClassFilter] = useState(undefined);
  const [selectedCharacter, setSelectedCharacter] = useState(undefined);

  let myFactionCharacters = miniatures.filter(
    (miniature) => miniature.get("Faction") === faction
  );

  let filteredCharacters = myFactionCharacters.filter((miniature) => {
    return (
      (raceFilter ? miniature.get("Race") === raceFilter.value : true) &&
      (classFilter ? miniature.get("Class") === classFilter.value : true)
    );
  });

  let raceOptions = [];
  let classOptions = [];

  setupRaceAndClass(
    myFactionCharacters,
    raceOptions,
    classOptions,
    raceFilter,
    classFilter
  );

  function selectCharacter(character) {
    if (selectedCharacter === character) {
      setSelectedCharacter(undefined);
    } else {
      setSelectedCharacter(character);
    }
  }

  return (
    <div>
      <div className="mb-3 row d-print-none">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setManagerView("ArmyViewer")}
          >
            Go Back
          </button>
        </div>
        <div className="col-3">
          <Select
            isClearable={true}
            options={raceOptions}
            onChange={(race) => {
              setRaceFilter(race);
            }}
          ></Select>
        </div>
        <div className="col-3">
          <Select
            isClearable={true}
            options={classOptions}
            onChange={(clazz) => {
              setClassFilter(clazz);
            }}
          ></Select>
        </div>
        {selectedCharacter ? (
          <div className="col-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setArmyUnit(index, selectedCharacter);
                setManagedUnit(selectedCharacter);
                setManagerView("UnitViewer");
              }}
            >
              Confirm
            </button>
          </div>
        ) : undefined}
      </div>

      <div className="row">
        {filteredCharacters.map((character) => {
          return (
            <div
              key={character.get("Character Name")}
              className="col-4 my-1 d-print-inline"
            >
              <img
                className={
                  "img-fluid" +
                  (selectedCharacter === character ? " selected" : "")
                }
                src={character.get("Character Card")[0]["url"]}
                alt="Character Card"
                width="416"
                height="297"
                onClick={() => {
                  selectCharacter(character);
                }}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function setupRaceAndClass(
  myFactionCharacters,
  raceOptions,
  classOptions,
  raceFilter,
  classFilter
) {
  let races = [];
  let classes = [];

  myFactionCharacters.forEach((character) => {
    if (
      (classFilter ? character.get("Class") === classFilter.value : true) &&
      races.indexOf(character.get("Race")) === -1
    ) {
      races.push(character.get("Race"));
      raceOptions.push({
        value: character.get("Race"),
        label: character.get("Race"),
      });
    }
    if (
      (raceFilter ? character.get("Race") === raceFilter.value : true) &&
      classes.indexOf(character.get("Class")) === -1
    ) {
      classes.push(character.get("Class"));
      classOptions.push({
        value: character.get("Class"),
        label: character.get("Class"),
      });
    }
  });

  raceOptions.sort((race1, race2) => {
    return race1.value > race2.value;
  });
  classOptions.sort((clazz1, clazz2) => {
    return clazz1.value > clazz2.value;
  });
}
