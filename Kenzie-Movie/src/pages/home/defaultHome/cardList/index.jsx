import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import style from "./style.module.scss";
import { useReviewContext } from "../../../../providers/reviewContext";

export const CardList = ({movie}) => {

    const {calculateReviewScore, setSelectedMovie} = useReviewContext()

    return (
        <li className={style.container__card} onClick={() => setSelectedMovie(movie)}>
            <img src={movie.image} alt="imagem" />

            <div className={style.container__main}>

                <div className={style.container__category}>
                    <span className={`${style.btn__category} btn medium menu-item`}>{movie.type}</span>
                    <h3 className="title1-mobile-b">{movie.name}</h3>
                </div>

                <div className={style.container__review}>
                    <p className={`${style.review__time} paragraph`}>{movie.duration}m</p>
                    <div className={`${style.container__star}`}>
                        <button >
                            <MdOutlineStarBorderPurple500 size={40} className={style.star__icon} />
                        </button>
                        <p className="paragraph">{calculateReviewScore(movie.id)}</p>
                    </div>
                </div>

            </div>
        </li>
    )
}