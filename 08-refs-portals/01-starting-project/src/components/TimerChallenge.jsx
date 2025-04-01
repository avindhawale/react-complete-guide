import { useState } from "react"

export default function TimerChallenge({title, targetTimer, }){
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart(){
        setTimerStarted(true);
        setTimeout(()=>{
            setTimerExpired(true);
        }, targetTimer * 1000);
    }

    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTimer} second{targetTimer > 1 ? 's' : ''}
        </p>

        <p>
            <button onClick={handleStart}>
                {timerStarted ? 'Stop' : 'Start'} challenge
            </button>
        </p>

        <p className={timerStarted ? 'active' : undefined}> 
        {timerStarted ? 'Time is running...' : 'Time is inactive'} 
        </p>
    </section>
}