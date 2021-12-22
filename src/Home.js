import "./Home.css";

export default function Home({ setView }) {
  return (
    <div>
      <button
        className="homeButton btn btn-primary"
        type="button"
        onClick={() => setView("Booster")}
      >
        Booster Generator
      </button>
      <button
        className="homeButton btn btn-primary"
        type="button"
        onClick={() => setView("Manager")}
      >
        Warband Manager
      </button>
    </div>
  );
}
