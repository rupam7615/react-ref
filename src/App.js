import React from "react";
import "./style.css";

export default function App() {
  const ref = React.useRef(null);
  return (
    <div>
      <button onClick={()=>{ref.current.innerHTML = parseInt(ref.current.innerHTML) +1}}>+</button>
      {/* <input type="text"ref={ref} value="0"/> */}
      <p ref={ref}  >0</p>
      <button onClick={()=>ref.current.innerHTML = parseInt(ref.current.innerHTML) -1}>-</button>
    </div>
  );
}
