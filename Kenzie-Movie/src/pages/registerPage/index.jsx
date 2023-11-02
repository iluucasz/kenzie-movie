import { FormRegister } from "../../components/forms/FormRegister/index";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const RegisterPage = () => {
	return (
		<>
			<div className={style.container}>
				<div className={style.registerBox}>
					<div className={style.infoBox}>
						<h2 className="title1">Cadastro</h2>
						<Link className="link" to="/login">
							Voltar
						</Link>
					</div>
					<p className="paragraph">
						Preencha os campos para cadastrar-se
					</p>
					<FormRegister />
				</div>
			</div>
		</>
	);
};
