import { Routes, Route } from "react-router-dom";

export const RouterMain = () => {
    return (

        <Routes>
            {/* Rotas publicas */}
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            {/* Rotas privadas */}
            <Route element={<ProtectRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Rotas livres */}
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}