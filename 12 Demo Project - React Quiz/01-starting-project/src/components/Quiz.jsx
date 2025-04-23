import { useCallback, useState } from "react";
import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";

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
            <div id="summary">
                <img src={quizCompletedImg} alt="Quiz completed" />
                <h2>Quiz Completed!</h2>
            </div>
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