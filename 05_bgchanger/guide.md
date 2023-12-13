```
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState(0);
  return (
    <>
      <div className="w-full h-screen   bg-slate-700">
        <div className="color-container fixed flex justify-center items-center bottom-3 inset-x-9 bg-white rounded-full gap-3 px-4 ">
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "olive" }}
          >
            olive
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "red" }}
          >
            red
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "blue" }}
          >
            blue
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "grey" }}
          >
            grey
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "yellow" }}
          >
            yellow
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "green" }}
          >
            green
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "orange" }}
          >
            orange
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "grey" }}
          >
            grey
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "white" }}
          >
            white
          </div>
          <div
            className="color px-2 py-3 font-bold my-2 flex justify-center items-center rounded-2xl outline-none bg-black"
            style={{ background: "pink" }}
          >
            pink
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

```
