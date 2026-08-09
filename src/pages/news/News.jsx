import React, { useState } from "react";

const News = () => {
  const [color, setColor] = useState("white");
  const [message, setMessage] = useState("I am white");
  const ChangeColor = (color) => {
    // document.body.style.backgroundColor = color; not recommended in react

    setMessage(`I am ${color}`);
    setColor(color);
  };
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100%",
      }}
    >
      <h1>{message}</h1>
      <button onClick={() => ChangeColor("red")}>Red</button>
      <button onClick={() => ChangeColor("green")}>Green</button>
      <button onClick={() => ChangeColor("blue")}>Blue</button>
    </div>
  );
};

export default News;
