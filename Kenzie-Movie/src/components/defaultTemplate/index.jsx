import { Footer } from "../footer"
import { Header } from "../header"
import style from "./style.module.scss";

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <hr/>
            <Footer />
        </>
    )
}