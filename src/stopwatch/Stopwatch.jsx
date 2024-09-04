import React, { useEffect } from "react";
import styles from "./Stopwatch.module.css";
import { useState } from "react";
const StopWatch=()=>{
    const[isRunning,setIsRunning]=useState(false);
    const[timer,setTimer]=useState(0);

    const resetBtn=()=>{
        setIsRunning(false);
        setTimer(0);
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
      };

      useEffect(() => {
        let intervalId;
        if (isRunning) 
            {
            intervalId = setInterval(() => {
                setTimer((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && intervalId) {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

return(<div className={styles.mainDiv}>
<h1>StopWatch</h1>
<p>Time: {formatTime(timer)}</p>
{!isRunning?
<button style={{paddingLeft:"0.5rem",paddingRight:"0.5rem",borderRadius:"4px"}} onClick={()=>{setIsRunning(true)}}>Start</button>
:<button style={{paddingLeft:"0.5rem",paddingRight:"0.5rem",borderRadius:"4px"}} onClick={()=>{setIsRunning(false)}}>Stop</button>
}
<button style={{paddingLeft:"0.5rem",paddingRight:"0.5rem",borderRadius:"4px"}} onClick={resetBtn}>Reset</button>

</div>)
}
export default StopWatch;