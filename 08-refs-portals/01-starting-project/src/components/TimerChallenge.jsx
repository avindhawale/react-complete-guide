import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTimer, }){
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    function handleStart(){
        setTimerStarted(true);
        timer.current = setTimeout(()=>{
            dialog.current.showModal();
        }, targetTimer * 1000);
    }

    function handleStop(){
        clearTimeout(timer);
    }

    return <section className="challenge">
        <ResultModal ref={dialog} targetTime={targetTimer} result="lost" />
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