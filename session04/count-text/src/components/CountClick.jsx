import React, { useState } from "react";

function CountClick() {
  const [countClick, setCountClick] = useState(0);

  return (
    <div>
      <button onClick={() => setCountClick(countClick + 1)}>Click me!!!!!</button>
      <p>{countClick > 0 ? "Bạn đã click " + countClick : "Bạn chưa click lần nào!!!!"}</p>
    </div>
  );
}

export default CountClick;
