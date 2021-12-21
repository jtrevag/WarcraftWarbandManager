export default function BoosterRow({ character }) {
  console.log(character.fields);
  const characterCard = character.get("Character Card")[0]["url"];
  const itemCard1 = character.get("Item Card (from Card 1)")[0]["url"];
  const itemCard2 = character.get("Item Card (from Card 2)")[0]["url"];

  return (
    <div className="row" key={character.get("Id")}>
      <div className="col-5 d-print-inline">
        <img className="img-fluid" src={characterCard} alt="Character Card"></img>
      </div>
      <div className="col-3 d-print-inline">
        <img className="img-fluid" src={itemCard1} alt="Item Card 1" ></img>
      </div>
      <div className="col-3 d-print-inline">
        <img className="img-fluid" src={itemCard2} alt="Item Card 2"></img>
      </div>
    </div>
  );
}
