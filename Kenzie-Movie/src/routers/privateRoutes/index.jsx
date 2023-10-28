import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../../providers/userContext"

export const PrivateRoutes = () => {
    const { user } = useContext(userContext);
    console.log(user);

    return user ? <Outlet /> : <Navigate to="/" />
}