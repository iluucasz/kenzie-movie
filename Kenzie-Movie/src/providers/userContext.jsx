import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {

	const [user, setUser] = useState(null);

	const navigate = useNavigate();
	const pathname = window.location.pathname;

	const createUser = async (formData, reset) => {
		try {
			await api.post("/users", formData);
			toast.success("Conta criada com sucesso");
			navigate("/");
		} catch (error) {
			toast.error(error.message);
		} finally {
			reset();
		}
	};

	const userLogin = async (formData, reset) => {
		try {
			const { data } = await api.post("/login", formData);
			setUser(data.user);
			toast.success("Usuário logado com Sucesso!");
			localStorage.setItem("@TOKEN", data.accessToken);
			localStorage.setItem("@USER", JSON.stringify(data.user))
			navigate("/");
		} catch (error) {
			toast.error(error.message);
		} finally {
			reset();
		}
	};

	useEffect(() => {
		const autoLogin = async () => {
			const token = localStorage.getItem("@TOKEN");
			const userStorage = localStorage.getItem("@USER")
			try {
				if (token) {
					const user = JSON.parse(userStorage);
					setUser(user);
					navigate(pathname);
				}
			} catch (error) {
				toast.error(error);
			}
		};
		autoLogin();
	}, []);

	const userLogout = () => {
		localStorage.removeItem("@TOKEN");
		localStorage.removeItem("@selectedMovie");
		localStorage.removeItem("@token");
		localStorage.removeItem("@USER");
		setUser(null);
		navigate("/");
	};

	return (
		<userContext.Provider
			value={{ user, setUser, createUser, userLogin, userLogout }}
		>
			{children}
		</userContext.Provider>
	);
};

export const useUserContext = () => useContext(userContext);
