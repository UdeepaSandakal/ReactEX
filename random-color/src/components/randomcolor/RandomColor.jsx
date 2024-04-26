import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typesOfColor, setTypesOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb( ${r}, ${g}, ${b} )`);
  }

  useEffect(() => {
    if (typesOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typesOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="flex justify-center">
        <button className="btn" onClick={() => setTypesOfColor("hex")}>
          Create HEX Color
        </button>
        <button className="btn" onClick={() => setTypesOfColor("rgb")}>
          Create RGB Color
        </button>
        <button
          className="btn"
          onClick={
            typesOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Genarate Random Color
        </button>
      </div>
      <div className="hero">
        <h3>{typesOfColor === "hex" ? "HEX Color " : "RGB Color "}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
