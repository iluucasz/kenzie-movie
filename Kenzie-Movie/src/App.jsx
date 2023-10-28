import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routers/routerMain";
import "./styles/index.scss";
import { DefaultTemplate } from "./components/defaultTemplate";

function App() {

  return (
    <>
      <DefaultTemplate>
        <RouterMain />
      </DefaultTemplate>

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
