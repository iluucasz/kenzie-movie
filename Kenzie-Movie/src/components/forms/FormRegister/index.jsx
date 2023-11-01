import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { userContext } from "../../../providers/userContext";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

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
    <div className={style.registerBox}>
      <div className={style.infoBox}>
        <h2 className="title1">Cadastro</h2>
        <Link className="link" to="/login">
          Voltar
        </Link>
      </div>
      <p className="paragraph">Preencha os campos para cadastrar-se</p>

      <form className={style.registerForms} onSubmit={handleSubmit(submit)}>
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

        <button className="btn" type="submit">
          Cadastrar-se
        </button>
      </form>
    </div>
  );
};
