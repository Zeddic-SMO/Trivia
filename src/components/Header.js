import { FaThumbsUp } from "react-icons/fa"
import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <div className="higScores">
        Welcome to our Trivia <FaThumbsUp />
      </div>
    </div>
  )
}

export default Header
