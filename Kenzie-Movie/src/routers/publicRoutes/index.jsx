import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../../providers/userContext"

export const PublicRoutes = () => {
    const { user } = useContext(userContext);

    return !user ? <Outlet /> : <Navigate to="/dashboard" />
}