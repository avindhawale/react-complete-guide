import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({ questionText, answers, answerState, selectedAnswer, onSelectAnswer, onSkipAnswer }) {

    return (
        <div id="questions">
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={onSelectAnswer}
            />
        </div>
    );
}