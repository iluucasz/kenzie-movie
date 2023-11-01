import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { Input } from "../Input";
import { useContext } from "react";
import { userContext } from "../../../providers/userContext";
import style from "./index.module.scss";
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
		<div className={`${style.mainContent}`}>
			<img
				src="https://s3-alpha-sig.figma.com/img/2476/4c2b/fda1cc43ba3bdb1afb516afbbe432268?Expires=1699833600&Signature=XOvEllK2MFAfw8iH39mPZRRLzZmMowmDbQcojPtAOqA8Pl80wMQDEM49X8wzd9WOvEQJlqIAXA5VxRV0bpVeh8c2FiVlDsnkTH0Z2xKxFu4CRQSkwbfK2DpkgZhwoqn~mqPW-1HaNENQBZVEsSudNskuimlwQMhvm4JLY93o4hIGCE7RxzF0lw919g3EqCyD5~MjIXHnqJDlpqy9unO7bL6ewQtWS-BilEMTTAkXJAwRBj98jlZMKqkCxbxxnlJLHlgfI-jC-pKRRJQI4ci3~djUZXgTRgXpXWBnkE36FedPPXzhKP4rIjWVSy2zydwbGOBbndZfnqxurLOf4faocA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			/>
			<div className={`${style.container__login}`}>
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
		</div>
	);
};
