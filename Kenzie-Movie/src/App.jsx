import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routers/routerMain";
import "./styles/index.scss";

function App() {

  return (
    <>
      <RouterMain />
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
