import { useReviewContext } from "../../providers/reviewContext";
import { useUserContext } from "../../providers/userContext";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
	const { user, userLogout } = useUserContext();
	const { setSelectedMovie } = useReviewContext();

	const clear = () => {
		setSelectedMovie(null);
		localStorage.removeItem("@selectedMovie")
	}

	return (
		<header className={style.container__header}>
			<Link to="/" onClick={() => clear()}>
				<div className={`${style.container__logo} menu-item`}>
					kenziemovie
				</div>
			</Link>

			<ul>
				<li>
					{user ? (
						<>
							<p className={`menu-item ${style.itemMenu}`}>
								<span>{user.name[0]}</span> {user.name}
							</p>

							<Link
								className={`menu-item ${style.itemMenu}`}
								onClick={() => userLogout()}
							>
								Sair
							</Link>
						</>
					) : (
						<>
							<Link
								to="/register"
								className={`menu-item ${style.itemMenu}`}
							>
								Cadastre-se
							</Link>
							<Link
								to="/login"
								className={`btn menu-item ${style.itemMenu}`}
							>
								Entrar
							</Link>
						</>
					)}
				</li>
			</ul>
		</header>
	);
};
