export default function ArmyManagerRow({ character }) {
  return (
    <div className="card-group">
      <div className="card" Style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hero Name</h5>
        </div>
      </div>
      <div className="card" Style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Item Name 1</h5>
        </div>
      </div>
      <div className="card" Style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Item Name 2</h5>
        </div>
      </div>
      <div className="card" Style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Item Name 3</h5>
        </div>
      </div>
      <div className="card" Style="width: 18rem;">
          <div className="my-auto">
            <button className="btn btn-primary">Edit Character</button>
          </div>
      </div>
    </div>
  );
}
