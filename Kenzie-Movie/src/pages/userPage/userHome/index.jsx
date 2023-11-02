import { useReviewContext } from "../../../providers/reviewContext";
import { CardReviewList } from "./cardReviewList";
import style from "./style.module.scss";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

export const UserHome = () => {
	const { calculateReviewScore, selectedMovie } = useReviewContext();

	return (
		<>
			{selectedMovie?.map((movie) => (
				<section className={`${style.container__user}`}>
					<div className={style.container__main}>
						<img
							src={movie.image}
						/>
						<div className={style.container__category}>
							<span
								className={`${style.btn__category} btn medium menu-item`}
							>
								
								{movie.type}
							</span>
							<p className={`${style.category__time} paragraph`}>
								{movie.duration}m
							</p>
						</div>

						<div className={style.container__category}>
							<h3 className={`${style.title__category} title1`}>
								{movie.name}
							</h3>
							<div className={`${style.container__star}`}>
								<button>
									<MdOutlineStarBorderPurple500
										size={40}
										className={style.star__icon}
									/>
								</button>
								<span className="paragraph">
									{calculateReviewScore(movie.id)}
								</span>
							</div>
						</div>
					</div>

					<div className="container">
						<div className={style.container__paragraph}>
							<p className="paragraph">
								{/* REVIEW DE TEXTO DO USUÁRIO */}
							</p>
						</div>

						<div className={style.container__titleReview}>
							<h3 className="title1">Avaliações</h3>

							<button
								className={`${style.btn__review} menu-item`}
							>
								<MdOutlineStarBorderPurple500 size={30} />
								Avaliar
							</button>
						</div>

						<div>
							<ul className={style.container__cardReviewList}>
								{movie.reviews.map(review => (
									<CardReviewList key={review.id} review={review}/>
								))}
							</ul>
						</div>
					</div>
				</section>
			))}
		</>
	);
};
