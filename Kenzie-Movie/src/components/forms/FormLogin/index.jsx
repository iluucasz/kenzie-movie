import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { Input } from "../Input";
import { useContext } from "react";
import { userContext } from "../../../providers/userContext";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const FormLogin = () => {
	const { userLogin } = useContext(userContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: zodResolver(loginSchema) });

	const submit = (formData) => {
		userLogin(formData, reset);
	};

	return (
		<div className={style.container}>
			<form
				onSubmit={handleSubmit(submit)}
				className={`${style.loginFormDiv}`}
			>
				<h2 className="title1">Login</h2>
				<Input
					type="email"
					placeholder="E-mail"
					error={errors.email}
					{...register("email")}
				/>
				<Input
					type="password"
					placeholder="Senha"
					error={errors.password}
					{...register("password")}
				/>
				<div className={style.loginButtons}>
					<button className="btn menu-item" type="submit">
						Entrar
					</button>
					<p className="paragraph">Ou</p>
					<Link to="/register" className="link">
						Cadastre-se
					</Link>
				</div>
			</form>
		</div>
	);
};
