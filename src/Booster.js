import {useState} from 'react';
import BoosterRow from './BoosterRow';

export default function Booster({setView, miniatures}) {

    const [booster, setBooster] = useState([])

    function generateBooster(faction) {
        function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
      const factions = ['Horde', 'Alliance', 'Monster'];
    
    
      if(!faction) {
          faction = factions[getRandomInt(3)]
      }
    
      const myFactionCharacters = miniatures.filter(miniature => miniature.get('Faction') === faction);
      console.log(myFactionCharacters);
      const epicAndRareCharacters = myFactionCharacters.filter(record => record.get("Rarity") !== "Common");
      const rareCharacters = myFactionCharacters.filter(record => record.get("Rarity") === "Rare");
      const commonCharacters = myFactionCharacters.filter(record => record.get("Rarity") === "Common");
    
      let commonIndex = getRandomInt(commonCharacters.length);
      let character1 = epicAndRareCharacters[getRandomInt(epicAndRareCharacters.length)];
      let character2 = null;
      let character3 = commonCharacters[commonIndex]
      
    
      if(character1.get("Rarity") === 'Epic') {
        character2 = rareCharacters[getRandomInt(rareCharacters.length)]
      } else {
        do {
          character2 = commonCharacters[getRandomInt(commonCharacters.length)];
        } while(character3.get("Character Name") === character2.get("Character Name"));
        
      }  

      
      setBooster([character1, character2, character3]);
      // console.log(character1.get("Character Name"), character2.get("Character Name"),character3.get("Character Name"))
      
      
    //   let totalHonor = character1.getCellValue("Honor") + character2.getCellValue("Honor") + character3.getCellValue("Honor");
    
    //   let outputTable = base.getTable("Generated Warbands");
    //   let record = await outputTable.createRecordAsync(
    //     {
    //       "Faction": {name: myFaction},
    //       "Honor": totalHonor,
    //       "Character 1": [{id: character1.id}], 
    //       "Character 2": [{id: character2.id}], 
    //       "Character 3": [{id: character3.id}]
    //     });
    }

    return (
        <div>
            <div className="flexRow">
                <button onClick={() => {setView("Home")}}>Go Back</button><h3>Random Booster Generator</h3>
            </div>
            <div>
                <button onClick={() => {generateBooster()}}>Generate Booster</button>
            </div>
            <div>
              {booster.map((character) => {
                return (character ? <BoosterRow character={character}></BoosterRow> : null)
              }
              )}
            </div>
        </div>
    
    )
}