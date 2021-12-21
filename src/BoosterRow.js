export default function BoosterRow({ character }) {
  console.log(character.fields);
  const characterCard = character.get("Character Card")[0]["url"];
  const itemCard1 = character.get("Item Card (from Card 1)")[0]["url"];
  const itemCard2 = character.get("Item Card (from Card 2)")[0]["url"];

  return (
    <div className="row booster-row" key={character.get("Id")}>
      <div className="col-md-6">
        <img src={characterCard} alt="the character card" heigh="321px"></img>
      </div>
      <div className="col-md-3">
        <img src={itemCard1} alt="item card 1" height="321px"></img>
      </div>
      <div className="col-md-3">
        <img src={itemCard2} alt="item card 2" height="321px"></img>
      </div>
    </div>
  );
}
