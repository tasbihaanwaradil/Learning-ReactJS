import React, { useState } from "react";

const Contact = () => {
  // let num = 0;

  const IncreaseCount = () => {
    if (num > 15) {
      alert("You are going okay!");
    }
    setNum(num + 1);
  };

  const [num, setNum] = useState(9);

  return (
    <div className="text-center">
      <h1>{num}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={() => setNum(num - 1)}>Decrease</button>
    </div>
  );
};

export default Contact;
