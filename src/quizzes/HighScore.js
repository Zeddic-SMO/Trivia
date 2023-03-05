import React, { useContext } from "react"
import { QuizContext } from "../quizContext"

const styleDiv = {
  border: "1px solid #ccc",
  padding: "35px",
  borderRadius: "25px",
  boxShadow: "5px 5px 4px #ccc",
  height: "220px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}

function HighScore() {
  let { initials, scores, quizQuestion } = useContext(QuizContext)
  return (
    <div style={styleDiv}>
      <p> Hi {initials.initials} you did a great job!</p>

      <h4>Scores: {scores + " / " + quizQuestion.length}</h4>

      <button className="btn" style={{ marginRight: "10px" }}>
        Done!
      </button>
    </div>
  )
}

export default HighScore
