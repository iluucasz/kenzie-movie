import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import style from "./style.module.scss";
import { useReviewContext } from "../../../../providers/reviewContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { userContext } from "../../../../providers/userContext";

export const CardList = ({ movie }) => {
	const { calculateReviewScore, setSelectedMovie } = useReviewContext();
	const { user } = useContext(userContext);

	const viewCard = () => {
		if (user) {
			setSelectedMovie(movie)
		} else {
			toast.error("Faça Login para visualizar este filme")
		}
	}

	return (
		<Link to="/dashboard" onClick={() => setSelectedMovie(movie)}>
			<li
				className={style.container__card}
				onClick={() =>
					viewCard()
				}
			>
				<img src={movie.image} alt="imagem" />

				<div className={style.container__main}>
					<div className={style.container__category}>
						<span
							className={`${style.btn__category} btn medium menu-item`}
						>
							{movie.type}
						</span>
						<h3 className="title1-mobile-b">{movie.name}</h3>
					</div>

					<div className={style.container__review}>
						<p className={`${style.review__time} paragraph`}>
							{movie.duration}m
						</p>
						<div className={`${style.container__star}`}>
							<Link
								to="/dashboard"
								onClick={() => setSelectedMovie(movie)}
							>
								<MdOutlineStarBorderPurple500
									size={40}
									className={style.star__icon}
								/>
							</Link>
							<p className="paragraph">
								{calculateReviewScore(movie.id)}
							</p>
						</div>
					</div>
				</div>
			</li>
		</Link>
	);
};
