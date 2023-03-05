import React, { useState, useContext } from "react"
import { QuizContext } from "../quizContext"
import HighScore from "./HighScore"

function Scores() {
  let { initials, setInitials } = useContext(QuizContext)

  let [highScore, setHighScore] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    highScore = true
    setHighScore(highScore)
  }
  const handleChange = (e) => {
    setInitials({ ...initials, initials: e.target.value })
  }
  return highScore ? (
    <HighScore />
  ) : (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>All Done!</h2>
        <p>To view your scores enter your First Name below!</p>
        <p>
          <form onSubmit={handleSubmit}>
            First Name:{" "}
            <input
              type="text"
              name="initials"
              onChange={handleChange}
              value={initials.initials}
              style={{
                padding: "10px",
                margin: "0px 5px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
            <button>Submit</button>
          </form>
        </p>
      </div>
    </>
  )
}
export default Scores
