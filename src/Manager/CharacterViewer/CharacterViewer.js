export default function CharacterViewer({ miniatures, faction }) {
  const myFactionCharacters = miniatures.filter(
    (miniature) => miniature.get("Faction") === faction
  );

  console.log(myFactionCharacters);

  return (
    <div className="row">
      {myFactionCharacters.map((character) => {
        return (
          <div className="col-4 d-print-inline">
            <img key={character.get('Character Name')}
              className="img-fluid"
              src={character.get("Character Card")[0]["url"]}
              alt="Character Card"
            ></img>
          </div>
        );
      })}
    </div>
  );
}
