export default function Booster({setView}) {
    return (
    <div className="flexRow">
        <button onClick={() => {setView("Home")}}>Go Back</button><h3>Random Booster Generator</h3>
    </div>
    )
}