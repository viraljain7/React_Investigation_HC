import { useState } from "react";
import "./App.css";

function App() {
  const colors = [
    "olive",
    "red",
    "blue",
    "grey",
    "yellow",
    "green",
    "orange",
    "black",
    "white",
    "pink",
  ];

  const [backgroundColor, setBackgroundColor] = useState("slategray");

  const handleColorClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="w-full h-screen bg-slate-700" style={{ background: backgroundColor }}>
      <div className="color-container fixed flex justify-center items-center bottom-3 inset-x-9 bg-white rounded-full gap-3 px-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-full outline-none bg-black"
            style={{ background: color, cursor: "pointer" }}
            onClick={() => handleColorClick(color)}
          >
            {color}
          </div>
        ))}
      </div>
    </div >
  );
}

export default App;
