import React, { useEffect } from "react";
import styles from "./Stopwatch.module.css";
import { useState } from "react";
const StopWatch=()=>{
    const[toggle,setToggle]=useState(false);
    const[timer,setTimer]=useState(0);

    useEffect(()=>{
            let interval;
            if(toggle)
            {
                 interval=setInterval(()=>{setTimer((prevTime)=>prevTime+1)},1000);
            }
            else{
                clearInterval(interval);
            }
           return () => {
            clearInterval(interval);
        }  
        
       },[toggle]);


       const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
      };

return(<div className={styles.mainDiv}>
<h1>StopWatch</h1>
<h3>Time: {formatTime(timer)}</h3>
{!toggle?<button style={{paddingLeft:"0.5rem",paddingRight:"0.5rem",borderRadius:"4px"}} onClick={()=>{setToggle(true)}}>Start</button>
:<button style={{paddingLeft:"0.5rem",paddingRight:"0.5rem",borderRadius:"4px"}} onClick={()=>{setToggle(false)}}>Stop</button>
}
<button style={{paddingLeft:"0.5rem",paddingRight:"0.5rem",borderRadius:"4px"}} onClick={()=>{
    setToggle(false);
    setTimer(0);
}}>Reset</button>

</div>)
}
export default StopWatch;