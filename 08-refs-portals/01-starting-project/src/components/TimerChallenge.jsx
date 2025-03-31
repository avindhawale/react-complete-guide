export default function TimerChallenge({title, targetTimer, }){
    return <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTimer} second{targetTimer > 1 ? 's' : ''}
        </p>

        <p>
            <button>
                Start challenge
            </button>
        </p>

        <p className=""> 
            Time is running... / Time is inactive
        </p>
    </section>
}