import React, { useState, useContext } from "react"
import { QuizContext } from "../quizContext"
import HighScore from "./HighScore"

function Scores() {
  let { initials, setInitials, scores } = useContext(QuizContext)

  let [highScore, setHighScore] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    highScore = true
    setHighScore(highScore)

    const response = await fetch("https://trivia-be.onrender.com/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName: initials.initials, scores: scores }),
    })

    if (response.status === 200) {
      console.log("Success")
    }
    // const data = await response.json()
    // console.log(data)

    // console.log({ firstName: initials.initials, scores: scores })
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
