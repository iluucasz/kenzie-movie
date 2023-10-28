import { ToastContainer } from "react-toastify";
import { Header } from "./components/header";
import "./styles/index.scss";

function App() {

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={true}
      />
    </>
  )
}

export default App
