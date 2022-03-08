export default function UnitViewer({ character, cards }) {
  let {genericCards, classCards, raceCards} = setupCards(character, cards);

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
        </div>
      </div>
      <div className="row">
        <h4>Class Cards</h4>
        <div>
            {classCards ? classCards.map((card, index) => {
                return (<img key={index} src={card.get("Item Card")[0].url} alt={card.get("Name")}></img>)
            }) : ""}
        </div>
      </div>
      <div className="row">
        <h4>Race Cards</h4>
        <div>
            {raceCards ? raceCards.map((card, index) => {
                return (<img key={index} src={card.get("Item Card")[0].url} alt={card.get("Name")}></img>)
            }) : ""}
        </div>
      </div>
    </div>
  );
}

function sortCards(a, b) {
  const nameA = a.get("Name").toUpperCase(); // ignore upper and lowercase
  const nameB = b.get("Name").toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
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
  }).sort(sortCards);
  
  let classCards = cards.filter((card) => {
    let valid = false;
    card.get("Restriction").forEach((restriction) => {
      if(restriction === character.get("Class"))
        valid = true;
    })
    return valid;
  }).sort(sortCards);
  
  let raceCards = cards.filter((card) => {
    let valid = false;
    card.get("Restriction").forEach((restriction) => {
      if(restriction === character.get("Race"))
        valid = true;
    })
    return valid;
  }).sort(sortCards);
  
  return {genericCards, classCards, raceCards};
}

