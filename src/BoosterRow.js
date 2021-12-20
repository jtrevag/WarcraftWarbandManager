export default function BoosterRow({character}) {
    
    console.log(character.fields);
    const characterCard = character.get("Character Card")[0]['url'];
    const itemCard1 = character.get("Item Card (from Card 1)")[0]['url'];
    const itemCard2 = character.get("Item Card (from Card 2)")[0]['url'];

    return (
    <div key={character.get("Id")}>  
        <img src={characterCard} alt="the character card" heigh="321px"></img>
        <img src={itemCard1} alt="item card 1" height="321px"></img>
        <img src={itemCard2} alt="item card 2" height="321px"></img>
    </div>);
}