import "./styles/index.scss"
import { HomePage } from "./pages/HomePage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
function App() {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={2 * 1000}/>
    </>
  )
}

export default App
