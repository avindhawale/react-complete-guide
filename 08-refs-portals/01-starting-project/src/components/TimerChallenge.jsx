import { useRef, useState } from "react"

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
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
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