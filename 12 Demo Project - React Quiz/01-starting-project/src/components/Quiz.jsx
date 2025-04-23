import { useCallback, useState } from "react";
import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";

export default function Quiz() {

    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

    const handelSelectAnswer = useCallback(function handelSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

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
                questionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                onSelectAnswer={handelSelectAnswer}
                onSkipAnswer={handelSkipSelectAnswer}
            />
        </div>
    )
}