import style from "./style.module.scss";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

export const CardReviewList = ({}) => {
	return (
		<li className={style.container__review}>
			<div className={style.container__userReview}>
				<div className={style.name__user}>
					<p className="title1-mobile-a">J</p>
				</div>

				<div className={style.container__reviewStar}>
					<span>
						<MdOutlineStarBorderPurple500
							size={30}
							className={style.review__star}
						/>
					</span>
					<span className="title1-mobile-b">5</span>
				</div>

				<p className={`${style.user__text} paragraph`}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Vel eligendi, placeat necessitatibus fuga ad impedit officia
					molestias consequuntur deserunt animi dolor vitae laboriosam
					sapiente id quibusdam illo tempore. Corrupti, beatae!
				</p>

				<h3 className="title3">José da Silva</h3>
			</div>
		</li>
	);
};
