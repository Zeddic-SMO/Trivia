import React, { useContext, useState } from "react"
import { toast } from "react-toastify"
import Modal from "../components/Modal/Modal"
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

  const [openModal, setOpenModal] = useState(false)

  const checkAns = (option) => {
    if (option === quizQuestion[currentQuestion].answer) {
      answerNotification = "Correct!"
      toast.success("CORRECT!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setOpenModal(true)
      setAnswerNotification(answerNotification)

      scores = scores + 1
      setScores(scores)
    } else {
      answerNotification = "Incorrect!"
      toast.error("INCORRECT!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setOpenModal(true)
      setAnswerNotification(answerNotification)
    }

    currentQuestion += 1
    setTimeout(() => {
      if (currentQuestion < quizQuestion.length) {
        setCurrentQuestion(currentQuestion)

        answerNotification = "Select an Option"
        setOpenModal(false)
        setAnswerNotification(answerNotification)
      }
    }, 3000)

    if (currentQuestion === quizQuestion.length) {
      checkEndOfQuiz = true
      setCheckEndOfQuiz(checkEndOfQuiz)
    }
  }

  const Quiz = () => {
    return (
      <div className="container">
        {openModal && <Modal answerNotification={answerNotification} />}
        <img src={require("../img/que.gif")} alt="" />
        <small>
          Question: <b>{currentQuestion + 1 + " / " + quizQuestion.length}</b>
        </small>
        <h4>{quizQuestion[currentQuestion].questionText}</h4>
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
