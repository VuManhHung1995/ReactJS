import React, { useState } from "react";

function CountText() {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
      <p>{text.length > 0 ? "Số kí tự bạn đã nhập là " + text.length : "Bạn chưa nhập gì"} </p>
    </div>
  );
}

export default CountText;
