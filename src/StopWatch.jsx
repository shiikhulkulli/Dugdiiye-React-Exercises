import { useState, useEffect } from "react";
const StopWatch = ()=>{
    const [time, setTime] = useState(0)
    const [isRunning, setRunning] = useState(false)

    useEffect(()=>{
        let timerId;
        if(isRunning){
           timerId = setInterval(()=>{
            setTime((prev)=>prev +1)
        },1000);  
        }       

        return()=> clearInterval(timerId)
    },[isRunning])

    const handleStart = () => {
        setRunning(true)
    }
    const handleStop= ()=>{
        setRunning(false)
    }
    const handleRest = ()=>{
        setTime(0)
        setRunning(false)
    }

    return(
        <div>
            <h2>StopWatch {time} seconds</h2>
            <button disabled={isRunning} onClick={handleStart}>Start</button>
            <button disabled={!isRunning} onClick={handleStop}>Stop</button>
            <button onClick={handleRest}>Reset</button>
        </div>
    )
}
export default StopWatch;