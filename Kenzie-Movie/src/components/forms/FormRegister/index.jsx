import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { userContext } from "../../../providers/userContext";
import style from "./style.module.scss";

export const FormRegister = () => {
	const { createUser } = useContext(userContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: zodResolver(registerSchema) });

	const submit = (formData) => {
		createUser(formData, reset);
	};

	return (
		<form className={style.registerForm} onSubmit={handleSubmit(submit)}>
				<div>
					<Input
						type="text"
						placeholder="Nome"
						error={errors.name}
						{...register("name")}
					/>
					<Input
						type="email"
						placeholder="E-mail"
						error={errors.email}
						{...register("email")}
					/>{" "}
				</div>

				<div>
					<Input
						type="password"
						placeholder="Senha"
						error={errors.password}
						{...register("password")}
					/>
					<Input
						type="password"
						placeholder="Confirmar Senha"
						error={errors.confirmPassword}
						{...register("confirmPassword")}
					/>
				</div>

			<button className="btn menu-item" type="submit">
				Cadastrar-se
			</button>
		</form>
	);
};
