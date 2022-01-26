export default function ArmyViewerRow({index, character, setManagerView, selectIndex }) {
  console.log(index, character);
  return (
    <div className="card-group">
      <div className="card">
        <img src={character ? character.get("Character Card")[0]["url"] : "..."} className="card-img-top" alt={character ? character.get("Character Name") : "Hero Image"} />
        <div className="card-body">
          <h5 className="card-title">{character ? character.get("Character Name") : "Hero Name"}</h5>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Action Bar 1</h5>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Action Bar 2</h5>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Action Bar 3</h5>
        </div>
      </div>
      <div className="card">
          <div className="my-auto">
            <button onClick={() => {selectIndex(index); setManagerView('CharacterViewer')}} className="btn btn-primary">Edit Character</button>
          </div>
      </div>
    </div>
  );
}
