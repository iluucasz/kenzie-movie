import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { Input } from "../Input";

export const FormLogin = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: zodResolver(loginSchema) });

	const submit = (formData) => {
		console.log(formData);
		reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
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
				<button type="submit">Entrar</button>
			</form>
		</div>
	);
};
