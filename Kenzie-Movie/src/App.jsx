import { ToastContainer } from "react-toastify";
import { Header } from "./components/header";
import { RouterMain } from "./routers/routerMain";
import "./styles/index.scss";

function App() {

  return (
    <>
      <RouterMain />
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
