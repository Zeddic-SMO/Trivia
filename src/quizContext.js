import React, { useState, useEffect, createContext } from "react"
import QData from "./quizzes/QData"

export const QuizContext = createContext()

const QuizProvider = (props) => {
  // State Data
  let [quizQuestion, setQuizQuestion] = useState([])

  //   UseEffect to load first and make a copy of the data
  useEffect(() => {
    setQuizQuestion([...QData])
  }, [])

  // Start quiz State
  let [isLoadQuiz, setIsLoadQuiz] = useState(false)

  //   Check End of Quiz State
  let [checkEndOfQuiz, setCheckEndOfQuiz] = useState(false)

  //   Correct or Wrong Answer Notification State
  let [answerNotification, setAnswerNotification] =
    useState("Select an option!")

  // Current Question State
  let [currentQuestion, setCurrentQuestion] = useState(0)

  //   Scores State
  let [scores, setScores] = useState(0)

  //   Form Data
  let [initials, setInitials] = useState({ initials: "" })

  //   WareHouse to house all the data to be made available
  const wareHouse = {
    quizQuestion,
    setQuizQuestion,
    isLoadQuiz,
    setIsLoadQuiz,
    answerNotification,
    setAnswerNotification,
    currentQuestion,
    setCurrentQuestion,
    checkEndOfQuiz,
    setCheckEndOfQuiz,
    scores,
    setScores,
    initials,
    setInitials,
  }

  //   Return below
  return (
    <QuizContext.Provider value={wareHouse}>
      {props.children}
    </QuizContext.Provider>
  )
}
export default QuizProvider
