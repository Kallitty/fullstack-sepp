import React, { useState } from 'react'
import Quiz from './components/Quiz/Quiz'
import { jsQuizz } from './records.json'
import './exam.scss'
import { useNavigate } from 'react-router-dom'

function Exam() {
  const [quizStarted, setQuizStarted] = useState(false)
  const navigate = useNavigate()

  const startQuiz = () => {
    setQuizStarted(true)
  }

  // Updated goBack function to use navigate
  const goBack = () => {
    navigate('/board')
  }

  return (
    <div className='sepp__exam--body'>
      {!quizStarted ? (
        <div className='sepp__exam-container'>
          <h2>You are about to take a 55 mins quiz.</h2>
          <p>Kindly go back if you are not ready.</p>
          <button onClick={startQuiz} className='sepp__exam-start-quiz-btn'>
            Take Quiz
          </button>
          <button onClick={goBack} className='sepp__exam-go-back-btn'>
            Go Back
          </button>
        </div>
      ) : (
        <Quiz questions={jsQuizz.questions} />
      )}
    </div>
  )
}

export default Exam
