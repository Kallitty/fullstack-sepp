import React, { useState } from 'react'
import './quiz.scss'

import { jsQuizz } from '../../constants'

// import { jsQuizz } from '../../records.json'

import { resultInitialState } from '../../initials'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null)
  )
  const [result, setResult] = useState({ ...resultInitialState })
  const [showResult, setShowResult] = useState(false)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  const { question, choices } = questions[currentQuestion]

  const onAnswerClick = (answer, index) => {
    const updatedSelectedAnswers = [...selectedAnswers]
    updatedSelectedAnswers[currentQuestion] = index
    setSelectedAnswers(updatedSelectedAnswers)
  }

  const handleYesSubmit = () => {
    const newScore = selectedAnswers.reduce((score, selectedIdx, idx) => {
      const correctIdx = questions[idx].choices.findIndex(
        (choice) => choice === questions[idx].correctAnswer
      )
      return score + (selectedIdx === correctIdx ? 5 : 0)
    }, 0)

    const correctAnswersCount = selectedAnswers.reduce(
      (count, selectedIdx, idx) => {
        const correctIdx = questions[idx].choices.findIndex(
          (choice) => choice === questions[idx].correctAnswer
        )
        return count + (selectedIdx === correctIdx ? 1 : 0)
      },
      0
    )

    setResult((prevResult) => ({
      ...prevResult,
      score: newScore,
      correctAnswers: correctAnswersCount,
      wrongAnswers: questions.length - correctAnswersCount,
    }))
    setShowResult(true)
    setShowConfirmationModal(false)
  }

  const handleNoCancel = () => {
    setShowConfirmationModal(false)
  }

  const onClickNext = () => {
    setCurrentQuestion((prev) => prev + 1)
  }
  const onFinish = () => {
    setShowConfirmationModal(!showConfirmationModal)
    // setShowConfirmationModal(true) thesame thing
  }

  const onClickPrevious = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const onTryAgain = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(null))
    setResult({ ...resultInitialState })
    setShowResult(false)
  }

  return (
    <div className='sepp__quiz-container'>
      {!showResult ? (
        <>
          {questions.map((q, index) => (
            <div
              key={q.id}
              style={{ display: currentQuestion === index ? 'block' : 'none' }}
            >
              <div>
                <span className='sepp__quiz-active-question-no'>
                  {' '}
                  {index + 1}
                </span>
                <span className='sepp__quiz-total-question'>
                  {' '}
                  /{questions.length}
                </span>
              </div>
              {q.isVisible && (
                <img
                  src={q.icon}
                  alt={`Question ${q.id} icon`}
                  className='sepp__quiz-icon-img'
                />
              )}

              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerClick(answer, index)}
                    key={answer}
                    className={
                      selectedAnswers[currentQuestion] === index
                        ? 'sepp__quiz-selected-answer'
                        : null
                    }
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className='sepp__quiz-footer'>
                <button
                  onClick={onClickPrevious}
                  disabled={currentQuestion === 0}
                  className='sepp__quiz-previous-button'
                >
                  Previous
                </button>
                <button
                  className='sepp__quiz-next-button'
                  onClick={
                    currentQuestion === questions.length - 1
                      ? onFinish
                      : onClickNext
                  }
                  disabled={selectedAnswers[currentQuestion] === null}
                >
                  {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          ))}

          {showConfirmationModal && (
            <div className='sepp__quiz-modal'>
              <p>Are you sure you want to submit?</p>
              <button
                className='sepp__quiz-yes-button'
                onClick={handleYesSubmit}
              >
                Yes
              </button>
              <button className='sepp__quiz-no-button' onClick={handleNoCancel}>
                No
              </button>
            </div>
          )}
        </>
      ) : (
        <div className='sepp__quiz-result'>
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
          <button onClick={onTryAgain}>Try again</button>
        </div>
      )}
    </div>
  )
}

export default Quiz
