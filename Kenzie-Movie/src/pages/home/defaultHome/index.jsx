import { useReviewContext } from "../../../providers/reviewContext";
import { CardList } from "./cardList";
import style from "./style.module.scss";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

export const DefaultHome = () => {
	const { movies, calculateReviewScore, setSelectedMovie } = useReviewContext();

	return (
		<>
			<div className="container">
				{movies
					.filter((movie) => movie.id === 1)
					.map((movie) => (
						<section key={movie.id} onClick={() => setSelectedMovie(movie)}
							className={`${style.container__defaultTemplate}`}
						>
							<img
								src={movie.image}
								alt="imagem de um filme"
							/>

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
										{movie.duration}m
									</p>
								</div>

								<div className={style.container__review}>
									<h3
										className={`${style.title__category} title1`}
									>
										{movie.name}
									</h3>
									<div className={`${style.container__star}`}>
										<button>
											<MdOutlineStarBorderPurple500
												size={40}
												className={style.star__icon}
											/>
										</button>
										<p className="paragraph">{calculateReviewScore(movie.id)}</p>
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
