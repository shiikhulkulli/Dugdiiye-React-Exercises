import { useState, useEffect } from "react";
const CountDown = () =>{
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setRunning] = useState(false)
    const [userInput, setUserInput] = useState(0)
    useEffect(()=>{
        let timerId;
        if(isRunning && seconds > 0){
           timerId = setInterval(()=>{
            setSeconds((prev)=>prev -1)
        },1000);  
        }else if(seconds === 0){
            setRunning(false);
        }

        return()=> clearInterval(timerId)
    },[isRunning, seconds])

    const handleStart = () => {
        if(seconds ===0){
            setSeconds(userInput)
        }
        setRunning(true)
    }
    const handleStop= ()=>{
        setRunning(false)
    }
    const handleRest = ()=>{
        setSeconds(userInput)
        setRunning(false)

    }

    return(
        <div>
            <h1>CountDown Timmer</h1>
            <h2> Set Time(Seconds) <input
            type="number" 
            value={userInput}
            placeholder="geli secondska"
            onChange={(e)=>setUserInput(Number(e.target.value))}/></h2>
            <h2>  Time Left:{seconds} seconds</h2>
            <button disabled={isRunning} onClick={handleStart}>Start</button>
            <button disabled={!isRunning} onClick={handleStop}>Stop</button>
            <button onClick={handleRest}>Reset</button>
        </div>
    )
}

export default CountDown;
