import { useState } from "react";

import "./App.css";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <>
      <div className="w-full h-screen " style={{ background: color }}>
        <div className="inset-x-0 px-2 flex flex-wrap bottom-12 fixed justify-center">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 ">
            <Button
              background={() => setColor("Blue")}
              bgName={"Blue"}
            ></Button>
            <Button
              background={() => setColor("pink")}
              bgName={"Pink"}
            ></Button>
            <Button
              background={() => setColor("olive")}
              bgName={"Olive"}
            ></Button>
            <Button background={() => setColor("red")} bgName={"Red"}></Button>
            <Button
              background={() => setColor("Grey")}
              bgName={"Grey"}
            ></Button>
            <Button
              background={() => setColor("Yellow")}
              bgName={"Yellow"}
            ></Button>
            <Button
              background={() => setColor("purple")}
              bgName={"Purple"}
            ></Button>
            <Button
              background={() => setColor("White")}
              bgName={"White"}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
