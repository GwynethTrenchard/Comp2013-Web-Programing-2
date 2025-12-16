import { useState } from "react";
import data from "../Data/data";

export default function ColorBox({ colors }) {
  const random = Math.floor(Math.random() * data.length); // this is working
  const [newColor, setNewColor] = useState(colors);

  const getRandomColor = () => {
    let randColor = colors[random];
    return randColor;
  };

  const colorOnClick = () => {
    setNewColor(getRandomColor);
  };

  return (
    <div
      className="ColorBox"
      onClick={colorOnClick}
      style={{ backgroundColor: newColor }}
    ></div>
  );
}
