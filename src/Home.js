import './Home.css';

export default function Home({setView}) {
    console.log("home", setView);
    return (
        <div>
            <button className='homeButton' type="button" onClick={() => setView("Booster")}>Booster Generator</button>
            <button className='homeButton' type="button">Warband Manager</button>
        </div>
    );
}