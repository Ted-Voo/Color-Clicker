import { useState } from "react";
import ColorBox from "./ColorBox";
import "./App.css";
import namer from "color-namer"; // make sure to install with: npm install color-namer

export default function App() {
  const [colors, setColors] = useState(["red", "blue", "green", "orange"]);
  const [log, setLog] = useState([]);

  const handleClick = (index) => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

    const newColors = [...colors];
    newColors[index] = randomColor;
    setColors(newColors);

    const names = namer(randomColor);
    const colorName = names.html[0].name; // get first HTML color name

    setLog((prev) => [...prev, { hex: randomColor, name: colorName }]);
  };

  return (
    <div className="app-container">
      <h1>Color Clicker</h1>

      {/* Squares */}
      <div className="squares">
        {colors.map((c, index) => (
          <ColorBox key={index} color={c} onClick={() => handleClick(index)} />
        ))}
      </div>

      {/* Log */}
      <div className="log">
        <h2>Clicked Colors:</h2>
        <ul>
          {log.map((item, i) => (
            <li key={i} className="log-item">
              <div className="color-square" style={{ backgroundColor: item.hex }}></div>
              <span>{item.hex} ({item.name})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
