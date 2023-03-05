import React, { useContext } from "react"
import { QuizContext } from "./quizContext"
import "./App.css"
import Question from "./quizzes/Question"
import Footer from "./components/Footer"
import Header from "./components/Header"

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
        <hr />
        <p>
          Click on the <b>START QUIZ</b> button to get started!
        </p>
        <button onClick={loadQuizQuestions}>Start Quiz</button>
      </div>
    )
  }
  return (
    <div className="main-home">
      <Header />
      <main>{isLoadQuiz ? <Question /> : <StartCard />}</main>
      <Footer />
    </div>
  )
}

export default App
