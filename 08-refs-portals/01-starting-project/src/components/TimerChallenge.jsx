import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTimer, }){
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef();

    function handleStart(){
        setTimerStarted(true);
        timer = setTimeout(()=>{
            setTimerExpired(true);
        }, targetTimer * 1000);
    }

    function handleStop(){
        clearTimeout(timer);
    }

    return <section className="challenge">
        {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTimer} second{targetTimer > 1 ? 's' : ''}
        </p>

        <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? 'Stop' : 'Start'} challenge
            </button>
        </p>

        <p className={timerStarted ? 'active' : undefined}> 
        {timerStarted ? 'Time is running...' : 'Time is inactive'} 
        </p>
    </section>
}