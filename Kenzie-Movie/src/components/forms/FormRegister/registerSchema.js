import { z } from "zod";

export const registerSchema = z
	.object({
		name: z.string().nonempty("O Nome é obrigatório."),
		email: z
			.string()
			.nonempty("O E-mail é obrigatório.")
			.email("Forneça um e-mail válido."),
		password: z
			.string()
			.nonempty("A Senha é obrigatória.")
			.min(8, "A Senha deve conter no mínimo 8 caracteres.")
			.regex(
				/(?=.*?[A-Z])/,
				"É necessário conter pelo menos 1 letra maiúscula."
			)
			.regex(
				/(?=.*?[a-z])/,
				"É necessário conter pelo menos 1 letra minúscula."
			)
            .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário conter pelo menos 1 caractere especial.")
			.regex(/(?=.*?[0-9])/, "É necessário conter pelo menos 1 número."),			
		confirmPassword: z
			.string()
			.nonempty("A Confirmação de Senha é obrigatória."),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: "As senhas não correspondem.",
		path: ["confirmPassword"],
	});