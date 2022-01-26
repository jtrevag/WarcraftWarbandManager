import Select from "react-select";
import ArmyViewerRow from "./ArmyViewerRow";

export default function ArmyViewer({
  setView,
  setManagerView,
  army,
  faction,
  setFaction,
  selectIndex,
}) {
  const factions = [
    { value: "Horde", label: "Horde" },
    { value: "Alliance", label: "Alliance" },
    { value: "Monster", label: "Monster" },
  ];

  return (
    <div>
      <div className="row m-4">
        <div className="col-md-4">
          <button
            className="btn btn-danger"
            onClick={() => {
              setView("Home");
            }}
          >
            Go Back
          </button>
        </div>
        <div className="col-4 d-print-none">
          <Select
            onChange={(input) => {
              input ? setFaction(input.value) : setFaction("");
            }}
            isClearable={true}
            options={factions}
          ></Select>
        </div>
      </div>

      <div>
        {faction
          ? army.map((character, index) => {
              return (
                <ArmyViewerRow
                  key={index}
                  index={index}
                  character={character}
                  setManagerView={setManagerView}
                  faction={faction}
                  selectIndex={selectIndex}
                ></ArmyViewerRow>
              );
            })
          : ""}
      </div>
    </div>
  );
}
