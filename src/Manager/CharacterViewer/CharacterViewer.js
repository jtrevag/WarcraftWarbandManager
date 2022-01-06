export default function CharacterViewer({ miniatures, faction }) {
  const myFactionCharacters = miniatures.filter(
    (miniature) => miniature.get("Faction") === faction
  );

  console.log(myFactionCharacters);

  return (
    <div className="row">
      {myFactionCharacters.map((character) => {
        return (
          <div className="col-4 my-1 d-print-inline">
            <img key={character.get('Character Name')}
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
  );
}
