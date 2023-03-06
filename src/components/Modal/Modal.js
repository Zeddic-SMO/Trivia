import "./modal.css"

const Modal = ({ answerNotification }) => {
  console.log(answerNotification)
  return (
    <div className="modal">
      {answerNotification !== "Incorrect!" ? (
        <div className="check">
          <img src={require("../../img/check.gif")} alt="" />
        </div>
      ) : (
        <div className="check">
          <img src={require("../../img/wrong.gif")} alt="" />
        </div>
      )}
    </div>
  )
}

export default Modal
