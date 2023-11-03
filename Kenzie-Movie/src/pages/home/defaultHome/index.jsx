import { useContext } from "react";
import { useReviewContext } from "../../../providers/reviewContext";
import { CardList } from "./cardList";
import style from "./style.module.scss";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import { userContext } from "../../../providers/userContext";
import { toast } from "react-toastify";
export const DefaultHome = () => {

	const { movies, calculateReviewScore, setSelectedMovie } =
		useReviewContext();

	const { user } = useContext(userContext);

	const viewCard = () => {
		if (user) {
			setSelectedMovie(movie)
		} else {
			toast.error("Faça Login para visualizar este filme")
		}
	}

	return (
		<>
			<div className="container">
				{movies
					.filter((movie) => movie.id === 1)
					.map((movie) => (
						<section
							key={movie.id}
							onClick={() => setSelectedMovie(movie)}
							className={`${style.container__defaultTemplate}`}
						>
							<Link to="/dashboard" onClick={() => viewCard()}>
								<img src={movie.image} alt="imagem de um filme" />
							</Link>

							<div className={style.container__main}>
								<div className={style.container__category}>
									<span
										className={`${style.btn__category} btn medium menu-item`}
									>
										{movie.type}
									</span>
									<p
										className={`${style.category__time} paragraph`}
									>
										{movie.duration}
									</p>
								</div>

								<div className={style.container__review}>
									<h3
										className={`${style.title__category} title1`}
									>
										{movie.name}
									</h3>
									<div className={`${style.container__star}`}>
										<Link to="/dashboard" onClick={() => setSelectedMovie(movie)}>
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
						</section>
					))}

				<section>
					<div>
						<ul className={style.container__cardList}>
							{movies
								.filter((movie) => movie.id !== 1)
								.map((movie) => (
									<CardList key={movie.id} movie={movie} />
								))}
						</ul>
					</div>
				</section>
			</div>
		</>
	);
};
