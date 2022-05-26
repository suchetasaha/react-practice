import React, {useEffect, useState } from "react";
//this arrow function use for rendering//
const Effect = () => {
  const[count, setCount] = useState(1)
  useEffect(() =>{
    console.warn(count)
  },[count==5])
  return(
    <div>
      <h1>Use Effect Hooks in React Js ...{count}</h1>
      <button onClick={() =>setCount(count+1)}>Update State</button>
    </div>
  );

};
export default Effect;