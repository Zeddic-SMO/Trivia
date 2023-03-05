import React, { useContext } from "react"
import { QuizContext } from "../quizContext"
import "./Question.css"
import Scores from "./Scores"

function Question() {
  let {
    quizQuestion,
    answerNotification,
    setAnswerNotification,
    currentQuestion,
    setCurrentQuestion,
    checkEndOfQuiz,
    setCheckEndOfQuiz,
    scores,
    setScores,
  } = useContext(QuizContext)

  const checkAns = (option) => {
    if (option === quizQuestion[currentQuestion].answer) {
      answerNotification = "Correct!"
      setAnswerNotification(answerNotification)

      scores = scores + 1
      setScores(scores)
    } else {
      answerNotification = "Incorrect!"
      setAnswerNotification(answerNotification)
    }

    currentQuestion += 1
    setTimeout(() => {
      if (currentQuestion < quizQuestion.length) {
        setCurrentQuestion(currentQuestion)

        answerNotification = "Select an Option"
        setAnswerNotification(answerNotification)
      }
    }, 1000)

    if (currentQuestion === quizQuestion.length) {
      checkEndOfQuiz = true
      setCheckEndOfQuiz(checkEndOfQuiz)
    }
  }

  const Quiz = () => {
    return (
      <div className="container">
        <small>
          Question: <b>{currentQuestion + 1 + " / " + quizQuestion.length}</b>
        </small>
        <h3>{quizQuestion[currentQuestion].questionText}</h3>
        {quizQuestion[currentQuestion].options.map((option) => {
          return (
            <div>
              <span
                key={option[0]}
                className="spanStyle"
                onClick={() => {
                  checkAns(option)
                }}
              >
                {option}
              </span>
            </div>
          )
        })}
        <div>
          <hr />
          {answerNotification}
        </div>
      </div>
    )
  }

  return <>{checkEndOfQuiz ? <Scores /> : <Quiz />}</>
}

export default Question
