import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./publicRoutes";
import { UserPage } from "../pages/userPage";
import { ErrorPage } from "../pages/errorPage";
import { RegisterPage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginPage";
import { Home } from "../pages/home";
import { PrivateRoutes } from "./privateRoutes";

export const RouterMain = () => {
    return (

        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<UserPage />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}