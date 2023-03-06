import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import QuizProvider from "./quizContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </QuizProvider>
  </React.StrictMode>
)
