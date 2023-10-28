import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {

    //informações do usuário
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    //criar usuário
    const createUser = async (formData, reset) => {
        try {
            await api.post("/users", formData)
            toast("Conta criada com sucesso")
            navigate("/")
        } catch (error) {
            toast.error(error.message)
        } finally {
            reset()
        }
    }

    //logar usuário
    const userLogin = async (formData, reset) => {
        try {
            const { data } = await api.post("/login", formData);
            setUser(data.user)
            toast.success("Usuário logado com Sucesso!");
            localStorage.setItem("@TOKEN", data.accessToken);
            navigate("/dashboard")
        } catch (error) {
            toast.error(error.message)
        } finally {
            reset()
        }
    }

    //atualizar página de usuário
    useEffect(() => {
        const autoLogin = async () => {
            const token = localStorage.getItem("@TOKEN");
            try {
                if (token) {
                    const response = await api.get("/users", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(response.data);
                    navigate(pathname);
                }
            } catch (error) {
                toast.error(error);
            }
        }
        autoLogin();
    }, [])

    //deslogar usuário
    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        setUser(null);
        navigate("/");
    }

    return (
        <userContext.Provider value={{ user, setUser, createUser, userLogin, userLogout }}>
            {children}
        </userContext.Provider>
    )
}