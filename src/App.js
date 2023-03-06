import React, { useContext } from "react"
import { QuizContext } from "./quizContext"
import "./App.css"
import Question from "./quizzes/Question"

function App() {
  let { isLoadQuiz, setIsLoadQuiz } = useContext(QuizContext)

  const loadQuizQuestions = () => {
    isLoadQuiz = true
    setIsLoadQuiz(isLoadQuiz)
  }
  const StartCard = () => {
    return (
      <div className="container">
        <h1>QUIZ:</h1>
        <h3>Trustworthy Trivia</h3>
        <img src={require("./img/question.gif")} alt="loading" />
        <hr />
        <p>
          <small>
            Click on the <b>START QUIZ</b> button to get started!
          </small>
        </p>
        <button onClick={loadQuizQuestions}>Start Quiz</button>
      </div>
    )
  }
  return (
    <div className="main-home">
      <main>{isLoadQuiz ? <Question /> : <StartCard />}</main>
    </div>
  )
}

export default App
