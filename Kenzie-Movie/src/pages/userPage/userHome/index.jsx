import { useReviewContext } from "../../../providers/reviewContext";
import { CardReviewList } from "./cardReviewList";
import logo from "../../../assets/imgCard.jpg"
import style from "./style.module.scss";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

export const UserHome = () => {
	const { } = useReviewContext();

	return (
		<>
			<section className={`${style.container__user}`}>
				<div className={style.container__main}>
					<img
						src={logo}
					/>
					<div className={style.container__category}>
						<span
							className={`${style.btn__category} btn medium menu-item`}
						>

							Ficção
						</span>
						<p className={`${style.category__time} paragraph`}>
							120m
						</p>
					</div>

					<div className={style.container__category}>
						<h3 className={`${style.title__category} title1`}>
							The Random Heros
						</h3>
						<div className={`${style.container__star}`}>
							<button>
								<MdOutlineStarBorderPurple500
									size={40}
									className={style.star__icon}
								/>
							</button>
							<span className="paragraph">
								5.0
							</span>
						</div>
					</div>
				</div>

				<div className="container">
					<div className={style.container__paragraph}>
						<p className="paragraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero porro amet, placeat dolorum modi qui,
							deleniti soluta reprehenderit eligendi tempora laudantium enim doloribus,
							perferendis doloremque mollitia molestias alias quo.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam facilis blanditiis qui.
							Eos facere aspernatur consectetur corrupti unde ex inventore tenetur facilis, ipsum recusandae,
							tempore quibusdam quae, nam eum.
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quam totam nisi,
							obcaecati dicta ipsa assumenda quos error veniam veritatis unde mollitia
							sapiente itaque deserunt fuga voluptas, eligendi omnis corrupti?
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
							{/* <CardReviewList /> */}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};
