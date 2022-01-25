import Select from "react-select";
import { useState } from "react";

export default function CharacterViewer({ miniatures, faction }) {
  const [raceFilter, setRaceFilter] = useState(undefined);
  const [classFilter, setClassFilter] = useState(undefined);

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

  setupRaceAndClass(myFactionCharacters, raceOptions, classOptions, raceFilter, classFilter);
  
  return (
    <div>
      <div className="mb-3 row d-print-none">
        <div className="col-4">
          <Select
            isClearable={true}
            options={raceOptions}
            onChange={(race) => {
              setRaceFilter(race);
            }}
          ></Select>
        </div>
        <div className="col-md-4">
          <Select
            isClearable={true}
            options={classOptions}
            onChange={(clazz) => {
              setClassFilter(clazz);
            }}
          ></Select>
        </div>
      </div>

      <div className="row">
        {filteredCharacters.map((character) => {
          return (
            <div
              key={character.get("Character Name")}
              className="col-4 my-1 d-print-inline"
            >
              <img
                className="img-fluid"
                src={character.get("Character Card")[0]["url"]}
                alt="Character Card"
                width="416"
                height="297"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function setupRaceAndClass(myFactionCharacters, raceOptions, classOptions, raceFilter, classFilter) {
  let races = [];
  let classes = [];


  myFactionCharacters.forEach((character) => {
    if ((classFilter ? character.get("Class") === classFilter.value : true) && races.indexOf(character.get("Race")) === -1) {
      races.push(character.get("Race"));
      raceOptions.push({
        value: character.get("Race"),
        label: character.get("Race"),
      });
    }
    if ((raceFilter ? character.get("Race") === raceFilter.value : true) && classes.indexOf(character.get("Class")) === -1) {
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
