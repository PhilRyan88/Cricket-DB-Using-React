import "./App.css";
import data from "./api/data.json";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [images, setImages] = useState([]); // Store an array of player images

  function getData() {
    console.log(data);
    const team = data.teams.find(
      (team) => team.name.toLowerCase() === input.toLowerCase()
    );

    if (team) {
      const playerImages = team.players.map((player) => player.url);
      setImages(playerImages);
    } else {
      setImages([]); // Reset if no team is found
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {images.length > 0 ? (
          images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Player ${index + 1}`}
              style={{
                width: "150px",
                height: "150px",
                margin: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
          ))
        ) : (
          <p>No players found</p>
        )}
      </div>
    </>
  );
}

export default App;
