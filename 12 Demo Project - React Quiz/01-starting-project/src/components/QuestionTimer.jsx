import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);


    useEffect(() => {
        console.log('setTimeout useEffect');

        setTimeout(onTimeout, timeout);
    }, [onTimeout, timeout]);

    useEffect(() => {
        console.log('setInterval useEffect');
        setInterval(() => {
            console.log('setInterval useEffect : ', remainingTime);
            setRemainingTime(prevTime => prevTime - 100);
        }, 100);
    }, []);

    return (
        <progress max={timeout} value={remainingTime} />
    )
}