import "./App.css";
import data from "./api/data.json";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  function getData() {
    console.log(data);
    const team = data.teams.find(
      (team) => team.name.toLowerCase() === input.toLowerCase()
    );

    if (team) {
      // Assuming you want to set the first player's image
      if (team.players.length > 0) {
        setImage(team.players[0].url);
      } else {
        setImage(""); // No players
      }
    } else {
      setImage(""); // Team not found
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cricket DB</h1>
      <input
        type="text"
        placeholder="Search Here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={getData}>Search</button>
      {image ? (
        <img
          src={image}
          alt="Player"
          style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
        />
      ) : (
        <p style={{ textAlign: "center" }}>No image found</p>
      )}
    </>
  );
}

export default App;
