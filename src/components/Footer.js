import React from "react"
import "./Footer.css"

const displayDate = new Date().getFullYear()
function Footer() {
  return (
    <div className="Footer">
      <p>&copy; {displayDate}</p>
    </div>
  )
}

export default Footer
