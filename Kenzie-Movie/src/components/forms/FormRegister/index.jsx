import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { userContext } from "../../../providers/userContext";

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
		<div>
			<form onSubmit={handleSubmit(submit)}>
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
				/>
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

				<button type="submit">Cadastrar-se</button>
			</form>
		</div>
	);
};
