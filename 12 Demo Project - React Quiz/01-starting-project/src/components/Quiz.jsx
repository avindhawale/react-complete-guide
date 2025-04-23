import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const handelSelectAnswer = useCallback(function handelSelectAnswer(selectedAnswer) {
        setUserAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
        console.log('userAnswers : ', userAnswers);

    }, []);

    const handelSkipSelectAnswer = useCallback(() => handelSelectAnswer(null), [handelSelectAnswer]);

    const isQuizCompleted = QUESTIONS.length === activeQuestionIndex;
    if (isQuizCompleted) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handelSelectAnswer}
                onSkipAnswer={handelSkipSelectAnswer}
            />
        </div>
    )
}