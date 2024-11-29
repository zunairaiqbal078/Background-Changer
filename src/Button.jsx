import React from "react";

function Button({ background, bgName }) {
  return (
    <button
      className=" bg-slate-400 font-bold py-2 px-4 rounded-2xl"
      onClick={background}
    >
      {bgName}
    </button>
  );
}

export default Button;
