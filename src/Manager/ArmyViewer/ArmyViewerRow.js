export default function ArmyViewerRow({ character, setManagerView }) {
  return (
    <div className="card-group">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hero Name</h5>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Item Name 1</h5>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Item Name 2</h5>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Item Name 3</h5>
        </div>
      </div>
      <div className="card">
          <div className="my-auto">
            <button onClick={() => {setManagerView('CharacterViewer')}} className="btn btn-primary">Edit Character</button>
          </div>
      </div>
    </div>
  );
}
