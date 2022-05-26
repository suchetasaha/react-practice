import React,{useState} from "react";

const UseState =()=>{
    const [data,setData]=useState(0)
    console.warn(data)
    return(
        <div>
            <h2>useState hook {data}</h2>
            <button onClick={()=> setData(data+1)}>update data</button>
        </div>
    );
};
export default UseState;