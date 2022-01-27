export default function UnitViewer({ character, cards }) {
  let {genericCards} = setupCards(character, cards);

  return (
    <div>
      <div className="row">
        <div>
          <img src="..." alt="Hero" />
        </div>
      </div>
      <div className="row">
        <h4>Common Cards</h4>
        <div>
            {genericCards ? genericCards.map((card, index) => {
                return (<img key={index} src={card.get("Item Card")[0].url} alt={card.get("Name")}></img>)
            }) : ""}
          <img src="..." alt="card"></img>
        </div>
      </div>
    </div>
  );
}

function setupCards(character, cards) {
    //filter out ALL the cards without images
    cards = cards.filter((card) => {
        return card.get("Item Card") ? true : false;
    });


  let genericCards = cards.filter((card) => {
    let valid = false;
    card.get("Restriction").forEach((restriction) => {
      if (restriction === "(none)") {
        valid = true;
      }
    });
    return valid;
  });

  genericCards.sort((cardA, cardB) => {
    return cardA.get("Name") > cardB.get("Name");
  });

  console.log(genericCards);

  return {genericCards};
}
