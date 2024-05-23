// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/

    let interverId  = setInterval(() => {
      setCount((prevCount) => {
        
        if(prevCount === 10){
          clearInterval(interverId)
          return prevCount
        }

        return prevCount + 1 ;
      })

     
    }, 1000);

    function cleanupFunction(){
      clearInterval(interverId)
    }
    return cleanupFunction 
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
