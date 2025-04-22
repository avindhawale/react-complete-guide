import { useCallback, useState } from "react"
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const handelSelectAnswer = useCallback(function handelSelectAnswer(selectedAnswer) {
        setUserAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
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

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort((a, b) => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="questions">
                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={10000}
                    onTimeout={handelSkipSelectAnswer} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer => (
                        <li key={answer} className="answer">
                            <button onClick={() => handelSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}