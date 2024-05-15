import React, { useState, useEffect } from "react";
import "./quiz.scss";
import { resultInitialState } from "../../../initials";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(
        new Array(questions.length).fill(null)
    );

    const [result, setResult] = useState({ ...resultInitialState });

    const [showResult, setShowResult] = useState(false);

    const [showTimeUpModal, setShowTimeUpModal] = useState(false);

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const { question, choices } = questions[currentQuestion];

    const [time, setTime] = useState({ minutes: 0, seconds: 0 });

    useEffect(() => {
        const countDownTime = Date.now() + 30000; // 30 seconds
        const interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);

                setShowTimeUpModal(true);
            } else {
                setTime({ minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array to run only on mount

    const calculateResults = () => {
        const newScore = selectedAnswers.reduce((score, selectedIdx, idx) => {
            const correctIdx = questions[idx].choices.findIndex(
                (choice) => choice === questions[idx].correctAnswer
            );
            return score + (selectedIdx === correctIdx ? 5 : 0);
        }, 0);

        const correctAnswersCount = selectedAnswers.reduce(
            (count, selectedIdx, idx) => {
                const correctIdx = questions[idx].choices.findIndex(
                    (choice) => choice === questions[idx].correctAnswer
                );
                return count + (selectedIdx === correctIdx ? 1 : 0);
            },
            0
        );

        setResult((prevResult) => ({
            ...prevResult,
            score: newScore,
            correctAnswers: correctAnswersCount,
            wrongAnswers: questions.length - correctAnswersCount,
        }));
    };

    //gp

    const onTimeUpCloseModal = () => {
        calculateResults();
        setShowTimeUpModal(false);
        setShowResult(true);
    };

    const onAnswerClick = (answer, index) => {
        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[currentQuestion] = index;
        setSelectedAnswers(updatedSelectedAnswers);
    };

    const handleYesSubmit = () => {
        onTimeUpCloseModal();
    };

    const handleNoCancel = () => {
        setShowConfirmationModal(false);
    };

    const onClickNext = () => {
        setCurrentQuestion((prev) => prev + 1);
    };
    const onFinish = () => {
        // setShowConfirmationModal(!showConfirmationModal); thesame thing
        setShowConfirmationModal(true);
        calculateResults();
    };

    const onClickPrevious = () => {
        if (currentQuestion !== 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const timerClass =
        time.minutes === 0 && time.seconds <= 20 ? "red-timer" : ""; //gpt

    return (
        <div className="sepp__quiz-container">
            {!showResult ? (
                <>
                    {questions.map((q, index) => (
                        <div
                            key={q.id}
                            style={{
                                display:
                                    currentQuestion === index
                                        ? "block"
                                        : "none",
                            }}
                        >
                            <div className="sepp__quiz-heading-flex">
                                <p>
                                    <span className="sepp__quiz-active-question-no">
                                        {index + 1}
                                    </span>
                                    <span className="sepp__quiz-total-question">
                                        /{questions.length}
                                    </span>
                                </p>
                                <p>
                                    <span
                                        className={`sepp__quiz-timer ${timerClass}`}
                                    >
                                        {time.minutes}:{time.seconds}
                                    </span>
                                    <span
                                        className={`sepp__quiz-timer-icon ${timerClass}`}
                                    >
                                        <AiOutlineClockCircle />
                                    </span>
                                </p>
                            </div>
                            {q.isVisible && (
                                <img
                                    src={q.icon}
                                    alt={`Question ${q.id} icon`}
                                    className="sepp__quiz-icon-img"
                                />
                            )}

                            <h2>{question}</h2>
                            <ul>
                                {choices.map((answer, index) => (
                                    <li
                                        onClick={() =>
                                            onAnswerClick(answer, index)
                                        }
                                        key={answer}
                                        className={
                                            selectedAnswers[currentQuestion] ===
                                            index
                                                ? "sepp__quiz-selected-answer"
                                                : null
                                        }
                                    >
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                            <div className="sepp__quiz-footer">
                                <button
                                    onClick={onClickPrevious}
                                    disabled={currentQuestion === 0}
                                    className="sepp__quiz-previous-button"
                                >
                                    Previous
                                </button>
                                <button
                                    className="sepp__quiz-next-button"
                                    onClick={
                                        currentQuestion === questions.length - 1
                                            ? onFinish
                                            : onClickNext
                                    }
                                    disabled={
                                        selectedAnswers[currentQuestion] ===
                                        null
                                    }
                                >
                                    {currentQuestion === questions.length - 1
                                        ? "Finish"
                                        : "Next"}
                                </button>
                            </div>
                        </div>
                    ))}
                    {showTimeUpModal && (
                        <div className="sepp__quiz-timeup-overlay">
                            <div className="sepp__quiz-timeup">
                                <p>Time's up! Click OK to see your results.</p>
                                <button
                                    className="sepp__quiz-yes-button"
                                    onClick={handleYesSubmit}
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    )}

                    {showConfirmationModal && (
                        <div className="sepp__quiz-modal">
                            <p>Are you sure you want to submit?</p>
                            <button
                                className="sepp__quiz-yes-button"
                                onClick={handleYesSubmit}
                            >
                                Yes
                            </button>
                            <button
                                className="sepp__quiz-no-button"
                                onClick={handleNoCancel}
                            >
                                No
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="sepp__quiz-result">
                    <h3>Result</h3>
                    <p>
                        Total Questions:<span> {questions.length}</span>
                    </p>
                    <p>
                        Total Score:<span> {result.score}</span>
                    </p>
                    <p>
                        Correct Answers:<span> {result.correctAnswers}</span>
                    </p>
                    <p>
                        Wrong Answers:<span> {result.wrongAnswers}</span>
                    </p>

                    <button>
                        {" "}
                        <Link to="/board">Return to my Dashboard</Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
