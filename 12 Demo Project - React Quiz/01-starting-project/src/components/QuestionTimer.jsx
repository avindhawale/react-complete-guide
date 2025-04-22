import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);


    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        }
    }, [onTimeout, timeout]);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100);
        }, 100);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <progress max={timeout} value={remainingTime} />
    )
}